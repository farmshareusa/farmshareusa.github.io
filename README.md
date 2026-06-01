# FarmShare USA

The marketing site for [FarmShare USA](https://farmshareusa.com) — the operating system for modern self-sufficiency.

This is the **foundation build**: Next.js + Tailwind, exported as a static site and deployed to GitHub Pages on every push to `main`.

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with brand theme tokens (heritage-green, harvest-gold, clay, sage, bone, ink)
- **Fonts:** Fraunces (display) + Inter (body) via `next/font/google`
- **Output:** Static export (`output: 'export'`) → `out/` directory
- **Hosting:** GitHub Pages, custom domain `farmshareusa.com` (via `public/CNAME`)

## Local development

```sh
npm install
npm run dev
```

Then open http://localhost:3000.

## Production build

```sh
npm run build
```

Produces a static site in `out/`. Open `out/index.html` to preview the built artifact, or serve `out/` with any static server.

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages. The site serves at the repo root (`https://farmshareusa.github.io` → `https://farmshareusa.com`).

## Configuration

Site-wide constants live in [`config/site.ts`](./config/site.ts). Email provider IDs, analytics IDs, and checkout URLs are placeholders — fill them in there, not in component files. **Do not commit secrets** — use environment variables or public embed IDs only.

## Design & assets

The visual design is produced in **Claude Design** and handed off to Claude Code to implement on this scaffold. Start here:

- **`CLAUDE.md` §15** — build state + the asset-handoff checklist for Claude Code (read first).
- **`assets/ASSET-MANIFEST.md`** — every image/video mapped to its page/section (placement source of truth).
- **`CLAUDE-DESIGN-BUILD-PROMPT.md`**, **`claude-design-brief.md`**, **`logo-concepts.md`**, **`asset-prompt-pack.md`** — design brief, intent, logo, and how assets were made.

Real assets live in `assets/` (`stills/`, `start-frames/`, `video/`, `Logos/`). When implementing the design, **import them into `public/` per the manifest** (stills → `public/images/`, videos → `public/video/` with start-frames as posters). Header logo = `Logo_L1`; favicon/seal = `Favicon_B`.

## Project structure

```
app/               # Next.js App Router routes
config/            # Site config and constants (email provider, analytics — fill in here)
assets/            # Source image/video/logo library + ASSET-MANIFEST.md (import into public/ at build)
public/            # Static assets served as-is (favicon, CNAME, .nojekyll, images/, video/)
.github/workflows/ # GitHub Actions deploy pipeline
```
