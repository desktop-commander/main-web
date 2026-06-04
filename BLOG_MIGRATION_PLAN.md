# Blog Migration Plan — WordPress → Astro

**Branch:** `feat/blog-migration`
**Goal:** Move the blog (`desktopcommander.app/blog/*`) off WordPress.com and into the Astro site, **without losing SEO**.
**Status:** Plan approved in principle; awaiting go-ahead per phase. Nothing is pushed without explicit confirmation.

---

## 1. Decisions locked

| Decision | Choice |
|----------|--------|
| Content format | **Preserve exact rendered HTML** per post. New posts authored in MDX going forward; migrated posts stay HTML. |
| Search | **Pagefind** (static, build-time client-side search). |
| Content export | **SSH + WP-CLI**, executed **on the host via Desktop Commander** (the Cowork sandbox cannot resolve `ssh.wp.com`). Local DB copy is the fallback. |
| This session | Create branch + this plan doc, then stop for review. |

---

## 2. Current architecture (as-is)

- **Main site:** Astro, `output: 'static'`, `srcDir: ./astro-src`, builds to `docs/`. `Layout.astro` already provides canonical / OG / Twitter / robots / `jsonLd` prop. `schema.ts` has a stable `Organization` `@id` ready to be referenced as an Article `publisher`.
- **Hosting:** **Cloudflare Pages** (confirmed by `public/_redirects`, which only works on CF Pages / Netlify). `docs/CNAME` + `.nojekyll` are GitHub-Pages leftovers.
- **Blog today:** `/blog/*` is a **Cloudflare Pages reverse-proxy to WordPress.com**. A `blog.desktopcommander.app` subdomain also points at WP directly (used by nav for About/Contact).
- **Sitemap:** `generate-sitemap.js` runs after `astro build` and **fetches blog posts live from the WP REST API** (`/blog/wp-json/wp/v2/posts`), failing the build if unreachable. This dependency must be removed at cutover.

### WordPress theme features in use (`desktopcommander-blog`)
Post page (`single.php`): back button, breadcrumbs (Blog / Category / Title), title + date + author link, category tags, author bio card (avatar + socials), content with **auto-injected heading IDs**, **JS-built TOC sidebar**.
`functions.php`: custom meta description (`_desktopcommander_meta_description`), canonical output, social/OG tags, and JSON-LD: **WebSite, Article (+ author Person), WebPage, ProfilePage (author archives), FAQPage (from `<details>/<summary>`)**, likely BreadcrumbList. Two CTA shortcodes: `[dc_app_cta]` (blue), `[dc_mcp_cta]` (purple).

---

## 3. URL inventory — the preservation contract

Every URL below must resolve at the **same path with trailing slash** after migration (or 301 to an equivalent). 28 posts + 3 pages + 6 author archives + category archives.

### Posts (28)
```
/blog/ai-code-review-with-desktop-commander-a-practical-guide/
/blog/ai-knowledge-management-system/
/blog/automate-docker-workflows-with-ai/
/blog/best-mcp-servers/
/blog/best-mcp-servers-for-knowledge-bases-in-2026/
/blog/best-obsidian-plugins/
/blog/build-a-personal-ai-knowledge-base-with-local-files/
/blog/claude-mcp-how-to-use-mcp-with-claude-ai/
/blog/convert-heic-to-jpg-locally-with-desktop-commander/
/blog/create-and-manage-your-obsidian-knowledge-base-with-ai/
/blog/desktop-commander-vs-cowork/
/blog/how-to-read-and-process-csv-files-in-python-complete-guide/
/blog/how-to-set-up-local-development-environment-with-ease/
/blog/how-to-use-tags-in-obsidian-markdown/
/blog/i-can-tell-when-youre-using-ai-in-my-interviews-heres-how/
/blog/knowledge-management-system/
/blog/markdown-best-practices-technical-documentation/
/blog/markdown-file-the-complete-reference-guide-for-2026-with-cheatsheet/
/blog/markdown-tables-complete-syntax-guide/
/blog/markdown-to-pdf/
/blog/notion-mcp-server/
/blog/obsidian-bulk-rename-files/
/blog/obsidian-find-replace-vault/
/blog/obsidian-markdown-cheatsheet-every-syntax-you-actually-need/
/blog/personal-management-system/
/blog/supabase-mcp-how-to-connect-ai-to-your-database/
/blog/what-is-an-mcp-server-and-how-it-works-in-plain-english/
/blog/zettelkasten-obsidian/
```

### Pages + archives
```
/blog/                      (blog home, paginated: /blog/page/N/)
/blog/about/
/blog/contact/
/blog/author/eduardruzga/
/blog/author/karlina/
/blog/author/rafaelpinheiro/
/blog/author/rk7f8a7274b9330/
/blog/author/romanmakarenko/
/blog/author/sidraarif/
/blog/category/<slug>/      (enumerate during export — not in current sitemap)
```

> The export step must produce the authoritative list (slugs, categories, tags, authors, dates, redirects already configured in `functions.php`). Treat the live site as source of truth and reconcile against this list.

---

## 4. SEO preservation requirements (non-negotiable)

1. **Identical URLs** — same slugs, `trailingSlash: 'always'` already set in Astro. No slug changes.
2. **Per-post meta description** — migrate `_desktopcommander_meta_description` verbatim into each post's frontmatter → `Layout` `description`.
3. **Canonicals** — must continue to resolve to `https://desktopcommander.app/blog/<slug>/` (today's canonical target). `Layout` builds this automatically from the path.
4. **Structured data** — reproduce per page type: Article (+author Person, publisher → `#organization`), WebPage, FAQPage (from `<details>`), ProfilePage (author archives), BreadcrumbList, WebSite. Validate in Google Rich Results Test.
5. **Titles** — preserve `<title>` (including any SEO-title overrides) exactly.
6. **Images** — download all media from the WP CDN to `public/blog/...`, rewrite `src`/`srcset` in post HTML to local paths; preserve `alt`. Keep featured-image OG references working.
7. **Internal links** — rewrite in-post links from WP CDN / staging hosts to relative `/blog/...` and main-site paths.
8. **Sitemap** — switch `generate-sitemap.js` to enumerate migrated content from the repo (drop the live WP API call). Keep `lastmod` from post `modified` dates.
9. **Redirects** — remove the WP-proxy rules in `_redirects`; keep trailing-slash + legacy 301s; add 301s for any URL that genuinely changes. Carry over the legacy redirects currently in `functions.php`.
10. **Analytics** — preserve GA4 (`G-HXL4Y3Y62N`) + PostHog + Ahrefs, already wired in `Layout.astro` (behind Cookiebot consent). Confirm blog pageviews keep firing.
11. **robots.txt** — keep `/blog/` crawlable; don't accidentally disallow.

---

## 5. Phased implementation plan

### Phase 1 — Content export (host-side via Desktop Commander)
- Via DC `start_process` on the Mac: `ssh -i ~/.ssh/wp_blog … wp export` (WXR) **and** a per-post pull of rendered HTML + meta (`wp post get <id> --field=content`, `wp post meta get … _desktopcommander_meta_description`, author, categories, tags, dates, featured image URL).
- Mirror all media (`wp media` list → download files).
- Land everything under a staging dir in the repo (e.g. `astro-src/content/blog/` for HTML bodies + a JSON/frontmatter index, `public/blog/` for media).
- **Output:** authoritative manifest of 28 posts + pages + archives with all metadata.

### Phase 2 — Astro blog implementation
- Content collection (`blog`) with schema: title, slug, description, author, categories, tags, date, modified, featuredImage, seoTitle, bodyHtml.
- Routes: `pages/blog/[slug].astro` (post), `pages/blog/index.astro` + `pages/blog/page/[n].astro` (paginated home), `pages/blog/category/[slug].astro`, `pages/blog/author/[slug].astro`, `pages/blog/about.astro`, `pages/blog/contact.astro`.
- Port post template: breadcrumbs, TOC (build heading IDs at build time, not runtime JS), author bio card, category tags, CTA components (`[dc_app_cta]`/`[dc_mcp_cta]` → Astro components), FAQ `<details>` blocks.
- Reuse `Layout.astro` for all meta + `jsonLd`. Add Article/WebPage/FAQPage/ProfilePage/BreadcrumbList builders to `schema.ts`.
- Match the dark blog theme (port the needed CSS from `style.css`).

### Phase 3 — SEO parity verification
- Script a 1:1 diff: for each URL, compare live WP page vs. local build — `<title>`, meta description, canonical, JSON-LD types, H1, heading structure, image count.
- Run Pagefind index build; wire the search UI.
- Rich Results Test on a sample of each page type.

### Phase 4 — Sitemap, redirects, nav
- Rewrite `generate-sitemap.js` to read migrated content (no WP API).
- Update `_redirects`: drop WP proxy; keep/port 301s.
- Fix nav (`navigation.ts`, `SimpleNavigation.astro`): point About/Contact at new in-site `/blog/about/`, `/blog/contact/` instead of the `blog.desktopcommander.app` subdomain.

### Phase 5 — Cutover (Cloudflare)
- Deploy preview; full-site link check.
- Flip the Cloudflare `/blog/*` proxy off so static pages serve. Keep WordPress.com alive read-only as rollback.
- Submit refreshed sitemap; monitor Search Console coverage + 404s for 2–4 weeks.

---

## 6. Risks & mitigations

| Risk | Mitigation |
|------|-----------|
| Sandbox can't reach WP.com | Run export host-side via Desktop Commander; local DB fallback. |
| Content drift (HTML fidelity) | Preserve exact HTML; automated 1:1 diff in Phase 3. |
| Missed redirect → 404s & lost rankings | Enumerate every live URL first; diff against build; keep WP read-only as safety net. |
| Structured-data regressions | Rich Results Test per page type before cutover. |
| Image/link rot | Self-host all media; rewrite all in-content URLs. |
| Sitemap build coupling to WP | Decouple `generate-sitemap.js` in Phase 4 before cutover. |

## 7. Rollback
Re-enable the Cloudflare `/blog/*` → WordPress proxy. WordPress.com stays untouched/read-only through launch, so rollback is a single proxy-rule revert with zero data loss.

## 8. Open items to confirm before Phase 5
- Decommission timeline for WordPress.com + the `blog.desktopcommander.app` subdomain (keep ≥30 days post-cutover).
- Who owns the Cloudflare Pages proxy-rule change.
- Whether `/blog/about/` + `/blog/contact/` content should be refreshed or ported verbatim.
