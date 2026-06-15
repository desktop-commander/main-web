# AGENTS.md — Context for AI assistants working on `main-web`

> Purpose: durable context for every future chat on this repo. Keep this file
> accurate. If you discover the facts below have changed, update this file.
> Last verified: **2026-06-15**.

## What this repo is

The **Desktop Commander marketing website** (`desktopcommander.app`).

- **Framework:** Astro (static output). Config: `astro.config.mjs`.
  - `site: https://desktopcommander.app`, `outDir: ./docs`, `srcDir: ./astro-src`,
    `output: static`, `trailingSlash: always`.
- **Source of truth for pages:** `astro-src/` (pages, layouts) + `src/` (React/UI, `@` alias → `/src`).
- **Build output:** `docs/` — **committed to git** and served by **GitHub Pages**.
  `docs/CNAME` = `desktopcommander.app`.
- **Build/deploy command:** `npm run commit-static` → rebuilds `docs/` and commits it
  with the message **"Static website changes"**. (`npm run build` = `astro build` + sitemap.)

> ⚠️ `AI_WORKFLOW.md` predates the Astro migration. Its "React/Vite", `root/`,
> `prompt-library/`, `desktopcommander.com`, and `/Users/fiberta/...` references are
> **stale**. Its deploy *protocol* (branch → build → preview → ask before push) is still
> the intended process. Trust THIS file over AI_WORKFLOW.md where they conflict.

## ⚠️ Production deploy state (the important part)

The intended model is "GitHub Pages serves `main` / `docs`." **Reality as of 2026-06-15 differs:**

- **Production is currently served from the `feat/blog-migration` branch's `docs/`**,
  last built at commit **`1fa88f4f`** ("Sync built flags file with McpUiPreviews experiment", 2026-06-10).
- **`main` is NOT what's live.** `main` tip is `995643b4` ("Static website changes", 2026-06-05).
- The two branches **diverged on 2026-06-03** (`c7cdefa2`) and have not been reconciled:
  - `main` only: pricing rewrite (3-plan), an "MCP UI AB test", flags bump — but **no static blog**;
    its homepage still links About → `blog.desktopcommander.app` (old WordPress subdomain).
  - `feat/blog-migration` only: full **WordPress→Astro blog migration** (28 posts, authors,
    ported about/contact, Pagefind search, redirects) + a `McpUiPreviews` 50/50 experiment;
    homepage links About → in-site `/blog/about/`.

**This is fragile:** main's pricing/AB-test commits are not in production, and the blog
migration is not in main. Recommended fix: merge `feat/blog-migration` → `main`, then deploy
from `main` so the intended model and reality match again. Confirm with the user before doing this.

## How to verify what's actually live (don't assume)

The live `/blog` is **static Astro** (paths `/blog/media/...`, `/blog/assets/...`), not WordPress
(`/wp-content/...`). Quick disambiguating checks:

- Homepage "About" link target: `/blog/about/` ⇒ `feat/blog-migration` build is live;
  `blog.desktopcommander.app/about/` ⇒ `main` build is live.
- `docs/blog/index.html` exists only on `feat/blog-migration` (and branches built from it);
  `main` has no `docs/blog/`.
- Match a built asset hash, e.g.: `git show <branch>:docs/index.html | grep -oE 'dc-logo[^"]*\.png'`.

## Branches (as of 2026-06-15)

- `main` — intended production branch; currently behind live for the blog. Tip `995643b4` (Jun 5).
- `feat/blog-migration` — **what's actually live**. Tip `1fa88f4f` (Jun 10).
- `fable-experiment` — homepage "mission control" redesign (built on top of blog-migration); NOT live.
- `welcome-team-agent-lp` — welcome page v3 (team-agent pitch + HubSpot waitlist); source-only, not built into `docs/`, not deployed.
- `gh-pages` — **stale/abandoned** (old Vite/React + `deploy:` commits, last touched 2025-09-19). Not used.
- Other feature branches: `feature/pricing-page`, `feature/website-redesign`, `hero-redesign-v2`, etc.

## Working rules

1. **Never push without explicit user approval** (see AI_WORKFLOW.md deploy protocol).
2. After any source change, rebuild + commit `docs/` via `npm run commit-static` before deploy.
3. Preview with `npm run serve:static` (serves `docs/` at :3000) or `npm run dev` (hot reload).
4. Don't edit files under `docs/` by hand — they're build output; edit `astro-src/` / `src/` and rebuild.
5. When in doubt about what's deployed, run the verification checks above rather than assuming `main`.
