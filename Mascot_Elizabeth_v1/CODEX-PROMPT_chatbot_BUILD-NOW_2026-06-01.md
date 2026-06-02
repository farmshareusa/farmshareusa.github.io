# Claude Code Prompt — BUILD THE CHATBOT NOW (no gate) — "Ask Elizabeth" v1 — 2026-06-01

Paste everything below the divider into Claude Code.

---

You are an expert front-end engineer. Build the "Ask Elizabeth" chatbot for this static Next.js site, end to end, in ONE pass. Earlier work stopped at a clarification gate — DO NOT repeat that. All decisions are made below. **Do not stop to ask me questions. Only halt if a PREFLIGHT safety check actually fails; otherwise build everything, then report.**

## CURRENT STATE (verified — do not redo these)
Already committed on `main`:
- `assets/mascot/elizabeth-greenscreen.png` — the source render (present).
- `scripts/build-mascot.mjs` — chroma-key script (present); it already ran.
- `public/images/mascot-elizabeth-full.png` — full transparent figure (present, ~960 KB). Use in the open panel.
- `public/images/mascot-elizabeth-avatar.png` — square head-and-shoulders cutout (present, ~160 KB). Use in the launcher + chat header.
- The Q&A knowledge base exists at `Mascot_Elizabeth_v1/chatbot-qa.json` (NOT yet in `data/`).
Do NOT regenerate the images. (Only re-run the script if a cutout is actually missing.)

Still MISSING (this is your job): `components/ChatbotMascot.tsx`, `lib/chatMatch.ts`, `data/chatbot-qa.json`, the layout mount, the `fuse.js` dependency, and the chatbot CSS block.

## LOCKED DECISIONS (do not deviate, do not ask)
- Matching: **Fuse.js** (add to `dependencies`). It's the only new dependency. (sharp is already handled for the image script; don't add it for runtime.)
- Role: **Answer + funnel** — she answers questions AND offers the free 30-Day Plan (inline email capture) plus contextual CTAs.
- Static-only: no backend, no API keys, no network calls. WCAG 2.1 AA, mobile-first, respect `prefers-reduced-motion`.
- Q&A file: move `Mascot_Elizabeth_v1/chatbot-qa.json` → `data/chatbot-qa.json` (use `git mv`).
- Skip the unit-test file for now (no test runner is wired). Keep `findAnswer` pure so we can add tests later.
- Work on the current `scaffold/foundation` branch. Build and verify, but **do NOT push or merge** — I'll say "push" when I'm ready.

## PREFLIGHT (automated — no user input; halt only on failure)
1. `git pull origin main` (fast-forward). 
2. Verify `app/globals.css` is the FULL stylesheet: `grep -c "header.site" app/globals.css` must be ≥ 1 and the file must be ~48 KB. If it's an ~808-byte stub, STOP and tell me (do not append to or overwrite a stub).
3. Verify the two cutout PNGs exist in `public/images/`. If missing, run `node scripts/build-mascot.mjs`.
Then proceed to build without pausing.

## CONFIG TOUCHPOINTS
- Reuse `config/site.ts` (`emailProvider`, `emailFormId`, `analyticsId` — all currently null). The in-chat email capture must submit through a shared helper that reads these and, while null, behaves like the existing `LeadCapture` (validate + show success, store nothing) but is one line away from going live. Never hardcode a key.
- Reuse engraved symbols from `<EngravedDefs/>`: `#mark` (send icon), `#fleuron`/`#sprig` (divider accents).

## FILE 1 — `data/chatbot-qa.json` (moved) + a TS type
Move the JSON into `data/`. Add `data/chatbot-qa.types.ts` typing the shape: `{ meta:{name,version,voice,fallback,fallbackLink}, categories:string[], qa:Array<{id,category,question,answer,keywords:string[],link?:string}> }`.

## FILE 2 — `lib/chatMatch.ts` (pure, Fuse-based)
Export `findAnswer(query, qa)`:
- Fuse index, keys weighted `question` 0.6 / `keywords` 0.35 / `answer` 0.05; options `{ includeScore:true, ignoreLocation:true, threshold:0.42, minMatchCharLength:2 }`.
- Return `{ best, suggestions }`: `best` = top hit if score is confident (≤ ~0.42), else `null`; `suggestions` = next 3 distinct questions for a "Did you mean…?" prompt. Framework-free.

## FILE 3 — `components/ChatbotMascot.tsx` ('use client') — the whole feature
LAUNCHER (fixed bottom-right, safe-area insets, z-index above header):
- Round button (~64px desktop, ≥44px mobile) showing `/images/mascot-elizabeth-avatar.png` with a harvest-gold ring; gentle idle bob (off under reduced-motion); explicit width/height to avoid layout shift.
- One-time greeting bubble ("Hi, I'm Elizabeth — ask me anything about FarmShare USA!") ~2.5s after load, dismissible, not repeated in the same session (`sessionStorage`, SSR-guarded).
- `aria-label="Open chat with Elizabeth"`, `aria-expanded` reflects state.

PANEL (opens above launcher; near-full-screen sheet on mobile):
- `role="dialog"` `aria-modal="true"`, labelled by header. Trap focus; focus the input on open; restore focus to launcher on close; `Esc` closes; visible focus rings.
- Header: small avatar + "Ask Elizabeth" (Fraunces) + subtitle "Your FarmShare USA guide" + close (×).
- Transcript (scrollable, `aria-live="polite"`). Bot bubbles in `--bone-2`; user bubbles in `--green` with cream text. `#fleuron`/`#sprig` as a subtle divider.
- Opens with a greeting message + 6 quick-reply chips (real buttons) spanning categories: getting started, the free 30-Day Plan, membership, courses, co-ops, contact.
- Input row: labelled text input + send button (use `#mark`). Brief "Elizabeth is typing…" (~600ms, skipped under reduced-motion).

ANSWERS:
- On submit / chip click, call `findAnswer`. Render answers as PLAIN TEXT (never `dangerouslySetInnerHTML` on anything derived from input). If `best.link` exists, show a "Learn more →" button navigating to that internal page.
- No confident match → show `meta.fallback`, a clickable "Did you mean…?" list of the 3 suggestions, and a button to `meta.fallbackLink` (/contact/).

FUNNEL:
- After answering, if `best.category` is Membership / Courses / Co-ops, show a matching CTA button (/membership/, the Blueprint page, /co-ops/).
- Free 30-Day Plan: render an inline mini email-capture (a) immediately when the query matches getting-started/plan intent, and (b) once, gently, after ~3 user messages if not yet shown. Validate email (same regex as `LeadCapture`), treat as untrusted, success/error states, submit via the shared config-driven helper.

ANALYTICS (inert until `analyticsId` set): fire `chatbot_open`, `chatbot_question` (matched id or "fallback"), `chatbot_cta_click`, `chatbot_lead_submit` through a guarded helper that no-ops when null.

SSR SAFETY: guard all `window`/`document`/`sessionStorage`; client-only. Import Fuse normally (small) or dynamic-import on first open.

## FILE 4 — append CSS to `app/globals.css`
A clearly fenced `/* === Ask Elizabeth chatbot === */` block, namespaced under `.chatbot-*` so nothing collides. Use only existing tokens (`--green`, `--green-deep`, `--gold`, `--clay`, `--sage`, `--bone`, `--bone-2`, `--ink`, `--line`, `--hdr`) and the Fraunces/Inter fonts. Match the premium engraved brand feel (thin gold accents, rounded, soft shadow) — native to the site, never generic/techy. Append only; don't edit existing rules. Include the `@media (max-width:640px)` sheet behavior and the `@media (prefers-reduced-motion)` overrides. Paste the full added block in your summary.

## FILE 5 — mount in `app/layout.tsx`
Add `import { ChatbotMascot } from '@/components/ChatbotMascot';` and render `<ChatbotMascot />` once, directly after `<SiteClient />`. Nothing else.

## TRIPLE-CHECK (report each, then stop — do not push)
1. Preflight passed; `app/globals.css` confirmed full (not the stub).
2. Only `fuse.js` added to dependencies; `git mv` of the JSON done.
3. `npm run build` compiles clean; static export generates; no SSR `window` errors.
4. Launcher shows the avatar cutout (no green fringe); panel shows the full figure.
5. Keyboard: open, type, Tab stays trapped, Esc closes, focus returns to launcher.
6. Reduced-motion: no bob, no typing delay.
7. Mobile: launcher tappable, panel works as a sheet, nothing clipped.
8. Sample queries resolve correctly (e.g., "how much is membership" → a Membership answer; "find a co-op near me" → co-op answer; gibberish → fallback + "Did you mean").
9. No console errors; analytics inert.

## WHEN DONE
List every file created/modified, paste the added `globals.css` block and the `layout.tsx` change, confirm the build passed, and tell me it's ready — then WAIT. I'll review locally and say "push" when I want it deployed. After I push, remind me to hard-refresh and to wire a real email provider in `config/site.ts` so the in-chat 30-Day Plan capture goes live.
