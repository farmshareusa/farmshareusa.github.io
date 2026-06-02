// scripts/build-mascot.mjs
//
// Chroma-key + despill the Elizabeth green-screen render and export two
// production-ready transparent PNGs:
//
//   public/images/mascot-elizabeth-full.png    — full figure, ~900 px tall
//   public/images/mascot-elizabeth-avatar.png  — square head-and-shoulders, ~320 px
//
// Re-runnable. If the source is missing, logs a warning and exits 0 so the
// build still passes. Run with:  npm run build:mascot

import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const SRC = path.join(ROOT, 'assets', 'mascot', 'elizabeth-greenscreen.png');
const OUT_DIR = path.join(ROOT, 'public', 'images');
const OUT_FULL = path.join(OUT_DIR, 'mascot-elizabeth-full.png');
const OUT_AVATAR = path.join(OUT_DIR, 'mascot-elizabeth-avatar.png');

// Tuning — the greenscreen on Elizabeth is flat and saturated, and there is
// no green on her shirt (blue), apron (cream), hair (blonde), or skin.
const GREEN_DOMINANCE_TOL = 28; // g must exceed BOTH r and b by at least this
const EDGE_DOMINANCE_TOL = 6;   // softer threshold for despill pass
const FULL_TARGET_HEIGHT = 900;
const AVATAR_SIZE = 320;

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function isGreenDominant(r, g, b, tol) {
  // Green is "dominant" when it noticeably exceeds both red and blue. Hue is
  // implicit in the (g > r) AND (g > b) test — anything blue (shirt) or warm
  // cream (apron) fails this.
  return g - r > tol && g - b > tol;
}

async function chromaKey(srcPath) {
  const img = sharp(srcPath).ensureAlpha();
  const { data, info } = await img
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const px = Buffer.from(data); // mutable copy

  // First pass — hard cut: fully transparent where green strongly dominates.
  // Second pass — despill: for surviving pixels where green still mildly
  // dominates, clamp g down to max(r, b) so the warm/cool edge fringe stays
  // neutral instead of glowing green.
  for (let i = 0; i < px.length; i += channels) {
    const r = px[i];
    const g = px[i + 1];
    const b = px[i + 2];

    if (isGreenDominant(r, g, b, GREEN_DOMINANCE_TOL)) {
      // Knock the pixel out entirely.
      px[i + 3] = 0;
      continue;
    }

    if (isGreenDominant(r, g, b, EDGE_DOMINANCE_TOL)) {
      // Despill: clamp g toward max(r, b) to kill the halo without changing hue.
      const cap = Math.max(r, b);
      px[i + 1] = cap;
    }
  }

  return sharp(px, {
    raw: { width, height, channels },
  }).png({ compressionLevel: 9, adaptiveFiltering: true });
}

async function findOpaqueBbox(buf) {
  // Compute a tight bbox over non-transparent pixels for an auto-trim that
  // sharp.trim() can miss when edge alpha is feathered.
  const { data, info } = await sharp(buf)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * channels + 3];
      if (a > 8) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < 0) return null;
  return {
    left: minX,
    top: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}

async function buildFull(keyedBuf) {
  const trimmed = await sharp(keyedBuf).png().toBuffer();
  const bbox = await findOpaqueBbox(trimmed);
  if (!bbox) throw new Error('No opaque pixels after chroma key — check tolerance.');

  const cropped = await sharp(trimmed).extract(bbox).png().toBuffer();
  const meta = await sharp(cropped).metadata();
  const scale = FULL_TARGET_HEIGHT / meta.height;
  const targetWidth = Math.round(meta.width * scale);

  await sharp(cropped)
    .resize({ width: targetWidth, height: FULL_TARGET_HEIGHT, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(OUT_FULL);

  return { width: targetWidth, height: FULL_TARGET_HEIGHT };
}

async function buildAvatar(keyedBuf) {
  // Square head-and-shoulders crop. Find the topmost opaque row (top of hair)
  // and crop a square below it.
  const meta = await sharp(keyedBuf).metadata();
  const bbox = await findOpaqueBbox(keyedBuf);
  if (!bbox) throw new Error('No opaque pixels for avatar crop.');

  // Center the square horizontally on the face. We approximate face X as the
  // horizontal center of the top 25% of the figure (the head band).
  const headBandTop = bbox.top;
  const headBandBottom = bbox.top + Math.round(bbox.height * 0.25);

  const { data, info } = await sharp(keyedBuf)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, channels } = info;

  let sumX = 0;
  let count = 0;
  for (let y = headBandTop; y < headBandBottom; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * channels + 3];
      if (a > 32) {
        sumX += x;
        count++;
      }
    }
  }
  const faceCenterX = count > 0 ? Math.round(sumX / count) : Math.round(bbox.left + bbox.width / 2);

  // Square side: enough vertical space for head + shoulders (~45% of the figure
  // height, capped by what's available).
  const side = Math.min(
    Math.round(bbox.height * 0.5),
    bbox.width,
    meta.width,
    meta.height
  );

  // Start the crop slightly above the topmost opaque row so the hair isn't
  // jammed against the top edge.
  const padTop = Math.round(side * 0.06);
  let cropTop = Math.max(0, bbox.top - padTop);
  if (cropTop + side > meta.height) cropTop = meta.height - side;

  let cropLeft = faceCenterX - Math.round(side / 2);
  cropLeft = Math.max(0, Math.min(cropLeft, meta.width - side));

  await sharp(keyedBuf)
    .extract({ left: cropLeft, top: cropTop, width: side, height: side })
    .resize({ width: AVATAR_SIZE, height: AVATAR_SIZE, fit: 'cover' })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(OUT_AVATAR);

  return { width: AVATAR_SIZE, height: AVATAR_SIZE };
}

async function main() {
  if (!(await fileExists(SRC))) {
    console.warn(`[build-mascot] source not found at ${path.relative(ROOT, SRC)} — skipping (build will still pass).`);
    process.exit(0);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log(`[build-mascot] reading ${path.relative(ROOT, SRC)}`);
  const keyed = await chromaKey(SRC);
  const keyedBuf = await keyed.toBuffer();

  const full = await buildFull(keyedBuf);
  console.log(`[build-mascot] wrote ${path.relative(ROOT, OUT_FULL)} — ${full.width} x ${full.height}`);

  const avatar = await buildAvatar(keyedBuf);
  console.log(`[build-mascot] wrote ${path.relative(ROOT, OUT_AVATAR)} — ${avatar.width} x ${avatar.height}`);
}

main().catch((err) => {
  console.error('[build-mascot] failed:', err);
  process.exit(1);
});
