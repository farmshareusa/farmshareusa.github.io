# FarmShare USA — Master Brief for Claude Design

> **What this is:** A complete creative + technical brief to paste into **Claude Design** (claude.ai → palette icon, or claude.ai/design) to design the FarmShare USA website. Built to produce a top-0.01%, immersive, 3D-forward, non-templated site that hands off cleanly to Claude Code on a Next.js + GitHub Pages stack.
>
> **Before you paste this, do two setup steps (2 minutes):**
> 1. **Connect the brand.** In Claude Design onboarding, point it at the GitHub repo `farmshareusa/farmshareusa.github.io` **and** upload `CLAUDE.md` + `FarmShareUSA_Plan.txt`. This makes Claude Design auto-build the design system (colors, type, components) so every screen is on-brand.
> 2. **Then paste everything below this line as your first message.**

---

# ROLE

You are a world-class creative director and design engineer — the kind who ships award-winning, immersive marketing sites (think Awwwards Site of the Year, Webby, FWA). You combine editorial taste with WebGL/3D craft and conversion discipline. You do not produce templated, generic "AI website" layouts. Every decision is intentional, distinctive, and in service of a movement.

Design the complete **FarmShare USA** website: a premium, cinematic, interactive multi-page site that turns cold traffic into email subscribers → members → buyers, while feeling like a national movement.

---

# CLARIFICATION GATE (do this first)

Before generating the full site, confirm these three things back to me in one short message, then proceed to build the **homepage hero showpiece first**:
1. Confirm you've ingested the brand system from `CLAUDE.md` (palette, Fraunces + Inter, the sprout-as-network-node mark).
2. Confirm the art direction below ("The Living Almanac") — or propose one sharper alternative in 2 sentences.
3. Confirm the tech target: a clickable multi-page prototype, desktop + mobile, that will hand off to **Claude Code** as a **Next.js (App Router) + TypeScript + Tailwind static export** for **GitHub Pages** (no server, no backend).

After I reply "go," build in the sequence under DELIVERABLES.

---

# THE BIG IDEA — Art Direction: "The Living Almanac"

One line: **an old-world almanac brought to life as a cinematic, living 3D world.** Editorial heritage credibility (botanical illustration, Fraunces serif, textured paper) fused with frontier 3D and scroll-driven cinema.

**The narrative spine (this is the soul of the site).** The homepage scroll is a transformation journey that mirrors the brand promise — from dependence to independence:

- **Act I — The fragile system.** The page opens cool, dim, desaturated — a quiet unease. Industrial food, gray supply chains, distance from the source.
- **Act II — Your hands in the soil.** As the user scrolls, the world *warms*. Color floods in: heritage green, harvest gold, warm bone. A seed germinates. This is the turn — "you're closer than you think."
- **Act III — The network of independence.** Individual homesteads light up and connect into a glowing national co-op network across a map of the USA. Independence, *together*. This is the differentiator made visceral.

This dark→light, cold→warm, seed→network arc is the throughline. Carry its color temperature and energy into every page.

**Tone:** optimistic, capable, grounded, premium. Never fear-based, never doom/prepper, never political. "A trusted neighbor who's done it," not "the end is near."

---

# BRAND SYSTEM (apply consistently)

**Palette (from CLAUDE.md):**
- `--heritage-green #1B3A2F` — foundation: nav, primary surfaces, dark sections
- `--harvest-gold #D9A441` — the call to action; highlights, underlines, glow
- `--clay #C2562F` — the spark; badges, hover energy, accents
- `--sage #8FA68E` — supporting muted green; backgrounds, dividers, icons
- `--bone #F7F3EA` — primary warm background (never pure white on large fields)
- `--ink #1A1A17` — body text
- **Journey states:** for "Act I" sections, desaturate toward cool slate/graphite; for "Act III," push warmth and gold glow. Same palette, shifted temperature.
- **Rule:** green is the ground, gold is the action, clay is the spark. Gold + clay together never exceed ~15% of any view.

**Typography:**
- Display/headlines: **Fraunces** (variable serif) — large, tight leading, editorial. Use its optical sizes and a touch of "soft" axis for warmth.
- Body/UI: **Inter** — clean, legible, 1.6 line-height.
- Hero type scale: clamp ~56–88px desktop. Use big, confident headlines.

**Logo & mark:** Wordmark "FarmShare" in Fraunces + "USA" tracked-out Inter caps. Mark = a stylized sprout (two leaves from a single point) that doubles as a **network node** — it literally becomes the node in the co-op-network 3D scene. Reinforce this rhyme everywhere (the sprout = a node = a homestead = you).

**Texture & finish:** warm paper grain on bone fields; a subtle film/grain overlay on cinematic sections for warmth; letterpress-feel section labels; archival **botanical line-art** (seeds, sprouts, hens, watering cans, topo contours) as accents, dividers, bullet icons, and section monograms — like a modern almanac's margins. This illustration layer is a big part of what makes it ownable and un-templated.

**Voice:** plain-spoken, empowering, specific, second person. Short sentences. Confident, no hype.

---

# SIGNATURE 3D & INTERACTIVE MOMENTS

Push frontier 3D hard, but make the **hero** the priority showpiece and give every 3D scene a graceful fallback (see Performance).

1. **HERO — "Seed to Network" (the centerpiece).** An interactive WebGL scene that scrubs with scroll:
   - A single glowing **seed** rests in dark, cool soil (Act I).
   - On scroll/cursor, it **germinates** — roots thread down, a sprout rises and the two leaves unfurl into the **brand mark**. Light and warmth bloom.
   - Camera pulls back to reveal a **3D topographic plot of land** with garden beds, a coop, water — a living micro-homestead.
   - Pull back further to a stylized **3D map of the USA**; homestead points ignite and **draw glowing connections** into a co-op network that pulses softly (Act III).
   - Cursor parallax, depth-of-field, golden particulate (pollen/dust motes in light). Reduced-motion users get a beautiful baked sequence of stills + cross-fades.
2. **/co-ops — "The Living Map."** An interactive 3D/2.5D topographic map of the USA. Filter by state/ZIP and role (consumer/provider); nodes light up; hovering a node blooms a co-op card. Make the directory feel *real and alive*, not a table.
3. **/homestead-design & Land Use — "Plot Explorer."** A rotatable 3D 1–5 acre homestead the user can orbit; click zones (garden, animals, water, storage) to reveal what goes where. Turns "land optimization" into play.
4. **/courses & flagship — "Systems Loop."** An animated 3D diagram of the self-sufficient system (soil → food → water → protein → preservation looping back). Scrolls to reveal the 8-week Blueprint as stations on the loop.
5. **Micro-3D accents.** Subtle floating seed/leaf tokens, a gold "germination" hover on primary buttons, animated number counters for stats.

Keep 3D **tasteful and legible** — it serves the story and the funnel; it never blocks the CTA or buries the copy.

---

# MOTION LANGUAGE

- Scroll is the director: pinned sections, scrub-driven 3D, layered parallax (foreground botanical illustration drifts slower than background).
- Reveals: text rises and settles with soft easing; section labels typeset in like letterpress.
- Micro-interactions: magnetic primary buttons with a gold germination/glow on hover; cards lift with a warm shadow; links underline-grow in gold.
- Cinematic warmth: faint film grain + light bloom on dark sections only.
- **Always** respect `prefers-reduced-motion`: replace scrubbed 3D and parallax with clean fades and static hero art. Motion is a layer, never a dependency.

---

# IMAGERY DIRECTION (mixed: AI photography + 3D renders + illustration)

Cohesive, ownable, never stocky. Three layers:

1. **AI-generated photography** — art-directed for one consistent world: golden-hour natural light, shallow depth of field, earthy warm grade, real texture. Subjects: hands in dark soil, a child holding a fresh egg, raised beds at dawn, a young family on 1–5 acres, harvest baskets, a weathered-but-capable homesteader. Diverse, modern, aspirational — *not* rustic cliché. Sample art-direction seeds to generate from:
   - "Close-up of two hands cupping rich dark soil with a green sprout, golden morning light, shallow depth of field, warm filmic color grade."
   - "A modern young family walking a thriving quarter-acre garden at sunrise, backlit, lens flare, cinematic, hopeful."
   - "Overhead of a neatly designed raised-bed garden plot, warm earth tones, almanac-meets-editorial."
2. **3D renders** — the network, plot explorer, and systems loop (above); plus small 3D tokens (seed, leaf, water drop) used as iconography.
3. **Botanical line illustration** — archival almanac line-art for dividers, bullets, section monograms, and empty/loading states. This is the connective tissue.

Treatment: warm duotone overlays where photos sit on green sections; paper-grain blend on bone sections; never flat stock drops.

---

# COMPONENT SYSTEM (design these as reusable)

Nav (sticky, condenses on scroll; primary gold CTA "Get Started Free"), mega-footer (newsletter capture + co-op/vendor application links + trust row), primary/secondary/ghost buttons (gold germination hover), content cards, pricing cards with **monthly/annual toggle** and a "Founding Member" highlight, feature-comparison matrix, directory **search + filter** UI (ZIP/state/role/type), testimonial/case-study blocks (placeholder slots designed for real ones), certified-vendor & "Certified" badges, stat counters, FAQ accordion, lead-magnet capture module (with success/empty/error states), and an optional exit-intent module. Define hover, focus, active, loading, empty, and error states for anything interactive.

---

# PAGE-BY-PAGE BRIEFS

Every page ends with one clear CTA into the funnel (lead magnet or membership). Carry the Living Almanac art direction throughout.

- **/ (Home).** Follow this order: (1) **Hero** — "Seed to Network" 3D + headline *"Take Back Control of Your Food, Health, and Future"*, sub from the plan, CTAs **Get Started Free** / **Watch How It Works**; (2) **Problem** (Act I tone) — fragile food systems: rising costs, declining quality, supply-chain uncertainty, disconnection; (3) **Solution** — FarmShare USA gives you the system; (4) **3 Pillars** — Grow Your Own Food · Build Independent Systems · Join Local Food Networks; (5) **Social proof** (placeholder testimonials/case studies/before-after); (6) **Lead magnet** — *"30-Day Self-Sufficient Backyard Plan"* → Download Free (email capture); (7) **Membership** overview → /membership; (8) **Co-op network** — mini Living Map → /co-ops; (9) **Final CTA** — *"Start Building Your Food Independence Today."*
- **/start (lead magnet landing).** Minimal nav, single goal: capture email for the 30-Day Plan. One hero, crisp benefit stack, a preview of the plan, social proof, one form. Highest-converting page on the site.
- **/membership.** Free → Tier 1 ($15–25/mo) → Tier 2 ($49–79/mo) → Tier 3 ($199+/mo). Monthly/annual toggle, feature matrix, "Founding Member" highlight. CTAs collect email/waitlist (checkout is future — stub the link).
- **/courses** + **/courses/food-independence-blueprint.** Catalog with a hero slot for the flagship. Flagship sales page: the **Systems Loop** 3D, 8-week curriculum (Wk1 reality+planning → Wk8 30/60/90 plan), pricing $99 / $199 / $499, bonuses (garden planner, chicken guide, land templates), FAQ, and a webinar CTA: *"How to Build a Self-Sufficient Food System in 90 Days."*
- **/co-ops.** The **Living Map** "Find a Co-op Near Me" — search by ZIP/state, filter consumer/provider + type, node→card interaction, "List your co-op" CTA. Core differentiator — make it feel real and alive.
- **/vendors.** FarmShare USA **Certified Vendors** directory — same search/filter pattern; categories incl. tools, seeds, equipment, butchers, deer processing, contractors. "Certified" trust badges prominent. "Apply to be a vendor" CTA.
- **/health.** **FarmShare USA Health** — clinical professionals on the benefits of growing your own food; vetted products & services. Clean, credible, trust-forward (credentials, citations slots). Email capture.
- **/community.** Sells the social-media community/movement: forum/groups overview, free vs. paid unlocks, the feeling of belonging. Email capture (real forum gated later).
- **/homestead-design.** **Homestead Acquisition & Design** consulting — the **Plot Explorer** 3D, land-buying guidance, property layout, farm-startup planning. High-ticket → application/contact form.
- **/learn.** SEO resource hub seeded from the 100 topics, clustered (Food Independence, Beginner, Land Use, Animals, Systems, Co-ops, Income, Lifestyle, Authority, Viral Hooks). Editorial almanac index energy; article template with strong internal links to membership/courses/co-ops.
- **/about.** Mission, story, the movement, founders. The most narrative, cinematic page after home.
- **/contact.** Contact + co-op/vendor application entry points.

Global: sticky header w/ primary CTA, mega-footer with newsletter + applications + trust signals.

---

# CONVERSION & UX PRINCIPLES

One clear **primary** CTA per view (gold = action; don't compete with yourself). Sell **transformation, not information** — every feature ties to "feed your family without relying on the system." Funnel logic the design must support: **Traffic → Lead magnet → 5–7 day email nurture → Membership → Course upsell.** Design for all four audiences: urban/suburban beginners, aspiring homesteaders, 1–5 acre landowners (high value), co-op/community builders. Trust everywhere: certified badges, credentials, real numbers when available.

---

# ACCESSIBILITY & PERFORMANCE GUARDRAILS (non-negotiable)

- **WCAG 2.1 AA:** color contrast must pass (watch gold/clay on light), full keyboard nav, visible focus states, alt text, semantic structure.
- **Performance is design. Target Lighthouse 90+.** 3D is **lazy-loaded** and only mounts when in view; **mobile and low-power devices get lighter or baked-still fallbacks**; everything degrades gracefully without WebGL. Optimize all imagery; never ship a heavy hero that blocks first paint.
- **Mobile-first:** most traffic is short-form video. Thumb-friendly, single-column funnels, fast. The 3D hero must have a stunning, lightweight mobile version.

---

# TECH CONSTRAINTS FOR HANDOFF (design so Claude Code can build it as-is)

- Target stack: **Next.js (App Router) + TypeScript + Tailwind CSS**, **static export** (`output: 'export'`) for **GitHub Pages** at the **root** domain (repo `farmshareusa.github.io`; empty basePath; `CNAME` + `.nojekyll`).
- **No backend/server.** 3D via **Three.js / React Three Fiber**; motion via **Framer Motion**; icons **lucide-react**. Keep bundles code-split.
- **Email capture posts to a third-party** (ConvertKit / Beehiiv / Mailchimp / Formspree) — design the form + states; the provider ID lives in one config constant. **No secrets in the design or repo.** Treat email input as untrusted: validate/sanitize.
- Checkout/auth/LMS are **out of scope v1** — stub their CTAs (email/waitlist) so they slot in later (Stripe/Kajabi).
- Build the design system as tokens that map to Tailwind theme values (the palette/fonts above).
- When ready, produce a **Claude Code handoff bundle** with design intent + tokens + per-page specs.

---

# QUALITY BAR — what "blow them away" means

**Do:** distinctive editorial layouts, asymmetry that earns attention, generous whitespace on warm bone, one signature 3D moment people screenshot and share, motion with intent, real depth and craft, a site that feels like a national movement with money and taste behind it.

**Never:** centered hero + three equal feature cards + generic gradient (the templated AI look); stocky cheese; emoji-as-icons; rainbow gradients; cramped, low-contrast type; gimmicky 3D that hurts usability or speed; anything fear-based, doom/prepper, or political.

---

# DELIVERABLES & SEQUENCE

1. **Homepage hero showpiece first** — the "Seed to Network" 3D + Act I→III scroll, desktop + mobile. Get this *jaw-dropping* before moving on.
2. **Full homepage**, all sections in order above.
3. **Design-system page** — palette, type, components, motion, 3D tokens (so it's reusable and consistent).
4. **The remaining pages**, prioritizing /start, /co-ops (Living Map), /membership, and /courses/food-independence-blueprint, then the rest.
5. **Mobile passes** for every page.
6. **Claude Code handoff bundle** targeting the Next.js / GitHub Pages stack above.

Start with the clarification gate. Then, on "go," build deliverable #1.
