# FarmShare USA — Claude Code kickoff prompt

> Paste this into **Claude Code** (in the `farmshareusa.github.io` repo) to turn the Claude Design output into the real site.
> Pair it with the **Claude Design handoff bundle** (use "Hand off to Claude Code" in Claude Design; or attach the exported `index.html` / `design-system.html` as the visual reference).

---

Before you implement anything: **`git checkout main` then `git pull origin main`** so we're on the latest.

**Context to read first (in this repo):**
- `CLAUDE.md` — full brand + build guide. **§15 is the asset-handoff checklist — follow it.**
- `assets/ASSET-MANIFEST.md` — every image/video mapped to its page/section.
- `CLAUDE-DESIGN-BUILD-PROMPT.md` — the design brief Claude Design built from.
- The attached Claude Design handoff bundle / HTML is the **visual reference for the "Living Almanac" design language** (engraved almanac frame, palette, type, components). Match its look; fix the issues below.

**GOAL:** Implement the Claude Design homepage on the existing Next.js static-export scaffold, fix the known issues, wire in the real asset library, and build the remaining pages in the same language.

**Known issues from design review — fix these explicitly:**
1. **Logo:** the design used a simplified sprout wordmark. Replace it with the chosen **vintage `assets/Logos/Logo_L1.png`** as the header lockup (rebuild as clean SVG if you can; otherwise use the PNG). Use `Logo_L5` for the About masthead. Favicon + seal + "FarmShare USA Certified" badge come from `assets/Logos/Favicon_B.png`.
2. **Hero:** it's empty because the photo wasn't uploaded to Claude Design. Put **`assets/start-frames/Image_1A_16x9.png`** (poster) + **`assets/video/Video1.mp4`** (autoplay-muted-loop background, reduced-motion/mobile falls back to the poster) inside the engraved almanac frame. Keep the vintage frame — it's wanted.
3. **Remove the out-of-place dark plant image** in the hero/Act I area. Either drop it or replace with a cool-toned Act I shot (`Image_S1` or `Image_S2`). Flag this for Dan to confirm.
4. **Replace every filename-tagged placeholder** with the real file from `assets/` per `ASSET-MANIFEST.md` (stills → `public/images/`, videos → `public/video/`). Alternate rural (`S1–S19`) and suburban (`S21–S28`) imagery; vary light/season (`S29–S34`) — don't lean on golden hour everywhere.

**Then build the remaining pages** from the per-page specs in `CLAUDE.md` §5–6 and `CLAUDE-DESIGN-BUILD-PROMPT.md`, in the same Living Almanac language: `/start`, `/co-ops` (interactive Living Map), `/membership` (pricing ladder + monthly/annual toggle), `/courses` + `/courses/food-independence-blueprint`, `/vendors`, `/health`, `/community`, `/homestead-design`, `/learn`, `/about`, `/contact`.

**Tech guardrails (keep as-is):** Next.js App Router + TS + Tailwind; `output: 'export'`, empty `basePath`/`assetPrefix`, keep `public/CNAME` + `public/.nojekyll`. 3D via Three.js / React Three Fiber (lazy-load, `prefers-reduced-motion` fallbacks); motion via Framer Motion; icons lucide-react + engraved SVGs. Email capture posts to a third-party — provider ID goes in `config/site.ts` (still **TBD**; leave the placeholder, no secrets). Treat email input as untrusted. Target **Lighthouse 90+**, mobile-first. Stub out-of-scope v1 (checkout/auth/LMS/live co-op DB).

**CLARIFICATION GATE:** Before writing code, list (a) the files you'll create/modify, (b) how you'll handle the hero video + logo SVG, and (c) any asset gaps you see — and ask me to confirm. Do not implement until I reply "go."

After I approve: rewrite each file top-to-bottom (no partial snippets), give me a single one-line commit+push command, and remind me to redeploy (push to `main`) and hard-refresh.
