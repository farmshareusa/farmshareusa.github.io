# Claude Code Prompt — Make "Ask Elizabeth" understand natural questions (matching upgrade) — 2026-06-01

Paste everything below the divider into Claude Code.

---

You are an expert front-end engineer. Improve the ANSWER-MATCHING of the existing "Ask Elizabeth" chatbot so it answers natural, conversational questions reliably. The chatbot already works; this upgrades `lib/chatMatch.ts` (and a tiny bit of the component if needed). **Do not stop to ask questions. All decisions are below. Only halt if PREFLIGHT fails; otherwise make all changes, build, run the matching tests, and report. Do NOT push — I'll say "push" when ready.**

## THE PROBLEM (verified)
`lib/chatMatch.ts` passes the raw user string straight to Fuse.js with `threshold: 0.42`. Filler words dilute the score, so natural phrasings miss. Example: "show me the courses" returns the fallback even though `q033` (Courses) has the keyword "courses". There is also no synonym handling, so "classes", "how much", "sign up", "co-op", etc. don't reliably map.

## PREFLIGHT (automated; halt only on failure)
1. `git pull origin main`.
2. Confirm `lib/chatMatch.ts`, `data/chatbot-qa.json`, `data/chatbot-qa.types.ts`, and `components/ChatbotMascot.tsx` exist.
3. Confirm `fuse.js` is already a dependency (it is). Add NO new dependencies.
Then proceed without pausing.

## GOAL
Rewrite `lib/chatMatch.ts` (full file, top to bottom) as a layered, still-pure, still-testable matcher. Keep the same exported signature: `findAnswer(query: string, qa: ChatbotQAItem[]): { best, suggestions }`. Pipeline:

### 1. Normalize the query
- Lowercase, strip punctuation, collapse whitespace.
- Remove conversational FILLER/STOPWORDS to isolate the intent. Use an editable `const STOPWORDS` set including at least: `show, me, tell, about, what, whats, is, are, the, a, an, how, do, i, can, you, could, would, please, give, want, need, looking, for, to, of, my, get, got, there, does, with, info, information, question, hi, hey, hello, ok, okay`. Keep the ORIGINAL string too — you'll search both.

### 2. Expand with synonyms
- Build an editable `const SYNONYMS: Record<string,string[]>` mapping canonical terms to alternates, and expand the query tokens with any matches before searching. Seed it (extend as sensible):
  - course → class, classes, program, programs, training, lesson, lessons, curriculum
  - membership → member, plan, plans, tier, tiers, subscription, subscribe, pricing
  - cost → price, pricing, how much, fee, fees, expensive, cheap, afford
  - coop → co-op, cooperative, coops, co-ops, network
  - join → sign up, signup, register, get started, getting started, start
  - free plan → 30 day, 30-day, backyard plan, lead magnet, freebie
  - grow → growing, garden, gardening, plant, planting, crops, vegetables, food
  - land → acres, acreage, property, homestead design
  - vendor → vendors, supplier, suppliers, tools, seeds, equipment
  - health → wellness, nutrition, doctor, clinical
  - community → forum, group, groups, social
  - contact → help, support, person, human, talk, reach, email
  - cancel → refund, quit, stop, unsubscribe
  - blueprint → food independence, 8 week, flagship

### 3. Search (Fuse, tuned) + keyword boost
- Run Fuse on BOTH the normalized-core query and the synonym-expanded query; keep keys `question` 0.6 / `keywords` 0.4 / `answer` 0.05 / add `category` 0.1. Set `ignoreLocation: true`, `minMatchCharLength: 2`, `threshold: 0.5` (a bit looser), `includeScore: true`.
- Add a direct KEYWORD-OVERLAP pass: for each QA item, count how many normalized query tokens exactly match (or are a clear substring of) any of that item's `keywords` or appear in its `question`. A strong keyword/substring hit is a high-confidence signal independent of the Fuse score.
- Combine: rank by a blended score that rewards both a good Fuse score AND keyword overlap.

### 4. Confidence + output (avoid false confidence — wrong answers are worse than a graceful "not sure")
- Return `best` (top item) as CONFIDENT if EITHER: (a) at least one strong keyword/exact-token overlap hit, OR (b) blended Fuse score is clearly good (≈ ≤ 0.45). Otherwise `best = null`.
- Always return up to 3 distinct `suggestions` (next-best items) for a "Did you mean…?" prompt, deduped against `best`.
- Keep everything pure (no DOM), cache the Fuse index as today.

## COMPONENT (small, only if needed)
In `components/ChatbotMascot.tsx`, ensure that when `best` is null the UI shows the "Did you mean…?" `suggestions` as clickable chips ABOVE the Contact fallback (so users get a real path, not just "I'm not sure"). If that's already implemented, leave it.

## TESTS (prove it works)
Add/replace `lib/chatMatch.test.ts` with a battery of natural phrasings asserting the matched item's `id` or `category`. Run it with Node's built-in test runner (`node --test`, no new dependency) and report pass/fail. Include at least:
- "show me the courses" → category Courses
- "do you have any classes" → category Courses
- "how much is membership" → category Membership & Pricing
- "what does it cost to join" → category Membership & Pricing
- "where do i even start" → Getting Started
- "find a co-op near me" → q046
- "is the 30 day plan free" → free-plan/Getting Started
- "can i grow food in an apartment" → q006
- "i want to buy land" → q072
- "how do i talk to a real person" → q100
- "asdfqwer zzz" (gibberish) → best is null, suggestions returned
If any fail, adjust STOPWORDS / SYNONYMS / thresholds until they pass (without making gibberish match).

## RULES
- Rewrite `lib/chatMatch.ts` in full. Keep STOPWORDS and SYNONYMS as clearly-commented, editable consts at the top so we can extend them later.
- Static-only, no new dependencies, no secrets, no network calls.
- Don't touch unrelated files, the launcher visuals, the JSON data (improve matching in code, not by bloating the DB).

## TRIPLE-CHECK (report each, then STOP — do not push)
1. Preflight passed.
2. `npm run build` compiles clean; no lint/type errors.
3. `node --test` (matching tests) all pass; paste the summary.
4. Manually confirm in `npm run dev`: "show me the courses", "how much is it", "do you have classes", and "find a coop" all return correct answers; gibberish still hits the graceful fallback + suggestions.
5. No console errors.

## WHEN DONE
List files changed, paste the new `lib/chatMatch.ts` and the test results, confirm the build passed, and tell me it's ready. Then WAIT for me to say "push".

## FUTURE (do NOT build now)
Keep `findAnswer` swappable so we can later upgrade to embedding/semantic search or a hosted LLM with retrieval over this same `chatbot-qa.json`.
