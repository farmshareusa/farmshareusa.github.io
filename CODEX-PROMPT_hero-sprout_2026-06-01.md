# Claude Code Prompt — Animated one-line sprout in the hero (2026-06-01)

Paste everything below the line into Claude Code.

---

FarmShare USA — Replace the hero centerpiece sprout with an animated, self-drawing one-line sprout.

GOAL: The faint engraved sprout behind the hero headline should become a thin, single-line sprout that DRAWS ITSELF ON when the homepage loads — growing from a looped seed at the soil line, up the stem, then unfurling two leaves, with the leaf veins finishing last (~2.6s total). It must skip the animation entirely for users with reduced-motion enabled.

BEFORE YOU WRITE ANY CODE:
1. Pull/sync the latest `main` first (git pull origin main) so you are not editing stale files.
2. CLARIFICATION GATE — answer these back to me and WAIT for my "go" before implementing:
   - Confirm the central sprout you're replacing is the `.hero-watermark` element in `components/HomeHero.tsx` (currently renders `<use href="#mark" />` and animates via the `wm-rise` class). Yes/no.
   - Right now that watermark is a faint background element. Do I want it kept faint, or made more prominent now that it's the animated focal point? Propose what opacity/scale you'll use.
   - Confirm you will leave the `.hero-seal` (FARMSHARE·USA·CERTIFIED badge) and the `#mark` symbol in `EngravedDefs.tsx` UNCHANGED — those are used elsewhere (CTA button, seal) and are out of scope for this change.
   - List the exact files you will touch and wait for my go.

RULES:
- Rewrite `components/HomeHero.tsx` in full, top to bottom — no partial snippets.
- For `app/globals.css`: ADD the new rules in a clearly-commented section (`/* === Hero one-line sprout grow === */`). Do NOT remove, reorder, or restyle any existing rules. In your summary, paste the full final `globals.css` so I can confirm nothing else changed.
- Additive/visual only. Do not touch `next.config.js`, routing, the deploy workflow, the directories, or membership.
- Keep `output: 'export'`, empty basePath/assetPrefix, and all existing brand tokens/fonts.
- No new dependencies. No secrets.

IMPLEMENTATION DETAIL (use this exact art and animation):

A) In `components/HomeHero.tsx`, replace the current watermark SVG block:

    <svg className="hero-watermark germ" viewBox="0 0 100 110" aria-hidden="true">
      <use href="#mark" />
    </svg>

  ...with this self-drawing sprout (keep the element's position in the markup; class names below are what the CSS targets):

    <svg className="hero-watermark fs-sprout" viewBox="0 0 240 250" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path className="fs-grow fs-ground" pathLength={1} d="M48 201 Q84 193 120 199 Q156 205 192 197" />
        <path className="fs-grow fs-stem" pathLength={1} d="M122 200 c-9 2 -12 -9 -3 -12 c7 -2 9 6 3 9 C126 188 116 165 120 148 C121 142 120 138 120 134 C108 124 82 122 70 96 C62 80 76 66 92 76 C110 88 120 112 120 134 C124 124 146 118 166 116 C182 114 186 128 174 138 C160 150 130 150 120 138" />
        <path className="fs-grow fs-vein1" pathLength={1} strokeWidth={2.2} d="M112 128 C100 116 92 104 84 90" />
        <path className="fs-grow fs-vein2" pathLength={1} strokeWidth={2.2} d="M130 134 C144 130 156 127 168 123" />
      </g>
    </svg>

B) In the existing `useEffect` in `HomeHero.tsx`, the watermark currently gets the `wm-rise` class. Change it so that when reduced-motion is NOT set, the watermark gets the class `wm-draw` (the trigger for the new animation) instead of `wm-rise`. Leave the `.hero-seal` `seal-rise` logic and the video logic exactly as they are. When reduced-motion IS set, do nothing to the watermark (the CSS below shows it fully drawn).

C) Add to `app/globals.css`:

    /* === Hero one-line sprout grow === */
    .fs-sprout .fs-grow { stroke-dasharray: 1; stroke-dashoffset: 1; }
    .hero-watermark.wm-draw .fs-ground { animation: fs-draw 0.6s ease forwards; }
    .hero-watermark.wm-draw .fs-stem   { animation: fs-draw 2.2s ease 0.35s forwards; }
    .hero-watermark.wm-draw .fs-vein1  { animation: fs-draw 0.5s ease 2.2s forwards; }
    .hero-watermark.wm-draw .fs-vein2  { animation: fs-draw 0.5s ease 2.35s forwards; }
    @keyframes fs-draw { to { stroke-dashoffset: 0; } }
    @media (prefers-reduced-motion: reduce) {
      .fs-sprout .fs-grow { stroke-dashoffset: 0; animation: none !important; }
    }

  Keep the existing `.hero-watermark` sizing/position/color rules. If the old `germ`/`wm-rise` rules are now unused by the watermark, leave them in place (the seal may still use them) unless you can confirm they're fully orphaned — if so, note it, don't silently delete.

D) The sprout uses `stroke="currentColor"`, so it inherits the watermark's text color. Make sure that color and opacity make the line clearly visible as it draws (it's now the focal animation, not just a faint texture). Tell me the values you chose.

WHEN DONE:
- Report every file changed and paste the full final `globals.css`.
- Remind me to commit/push to `main` to redeploy via the Pages workflow, then hard-refresh (Ctrl/Cmd+Shift+R) to see the new animation.
