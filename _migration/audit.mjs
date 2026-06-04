/**
 * Phase 3 SEO parity audit. Cross-checks the built docs/ against the exported LIVE
 * data (data.json holds the real WP field values), so data-driven SEO fields are
 * effectively diffed against production without fetching the live site.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const DOCS = path.join(REPO, 'docs');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'wp-export/data.json'), 'utf8'));
const built = JSON.parse(fs.readFileSync(path.join(REPO, 'astro-src/data/blog/posts.json'), 'utf8'));
const builtBySlug = Object.fromEntries(built.map((p) => [p.slug, p]));

const SITE = 'https://desktopcommander.app';
const issues = [];
const warn = [];
const add = (a, slug, msg) => a.push(`[${slug}] ${msg}`);

// Replicate WP desktopcommander_get_meta_description() exactly.
function wpProcess(s) {
  let d = String(s || '').replace(/<[^>]+>/g, '');
  d = d.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim();
  if (d.length > 160) d = d.slice(0, 157) + '...';
  return d;
}
function expectedDesc(p) {
  if (p.meta_description && p.meta_description.trim()) return wpProcess(p.meta_description);
  if (p.excerpt && p.excerpt.trim()) return wpProcess(p.excerpt);
  return wpProcess(p.content.replace(/\[[^\]]*\]/g, ''));
}

const read = (rel) => {
  const f = path.join(DOCS, rel, 'index.html');
  return fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : null;
};
const tag = (html, re) => { const m = html.match(re); return m ? m[1] : null; };
const titleOf = (h) => tag(h, /<title>([^<]*)<\/title>/);
const descOf = (h) => tag(h, /<meta name="description" content="([^"]*)"/);
const canonOf = (h) => tag(h, /<link rel="canonical" href="([^"]*)"/);
const decode = (s) => (s || '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

// ---- 1. Coverage: every exported post has a built page; counts match ----
const exportSlugs = data.posts.map((p) => p.slug).sort();
const builtSlugs = built.map((p) => p.slug).sort();
const missing = exportSlugs.filter((s) => !builtSlugs.includes(s));
const extra = builtSlugs.filter((s) => !exportSlugs.includes(s));
if (missing.length) add(issues, 'COVERAGE', `posts missing from build: ${missing.join(', ')}`);
if (extra.length) add(issues, 'COVERAGE', `extra posts not in export: ${extra.join(', ')}`);
console.log(`Coverage: export ${exportSlugs.length} posts | built ${builtSlugs.length} | missing ${missing.length} | extra ${extra.length}`);

// ---- 2. Per-post checks ----
const mediaDir = path.join(REPO, 'public/blog/media');
let okPosts = 0;
for (const p of data.posts) {
  const slug = p.slug;
  const html = read(`blog/${slug}`);
  if (!html) { add(issues, slug, 'built page MISSING'); continue; }
  const bp = builtBySlug[slug];

  // title
  const expTitle = `${decode(p.title)} | Desktop Commander Blog`;
  const gotTitle = decode(titleOf(html));
  if (gotTitle !== expTitle) add(issues, slug, `title mismatch:\n    exp: ${expTitle}\n    got: ${gotTitle}`);

  // canonical
  const expCanon = `${SITE}/blog/${slug}/`;
  if (canonOf(html) !== expCanon) add(issues, slug, `canonical: got ${canonOf(html)} exp ${expCanon}`);

  // meta description vs WP-processed live value
  const expDesc = expectedDesc(p);
  const gotDesc = decode(descOf(html));
  if (gotDesc !== decode(expDesc)) add(issues, slug, `meta desc mismatch:\n    exp(${expDesc.length}): ${expDesc}\n    got(${gotDesc.length}): ${gotDesc}`);

  // JSON-LD types
  const types = [...html.matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]);
  for (const t of ['Article', 'WebPage', 'WebSite', 'Person', 'Organization']) {
    if (!types.includes(t)) add(issues, slug, `JSON-LD missing @type ${t}`);
  }
  const faqCount = bp.faq.length;
  const questionCount = types.filter((t) => t === 'Question').length;
  if (faqCount > 0 && !types.includes('FAQPage')) add(issues, slug, `has ${faqCount} FAQ but no FAQPage schema`);
  if (faqCount !== questionCount) add(issues, slug, `FAQ Q count: schema ${questionCount} vs export ${faqCount}`);

  // h1 == title
  const h1 = decode(tag(html, /<h1 class="single-post-title">([^<]*)<\/h1>/));
  if (h1 !== decode(p.title)) add(issues, slug, `H1 mismatch: got "${h1}"`);

  // og
  if (!/<meta property="og:type" content="article"/.test(html)) add(issues, slug, 'og:type != article');
  if (!new RegExp(`<meta property="og:url" content="${expCanon}"`).test(html)) add(issues, slug, 'og:url mismatch');

  // images resolve
  const imgs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]).filter((s) => s.includes('/blog/media/') || s.includes('i0.wp.com') || s.includes('wpcomstaging'));
  for (const src of imgs) {
    if (src.startsWith('/blog/media/')) {
      const f = path.join(REPO, 'public', src);
      if (!fs.existsSync(f)) add(issues, slug, `image not on disk: ${src}`);
    }
  }
  okPosts++;
}

// ---- 3. Archive coverage ----
for (const c of data.categories.filter((c) => c.count > 0)) {
  if (!read(`blog/category/${c.slug}`)) add(issues, 'CATEGORY', `missing /blog/category/${c.slug}/`);
}
for (const a of data.authors.filter((a) => a.post_count > 0)) {
  if (!read(`blog/author/${a.login}`)) add(issues, 'AUTHOR', `missing /blog/author/${a.login}/`);
}
for (const pg of ['', 'about', 'contact', 'search']) {
  if (!read(`blog${pg ? '/' + pg : ''}`)) add(issues, 'PAGE', `missing /blog/${pg}/`);
}

// ---- 4. Internal /blog/<post> links resolve ----
const validBlogPaths = new Set([
  '/blog/', '/blog/about/', '/blog/contact/', '/blog/search/',
  ...builtSlugs.map((s) => `/blog/${s}/`),
  ...data.categories.filter((c) => c.count > 0).map((c) => `/blog/category/${c.slug}/`),
  ...data.authors.filter((a) => a.post_count > 0).map((a) => `/blog/author/${a.login}/`),
]);
let brokenLinks = 0;
for (const p of data.posts) {
  const html = read(`blog/${p.slug}`);
  if (!html) continue;
  const hrefs = [...html.matchAll(/href="(\/blog\/[^"#?]*)"/g)].map((m) => m[1]);
  for (const h of hrefs) {
    // ignore /blog/page/N/ and category/author pagination
    if (/\/page\/\d+\/$/.test(h)) continue;
    const lastSeg = h.replace(/\/$/, '').split('/').pop();
    if (lastSeg && lastSeg.includes('.')) continue; // asset (blog.css, js, media, pagefind)
    if (h.startsWith('/blog/js/') || h.startsWith('/blog/assets/') || h.startsWith('/blog/pagefind/')) continue;
    if (!validBlogPaths.has(h) && !h.startsWith('/blog/media/') && !h.startsWith('/blog/wp-')) {
      add(warn, p.slug, `internal link may 404: ${h}`);
      brokenLinks++;
    }
  }
}

console.log(`\nChecked ${okPosts} posts.`);
console.log(`\n=== ISSUES (${issues.length}) ===`);
issues.slice(0, 60).forEach((i) => console.log('✗ ' + i));
console.log(`\n=== WARNINGS (${warn.length}) ===`);
warn.slice(0, 25).forEach((w) => console.log('! ' + w));
if (issues.length === 0) console.log('\n✅ No blocking SEO parity issues found.');
