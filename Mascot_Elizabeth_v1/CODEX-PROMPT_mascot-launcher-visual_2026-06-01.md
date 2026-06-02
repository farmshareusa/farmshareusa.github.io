# Claude Code Prompt — Restyle the chatbot launcher (big waist-up Elizabeth + green glow, no circle) — 2026-06-01

Paste everything below the divider into Claude Code.

---

You are an expert front-end engineer. Improve the visual presentation of the existing "Ask Elizabeth" chatbot LAUNCHER on the live site. The chatbot already works — this is a visual restyle only. **Do not stop to ask questions. All decisions are below. Only halt if PREFLIGHT fails; otherwise make all changes, run the build, and report. Do NOT push — I'll say "push" when ready.**

## WHAT'S WRONG NOW
The launcher is a tiny head-and-shoulders avatar inside a circle (`mascot-elizabeth-avatar.png`, 128px, wrapped in `.chatbot-launcher-ring` + `.chatbot-launcher-img`). Dan wants:
- NO circle / ring — remove the circular frame entirely.
- A larger, WAIST-UP figure of Elizabeth on a transparent background.
- A soft, glowing dark-green haze behind her (rich "growing plants / deep tree" green) so she pops off the page — a blurred radial glow, NOT a hard circle.
- A slow, gentle up-and-down float.
- About 3× the current size.

## PREFLIGHT (automated; halt only on failure)
1. `git pull origin main`.
2. Confirm `app/globals.css` is the FULL stylesheet (`grep -c "header.site" app/globals.css` ≥ 1, file ~62 KB). If it's an ~808-byte stub, STOP and tell me.
3. Confirm `components/ChatbotMascot.tsx`, `scripts/build-mascot.mjs`, and `public/images/mascot-elizabeth-full.png` exist.
Then proceed without pausing.

## STEP 1 — Generate a waist-up launcher image (extend `scripts/build-mascot.mjs`)
Add a third output, `public/images/mascot-elizabeth-launcher.png`, derived from the existing despilled transparent full figure:
- Crop to a WAIST-UP framing: from the top of her head down to roughly her waist (about the top ~60–65% of the figure's content height), keeping the full width of the subject.
- Feather the bottom edge: apply a vertical alpha gradient over the bottom ~12–15% so the image fades smoothly to fully transparent (NO hard horizontal cut). In sharp, do this by compositing a same-size grayscale linear-gradient mask using `blend: 'dest-in'` (white = keep, black = transparent), after `ensureAlpha()`.
- Export at retina resolution (≈ 520–560 px tall) for crispness, transparent PNG.
- Keep it re-runnable and non-destructive to the existing two outputs. Run the script and confirm the new file exists with sensible dimensions.

## STEP 2 — Launcher markup (`components/ChatbotMascot.tsx`, around lines 330–350)
Replace the current launcher inner markup. Remove the `.chatbot-launcher-ring` span. Use the new waist-up image (a plain `<img>` is fine here — match the site's existing `{/* eslint-disable-next-line @next/next/no-img-element */}` pattern — to make masking/sizing simple). Target:

```
{/* LAUNCHER */}
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
Keep the button element (it's used for focus return when the panel closes). If you remove the `Image` import and it's now unused, clean it up so lint/build stays clean.

## STEP 3 — Launcher styles (`app/globals.css`, in the existing `/* === Ask Elizabeth chatbot === */` block)
Replace the old `.chatbot-launcher`, `.chatbot-launcher-ring`, and `.chatbot-launcher-img` rules with the following intent (tune values, keep tokens):
- `.chatbot-launcher`: transparent background, no border, no padding, NOT circular, no `overflow:hidden`; `position: fixed` bottom-right with safe-area insets; size ~ **180px wide × 210px tall on desktop** (~3× today); `cursor: pointer`; high `z-index` (above content, below the open panel). Visible NON-circular focus style for `:focus-visible` (e.g., a rounded-rect gold outline).
- Delete `.chatbot-launcher-ring` (gone).
- `.chatbot-launcher-glow`: absolutely positioned behind the figure (`inset: -18%`, `z-index: 0`), a soft blurred radial glow in rich growing-green — e.g. `background: radial-gradient(ellipse at 50% 42%, rgba(46,107,62,0.65) 0%, rgba(27,58,47,0.45) 38%, rgba(27,58,47,0) 70%)`, `filter: blur(22px)`. It's a haze, not a disc — it should fade out with no visible edge. Optional very subtle slow opacity pulse.
- `.chatbot-launcher-img`: `position: relative; z-index: 1;` fills the button; `img { width:100%; height:100%; object-fit: contain; object-position: bottom; display:block; }`.
- FLOAT: animate `.chatbot-launcher-img` with a slow gentle bob — `@keyframes chatbot-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }`, `animation: chatbot-float 5.5s ease-in-out infinite;`.
- WHEN PANEL OPEN: `.chatbot-launcher.is-open` should fade the figure + glow out (`opacity: 0; pointer-events: none;`) so the big figure doesn't clash with the open panel; keep the button in the DOM for focus return.
- RESPONSIVE: on `@media (max-width: 640px)`, scale the launcher down to roughly **120px × 145px** so it doesn't dominate a phone screen, still above the fold-safe area.
- REDUCED MOTION: under `@media (prefers-reduced-motion: reduce)`, disable the float and any glow pulse.

Leave the panel, header avatar, transcript, chips, and all other chatbot styles unchanged. Append/replace only the launcher-related rules; show the final launcher CSS in your summary.

## TRIPLE-CHECK (report each, then STOP — do not push)
1. Preflight passed; globals.css is the full file.
2. `mascot-elizabeth-launcher.png` generated (waist-up, feathered bottom, transparent) with dimensions reported.
3. `npm run build` compiles clean; static export generates; no unused-import/lint errors.
4. Launcher renders as a large (~3×) waist-up Elizabeth, transparent, NO circle, with a soft green glow behind her and a slow float.
5. Opening the panel hides the big figure cleanly; closing returns focus to the launcher.
6. Mobile: launcher is scaled down and not covering key content.
7. Reduced-motion: no float/pulse.
8. No console errors.

## WHEN DONE
List files changed, paste the final launcher CSS and the launcher JSX, confirm the build passed, and tell me it's ready. Then WAIT for me to say "push".
