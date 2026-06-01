# FarmShare USA — Claude Design BUILD PROMPT (the handoff)

> This is the master prompt to build the full FarmShare USA website in **Claude Design** (claude.ai → palette icon / claude.ai/design).
> Background docs in this repo: `CLAUDE.md` (brand/strategy), `claude-design-brief.md` (design intent), `assets/ASSET-MANIFEST.md` (every image/video mapped to a page), `logo-concepts.md` (logo direction).

---

## SETUP — do this first (5 min, big payoff)

1. **Set effort to high/max** for this session (Opus 4.8 effort control) — this is a large, detailed build.
2. **Onboard the brand.** Connect the GitHub repo `farmshareusa/farmshareusa.github.io` — it contains the four context docs (`CLAUDE.md`, `claude-design-brief.md`, `assets/ASSET-MANIFEST.md`, `logo-concepts.md`), so Claude Design can read them there. (Note: `.md` isn't an accepted direct-upload type — if you want to attach them instead of connecting the repo, rename each to `.txt` first.) These are enrichment; the pasted prompt below is self-sufficient on its own.
3. **Upload the curated image set** in `assets/_claude-design-upload/` (14 files: the two logos, the favicon, the hero still, and a representative spread of stills). That's all Claude Design needs to lock the look — it's a design tool, not an asset host (max 20 files/chat, and **it can't take .mp4 videos at all**). It will use placeholders for everything else and **Claude Code wires in the full library later** (see handoff).
4. **Pick the right Claude Design modes ("Skills and design systems" panel):** turn ON **Interactive prototype** (working, clickable site — essential) and **Make tweakable** (gives you the slider tweak controls to iterate without burning chat turns). Leave OFF: Frontend design (that's for work *without* a brand system — we have one), Animated video, Make a deck, Wireframe, and the PPTX/PDF/Canva exports. (You can use "Save as standalone HTML" at the end as a backup; the real handoff is to Claude Code.)
   - **About "bind a design system":** that only works if you've already created and *published* a design system (done separately in Claude Design org settings). You don't have one yet and don't need it — the pasted prompt tells Claude to build the design system as its first step. (Optional: set up a published design system later if you want it to auto-apply to future projects.)
5. **Let it build the design system FIRST** (palette, type, components, the vintage logo) before any page. Coherent input → coherent output. Spend the first part of the session here.

## How to drive it well (so you don't burn your weekly allowance)
- **Use the Tweaks panel (sliders), not chat, for small changes** — spacing, color temp, type scale, reordering sections don't cost chat turns. Only use chat for structural/conceptual changes.
- **For the hero, ask for "3 variations"** and pick/combine — comparison beats linear refining.
- **If an inline comment doesn't register, paste it into chat** (known quirk).
- **Plan to rewrite placeholder copy** — real copy is in this prompt and in `CLAUDE.md`; don't ship AI filler.
- When ready, **Hand off to Claude Code** as a Next.js static-export build for GitHub Pages (details at the bottom).

---

# ⬇️ PASTE EVERYTHING BELOW THIS LINE AS YOUR FIRST MESSAGE ⬇️

---

## ROLE
You are a world-class creative director and design engineer — Awwwards Site-of-the-Year caliber, fluent in editorial design, WebGL/3D, motion, and conversion. Build the complete **FarmShare USA** website: a premium, cinematic, interactive, multi-page marketing site that turns cold traffic into email subscribers → members → buyers, and feels like a national movement. Do not produce a templated "AI website." Every choice is intentional and distinctive.

## CRITICAL ANTI-DEFAULT GUARDRAILS (read carefully)
- Your built-in house style (warm cream backgrounds, Fraunces serif, terracotta accents) happens to overlap our palette. **Do NOT deliver that generic warm-cream editorial template.** Elevate far beyond it using three things that make this unmistakably FarmShare: (1) a **vintage engraved-almanac graphic layer**, (2) our **real cinematic photography + video** (provided — see assets), and (3) **immersive 3D**. If it looks like a default Claude hospitality site, it has failed.
- Avoid AI-slop: no purple/indigo gradients, no evenly-spaced identical cards, no generic SaaS hero, no stocky look, no emoji icons. Commit to a cohesive palette with sharp accents.
- Cultural references for the aesthetic: **modern farmer's almanac**, **heritage Americana**, **editorial documentary**, with a thread of **solarpunk optimism**. Earthy, premium, hopeful — never doom/prepper, fear-based, or political.

## PRODUCT CONTEXT
- **What it is:** "The Operating System for Modern Self-Sufficiency" — a media + membership + marketplace + national co-op network that moves people from industrial-food dependence to self-sufficient, locally connected living. Not a farming blog; a movement.
- **It stands for:** Independence (not isolation) · Resilience (not fear) · Empowerment (not ideology).
- **Sell transformation, not information** — every feature ties to "feed your family without relying on the system."
- **Four audiences to design for (give all four a place to see themselves):** (1) urban/suburban beginners; (2) aspiring homesteaders; (3) **suburban small landowners, 1–5 acres — high value**; (4) co-op/community builders. The suburbanite with ~1–3 acres in a normal neighborhood is just as important as the rural homesteader — use the suburban imagery deliberately.
- **Funnel the whole site serves:** Traffic → Lead magnet → 5–7 day email nurture → Membership → Course upsell. Every page ends in one clear CTA (lead magnet or membership).

## BRAND SYSTEM — "The Living Almanac"
The concept: **an old-world almanac brought to life as cinematic, living 3D.** Editorial heritage credibility (vintage engraving, Fraunces serif, textured paper) fused with frontier 3D and scroll-driven cinema. The homepage scroll is a transformation journey: **Act I** cool/dim (the fragile industrial food system) → **Act II** warms as a seed germinates into our sprout mark (your hands in the soil) → **Act III** homesteads ignite and connect into a glowing national co-op network (independence, together). Carry that cold→warm, seed→network arc as the throughline.

- **Palette:** heritage green `#1B3A2F` (foundation/dark sections), harvest gold `#D9A441` (the CTA color/highlights), clay `#C2562F` (spark/accents), sage `#8FA68E` (muted support), bone `#F7F3EA` (warm background — never pure white on large fields), ink `#1A1A17` (text). Green is the ground, gold is action, clay is the spark; gold+clay together ≤ ~15% of any view.
- **Type:** display/headlines **Fraunces** (variable serif, editorial, large, tight leading; hero clamp ~56–88px). Body/UI **Inter** (clean, 1.6 line-height) — used deliberately, paired with Fraunces. Decisive, confident type.
- **Logo (vintage engraved direction — provided):** use `assets/Logos/Logo_L1.png` (horizontal banner label: etched sprout-from-seed + "FarmShare" + "USA" ribbon) as the **primary header lockup**; `Logo_L5.png` (almanac masthead) as an alt/About masthead. **Rebuild them as clean SVG and set the wordmark in real Fraunces.** Favicon/seal = `assets/Logos/Favicon_B.png` (sprout-from-seed in a rounded-square frame with 3 stars) — also the base for a **"FarmShare USA Certified"** badge. Export the full logo system: horizontal, stacked, icon-only, light/dark, favicon set.
- **Vintage graphic layer:** use fine **engraved/etched line-art** (sprouts, seeds, hens, watering cans, topographic contours, ornamental borders, small star accents) as section dividers, bullet icons, numbered-step markers, seals, and footer ornament. This almanac layer + the cinematic media is what makes it ownable. Keep it tasteful — accents, not clutter.
- **Texture:** warm paper grain on bone fields (use `Image_S18`); subtle film grain + light bloom on the dark cinematic sections only.
- **Voice:** plain-spoken, empowering, specific, second person. Short sentences. Confident, no hype.

## ASSET USAGE RULES (important — you cannot generate photos)
- **Use the uploaded curated images** where provided. For every other image, use a **clean labeled placeholder tagged with the exact manifest filename** (e.g., a block reading `Image_S22.png`) so Claude Code can swap in the real file later — do **not** insert generic AI/stock photos and do **not** try to generate photographic images. Render only **SVG/vector** for the logo, the engraved almanac accents, icons, diagrams, and 3D.
- **Video:** Claude Design can't host the .mp4s. Design each video section as a **poster still + a clearly marked `<video>` placeholder** naming the file (e.g., `Video1.mp4`, poster `Image_1A_16x9.png`); Claude Code adds the real video with poster + reduced-motion/mobile fallback at build.
- Reference every asset by its **manifest filename** so the handoff is unambiguous. The full library (34 stills, 8 videos, logos) lives in the repo `assets/` and gets wired into `public/` by Claude Code.
- **Homepage hero:** still `assets/start-frames/Image_1A_16x9.png` with video `assets/video/Video1.mp4` (poster = the still; static fallback for reduced-motion/mobile).
- **Alternate rural and suburban** imagery across the site so both audiences see themselves — rural originals (`Image_S1–S19`) + suburban set (`Image_S21–S28`, esp. **S22** the suburban aerial that proves "it works on a normal neighborhood lot").
- **Vary light and season** instead of all golden-hour — bright midday `S29` for how-to, morning `S30` for beginners, fall `S31` for harvest/payoff, spring `S32` for "start now," overcast `S33` and winter `S34` for authenticity/year-round.
- Videos available: `Video1` hero soil, `Video2` garden, `Video3` aerial homestead, `Video4` family (+`Video4_alt-family-standing`), `Video5` co-op, `Video6` seed germination. Use as ambient/background loops with posters and reduced-motion fallbacks. (Do not use Claude Design's own video generator.)

## SIGNATURE 3D & INTERACTION (lazy-load; graceful fallbacks; keep it legible)
1. **Hero "Seed to Network"** — the centerpiece. A WebGL scene that scrubs with scroll: a glowing seed in cool dark soil → germinates into the two-leaf sprout/brand mark as warmth floods in → camera pulls back to a 3D topographic homestead plot → pulls back to a stylized 3D **map of the USA** where homestead points ignite and draw glowing connections into a pulsing co-op network. Cursor parallax, depth of field, golden pollen particles. Reduced-motion users get a beautiful baked still sequence; mobile gets a lightweight version.
2. **/co-ops "Living Map"** — interactive 3D/2.5D US map; filter by ZIP/state + role (consumer/provider); nodes light up; hover blooms a co-op card. Make the directory feel alive, not a table.
3. **/homestead-design "Plot Explorer"** — an orbitable 3D 1–5 acre homestead; click zones (garden, animals, water, storage) to reveal what goes where.
4. **/courses flagship "Systems Loop"** — animated 3D loop (soil → food → water → protein → preservation) with the 8-week Blueprint as stations.
5. Micro-3D: floating seed/leaf tokens, gold "germination" glow on primary buttons, animated stat counters.

## MOTION
Scroll-directed (pinned sections, scrub-driven 3D, layered parallax with the engraved foreground drifting slower); text rises with soft easing; section labels typeset in like letterpress; magnetic gold buttons; warm card lifts; film grain + light bloom on dark sections only. **Always** respect `prefers-reduced-motion` (replace scrubbed 3D/parallax with clean fades + static art). Motion is a layer, never a dependency.

## PAGES (build all; every page ends in one clear CTA; carry the art direction throughout)
- **/ Home** — order: (1) Hero "Seed to Network" 3D + `Image_1A_16x9`/`Video1`; H1 **"Take Back Control of Your Food, Health, and Future."** sub **"Learn how to grow your own food, build self-sufficient systems, and connect with local farm co-ops — no matter where you live."** CTAs **Get Started Free** (gold, primary) · **Watch How It Works**. (2) Problem (Act I tone, cooler imagery `S1/S2`) — fragile food systems: rising costs, declining quality, supply-chain uncertainty, disconnection. (3) Solution — FarmShare gives you the system (step-by-step food production, co-op access nationwide, land optimization, community + accountability). (4) **3 Pillars**: Grow Your Own Food · Build Independent Systems · Join Local Food Networks (`S5/S6/S7` rural + `S21/S26/S28` suburban). (5) Social proof — testimonial/case-study/before-after **placeholder slots** (elegant, clearly stand-ins; do not fabricate real names). (6) Lead magnet — **"30-Day Self-Sufficient Backyard Plan" → Download Free** (email capture; `S8`). (7) Membership overview → /membership. (8) Co-op network — mini Living Map → /co-ops (`S22`). (9) Final CTA: **"Start Building Your Food Independence Today."**
- **/start** — dedicated lead-magnet landing, minimal nav, single goal: capture email for the 30-Day Plan. Benefit stack, plan preview, social-proof placeholders, one form (success/empty/error states). Highest-converting page.
- **/membership** — Free → **Tier 1 $15–25/mo** → **Tier 2 $49–79/mo** → **Tier 3 $199+/mo**. Monthly/annual toggle, feature-comparison matrix, **"Founding Member"** highlight. CTAs collect email/waitlist (checkout is future — stub the link).
- **/courses** + **/courses/food-independence-blueprint** — catalog with a flagship hero. Flagship sales page: **"Systems Loop"** 3D, 8-week curriculum (Wk1 food-system reality+planning → Wk8 30/60/90-day plan), pricing **$99 / $199 / $499**, bonuses (garden planner, chicken guide, land templates), FAQ, and webinar CTA **"How to Build a Self-Sufficient Food System in 90 Days."**
- **/co-ops** — the **Living Map** "Find a Co-op Near Me": search ZIP/state, filter consumer/provider + type, node→card interaction, "List your co-op" CTA. Seed with sample co-op data. Core differentiator — make it real.
- **/vendors** — **FarmShare USA Certified Vendors** directory (same search/filter pattern): tools, seeds, equipment, butchers, deer processing, contractors. Prominent **Certified** badge (from `Favicon_B`). "Apply to be a vendor" CTA. (`S12`)
- **/health** — **FarmShare USA Health**: clinical professionals on the benefits of growing your own food; vetted products/services. Credible, trust-forward (credential slots, citation slots). Email capture. (`S13`)
- **/community** — sells the social/movement community: forum/groups overview, free vs. paid unlocks, sense of belonging. Email capture. (`S14`)
- **/homestead-design** — **Homestead Acquisition & Design** consulting: the **Plot Explorer** 3D, land-buying guidance, property layout, farm-startup planning. High-ticket → application/contact form. (`S15`)
- **/learn** — SEO resource hub seeded from 100 topics, clustered (Food Independence, Beginner, Land Use, Animals, Systems, Co-ops, Income, Lifestyle, Authority, Viral Hooks). Editorial almanac index; article template with strong internal links to membership/courses/co-ops. (`S29` midday/instructional)
- **/about** — mission, story, the movement, founders (**placeholder** founder slots). Most narrative/cinematic page after home; use the `Logo_L5` masthead and `S16`.
- **/contact** — contact + co-op/vendor application entry points.
- **Global:** sticky header (condenses on scroll) with `Logo_L1` + primary gold CTA "Get Started Free"; mega-footer with newsletter capture + co-op/vendor application links + trust row + engraved ornament.

## COMPONENT SYSTEM (reusable, with all states)
Nav, mega-footer, primary/secondary/ghost buttons (gold germination hover), content cards, pricing cards + monthly/annual toggle + Founding-Member highlight, feature-comparison matrix, directory search+filter UI (ZIP/state/role/type), testimonial/case-study blocks (placeholder), Certified/credential badges, stat counters, FAQ accordion, lead-capture module (success/empty/error), optional exit-intent. Define hover/focus/active/loading/empty/error states.

## ACCESSIBILITY & PERFORMANCE (non-negotiable)
WCAG 2.1 AA (contrast — watch gold/clay on light; keyboard nav; visible focus; alt text; semantics). Target **Lighthouse 90+**: 3D lazy-loads and only mounts in view; mobile/low-power get lighter or baked-still fallbacks; everything degrades without WebGL; optimize all media; nothing heavy blocks first paint. **Mobile-first** (most traffic is short-form video) — thumb-friendly, single-column funnels; the 3D hero needs a stunning lightweight mobile version.

## TECH TARGET & CLAUDE CODE HANDOFF
Design so this builds as-is: **Next.js (App Router) + TypeScript + Tailwind**, **static export** (`output: 'export'`) for **GitHub Pages at the root domain** (repo `farmshareusa.github.io`; empty basePath/assetPrefix; `CNAME` + `.nojekyll`). **No backend.** 3D via **Three.js / React Three Fiber**; motion via **Framer Motion**; icons **lucide-react** + our engraved SVGs. **Email capture posts to a third-party** (ConvertKit/Beehiiv/Mailchimp/Formspree) with the provider ID in one config constant — **no secrets in the repo**, and treat email input as untrusted (validate/sanitize). Out of scope v1 (stub the entry points): real checkout/payments, member login/auth, full LMS, live co-op database. When approved, produce a **Claude Code handoff bundle** that preserves design intent + tokens + per-page specs and targets this stack. The bundle must instruct Claude Code to **import the full asset library from the repo `assets/` into `public/images` and `public/video` per `ASSET-MANIFEST.md`** — replacing every filename-tagged placeholder with the real image, and wiring each `<video>` with its poster still and a reduced-motion/mobile fallback.

## DELIVERABLES & SEQUENCE
1. **Design system + logo first** — palette, type, the vintage SVG logo system (from `Logo_L1`/`Favicon_B`), engraved accent set, component library, motion + 3D tokens.
2. **Homepage hero showpiece — give me 3 variations** of the "Seed to Network" hero (desktop + mobile). Make it jaw-dropping before moving on.
3. **Full homepage**, all sections in order above.
4. **Remaining pages**, prioritizing /start, /co-ops (Living Map), /membership, /courses/food-independence-blueprint, then the rest.
5. **Mobile passes** for every page.
6. **Claude Code handoff bundle.**

## START HERE — clarification gate
Before generating, confirm in one short message: (a) you've ingested the brand from `CLAUDE.md` + `ASSET-MANIFEST.md` + the logo files; (b) you'll use the **provided photos/videos** (not generated stock) and render SVG only for logo/engraving/3D; (c) you understand the **anti-default guardrail** (no generic warm-cream Claude template) and the **"Living Almanac"** art direction. Then build **Deliverable #1 (design system + logo)**, and on my "go," the **3 hero variations**.
