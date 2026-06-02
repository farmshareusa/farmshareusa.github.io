// One-shot favicon generator — render farmshare-emblem.svg onto a cream rounded square.
// Outputs: public/icon.png (512), public/apple-touch-icon.png (180), public/favicon.ico (32+16).
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const emblemPath = resolve(root, 'public/logos/farmshare-emblem.svg');
const emblem = readFileSync(emblemPath, 'utf8');

const CREAM = '#F7F4EC';

async function compose(size, radiusRatio = 0.18, pad = 0.12) {
  const r = Math.round(size * radiusRatio);
  const bg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="${CREAM}"/></svg>`
  );
  const inner = Math.round(size * (1 - pad * 2));
  const offset = Math.round(size * pad);
  const emblemPng = await sharp(Buffer.from(emblem))
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  return sharp(bg)
    .composite([{ input: emblemPng, left: offset, top: offset }])
    .png()
    .toBuffer();
}

(async () => {
  const out512 = await compose(512);
  writeFileSync(resolve(root, 'public/icon.png'), out512);

  const out180 = await compose(180);
  writeFileSync(resolve(root, 'public/apple-touch-icon.png'), out180);

  // favicon.ico — use a 32px PNG renamed; modern browsers accept PNG-encoded .ico.
  const out32 = await compose(32, 0.22, 0.10);
  writeFileSync(resolve(root, 'public/favicon.ico'), out32);

  console.log('Wrote public/icon.png (512), public/apple-touch-icon.png (180), public/favicon.ico (32)');
})();
