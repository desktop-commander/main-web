# AGENTS.md — Context for AI assistants working on `main-web`

> Purpose: durable context for every future chat on this repo. Keep this file
> accurate. If you discover the facts below have changed, update this file.
> Last verified: **2026-09-16**.

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

The intended model is "GitHub Pages serves `main` / `docs`." **Reality as of 2026-09-16 still differs:**

- **Production is served from the `feat/blog-migration` branch's `docs/`.** Verified with
  `gh api repos/desktop-commander/main-web/pages`, which reports
  `source: { branch: "feat/blog-migration", path: "/docs" }`, cname `desktopcommander.app`.
- Last successful Pages build: commit **`aca30120`** ("/welcome/: remove call-booking; align intro
  with email-shaped help"), built **2026-08-26**.
- **`main` is NOT what's live.** `main` tip is `051123a3` ("Add pricing preview without $200 package",
  2026-08-04).
- The two branches **diverged on 2026-06-03** (`c7cdefa2`) and have drifted further since:
  **10 commits on `main` only, 85 on `feat/blog-migration` only** as of 2026-09-16.
  - `main` only: pricing rewrite (3-plan), an "MCP UI AB test", flags bump, and a pricing preview
    without the $200 package, but **no static blog**; its homepage still links About →
    `blog.desktopcommander.app` (old WordPress subdomain).
  - `feat/blog-migration` only: full **WordPress→Astro blog migration** (28 posts, authors,
    ported about/contact, Pagefind search, redirects), the `McpUiPreviews` experiment (later
    collapsed to 100%), the MCP client pages, the `/welcome/` page line, and Remote MCP device
    console links across nav, footer and blog.

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
- Authoritative check: `gh api repos/desktop-commander/main-web/pages` for the configured branch/path,
  and `gh api repos/desktop-commander/main-web/pages/builds/latest` for the exact deployed commit.

## Branches (as of 2026-09-16)

- `main` — intended production branch; behind live and missing the blog. Tip `051123a3` (Aug 4).
- `feat/blog-migration` — **what's actually live**. Tip `aca30120` (Aug 26).
- `feat/mcp-first-positioning` — branched from the live tip `aca30120` on 2026-09-16 for the
  MCP-first repositioning (app no longer the primary CTA). Not deployed.
- `flags/mcp-ui-previews-100` (Jul 30) and `feat/mcp-client-pages` (Jul 24) — already merged into
  `feat/blog-migration` via PRs #16 and #15.
- `fable-experiment` — homepage "mission control" redesign (built on top of blog-migration); NOT live.
- `feat/landing-redesign` — full homepage rebuild (2026-11-11), branched from the `feat/blog-migration`
  tip `f4dcbf73`. Two hero versions to choose from. Source only: `docs/` is not rebuilt on it and
  nothing is deployed. See "Homepage source layout" below.
- `welcome-team-agent-lp` — welcome page v3 (team-agent pitch + HubSpot waitlist); source-only, not
  built into `docs/`, not deployed.
- `gh-pages` — **stale/abandoned** (old Vite/React + `deploy:` commits, last touched 2025-09-19). Not used.
- Other feature branches: `feature/pricing-page`, `feature/website-redesign`, `hero-redesign-v2`,
  `feature/welcome-page-feature-flags`, `flags/unexclude-claude-code`, etc.

## Homepage source layout (on `feat/landing-redesign`)

The homepage is plain Astro sections instead of one React island per section:

- `astro-src/pages/index.astro` — one line: `<HomePage hero="hub" />`. The page itself is
  `astro-src/components/home/HomePage.astro`, which composes the sections. Navigation and Footer are
  the shared site components, unchanged.
- **Two hero versions**, picked by that `hero` prop (nothing else needs to change to switch):
  - `"hub"` (current): copy on the left, the connection diagram on the right (`HeroHub.astro`): AI
    clients, Desktop Commander, your computer, with a request travelling between them. The example
    sessions follow as their own section (`HomeDemo.astro`, `#demo`).
  - `"stage"`: centered headline with the example sessions (`HeroStage.astro`) directly under it,
    and no separate demo section.
- Comparing the two: on the dev server only, `/preview/hero-a/` (stage) and `/preview/hero-b/` (hub)
  render both versions, and a small switch in the bottom left corner flips between them
  (`pages/preview/[hero].astro`, `DevHeroSwitch.astro`). A build generates neither the pages nor
  the switch. Both are gated on the Astro CLI command (`components/home/dev-server.ts`), not on
  `import.meta.env.DEV`: a dev server started through Desktop Commander inherits
  `NODE_ENV=production` from its shell, which makes `import.meta.env.DEV` false there.
- `astro-src/components/home/Home*.astro` — one file per section (hero, demo, install, remote, use
  cases, how it works, prompts, clients, community, pricing, FAQ, closing band).
- `astro-src/data/home.ts` — all homepage copy. URLs, stats and rankings still come from
  `src/components/home-mcp/links.ts`, and the client list from `astro-src/data/mcp-clients.ts`.
- `astro-src/components/home/home.css` + `home-sections.css` + `home-hub.css` — styles, `hx-` prefix,
  loaded only by the homepage. Brand colors are the existing tokens from `src/index.css`.
- `astro-src/components/home/scripts/` — small TypeScript modules (no libraries):
  - `hub.ts` plays the requests defined in `hub-scenarios.ts` on the connection diagram. The wires
    are measured from the live layout, so they follow any change to the markup or CSS.
  - `stage.ts` plays the example sessions defined in `scenarios.ts`.
  - `field.ts` is the WebGL dot field behind the hero, `sections.ts` holds tabs/FAQ/copy/step
    tracking, `analytics.ts` sends events.
- Analytics: any element with `data-ev="event_name"` (+ JSON in `data-ev-props`) is tracked on
  click through the same `trackEvent()` the React components use. Event names and properties
  match the previous homepage; `hero_stage_scenario_clicked` is the one new event. The client tiles
  in the hub send the existing `mcp_client_crosslink_clicked` with `from_client: "home_hero"`.
- Fonts: Geist and Geist Mono, self-hosted in `public/fonts/` (OFL license file alongside).

The previous homepage sections (`src/components/home-mcp/*`, `src/components/mcp/MCPRemote.tsx`,
etc.) are still in the repo: other pages use several of them, and nothing was deleted.

## Working rules

1. **Never push without explicit user approval** (see AI_WORKFLOW.md deploy protocol).
2. After any source change, rebuild + commit `docs/` via `npm run commit-static` before deploy.
3. Preview with `npm run serve:static` (serves `docs/` at :3000) or `npm run dev` (hot reload).
4. Don't edit files under `docs/` by hand — they're build output; edit `astro-src/` / `src/` and rebuild.
5. When in doubt about what's deployed, run the verification checks above rather than assuming `main`.
