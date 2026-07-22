/**
 * Auto-generate sitemap.xml from the built `docs/` tree.
 *
 * Runs as part of `npm run build` after `astro build` (and pagefind) populate `docs/`.
 *
 * Inclusion rules — a URL is listed iff:
 *   1. It's an Astro-built `index.html` (not `404.html`), AND
 *   2. Its path is NOT `Disallow`'d in public/robots.txt, AND
 *   3. Its HTML does NOT emit `<meta name="robots" content="...noindex...">`
 *
 * NOTE: As of the WordPress→Astro blog migration, blog pages (/blog/, posts, category
 * & author archives, about/contact) are built directly into `docs/blog/**` and are
 * picked up by the directory walk below. The old live WP REST API fetch has been
 * removed — there is no longer an external dependency at build time.
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

/** Parse `Disallow:` paths from robots.txt (global `User-agent: *` block). */
function parseDisallowPaths(robotsText) {
  const disallow = new Set();
  let inStarBlock = false;
  for (const rawLine of robotsText.split('\n')) {
    const line = rawLine.split('#')[0].trim();
    if (!line) continue;
    const [rawKey, ...rest] = line.split(':');
    const key = rawKey.trim().toLowerCase();
    const value = rest.join(':').trim();
    if (key === 'user-agent') { inStarBlock = value === '*'; continue; }
    if (inStarBlock && key === 'disallow' && value) disallow.add(value);
  }
  return disallow;
}

/** Walk a directory recursively and yield every `index.html` path (absolute). */
function* walkIndexHtml(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkIndexHtml(full);
    else if (entry.isFile() && entry.name === 'index.html') yield full;
  }
}

function docPathToUrlPath(docPath) {
  const rel = path.relative(DOCS_DIR, path.dirname(docPath)).split(path.sep).join('/');
  return rel === '' ? '/' : `/${rel}/`;
}

function hasNoindexMeta(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const re = /<meta\b[^>]*\bname=["']robots["'][^>]*\bcontent=["']([^"']*)["'][^>]*>/i;
  const m = html.match(re);
  return m ? /\bnoindex\b/i.test(m[1]) : false;
}

function priorityFor(urlPath) {
  if (urlPath === '/') return { priority: '1.0', changefreq: 'weekly' };
  if (urlPath.startsWith('/library/prompts/') && urlPath !== '/library/prompts/') {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  if (urlPath === '/library/prompts/' || urlPath === '/use-cases/') {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  if (urlPath.startsWith('/use-cases/') && urlPath.split('/').length >= 5) {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  if (urlPath.startsWith('/use-cases/')) return { priority: '0.9', changefreq: 'weekly' };
  if (urlPath.startsWith('/mcp/')) return { priority: '0.9', changefreq: 'weekly' };
  if (urlPath === '/blog/') return { priority: '0.9', changefreq: 'weekly' };
  if (urlPath.startsWith('/blog/category/') || urlPath.startsWith('/blog/author/')) {
    return { priority: '0.5', changefreq: 'weekly' };
  }
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

function generate() {
  const robotsText = fs.readFileSync(ROBOTS_PATH, 'utf8');
  const disallow = parseDisallowPaths(robotsText);
  console.log(`robots.txt: ${disallow.size} Disallow paths loaded`);

  const astroEntries = [];
  let astroScanned = 0, skippedDisallow = 0, skippedNoindex = 0, skipped404 = 0;
  for (const htmlPath of walkIndexHtml(DOCS_DIR)) {
    astroScanned++;
    const urlPath = docPathToUrlPath(htmlPath);
    const rel = path.relative(DOCS_DIR, htmlPath);
    if (rel === '404.html') { skipped404++; continue; }
    if (disallow.has(urlPath)) { skippedDisallow++; continue; }
    if (hasNoindexMeta(htmlPath)) { skippedNoindex++; continue; }
    // SEO #14b: drop /library/ — duplicate of /library/prompts/ (canonical hub).
    if (urlPath === '/library/') { skippedDisallow++; continue; }

    const lastmod = fs.statSync(htmlPath).mtime.toISOString().split('T')[0];
    const { priority, changefreq } = priorityFor(urlPath);
    astroEntries.push({ loc: `${BASE_URL}${urlPath}`, lastmod, priority, changefreq });
  }
  astroEntries.sort((a, b) => a.loc.localeCompare(b.loc));
  console.log(
    `Astro: scanned ${astroScanned} pages → ${astroEntries.length} indexable ` +
    `(skipped ${skippedDisallow} disallow, ${skippedNoindex} noindex, ${skipped404} 404)`
  );

  const today = new Date().toISOString().split('T')[0];

  // Extra main-site pages not built by Astro but live on the site.
  const extraPages = [
    { loc: `${BASE_URL}/best-value-ai/`, lastmod: today, priority: '0.8', changefreq: 'monthly' },
  ];

  // Active job postings from jobs.json.
  const jobsData = JSON.parse(fs.readFileSync(JOBS_PATH, 'utf8'));
  const jobEntries = jobsData.jobs
    .filter((job) => job.isActive)
    .map((job) => ({ loc: `${BASE_URL}/careers/jobs/${job.id}/`, lastmod: today, priority: '0.7', changefreq: 'monthly' }));

  // Compose + dedup by loc (first write wins).
  const seen = new Set();
  const allEntries = [];
  let dupes = 0;
  for (const e of [...astroEntries, ...extraPages, ...jobEntries]) {
    if (seen.has(e.loc)) { dupes++; continue; }
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
  const blogCount = allEntries.filter((e) => e.loc.includes('/blog/')).length;
  console.log(
    `Sitemap: ${astroEntries.length} Astro + ${extraPages.length} extra + ${jobEntries.length} jobs ` +
    `− ${dupes} dupes = ${allEntries.length} URLs (${blogCount} under /blog/)`
  );
  console.log(`Sitemap saved to: ${outputPath}`);
}

generate();
