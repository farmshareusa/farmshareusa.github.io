# Claude Code Prompt — BUILD the "Ask Elizabeth" mascot chatbot (v1, production) — 2026-06-01

Companion data file (same folder): `chatbot-qa.json` (100-entry knowledge base).
You (Father Dan) must also drop the green-screen mascot render into the repo before running — see PREREQUISITE.

Paste everything below the divider into Claude Code.

---

You are an expert front-end engineer building a production-grade, on-brand chatbot for a static Next.js site. Work carefully and TRIPLE-CHECK: this ships to a live site.

## PROJECT FACTS (verified — do not re-litigate, but confirm in your gate)
- Next.js App Router + TypeScript + Tailwind, `output: 'export'` (static, GitHub Pages). NO backend, NO server, NO secrets, NO runtime API calls.
- The ONLY stylesheet compiled into the build is `app/globals.css` (imported in `app/layout.tsx`). On `main` this file is ~48 KB and contains all component styles. ⚠️ A truncated 808-byte copy may exist in a stale working tree — so PULL `main` FIRST and verify `app/globals.css` is the full file (contains `header.site`) before editing. Do NOT overwrite it with a stub.
- Global components mount in `app/layout.tsx` (currently `<EngravedDefs/>`, `<SiteHeader/>`, children, `<SiteFooter/>`, `<SiteClient/>`).
- Brand tokens already defined in `:root` of globals.css: `--green #1B3A2F`, `--green-deep`, `--gold #D9A441`, `--gold-bright`, `--clay #C2562F`, `--sage #8FA68E`, `--bone #F7F3EA`, `--bone-2`, `--ink #1A1A17`, `--line`, `--line-soft`, `--hdr`. Fonts: 'Fraunces' (display) and 'Inter' (body) are already loaded.
- Reusable engraved SVG symbols exist via `<EngravedDefs/>`: `#mark`, `#af-corner`, `#fleuron`, `#star`, `#sprig`, `#check`. Reuse these for chat accents instead of new icons.
- Config lives in `config/site.ts`: `emailProvider` (currently null), `emailFormId` (null), `analyticsId` (null), `checkoutUrl` (null). Email capture is not yet wired site-wide.

## BEFORE YOU WRITE CODE — CLARIFICATION GATE (answer, then WAIT for my "go")
1. Confirm `git pull origin main` is done and `app/globals.css` is the FULL ~48 KB file (grep it for `header.site` — must be > 0). If it's the 808-byte stub, STOP and tell me.
2. Confirm you'll add exactly one npm dependency: `fuse.js`. Nothing else.
3. Confirm the PREREQUISITE source image (below) is present, and confirm your chroma-key plan.
4. List every file you will create/modify, and the exact CSS you'll append. Then wait for my go.

## PREREQUISITE (I, Dan, will do this; verify it exists)
I will place the green-screen mascot render at: `assets/mascot/elizabeth-greenscreen.png`
(If missing, tell me and use a neutral placeholder so the build still passes.)

## STEP 1 — Produce the transparent cutouts (script, not by hand)
Write and run a small, committed script (`scripts/build-mascot.mjs` using `sharp`, OR a Python script using Pillow/numpy — pick one and add it to devDeps if needed; sharp preferred) that:
- Reads `assets/mascot/elizabeth-greenscreen.png`.
- Removes the flat chroma-key green: sample the top-left corner pixel for the exact green, then make pixels transparent where green strongly dominates (g noticeably greater than both r and b above a tolerance). Use a tolerance that fully clears the background without eating her blue shirt or cream apron (there is NO green on her, so this is safe).
- DESPILL the edge fringe: for semi-edge pixels, clamp the green channel down toward max(r,b) to kill the green halo.
- Auto-trim transparent margins, then export two assets to `public/images/`:
  - `mascot-elizabeth-full.png` — the full figure, ~900 px tall, transparent. (Used in the open panel.)
  - `mascot-elizabeth-avatar.png` — a SQUARE head-and-shoulders crop, ~320 px. (Used in the small round launcher + chat header — a head crop reads far better at 64 px than the full waving body.)
- The script must be re-runnable and must not error if the source is missing (log and skip).
Report the output dimensions. Do not commit the giant source if it's huge; keep `assets/mascot/` source and the two optimized `public/images/` outputs.

## STEP 2 — Knowledge base
Place the provided `chatbot-qa.json` at `data/chatbot-qa.json`. Define a TypeScript type for it. Shape:
`{ meta: { name, version, voice, fallback, fallbackLink }, categories: string[], qa: Array<{ id, category, question, answer, keywords: string[], link?: string }> }`.

## STEP 3 — Matching (Fuse.js, pure + testable)
Create `lib/chatMatch.ts` exporting a pure function `findAnswer(query, qa)`:
- Build a Fuse index over `qa` with keys weighted: `question` 0.6, `keywords` 0.35, `answer` 0.05; options `{ includeScore: true, ignoreLocation: true, threshold: 0.42, minMatchCharLength: 2 }`.
- Return `{ best, suggestions }`: `best` = top hit if its score is good (≈ score ≤ 0.42), else `null`. `suggestions` = next 3 distinct questions (for a "Did you mean…?" prompt) when there's no confident best.
- Keep it framework-free so it can be unit-tested. Add one tiny test file (or a `__tests__`) asserting a few known queries map to expected ids (e.g., "how much is membership" → a Membership entry; "find a coop near me" → q046).

## STEP 4 — The component: `components/ChatbotMascot.tsx` ('use client')
Single self-contained client component, mounted once globally. Behavior:

LAUNCHER (always visible, fixed bottom-right, respecting safe-area insets):
- Circular button (~64 px desktop, ≥44 px tap target mobile) showing `mascot-elizabeth-avatar.png` with a harvest-gold ring; gentle idle bob animation (disabled under `prefers-reduced-motion`).
- A one-time greeting bubble ("Hi, I'm Elizabeth — ask me anything about FarmShare USA!") appears ~2.5 s after load, dismissible, and does NOT reappear in the same session (use `sessionStorage`, guarded for SSR).
- `aria-label="Open chat with Elizabeth"`, `aria-expanded` reflects panel state.

PANEL (opens above the launcher; on mobile becomes a near-full-screen sheet):
- `role="dialog"`, `aria-modal="true"`, labelled by the header. Trap focus inside; move focus to the input on open; restore focus to the launcher on close; `Esc` closes. Visible focus rings.
- Header: small avatar + "Ask Elizabeth" (Fraunces) + subtitle "Your FarmShare USA guide" + close (×) button.
- Transcript area (scrollable, `aria-live="polite"` for new messages). Elizabeth's bubbles in cream/`--bone`; user bubbles in `--green` with cream text. Use the `#fleuron` or `#sprig` symbol as a subtle divider/accent, on-brand.
- Greeting message from Elizabeth + 6 suggested-question quick-reply chips spanning categories (e.g., getting started, membership, co-ops, courses, the free plan, contact). Chips are real `<button>`s.
- Input row: labelled text input + send button (use `#mark` as the send glyph). A brief "Elizabeth is typing…" indicator (short simulated delay, ~500–800 ms) for warmth (skip the delay under reduced motion).

ANSWERS:
- On submit (or chip click), call `findAnswer`. Render the answer as PLAIN TEXT (never `dangerouslySetInnerHTML` on anything derived from user input). If the matched entry has `link`, show a "Learn more →" button that navigates to that internal page.
- If no confident `best`: show `meta.fallback`, a "Did you mean…?" list of the 3 suggestions (clickable), and a button to `meta.fallbackLink` (/contact/).

FUNNEL ROLE (lead engine, not just FAQ):
- Contextual CTAs: after answering, if the matched `category` is Membership/Courses/Co-ops, show a matching button (e.g., "See membership →" /membership/, "Explore the Blueprint →" the course page, "Find a co-op →" /co-ops/).
- Free 30-Day Plan offer: render an inline mini email-capture ("Want the free 30-Day Plan? Drop your email and I'll send it.") (a) immediately when the user asks anything matching getting-started/plan intent, and (b) once, gently, after ~3 user messages if they haven't seen it yet.
- The email mini-form: validate with a standard email regex, treat input as UNTRUSTED (no echoing into HTML), show success/error states. Submit through a shared helper that reads `config/site.ts` (`emailProvider`, `emailFormId`); when those are null (current state), behave like the existing site `LeadCapture` (show success, store nothing) but be coded so connecting a provider later is a one-line change. NEVER hardcode a key.

ANALYTICS (inert until configured):
- Fire events via a guarded helper that no-ops unless `siteConfig.analyticsId` is set: `chatbot_open`, `chatbot_question` (include matched `id` or `"fallback"`), `chatbot_cta_click`, `chatbot_lead_submit`. This gives us data later with zero effect now.

PERFORMANCE / SSR SAFETY:
- Guard all `window`/`document`/`sessionStorage` access (client-only). Set explicit width/height on the launcher image to avoid layout shift. It's fine to `import Fuse from 'fuse.js'` directly (small), or dynamic-import on first open — your call, but keep initial load light.

## STEP 5 — Styling (append to `app/globals.css`, clearly commented)
Add a `/* === Ask Elizabeth chatbot === */` block using ONLY existing brand tokens and the Fraunces/Inter fonts. Match the site's premium, warm, engraved feel (thin gold accents, rounded, soft shadow). The bot must look native to the brand, never generic/techy. Do not modify unrelated rules; paste the full added block in your summary.

## STEP 6 — Mount
Render `<ChatbotMascot />` once in `app/layout.tsx`, after `<SiteClient />`.

## RULES
- Rewrite each NEW file in full. For `app/globals.css` and `app/layout.tsx`, make minimal additive edits and show the full diff/added block in your summary.
- Do NOT touch routing, `next.config.js`, the deploy workflow, the directories, membership, or other components beyond mounting + the shared email helper.
- Static-export safe, WCAG 2.1 AA, mobile-first, `prefers-reduced-motion` respected, no secrets, no external network calls.

## TRIPLE-CHECK BEFORE HANDOFF (report each)
1. `git pull` done; `app/globals.css` confirmed full (not the stub).
2. `npm ci` (or install) added only `fuse.js` (+ `sharp` if used for the script).
3. `npm run build` compiles clean and static export generates; no SSR `window` errors.
4. Chroma-key script ran; both transparent PNGs exist with correct sizes and no green fringe.
5. Keyboard: open, type, Tab cycles inside panel, Esc closes, focus returns to launcher.
6. Reduced-motion: no bob, no typing delay, no animation.
7. Mobile: launcher tappable, panel usable as a sheet, nothing clipped.
8. A few sample questions return the right answers; a nonsense question hits the fallback + "Did you mean".
9. No console errors/warnings; analytics helper is inert (analyticsId null).

## WHEN DONE
- List every file created/changed; paste the added `globals.css` block and the `layout.tsx` change.
- Confirm the two mascot PNG paths and dimensions.
- Remind me to: commit/push to `main` to redeploy, then hard-refresh (Ctrl/Cmd+Shift+R), and to wire a real email provider in `config/site.ts` when ready so the in-chat 30-Day Plan capture goes live.

## FUTURE (do NOT build now)
Keep `findAnswer` swappable so we can later upgrade from Fuse.js to semantic/embedding search or a hosted LLM with retrieval over this same `chatbot-qa.json`.
