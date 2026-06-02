# Claude Code Prompt — Elizabeth mascot chatbot + Q&A database (v1) — 2026-06-01

Paste everything below the line into Claude Code.
Companion file in this same folder: `chatbot-qa.json` (the 100-entry knowledge base).

---

FarmShare USA — Add a clickable mascot chatbot ("Ask Elizabeth") with a local Q&A knowledge base.

GOAL: A friendly mascot (Elizabeth) floats in the lower-right corner on every page. Clicking it opens a branded chat panel where visitors ask questions and get answers from a local Q&A database — no backend, no API keys, fully static-export compatible. This is v1: simple keyword matching over a JSON file, with a graceful fallback to the Contact page when there's no good match.

BEFORE YOU WRITE ANY CODE:
1. Pull/sync the latest `main` first (git pull origin main).
2. CLARIFICATION GATE — answer these and WAIT for my "go" before implementing:
   a. Confirm the global mount point: the site renders `<SiteClient />` (and header/footer) from `app/layout.tsx`. I want the chatbot mounted globally there so it appears on every page. Confirm that's the right place.
   b. Confirm where component CSS compiles into the build (same stylesheet that styles `header.site` / the homepage). I want the chatbot styles to ship the same way — tell me which file you'll add them to.
   c. Confirm you will add NO new npm dependencies (v1 uses a small built-in matcher, not Fuse.js or any LLM/API). Yes/no.
   d. The mascot image: I will provide a transparent PNG of Elizabeth at `public/images/mascot-elizabeth.png` (background removed from the green-screen render). If the file isn't present yet, use a simple styled placeholder circle so the build still succeeds, and tell me it's pending. Confirm.
   e. List the exact files you'll create/modify and wait for my go.

RULES:
- Rewrite any component file you create in full, top to bottom. For the shared stylesheet, add a clearly-commented block (`/* === Ask Elizabeth chatbot === */`) without disturbing existing rules, and paste the full added block in your summary.
- Do NOT touch `next.config.js`, routing, the deploy workflow, the directories, membership, or existing components beyond mounting the widget. Keep `output: 'export'`.
- No backend, no API calls, no secrets, no external requests. Everything runs client-side from the local JSON.
- Treat all user input as untrusted: render answers as plain text (no dangerouslySetInnerHTML for user content), and never echo raw input into HTML.
- Accessibility: keyboard operable, focus moves into the panel on open and returns to the launcher on close, Escape closes it, ARIA roles/labels on the launcher and dialog, visible focus states. Respect `prefers-reduced-motion`.
- Mobile-first: on small screens the panel expands to a comfortable near-full-width sheet; the launcher never covers critical content.

DATA:
- Place the provided `chatbot-qa.json` (from the Mascot_Elizabeth_v1 folder) into the app at `data/chatbot-qa.json`. It has this shape: a `meta` object (with `fallback` text and `fallbackLink`), a `categories` array, and a `qa` array of `{ id, category, question, answer, keywords[], link }`.
- Import it as typed data (define a `ChatQA` TypeScript type).

COMPONENTS TO CREATE:
1. `components/ChatbotMascot.tsx` ('use client') — the whole feature in one component:
   - A fixed launcher button in the lower-right: the mascot image (`/images/mascot-elizabeth.png`) in a circular frame with a subtle harvest-gold ring, plus a small greeting bubble on first load ("Hi, I'm Elizabeth — ask me anything!") that can be dismissed.
   - On click, open a chat panel anchored bottom-right (above the launcher). Header: small Elizabeth avatar + "Ask Elizabeth" + close button.
   - Greeting message from Elizabeth + 4–6 suggested-question quick-reply chips (pull a spread from different categories, e.g. getting started, membership, co-ops, courses).
   - A text input + send button. On submit, run the matcher (below), append the user's message and Elizabeth's answer to the transcript, and if the matched entry has a `link`, show a "Learn more →" button under the answer that navigates to that page.
   - If no good match, reply with the `meta.fallback` text and a button linking to `meta.fallbackLink` (/contact/).
   - Keep a simple in-memory transcript (React state only — no localStorage required for v1).

MATCHER (v1, built-in, no dependencies):
- Normalize text: lowercase, strip punctuation, split into tokens, drop common stopwords.
- Score each QA entry by overlap between the user's tokens and the entry's `question` + `keywords` tokens (e.g., count shared tokens, weight exact keyword hits higher; a phrase/substring match on a keyword is a strong signal).
- Return the highest-scoring entry above a sensible threshold; otherwise return the fallback. (Keep the scoring in a small pure function so it's easy to unit-test and swap for an LLM later.)

STYLING (match the brand):
- Use the existing CSS variables (`--green`, `--gold`, `--clay`, `--sage`, `--bone`, `--ink`, fonts Fraunces/Inter).
- Panel: pine-green or cream surface with a thin gold rule/accent echoing the masthead; rounded corners; soft shadow; Elizabeth's answers in a light bubble, user messages in a green/gold bubble.
- Launcher: ~64px circle on desktop, comfortably tappable on mobile; gentle hover lift; respects reduced motion.
- Keep it readable and on-brand — warm and inviting, not techy.

MOUNT:
- Render `<ChatbotMascot />` once in `app/layout.tsx` (after `<SiteClient />`) so it's global.

WHEN DONE:
- Run a local production build (npm run build) and confirm it compiles with no errors and the static export still generates.
- Report every file created/changed and paste the chatbot CSS block you added.
- Note whether the mascot PNG was present or a placeholder was used.
- Remind me to: (1) drop the final transparent `mascot-elizabeth.png` into `public/images/` if not already there, (2) commit/push to `main` to redeploy, and (3) hard-refresh (Ctrl/Cmd+Shift+R).

FUTURE (do NOT build now — just leave the matcher swappable): later we may upgrade v1 keyword matching to semantic search or a hosted LLM with retrieval over this same JSON.
