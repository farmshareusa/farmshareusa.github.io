# FarmShare USA — Asset Manifest

> What's in this folder, what each file is, and where it goes on the site.
> Pair this with `../claude-design-brief.md` (design intent) and `../asset-prompt-pack.md` (the prompts each asset was made from).
> All images are 16:9 unless noted. Videos are 1080p ~8–15s unless noted.

## Folder layout
```
assets/
├─ stills/         19 still-only web images (Image_S1 … Image_S19)
├─ start-frames/   6 images used as video starting frames (also usable as hero stills)
└─ video/          8 video files (Video1 … Video6 + 2 alternate takes)
```

---

## VIDEOS (`assets/video/`)

| File | What it shows | Use on site | Source prompt |
|---|---|---|---|
| `Video1.mp4` | Hands cupping soil with a sprout, golden light, drifting dust | **Homepage hero** ambient loop (primary) | 1B |
| `Video1_alt.mp4` | Same hero scene, alt take (720p) | Backup take for hero | 1B (alt) |
| `Video2.mp4` | Raised garden beds at golden hour, slow dolly | Solution / Pillars b-roll | 2B |
| `Video3.mp4` | Aerial homestead reveal | Co-op network section / About | 3B |
| `Video4.mp4` | Family walking through their garden | "Watch How It Works" / About | 4B |
| `Video4_alt-family-standing.mp4` | Family standing by greenhouse (different shot, ~15s) | Alt hero / explainer / About | 4 (alt) |
| `Video5.mp4` | Neighbors exchanging produce at a farm stand | Community / Co-ops page | 5B |
| `Video6.mp4` | Single seed germinating in dark soil (text-to-video) | Optional Act II transition moment | 6 |

**Primary hero pick:** `Video1.mp4` (1080p). Keep `Video1_alt.mp4` as the backup. Father Dan to confirm the keeper.

---

## VIDEO START FRAMES (`assets/start-frames/`)

These are the still images the videos were generated from. They double as **high-value hero stills** (poster frames + static fallbacks for the videos).

| File | What it shows | Use on site | Prompt |
|---|---|---|---|
| `Image_1A_16x9.png` | Hands + sprout in soil, widescreen, negative space upper-left | **Homepage hero still** + poster/fallback for `Video1` | 1A |
| `Image_1A_1x1.png` | Same scene, square | Square/social hero, mobile, poster for square crops | 1A (square) |
| `Image_2A.png` | Garden beds + watering can at golden hour | Poster/fallback for `Video2`; Pillars imagery | 2A |
| `Image_3A.png` | Aerial homestead | Poster/fallback for `Video3`; co-op/about | 3A |
| `Image_4A.png` | Family walking in garden | Poster/fallback for `Video4`; homepage hero option | 4A |
| `Image_5A.png` | Co-op produce exchange | Poster/fallback for `Video5`; community/co-ops | 5A |

---

## STILL-ONLY IMAGES (`assets/stills/`)

| File | What it shows | Page / section | Prompt |
|---|---|---|---|
| `Image_S1.png` | Empty produce aisle, cool/desaturated | Home — Act I "fragile system" | S1 |
| `Image_S2.png` | Plastic-wrapped tomato, cool tone (4:5) | Home — Act I | S2 |
| `Image_S3.png` | Child holding a fresh egg (1:1) | Home — Act II | S3 |
| `Image_S4.png` | Overflowing harvest basket | Home — Act II | S4 |
| `Image_S5.png` | Raised beds + watering can (1:1) | Pillar 1 — Grow Your Own Food | S5 |
| `Image_S6.png` | Rain barrel + solar panel (1:1) | Pillar 2 — Build Independent Systems | S6 |
| `Image_S7.png` | Produce hand-off (1:1) | Pillar 3 — Join Local Food Networks | S7 |
| `Image_S8.png` | Almanac planning journal + seed packets (4:5) | Lead magnet — 30-Day Plan | S8 |
| `Image_S9.png` | Person surveying their homestead | Membership lifestyle | S9 |
| `Image_S10.png` | Designed micro-homestead | Flagship — Food Independence Blueprint hero | S10 |
| `Image_S11.png` | Canned goods on shelves (4:5) | Flagship — food preservation | S11 |
| `Image_S12.png` | Tools, seeds, watering can on workbench (1:1) | Certified Vendors | S12 |
| `Image_S13.png` | Fresh home-grown meal by a window | FarmShare USA Health | S13 |
| `Image_S14.png` | Group garden workshop | Community / movement | S14 |
| `Image_S15.png` | Open rural land | Homestead Acquisition & Design | S15 |
| `Image_S16.png` | Sweeping homestead landscape | About — the movement | S16 |
| `Image_S17.png` | Hero shot with negative space (banner) | Social / OG image base | S17 |
| `Image_S18.png` | Warm bone paper texture (1:1) | Site background texture | S18 |
| `Image_S19.png` | Botanical line-art set (1:1) | Almanac accents, dividers, icons | S19 |

### Suburban set (intermix with rural — for the 1–3 acre / suburban audience)
| File | What it shows | Page / section | Prompt |
|---|---|---|---|
| `Image_S20.png` | Hands planting a seedling in a raised bed (4:5) | Home — Act II "hands in the soil" | S20 |
| `Image_S21.png` | Suburban backyard raised beds, neighbor homes/fence visible | Solution / Pillars / hero b-roll (suburban) | S21 |
| `Image_S22.png` | Aerial of a ~1.5-acre suburban lot in a neighborhood | Co-op / About — "it's possible in the suburbs" | S22 |
| `Image_S23.png` | Modern professional couple in a suburban garden | Homepage hero option / membership (suburban) | S23 |
| `Image_S24.png` | Small modern chicken coop in a suburban backyard (4:5) | Protein/animals (suburban) | S24 |
| `Image_S25.png` | Patio/container garden on a suburban deck (4:5) | Beginner / small-space entry point | S25 |
| `Image_S26.png` | Suburban backyard with solar, rain barrel, raised beds | Pillar 2 — Build Independent Systems (suburban) | S26 |
| `Image_S27.png` | Suburban family with kids harvesting | Family / community (suburban) | S27 |
| `Image_S28.png` | Neighbors sharing produce over a backyard fence | Co-op / community (suburban scale) | S28 |

### Light & season set (break up the golden-hour rhythm)
| File | What it shows | Page / section | Prompt |
|---|---|---|---|
| `Image_S29.png` | Bright midday, working in the garden | How-to / courses / /learn ("do it now") | S29 |
| `Image_S30.png` | Soft dewy early morning, first sprouts | Beginner sections / lead magnet | S30 |
| `Image_S31.png` | Fall harvest abundance | Harvest / preservation / membership payoff | S31 |
| `Image_S32.png` | Spring planting, blossoms | Beginnings / "start now" / 30-Day Plan | S32 |
| `Image_S33.png` | Overcast working shot, authentic (4:5) | Authenticity moments | S33 |
| `Image_S34.png` | Winter seed-starting on a windowsill (4:5) | Year-round system / planning | S34 |

---

## LOGOS & BRAND MARKS (`assets/Logos/`)

Direction: **vintage engraved seed-packet / almanac** — etched plant-from-seed, decorative borders, deep pine green on warm cream, "FarmShare USA". Father Dan's picks below.

| File | What it is | Use |
|---|---|---|
| `Logo_L1.png` | ⭐ Favorite — horizontal **banner label** (etched sprout+roots left, "FarmShare" + "USA" ribbon) | **Primary site header lockup** |
| `Logo_L5.png` | ⭐ Favorite — horizontal **almanac masthead** (sprout above, filigree flourishes, 3 stars under "USA") | Alt header / hero lockup / About masthead |
| `Logo1.png` | Vertical **seed-packet** emblem (earlier favorite) | Vertical/feature placements, posters |
| `Favicon_B.png` | ✅ Chosen **favicon** — sprout-from-seed in a rounded-square frame + 3 stars | Favicon, seal, base for "FarmShare USA Certified" badge |
| `Logo_L2.png`–`Logo_L4.png`, `Logo_L6.png` | Vintage alternates (oval, USA-map roots, shield/crest, circular badge) | Keep as options / source motifs |

> In Claude Design: rebuild the chosen lockups as clean **SVG**, set the wordmark in real **Fraunces**, and export the full system (horizontal, stacked, icon-only, light/dark, favicon set, certified badge). Use `Logo_L1` in the header; `Favicon_B` for the favicon/seal.

---

## Notes for handoff

- **For Claude Design:** use `start-frames/Image_1A_16x9.png` and `Video1.mp4` for the homepage hero; map every other file to the page/section in the table above. The botanical set (`Image_S19`) is the source for dividers, bullet icons, and section monograms; the paper texture (`Image_S18`) is the bone-background layer.
- **Alternate deliberately so neither audience feels left out:** mix **rural** (S1–S19 originals) with **suburban** (S21–S28) imagery across the site — the suburban 1–3 acre viewer must see themselves. And vary **light & season** (S29–S34) instead of leaning on golden hour everywhere: bright midday for how-to, morning for beginners, fall for harvest/payoff, spring for "start now."
- **For Claude Code (build):** copy/optimize finals into `public/images/` and `public/video/` (compress to web-friendly sizes, generate WebP/AVIF for stills, and use the matching `start-frames` image as each video's `poster=` and the static fallback for reduced-motion / mobile).
- **Naming is stable:** S-numbers, Video-numbers, and 1A–5A match `asset-prompt-pack.md`. If you regenerate an asset, keep its key (e.g., a new Act I aisle stays `Image_S1`) so it slots straight back in.
