# Claude Code Prompt — REQUIRED FIX: make the launcher the big waist-up Elizabeth (v2, hardened) — 2026-06-01

Paste everything below the divider into Claude Code.

---

You are an expert front-end engineer. This is a REQUIRED change the site owner has already decided on. It is NOT a design discussion.

⛔ DO NOT: ask which option I prefer, offer good/better/best, call the current round launcher "by design", defend the existing affordance, or claim it already works. A previous run made that mistake and changed nothing. Your job is to MODIFY the launcher code now.

✅ DO: implement exactly what's specified below, run the build + checks, then report and STOP (do not push — I'll say "push").

## THE DECISION (final)
The bottom-right chat launcher — the element visible on page load, BEFORE anything is clicked — must BE Elizabeth as a large WAIST-UP figure on a transparent background, with a soft glowing green haze behind her, gently floating. SHE is the button.

The current launcher (a small round circle showing only her head — `mascot-elizabeth-avatar.png` inside `.chatbot-launcher-ring` + `.chatbot-launcher-img`) is exactly what we are REMOVING. The full figure that currently appears only inside the open panel does NOT satisfy this — the always-visible LAUNCHER itself must become the figure.

Required end state of the launcher:
- NO circle, NO ring, NO circular crop/mask anywhere on the launcher.
- A WAIST-UP Elizabeth (head down to ~waist), transparent background, ~3× the current size.
- A soft, blurred, glowing dark-green haze behind her (rich "deep tree / growing-plants" green) — a radial glow that fades out with no hard edge, so she pops off the page.
- A slow, gentle up-and-down float.
- Scales down on mobile; respects reduced-motion.

## PREFLIGHT (automated; halt ONLY if one fails)
1. `git pull origin main`.
2. Confirm `app/globals.css` is the FULL stylesheet (contains `header.site` AND the `Ask Elizabeth chatbot` block) — NOT an ~808-byte stub. If it's the stub, STOP and tell me.
3. Confirm these exist: `components/ChatbotMascot.tsx`, `scripts/build-mascot.mjs`, `public/images/mascot-elizabeth-full.png`.
Then proceed with NO further questions.

## STEP 1 — Generate the waist-up launcher image (extend `scripts/build-mascot.mjs`)
Add a new output `public/images/mascot-elizabeth-launcher.png` derived from the existing despilled transparent full figure:
- Crop to WAIST-UP (top of head down to ~waist — about the top 60–65% of the figure's content height), full subject width.
- Feather the bottom ~12–15% with a vertical alpha gradient so it fades smoothly to transparent (NO hard horizontal edge). In sharp: `ensureAlpha()`, then composite a same-size grayscale linear-gradient mask with `blend: 'dest-in'`.
- Export transparent PNG at ~520–560 px tall (retina-crisp).
- Re-runnable; do not break the existing two outputs. Run the script; confirm the file exists and report its dimensions.

## STEP 2 — Replace the launcher markup (`components/ChatbotMascot.tsx`, ~lines 330–350)
The current code is:
```
<button ref={launcherRef} type="button" className="chatbot-launcher" aria-label="Open chat with Elizabeth" aria-expanded={isOpen} aria-controls={headingId} onClick={() => (isOpen ? closePanel() : openPanel())}>
  <span className="chatbot-launcher-ring" aria-hidden="true" />
  <span className="chatbot-launcher-img">
    <Image src="/images/mascot-elizabeth-avatar.png" alt="" width={128} height={128} priority={false} />
  </span>
</button>
```
Replace it with (delete the ring; use the waist-up image via a plain `<img>` to keep masking/sizing simple, matching the site's existing eslint-disable pattern):
```
{/* LAUNCHER — Elizabeth IS the button (no circle) */}
<button
  ref={launcherRef}
  type="button"
  className={`chatbot-launcher${isOpen ? ' is-open' : ''}`}
  aria-label="Open chat with Elizabeth"
  aria-expanded={isOpen}
  aria-controls={headingId}
  onClick={() => (isOpen ? closePanel() : openPanel())}
>
  <span className="chatbot-launcher-glow" aria-hidden="true" />
  <span className="chatbot-launcher-img">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/images/mascot-elizabeth-launcher.png" alt="" />
  </span>
</button>
```
Keep the `<button>` (needed for focus return on close). If the `Image` import is now unused, remove it so lint/build stays clean. Leave the in-panel figure and the panel header avatar AS-IS — this task is only the launcher.

## STEP 3 — Launcher styles (`app/globals.css`, inside the existing `/* === Ask Elizabeth chatbot === */` block)
REMOVE the old `.chatbot-launcher`, `.chatbot-launcher-ring`, and `.chatbot-launcher-img` rules (including any `border-radius: 50%`, `overflow: hidden`, background, ring/shadow circle). Replace with:
- `.chatbot-launcher`: `position: fixed`, bottom-right with safe-area insets; transparent background; no border; no padding; NOT circular; NO `overflow: hidden`; width ~**180px** × height ~**210px** (≈3× current); `cursor: pointer`; z-index above page content but below the open panel; `:focus-visible` = a rounded-RECT gold outline (never a circle).
- `.chatbot-launcher-glow`: absolutely positioned behind the figure (`inset: -18%`, `z-index: 0`); soft blurred radial green haze, e.g. `background: radial-gradient(ellipse at 50% 42%, rgba(46,107,62,0.65) 0%, rgba(27,58,47,0.45) 38%, rgba(27,58,47,0) 70%); filter: blur(22px);` — a haze, not a disc, fading with no visible edge. Optional very subtle slow opacity pulse.
- `.chatbot-launcher-img`: `position: relative; z-index: 1;` fills the button; `img { width:100%; height:100%; object-fit: contain; object-position: bottom; display:block; }`.
- FLOAT: `@keyframes chatbot-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }` applied to `.chatbot-launcher-img` at `5.5s ease-in-out infinite`. (You may remove the now-unused `chatbot-bob` keyframes if nothing else uses them.)
- PANEL OPEN: `.chatbot-launcher.is-open { opacity: 0; pointer-events: none; }` so the big figure doesn't clash with the open panel (keep the button in the DOM for focus return).
- RESPONSIVE: `@media (max-width: 640px)` → launcher ~**120px × 145px**.
- REDUCED MOTION: `@media (prefers-reduced-motion: reduce)` → no float, no pulse.

## ACCEPTANCE CRITERIA (must all be true — verify, then STOP; do not push)
1. Preflight passed; globals.css is the full file.
2. `public/images/mascot-elizabeth-launcher.png` exists (waist-up, feathered, transparent); report dimensions.
3. `grep -n "chatbot-launcher-ring" components/ChatbotMascot.tsx app/globals.css` returns NOTHING (the ring is gone).
4. The launcher `<img>` src is `mascot-elizabeth-launcher.png` (NOT `-avatar.png`), and there is NO `border-radius: 50%` / `overflow: hidden` on any `.chatbot-launcher*` rule.
5. `npm run build` compiles clean — no unused-import, lint, or type errors; static export generates.
6. On page load (BEFORE any click) the bottom-right shows a large (~3×) waist-up Elizabeth, transparent, NO circle, soft green haze behind her, slowly floating. Confirm this in `npm run dev`.
7. Opening the panel hides the big figure cleanly; closing returns focus to the launcher. Mobile scaled down. Reduced-motion = no float. No console errors.

## WHEN DONE
Paste the final launcher JSX and the final launcher CSS, confirm every acceptance criterion above with its result, confirm the build passed, and tell me it's ready. Then WAIT for me to say "push". Do not push, do not merge.
