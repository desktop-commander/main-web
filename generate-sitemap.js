/**
 * Auto-generate sitemap.xml from the built `docs/` tree + WP blog REST API.
 *
 * This runs as part of `npm run build` (see package.json) after `astro build`
 * has populated `docs/`.
 *
 * Inclusion rules — a URL is listed iff:
 *   1. It's an Astro-built `index.html` (not `404.html`) OR a WP blog URL, AND
 *   2. Its path is NOT `Disallow`'d in public/robots.txt, AND
 *   3. Its HTML does NOT emit `<meta name="robots" content="...noindex...">`
 *
 * Belt-and-suspenders on (2)+(3) so the sitemap stays correct even if someone
 * drifts one signal without the other (see SEO project open-questions.md).
 *
 * Blog posts — fetched fresh at build time from the WP REST API (paginated).
 * If the fetch fails we FAIL THE BUILD rather than silently ship an incomplete
 * sitemap — we can re-run; stale/missing URLs in a sitemap is worse.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://desktopcommander.app';
const DOCS_DIR = path.join(__dirname, 'docs');
const ROBOTS_PATH = path.join(__dirname, 'public/robots.txt');
const JOBS_PATH = path.join(__dirname, 'src/data/jobs.json');
const BLOG_API = `${BASE_URL}/blog/wp-json/wp/v2/posts`;

/**
 * Parse `Disallow:` paths from robots.txt. We only care about rules under the
 * global `User-agent: *` block (the only block in this file today).
 */
function parseDisallowPaths(robotsText) {
  const disallow = new Set();
  let inStarBlock = false;
  for (const rawLine of robotsText.split('\n')) {
    const line = rawLine.split('#')[0].trim(); // strip comments
    if (!line) continue;
    const [rawKey, ...rest] = line.split(':');
    const key = rawKey.trim().toLowerCase();
    const value = rest.join(':').trim();
    if (key === 'user-agent') {
      inStarBlock = value === '*';
      continue;
    }
    if (inStarBlock && key === 'disallow' && value) {
      disallow.add(value);
    }
  }
  return disallow;
}

/** Walk a directory recursively and yield every `index.html` path (absolute). */
function* walkIndexHtml(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkIndexHtml(full);
    } else if (entry.isFile() && entry.name === 'index.html') {
      yield full;
    }
  }
}

/**
 * Convert an absolute `docs/.../index.html` path to a site URL path with a
 * trailing slash (e.g. `docs/use-cases/index.html` → `/use-cases/`;
 * `docs/index.html` → `/`).
 */
function docPathToUrlPath(docPath) {
  const rel = path.relative(DOCS_DIR, path.dirname(docPath)).split(path.sep).join('/');
  return rel === '' ? '/' : `/${rel}/`;
}

/** Quick scan of an HTML file for a `noindex` robots directive. */
function hasNoindexMeta(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  // Match <meta name="robots" content="..."> and check for noindex token.
  // Case-insensitive, tolerates extra attrs.
  const re = /<meta\b[^>]*\bname=["']robots["'][^>]*\bcontent=["']([^"']*)["'][^>]*>/i;
  const m = html.match(re);
  return m ? /\bnoindex\b/i.test(m[1]) : false;
}

/** Fetch all published WP blog posts via REST API, paginated. */
async function fetchAllBlogPosts() {
  const posts = [];
  const perPage = 100;
  let page = 1;
  // Hard cap to prevent runaway loops; WP caps `page` at `X-WP-TotalPages` and
  // returns 400 past it. 50 pages * 100 posts = 5000 — way more than we'll ever have.
  const MAX_PAGES = 50;
  while (page <= MAX_PAGES) {
    const url = `${BLOG_API}?per_page=${perPage}&page=${page}&_fields=slug,modified`;
    const res = await fetch(url);
    if (res.status === 400 && page > 1) break; // past last page
    if (!res.ok) {
      throw new Error(`WP API error ${res.status} on page ${page}: ${await res.text()}`);
    }
    const batch = await res.json();
    if (!Array.isArray(batch)) {
      throw new Error(`WP API returned non-array on page ${page}: ${JSON.stringify(batch).slice(0, 200)}`);
    }
    if (batch.length === 0) break;
    posts.push(...batch);
    if (batch.length < perPage) break;
    page++;
  }
  return posts;
}

/**
 * Heuristic priority/changefreq hints. Google mostly ignores these but they
 * cost nothing and some crawlers still honor them.
 */
function priorityFor(urlPath) {
  if (urlPath === '/') return { priority: '1.0', changefreq: 'weekly' };
  if (urlPath.startsWith('/library/prompts/') && urlPath !== '/library/prompts/') {
    return { priority: '0.6', changefreq: 'monthly' }; // Tier 1 prompt detail
  }
  if (urlPath === '/library/prompts/' || urlPath === '/use-cases/') {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  if (urlPath.startsWith('/use-cases/') && urlPath.split('/').length >= 5) {
    return { priority: '0.8', changefreq: 'monthly' }; // conversion landings
  }
  if (urlPath.startsWith('/use-cases/')) return { priority: '0.9', changefreq: 'weekly' };
  if (urlPath.startsWith('/blog/')) return { priority: '0.7', changefreq: 'monthly' };
  if (urlPath.startsWith('/careers/')) return { priority: '0.7', changefreq: 'monthly' };
  return { priority: '0.8', changefreq: 'monthly' };
}

function urlEntry(loc, lastmod, priority, changefreq) {
  return `    <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`;
}

async function generate() {
  // --- Load filters
  const robotsText = fs.readFileSync(ROBOTS_PATH, 'utf8');
  const disallow = parseDisallowPaths(robotsText);
  console.log(`robots.txt: ${disallow.size} Disallow paths loaded`);

  // --- Collect indexable Astro pages
  const astroEntries = [];
  let astroScanned = 0;
  let skippedDisallow = 0;
  let skippedNoindex = 0;
  let skipped404 = 0;
  for (const htmlPath of walkIndexHtml(DOCS_DIR)) {
    astroScanned++;
    const urlPath = docPathToUrlPath(htmlPath);

    // Skip the SPA-fallback 404 — it's a built artifact, not a real page
    const rel = path.relative(DOCS_DIR, htmlPath);
    if (rel === '404.html') {
      skipped404++;
      continue;
    }
    // `docs/404.html` is a file (not `404/index.html`) so walker already skips it,
    // but we also want to exclude the `/open/` page (Disallow'd) and duplicates.
    if (disallow.has(urlPath)) {
      skippedDisallow++;
      continue;
    }
    if (hasNoindexMeta(htmlPath)) {
      skippedNoindex++;
      continue;
    }

    // SEO #14b: drop /library/ — it's a duplicate of /library/prompts/
    // (same underlying PromptsLibraryAstro component). /library/prompts/ is
    // the canonical hub; the /library/ page sets rel=canonical to point there.
    if (urlPath === '/library/') {
      skippedDisallow++; // lump into count — close enough
      continue;
    }

    const mtime = fs.statSync(htmlPath).mtime;
    const lastmod = mtime.toISOString().split('T')[0];
    const { priority, changefreq } = priorityFor(urlPath);
    astroEntries.push({ loc: `${BASE_URL}${urlPath}`, lastmod, priority, changefreq });
  }
  astroEntries.sort((a, b) => a.loc.localeCompare(b.loc));
  console.log(
    `Astro: scanned ${astroScanned} pages → ${astroEntries.length} indexable ` +
    `(skipped ${skippedDisallow} disallow, ${skippedNoindex} noindex, ${skipped404} 404)`
  );

  // --- WP blog posts — fail loudly if API is unreachable
  console.log('Fetching WP blog posts…');
  const posts = await fetchAllBlogPosts();
  console.log(`WP: fetched ${posts.length} blog posts`);
  if (posts.length === 0) {
    throw new Error('WP API returned zero blog posts — refusing to ship an empty blog section');
  }
  const blogEntries = posts.map((post) => {
    const loc = `${BASE_URL}/blog/${post.slug}/`;
    const lastmod = (post.modified || '').split('T')[0] || new Date().toISOString().split('T')[0];
    const { priority, changefreq } = priorityFor(`/blog/${post.slug}/`);
    return { loc, lastmod, priority, changefreq };
  });
  // WP static pages that aren't returned by /wp/v2/posts
  const today = new Date().toISOString().split('T')[0];
  const wpPages = [
    { loc: `${BASE_URL}/blog/`, lastmod: today, priority: '0.9', changefreq: 'weekly' },
    { loc: `${BASE_URL}/blog/about/`, lastmod: today, priority: '0.8', changefreq: 'monthly' },
    { loc: `${BASE_URL}/blog/contact/`, lastmod: today, priority: '0.8', changefreq: 'monthly' },
  ];

  // --- Job postings from jobs.json (active only)
  const jobsData = JSON.parse(fs.readFileSync(JOBS_PATH, 'utf8'));
  const jobEntries = jobsData.jobs
    .filter((job) => job.isActive)
    .map((job) => ({
      loc: `${BASE_URL}/careers/jobs/${job.id}/`,
      lastmod: today,
      priority: '0.7',
      changefreq: 'monthly',
    }));

  // --- Compose the XML
  // Dedup by loc — job pages may be built as static Astro pages AND listed in
  // jobs.json; blog URLs could theoretically collide too. First write wins.
  const seen = new Set();
  const allEntries = [];
  let dupes = 0;
  for (const e of [...astroEntries, ...wpPages, ...blogEntries, ...jobEntries]) {
    if (seen.has(e.loc)) {
      dupes++;
      continue;
    }
    seen.add(e.loc);
    allEntries.push(e);
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allEntries.map((e) => urlEntry(e.loc, e.lastmod, e.priority, e.changefreq)),
    '</urlset>',
    '',
  ].join('\n');

  const outputPath = path.join(DOCS_DIR, 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(
    `Sitemap: ${astroEntries.length} Astro + ${wpPages.length} WP pages + ` +
    `${blogEntries.length} blog posts + ${jobEntries.length} jobs − ${dupes} dupes = ${allEntries.length} URLs`
  );
  console.log(`Sitemap saved to: ${outputPath}`);
}

generate().catch((err) => {
  console.error('Sitemap generation failed:', err);
  process.exit(1);
});
