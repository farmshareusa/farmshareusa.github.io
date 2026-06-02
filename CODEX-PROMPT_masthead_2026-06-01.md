# Claude Code Prompt — Editorial green masthead (logo left, serif nav, engraved frame) — 2026-06-01

Paste everything below the line into Claude Code.

---

FarmShare USA — Rebuild the site header as a framed, editorial "almanac" masthead.

GOAL: Replace the current plain header with a premium masthead: a solid pine-green bar wrapped in an engraved frame (decorative corners + a double gold outline), with the FarmShare USA logo on the LEFT as a clean cream "knockout", the navigation on the RIGHT in the Fraunces serif, and the gold CTA pinned far right. It must stay crisp at any width (SVG, not images) and collapse cleanly to the existing mobile burger menu.

BEFORE YOU WRITE ANY CODE:
1. Pull/sync the latest `main` first (git pull origin main).
2. CLARIFICATION GATE — answer these back to me and WAIT for my "go" before implementing:
   a. Tell me exactly which stylesheet currently compiles the `header.site` rules into the build (I see them in `.design-bundle/project/homepage.css`, but confirm how that CSS reaches the app — is it imported, copied, or pulled in another way — and which file I should edit so my header style changes actually ship). Do NOT guess; verify.
   b. Confirm these engraved SVG symbols already exist in `components/EngravedDefs.tsx` and are rendered globally (via `app/layout.tsx`): `#af-corner`, `#fleuron`, `#mark`, `#star`. I want to REUSE `#af-corner` for the masthead corners.
   c. Confirm `components/SiteClient.tsx` already toggles `scrolled` (scrollY > 40) and `hero-mode` (scrollY < 40) on `#hdr`, and that the burger menu targets `header.site nav`. My design reuses both.
   d. Confirm the keep/keep-not of the CTA label "Get Started Free" (I want to keep it).
   e. List the exact files you will touch and wait for my go.

DESIGN DECISION (my default — flag if you disagree):
- The bar is SOLID pine green at ALL times (this is the look I approved), not transparent-over-hero. On scroll it simply gets more compact. (If you think transparent-over-hero is worth it, say so in your gate reply, but default to always-green.)

RULES:
- Rewrite `components/SiteHeader.tsx` in full, top to bottom — no partial snippets.
- For the header stylesheet (the file you identify in 2a): update the header rules in place and, in your summary, paste the COMPLETE updated header CSS block so I can confirm nothing else changed. Do not remove or restyle unrelated rules.
- Do NOT touch `next.config.js`, routing, the deploy workflow, the directories, the footer, or any other component. Keep `output: 'export'` and all brand tokens.
- No raster images for the logo or frame — SVG only. No new dependencies. No secrets.
- Keep accessibility: the logo link keeps `aria-label="FarmShare USA home"`, nav stays in a `<nav aria-label="Primary">`, the burger keeps its `aria-label`.

LAYOUT (left → right inside the bar):
1. LEFT: logo lockup (cream). Mark + wordmark, vertically centered.
2. RIGHT: primary nav in Fraunces serif (How It Works · Co-ops · Membership · Learn), then the gold CTA "Get Started Free".
3. FRAME (absolute, behind content, non-interactive): four engraved corners using `#af-corner` (gold) + a double gold inset outline. No centered logo, no center fleuron — keep it clean.

REPLACE the current `SiteHeader.tsx` body. Use this structure (adapt class names to match the stylesheet, but keep `header.site`, `#hdr`, `.bar`, `nav`, `.burger` so existing JS keeps working):

    export function SiteHeader() {
      return (
        <header className="site hero-mode" id="hdr">
          <span className="hdr-frame" aria-hidden="true">
            <svg className="hdr-corner tl"><use href="#af-corner" /></svg>
            <svg className="hdr-corner tr"><use href="#af-corner" /></svg>
            <svg className="hdr-corner bl"><use href="#af-corner" /></svg>
            <svg className="hdr-corner br"><use href="#af-corner" /></svg>
            <span className="hdr-outline" />
          </span>
          <div className="bar">
            <a className="lockup" href="/" aria-label="FarmShare USA home">
              <svg className="mk" viewBox="0 0 48 58" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 34 L24 16" />
                  <path d="M24 17 C16 11 6 13 4 3 C15 1 23 8 24 16" />
                  <path d="M24 16 C25 8 33 1 44 3 C42 13 32 11 24 17" />
                  <ellipse cx="19.6" cy="38" rx="6" ry="7.2" />
                  <ellipse cx="28.4" cy="38" rx="6" ry="7.2" />
                  <path d="M24 45 C20 49 16 49 13 53 M24 45 L24 56 M24 45 C28 49 32 49 35 53" strokeWidth="1" />
                </g>
              </svg>
              <span className="wordmark">
                <span className="nm">FarmShare</span>
                <span className="usa"><i></i>U·S·A<i></i></span>
              </span>
            </a>
            <nav aria-label="Primary">
              <a href="/#solution">How It Works</a>
              <a href="/co-ops/">Co-ops</a>
              <a href="/membership/">Membership</a>
              <a href="/learn/">Learn</a>
            </nav>
            <div className="hdr-cta">
              <a href="/start/" className="btn btn-primary">Get Started Free</a>
              <button className="burger" aria-label="Menu"><span></span><span></span><span></span></button>
            </div>
          </div>
        </header>
      );
    }

ADD / UPDATE these styles in the header stylesheet (tune spacing to taste; keep the design intent exactly):

    /* === Editorial green masthead === */
    header.site { position: fixed; top: 0; left: 0; right: 0; z-index: 200; background: var(--green); transition: .35s; }
    header.site .bar { position: relative; display: flex; align-items: center; justify-content: space-between; height: var(--hdr); max-width: var(--maxw); margin: 0 auto; padding: 0 40px; }
    header.site.hero-mode .bar { height: 84px; }
    header.site.scrolled .bar { height: 64px; }

    /* engraved frame */
    .hdr-frame { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
    .hdr-outline { position: absolute; inset: 8px 16px; border: 1px solid var(--gold); border-radius: 6px; opacity: .5; box-shadow: inset 0 0 0 4px transparent, inset 0 0 0 5px color-mix(in oklab, var(--gold) 30%, transparent); }
    .hdr-corner { position: absolute; width: 42px; height: 42px; color: var(--gold); opacity: .95; }
    .hdr-corner.tl { top: 5px; left: 9px; }
    .hdr-corner.tr { top: 5px; right: 9px; transform: scaleX(-1); }
    .hdr-corner.bl { bottom: 5px; left: 9px; transform: scaleY(-1); }
    .hdr-corner.br { bottom: 5px; right: 9px; transform: scale(-1,-1); }

    /* logo (cream knockout) */
    header.site .bar { z-index: 2; }
    .lockup { display: flex; align-items: center; gap: 12px; text-decoration: none; position: relative; z-index: 2; }
    .lockup .mk { width: 34px; height: 41px; flex: none; color: var(--bone); }
    .lockup .wordmark { display: flex; flex-direction: column; line-height: 1; }
    .lockup .nm { font-family: 'Fraunces', serif; font-weight: 500; font-size: 24px; color: var(--bone); letter-spacing: .3px; }
    .lockup .usa { display: flex; align-items: center; gap: 6px; font-size: 9px; letter-spacing: .34em; color: var(--gold); font-weight: 500; margin-top: 3px; }
    .lockup .usa i { width: 16px; height: 1px; background: var(--gold); display: inline-block; }

    /* serif nav */
    header.site nav { display: flex; gap: 26px; position: relative; z-index: 2; }
    header.site nav a { font-family: 'Fraunces', serif; font-size: 16px; font-weight: 400; letter-spacing: .3px; color: var(--bone); opacity: .9; transition: .2s; padding-bottom: 3px; border-bottom: 1.5px solid transparent; }
    header.site nav a:hover { opacity: 1; border-bottom-color: var(--gold); }
    header.site.hero-mode nav a { color: var(--bone); }

    /* CTA + burger */
    .hdr-cta { display: flex; align-items: center; gap: 18px; position: relative; z-index: 2; }
    /* keep the existing .btn-primary gold styling; it reads well on green */

    @media (max-width: 860px) {
      .hdr-corner.tr, .hdr-corner.br, .hdr-outline { display: none; }   /* simplify frame on mobile */
      header.site nav { display: none; }                                /* burger takes over (existing JS) */
      .burger { display: flex; }
    }

NOTES:
- The seed/sprout mark above is a SIMPLIFIED rebuild of the real logo so it reads at header size. Keep it for now; later we will swap in a faithful traced SVG of the full logo artwork. Do not try to recreate the fine roots.
- Because everything uses `currentColor`/brand tokens, the logo and nav are cream on green automatically. If the burger lines are currently dark, make them cream (`var(--bone)`) so they show on green.
- Verify the fixed header height still matches the `--hdr` offset so page content isn't hidden under the bar.

WHEN DONE:
- Run a local production build (npm run build) and confirm it compiles with no errors.
- Report every file changed and paste the complete updated header CSS block.
- Remind me to commit/push to `main` to redeploy via the Pages workflow, then hard-refresh (Ctrl/Cmd+Shift+R).
