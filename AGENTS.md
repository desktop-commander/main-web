# AGENTS.md — Context for AI assistants working on `main-web`

> Purpose: durable context for every future chat on this repo. Keep this file
> accurate. If you discover the facts below have changed, update this file.
> Last verified: **2026-11-12** for the production deploy state, the deploy steps and the homepage,
> **2026-11-13** for the client landing pages and the downloads number;
> the branch list is older (2026-09-16) except where a line says otherwise.

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

The intended model is "GitHub Pages serves `main` / `docs`." **Reality as of 2026-11-12 still differs:**

- **Production is served from the `feat/blog-migration` branch's `docs/`.** Verified with
  `gh api repos/desktop-commander/main-web/pages`, which reports
  `source: { branch: "feat/blog-migration", path: "/docs" }`, cname `desktopcommander.app`.
  GitHub Pages is the origin and Cloudflare sits in front of it.
- Live commit since 2026-11-12: **`db86e357`** ("Static website changes: homepage redesign,
  ChatGPT ranking"). Its deploy run went through on the first attempt. Before it: `f4dcbf73`
  ("Static website changes: llms.txt"), deployed 2026-11-09, which the Pages API kept reporting as
  `errored` although it was live: the first deploy run timed out and a re-run went through (see
  "Deploying"). Trust the live site (`last-modified` header, a file only the new build has) over
  that status.
- **`main` is NOT what's live.** `main` tip is `051123a3` ("Add pricing preview without $200 package",
  2026-08-04).
- The two branches **diverged on 2026-06-03** (`c7cdefa2`) and have drifted further since:
  **10 commits on `main` only, 130 on `feat/blog-migration` only** as of 2026-11-12.
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

## Deploying (how it has been done since autumn 2026)

1. Work on a feature branch cut from the `feat/blog-migration` tip. Commit the source changes.
2. `npm run commit-static` on that branch (refreshes the weekly npm downloads number, see
   "Numbers that refresh themselves", then runs `npm run build`, whose `postbuild` writes
   `docs/CNAME`, then commits `docs/` and `src/data/site-stats.json`). Recent commits name what
   changed: "Static website changes: <what>".
3. Preview the result with `npm run serve:static` (http://localhost:3000).
4. **Asset name check, before pushing.** Cloudflare caches a 404 for an asset URL for 7 days.
   A name that production served and then dropped may still be cached as missing, and a new
   build can bring such a name back (see the comment in `astro.config.mjs`). Compare the names in
   the new `docs/assets/` with the names that left production in the last 12 days:
   `git ls-tree -r --name-only <commit> docs/assets` for each recent production commit, minus the
   names in the live commit. If any name returns, change the hash length in `astro.config.mjs`
   and rebuild. Never open a not yet deployed asset URL on the live domain to "test" it: that
   request is what caches the 404.
5. Only with the user's explicit approval: fast-forward `feat/blog-migration` to the feature
   branch and push it. GitHub then runs the "pages build and deployment" workflow.
6. Watch that run. On 2026-11-09 its deploy step timed out ("Timeout reached, aborting!") and
   needed re-runs (`gh run rerun <id> --failed`). The site keeps serving the previous version
   until a run succeeds.
7. Undoing a deploy: do not simply push the previous `docs/` back within 7 days. Its asset names
   were dropped by the deploy and may by then be cached as missing. Rebuild the previous source
   with a different hash length instead, or have the Cloudflare cache purged.

## Numbers that refresh themselves

The weekly npm downloads number shown across the site (homepage, `/mcp/`, the client and ad
landing pages, FAQ data) is not edited by hand.

- It lives in `src/data/site-stats.json` and reaches every page through `STATS` in
  `src/components/home-mcp/links.ts`.
- `update-stats.js` refreshes it from npm's public downloads API. It runs inside
  `npm run commit-static`, right before the build, so the number is refreshed when the site is
  deployed. `npm run build` and `npm run dev` never call it. By hand: `npm run update-stats`
  (`-- --force` to refresh now, `-- --dry-run` to only print).
- Shown: **npm's own "weekly downloads", the last 7 days**, rounded down ("940k+", "1M+",
  "1.2M+"). That figure swings a lot for this package (713k, 943k and 1.05M within three days in
  November 2026, after two very large days), so the label can go down as well as up between
  deploys. Ričards chose it knowingly on 2026-11-13, over the calmer average of the last four
  weeks (686k that day; `WEEKS = 4` in the script switches to it). If npm has an empty day in
  the last 7 (it fills those in later), the stored number stays.
- The label changes **at most every 14 days**. It sits in a JS chunk (`links.<hash>.js`), so a
  label that came back within days would bring an old asset name back (see step 4 of
  "Deploying"). The script also never fails a build: on any problem the stored number stays.
- `githubStars` in the same file is still entered by hand (10.1k on 2026-11-13, shown as "10k").

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
- `feat/blog-migration` — **what's actually live**. Tip `db86e357` since the homepage deploy of
  2026-11-12 (was `f4dcbf73` before it, `aca30120` on 2026-09-16).
- `feat/mcp-first-positioning` — branched from the live tip `aca30120` on 2026-09-16 for the
  MCP-first repositioning (app no longer the primary CTA). Not deployed.
- `flags/mcp-ui-previews-100` (Jul 30) and `feat/mcp-client-pages` (Jul 24) — already merged into
  `feat/blog-migration` via PRs #16 and #15.
- `fable-experiment` — homepage "mission control" redesign (built on top of blog-migration); NOT live.
- `feat/landing-redesign` — full homepage rebuild (2026-11-11 and 12), branched from the
  `feat/blog-migration` tip `f4dcbf73`. Two hero versions were built; **version B (the connection
  diagram) was chosen as the main homepage on 2026-11-12**. It went live that day as `db86e357`
  (`feat/blog-migration` was fast-forwarded to it). See "Homepage source layout" below.
- `feat/client-landing-pages`: cut from the live tip `db86e357` on 2026-11-13: the downloads
  number that refreshes itself, and the three client landing pages in the homepage style. Local
  preview only so far, not built into `docs/` and not deployed.
- `welcome-team-agent-lp` — welcome page v3 (team-agent pitch + HubSpot waitlist); source-only, not
  built into `docs/`, not deployed.
- `gh-pages` — **stale/abandoned** (old Vite/React + `deploy:` commits, last touched 2025-09-19). Not used.
- Other feature branches: `feature/pricing-page`, `feature/website-redesign`, `hero-redesign-v2`,
  `feature/welcome-page-feature-flags`, `flags/unexclude-claude-code`, etc.

## Homepage source layout (live since 2026-11-12)

The homepage is plain Astro sections instead of one React island per section:

- `astro-src/pages/index.astro` — one line: `<HomePage hero="hub" />`. The page itself is
  `astro-src/components/home/HomePage.astro`, which composes the sections. Navigation and Footer are
  the shared site components, unchanged.
- **Two hero versions**, picked by that `hero` prop (nothing else needs to change to switch):
  - `"hub"` (the main version, chosen on 2026-11-12): copy on the left, the connection diagram on
    the right (`HeroHub.astro`): AI
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
  - `sections.ts` holds tabs/FAQ/copy/step tracking, `analytics.ts` sends events.
- Analytics: any element with `data-ev="event_name"` (+ JSON in `data-ev-props`) is tracked on
  click through the same `trackEvent()` the React components use. Event names and properties
  match the previous homepage; `hero_stage_scenario_clicked` is the one new event. The client tiles
  in the hub send the existing `mcp_client_crosslink_clicked` with `from_client: "home_hero"`.
- Fonts: Geist and Geist Mono, self-hosted in `public/fonts/` (OFL license file alongside).
- Kept plain on purpose (feedback of 2026-11-12, do not reintroduce without asking): no patterned
  or pointer-reactive page backgrounds (the WebGL dot field and the dot grids were removed), CTA
  buttons are flat (one solid color, no gradient, glow, light sweep or lift), and the closing
  section is a heading, one line and the two buttons, with no decoration. In the same pass the
  rest of the pointer-following was taken out: the diagram and the demo windows no longer lean
  toward the pointer, and the light on a hovered card stays at its top edge. Ordinary hover states
  remain, including the client tiles in the diagram, which show their request on hover.

The previous homepage sections (`src/components/home-mcp/*`, `src/components/mcp/MCPRemote.tsx`,
etc.) are still in the repo: other pages use several of them, and nothing was deleted.

## Client landing pages (on `feat/client-landing-pages`, not deployed as of 2026-11-13)

`/mcp/chatgpt/`, `/mcp/claude-web/` and `/mcp/claude-desktop/` were rebuilt on 2026-11-13 in the
homepage style. The brief was "new look, same content": sections, wording, buttons and analytics
events are the ones the pages had before.

- One template: `astro-src/components/landing/LandingPage.astro`, used by the three page files in
  `astro-src/pages/mcp/<client>/index.astro` (each is one line: `<LandingPage slug="..." />`).
  Sections are plain Astro components (`Landing*.astro`, `ChatWindow.astro`), no React island each.
- Copy: `astro-src/data/landing.ts`, one object per page. Page title, description, FAQ and the
  directory link (the CTA target) still come from `astro-src/data/mcp-clients.ts`.
- Styles: the homepage's `home.css` and `home-sections.css` (tokens, type, buttons, cards, FAQ, the
  Remote MCP section, client cards) plus `landing/landing.css` for what only these pages have
  (`lp-` prefix): the chat windows in each client's own look, the prompt categories, the terminal,
  the phone with a Claude conversation, the local diagram, setup.
- Scripts: `landing/scripts/` (`composer.ts` types the prompts in the hero window, `showcase.ts`
  runs the category tabs, `copy.ts` the install command). Analytics, reveals, the ranking pill and
  the FAQ are the homepage modules (`home/scripts/`); the pill markup is `home/RankingPill.astro`.
- Analytics, compared event by event with the old pages: `mcp_client_page_cta_clicked` (positions
  `hero`, `hero_composer_send`, `capabilities`, `phone_section` or `local_section`, `setup`, `final`),
  `mcp_client_showcase_category_clicked`, `ranking_pill_clicked` (`button_location: chatgpt_hero`),
  `mcp_client_setup_command_copied`, `mcp_client_crosslink_clicked`. Same names and properties.
  The crosslink event now also reaches Google Analytics (before, PostHog only).
- Differences from the old pages, on purpose: the typo "Claude Desktop Desktop" is fixed; section
  labels were added (Examples, Capabilities, Setup, FAQ, Clients); under the hero chat of the two
  remote clients a small strip shows the machine doing the job from the conversation; the first
  FAQ answer starts open; the prompt categories stop taking turns once a visitor picks one.
- **Not touched:** the ChatGPT ad pages (`/mcp/chatgpt/<campaign>/`, `/codebase/`, `/machines/`),
  `/mcp/`, `/mcp/cursor/` and the generic `[client]` template. They keep the React components in
  `src/components/mcp/clients/`. After this change nothing imports `clients/claude-web/*` and
  `clients/claude-desktop/*` any more; they were left in place so going back is one revert.
- The same "kept plain on purpose" rules as the homepage apply here.

## Working rules

1. **Never push without explicit user approval** (see AI_WORKFLOW.md deploy protocol).
2. After any source change, rebuild + commit `docs/` via `npm run commit-static` before deploy.
3. Preview with `npm run serve:static` (serves `docs/` at :3000) or `npm run dev` (hot reload).
4. Don't edit files under `docs/` by hand — they're build output; edit `astro-src/` / `src/` and rebuild.
5. When in doubt about what's deployed, run the verification checks above rather than assuming `main`.
