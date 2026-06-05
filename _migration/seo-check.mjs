/**
 * Comprehensive SEO audit of the BUILT blog pages (docs/blog/**). Checks head
 * essentials, OG/Twitter completeness, indexability, single-H1, meta-desc length,
 * JSON-LD validity, and image alt coverage across every page type.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS = path.resolve(__dirname, '..', 'docs');
const SITE = 'https://desktopcommander.app';

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(f);
    else if (e.name === 'index.html') yield f;
  }
}
const urlPathOf = (f) => {
  const rel = path.relative(DOCS, path.dirname(f)).split(path.sep).join('/');
  return rel === '' ? '/' : `/${rel}/`;
};

const fail = {};
const longTitles = []; // informational only — these match the live WP titles verbatim
const note = (cat, msg) => { (fail[cat] ||= []).push(msg); };
const has = (h, re) => re.test(h);
const grab = (h, re) => { const m = h.match(re); return m ? m[1] : null; };

let pages = 0;
const blogFiles = [...walk(path.join(DOCS, 'blog'))];
for (const f of blogFiles) {
  const url = urlPathOf(f);
  const h = fs.readFileSync(f, 'utf8');
  pages++;
  const isSearch = url === '/blog/search/';

  // --- head essentials ---
  if (!has(h, /<html[^>]+lang="en"/)) note('html lang', url);
  if (!has(h, /<meta charset="UTF-8"/i)) note('charset', url);
  if (!has(h, /name="viewport"/)) note('viewport', url);
  if (!has(h, /rel="canonical"/)) note('canonical missing', url);
  if (!has(h, /rel="icon"/)) note('favicon', url);

  // title
  const title = grab(h, /<title>([^<]*)<\/title>/);
  if (!title) note('title missing', url);
  else if (title.length > 65) longTitles.push(`${url} (${title.length})`);

  // meta description
  const desc = grab(h, /<meta name="description" content="([^"]*)"/);
  if (!desc) note('meta description missing', url);
  else if (desc.replace(/&[a-z#0-9]+;/gi, 'x').length > 160) note(`meta desc >160`, `${url} (${desc.length})`);

  // canonical self-referential
  const canon = grab(h, /<link rel="canonical" href="([^"]*)"/);
  if (canon && canon !== `${SITE}${url}`) note('canonical not self-referential', `${url} → ${canon}`);

  // OG completeness
  for (const p of ['og:title', 'og:description', 'og:type', 'og:url', 'og:site_name', 'og:image']) {
    if (!has(h, new RegExp(`property="${p}"`))) note(`missing ${p}`, url);
  }
  // Twitter
  for (const p of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!has(h, new RegExp(`name="${p}"`))) note(`missing ${p}`, url);
  }

  // exactly one H1
  const h1s = (h.match(/<h1[ >]/g) || []).length;
  if (h1s !== 1) note(`H1 count != 1 (${h1s})`, url);

  // robots / indexability
  const robots = grab(h, /<meta name="robots" content="([^"]*)"/);
  if (isSearch) {
    if (!robots || !/noindex/.test(robots)) note('search page not noindex', url);
  } else if (robots && /noindex/.test(robots)) {
    note('unexpected noindex on indexable page', url);
  }

  // JSON-LD validity
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (ld.length === 0) note('no JSON-LD', url);
  for (const m of ld) {
    try { JSON.parse(m[1]); } catch (e) { note('invalid JSON-LD', `${url}: ${e.message}`); }
  }

  // Post-specific: Article required fields
  if (/\/blog\/[^/]+\/$/.test(url) && !['/blog/', '/blog/about/', '/blog/contact/', '/blog/search/'].includes(url)) {
    const graph = ld.map((m) => { try { return JSON.parse(m[1]); } catch { return null; } }).filter(Boolean);
    const nodes = graph.flatMap((g) => g['@graph'] || [g]);
    const article = nodes.find((n) => n['@type'] === 'Article');
    if (!article) note('post missing Article schema', url);
    else {
      for (const k of ['headline', 'description', 'datePublished', 'dateModified', 'author', 'publisher', 'mainEntityOfPage', 'image']) {
        if (!article[k]) note(`Article missing ${k}`, url);
      }
    }
    if (!nodes.find((n) => n['@type'] === 'WebPage')) note('post missing WebPage schema', url);
    if (!nodes.find((n) => n['@type'] === 'WebSite')) note('post missing WebSite schema', url);
  }

  // image alt coverage (content/card images)
  const imgsNoAlt = [...h.matchAll(/<img(?![^>]*\balt=)[^>]*>/g)].length;
  if (imgsNoAlt > 0) note(`img missing alt (${imgsNoAlt})`, url);
}

console.log(`Scanned ${pages} blog pages.\n`);
console.log(`Info: ${longTitles.length} pages have <title> >65 chars (inherited from live WP titles, not a regression).\n`);
const cats = Object.keys(fail).sort();
if (cats.length === 0) {
  console.log('✅ All SEO checks passed across every blog page.');
} else {
  console.log(`=== Findings (${cats.length} categories) ===`);
  for (const c of cats) {
    console.log(`\n• ${c}  (${fail[c].length})`);
    fail[c].slice(0, 8).forEach((m) => console.log(`    ${m}`));
    if (fail[c].length > 8) console.log(`    …and ${fail[c].length - 8} more`);
  }
}
