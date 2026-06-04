/**
 * Transform the raw WP export (_migration/wp-export/data.json) into Astro blog inputs:
 *   - astro-src/content/blog/<slug>.html   (cleaned, exact-HTML bodies)
 *   - astro-src/data/blog/posts.json        (metadata + computed description + toc + faq)
 *   - astro-src/data/blog/authors.json, categories.json, pages.json
 *   - public/blog/media/<rel>               (self-hosted media, copied from export)
 *
 * Fidelity-first: we keep the post HTML intact, only (1) strip wp:* block comments,
 * (2) expand the two CTA shortcodes to their exact theme HTML, (3) add heading ids,
 * (4) rewrite on-disk image URLs to /blog/media (CDN-only images keep their URL),
 * (5) relativize internal blog links.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const EXPORT = path.join(__dirname, 'wp-export');
const DATA = JSON.parse(fs.readFileSync(path.join(EXPORT, 'data.json'), 'utf8'));

const OUT_CONTENT = path.join(REPO, 'astro-src/content/blog');
const OUT_DATA = path.join(REPO, 'astro-src/data/blog');
const OUT_MEDIA = path.join(REPO, 'public/blog/media');
for (const d of [OUT_CONTENT, OUT_DATA, OUT_MEDIA]) fs.mkdirSync(d, { recursive: true });

// --- media on disk (what we actually copied) ---
const mediaOnDisk = new Set();
(function walk(dir, base) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, base);
    else mediaOnDisk.add(path.relative(base, full));
  }
})(path.join(EXPORT, 'media'), path.join(EXPORT, 'media'));

// copy media → public/blog/media
let copied = 0;
for (const rel of mediaOnDisk) {
  const src = path.join(EXPORT, 'media', rel);
  const dst = path.join(OUT_MEDIA, rel);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
  copied++;
}

// --- helpers ---
const stripWpComments = (h) => h.replace(/<!--\s*\/?wp:[^>]*-->/g, '');

function slugify(s) {
  return s.toLowerCase().trim()
    .replace(/<[^>]+>/g, '')
    .replace(/&[^;]+;/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// parse shortcode attributes: [dc_app_cta variant="x" title="y"]
function parseAttrs(s) {
  const out = {};
  const re = /(\w+)="([^"]*)"/g;
  let m;
  while ((m = re.exec(s))) out[m[1]] = m[2];
  return out;
}
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const APP_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 17L10 11L4 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const APP_BTN_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const MCP_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const MCP_BTN_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function ctaHtml(kind, attrs, slug, title) {
  const d = kind === 'app'
    ? { title: 'Try Desktop Commander App', description: 'Desktop Commander reads your files, runs commands, and automates workflows — all in natural language.', button_text: 'Download Free', url: 'https://desktopcommander.app/#download' }
    : { title: 'Install Desktop Commander MCP', description: 'Connect Claude to your local files and terminal. One-click install for Claude Desktop.', button_text: 'Install Free', url: 'https://desktopcommander.app/mcp' };
  const a = { variant: 'default', ...d, ...attrs };
  const vc = a.variant === 'minimal' ? ` dc-${kind}-cta-minimal` : a.variant === 'compact' ? ` dc-${kind}-cta-compact` : '';
  const icon = kind === 'app' ? APP_ICON : MCP_ICON;
  const btnIcon = kind === 'app' ? APP_BTN_ICON : MCP_BTN_ICON;
  const typeAttr = kind === 'mcp' ? ' data-cta-type="mcp"' : '';
  return `<div class="dc-${kind}-cta${vc}"><div class="dc-${kind}-cta-inner"><div class="dc-${kind}-cta-content"><div class="dc-${kind}-cta-icon">${icon}</div><h3 class="dc-${kind}-cta-title">${esc(a.title)}</h3><p class="dc-${kind}-cta-description">${esc(a.description)}</p></div><a href="${esc(a.url)}" class="dc-${kind}-cta-btn" data-post-slug="${esc(slug)}" data-post-title="${esc(title)}" data-cta-variant="${esc(a.variant)}"${typeAttr} target="_blank" rel="noopener">${esc(a.button_text)}${btnIcon}</a></div></div>`;
}

function expandShortcodes(h, slug, title) {
  return h.replace(/\[dc_(app|mcp)_cta([^\]]*)\]/g, (m, kind, rest) => ctaHtml(kind, parseAttrs(rest), slug, title));
}

function addHeadingIds(h) {
  const toc = [];
  const used = {};
  const out = h.replace(/<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/g, (m, tag, attrs, inner) => {
    if (/\bid=/.test(attrs)) {
      const idm = attrs.match(/id="([^"]+)"/);
      toc.push({ id: idm ? idm[1] : '', text: inner.replace(/<[^>]+>/g, '').trim(), level: tag === 'h2' ? 2 : 3 });
      return m;
    }
    let id = slugify(inner) || 'section';
    if (used[id] != null) { used[id]++; id = `${id}-${used[id]}`; } else used[id] = 0;
    toc.push({ id, text: inner.replace(/<[^>]+>/g, '').trim(), level: tag === 'h2' ? 2 : 3 });
    return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
  });
  return { html: out, toc };
}

function rewriteImages(h) {
  // rewrite any wp-content/uploads URL to /blog/media when the file is on disk; else keep as-is (CDN-only)
  return h.replace(/https?:\/\/[^\s"')]+\/wp-content\/uploads\/([^\s"')]+)/g, (full, after) => {
    const rel = after.replace(/\?.*$/, '');
    if (mediaOnDisk.has(rel)) return `/blog/media/${rel}`;
    return full; // CDN-only (8 known) — leave pointing at Jetpack CDN
  });
}

function relativizeLinks(h) {
  return h
    .replace(/https?:\/\/desktopcommander\.app\/blog\//g, '/blog/')
    .replace(/https?:\/\/blog\.desktopcommander\.app\//g, '/blog/')
    .replace(/https?:\/\/rk7f8a7274b9330-haqfg\.wpcomstaging\.com\//g, '/blog/');
}

// strip_shortcodes + strip_tags + collapse, truncate 157+"…"  (matches WP fallback)
function autoDescription(content) {
  let t = content.replace(/\[[^\]]*\]/g, '').replace(/<[^>]+>/g, ' ');
  t = t.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&[^;]+;/g, ' ');
  t = t.replace(/\s+/g, ' ').trim();
  if (t.length > 160) t = t.slice(0, 157) + '...';
  return t;
}

// FAQ extraction — mirror WP regex: <details>…<summary>…<span>Q</span>…</summary>…<div>A</div></details>
function extractFaq(content) {
  const items = [];
  const re = /<details[^>]*>[\s\S]*?<summary[^>]*>\s*<span>([\s\S]*?)<\/span>[\s\S]*?<\/summary>\s*<div[^>]*>([\s\S]*?)<\/div>\s*<\/details>/gi;
  let m;
  while ((m = re.exec(content))) {
    const q = m[1].replace(/<[^>]+>/g, '').trim();
    let a = m[2].replace(/<[^>]+>/g, '').trim();
    a = a.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0*39;|&#x27;|&apos;/g, "'").replace(/\s+/g, ' ').trim();
    if (q && a) items.push({ q, a });
  }
  return items;
}

// --- process posts ---
const postsMeta = [];
for (const p of DATA.posts) {
  let body = p.content;
  const faq = extractFaq(body);
  body = stripWpComments(body);
  body = expandShortcodes(body, p.slug, p.title);
  body = rewriteImages(body);
  body = relativizeLinks(body);
  const { html, toc } = addHeadingIds(body);
  body = html;

  const description = (p.meta_description && p.meta_description.trim())
    ? p.meta_description.trim()
    : (p.excerpt && p.excerpt.trim() ? p.excerpt.trim().replace(/<[^>]+>/g, '') : autoDescription(p.content));

  fs.writeFileSync(path.join(OUT_CONTENT, `${p.slug}.html`), body);
  postsMeta.push({
    id: p.id, slug: p.slug, title: p.title,
    date: p.date, modified: p.modified,
    author_login: p.author_login, author_id: p.author_id, author_name: p.author_name,
    categories: p.categories, category_names: p.category_names, tags: p.tags,
    description,
    description_source: (p.meta_description && p.meta_description.trim()) ? 'custom' : (p.excerpt ? 'excerpt' : 'auto'),
    featured_image: p.featured_image_rel ? `/blog/media/${p.featured_image_rel}` : (p.featured_image_url || ''),
    featured_image_w: p.featured_image_w, featured_image_h: p.featured_image_h,
    toc, faq,
  });
}
postsMeta.sort((a, b) => new Date(b.date) - new Date(a.date));

// pages
for (const pg of DATA.pages) {
  let body = relativizeLinks(rewriteImages(expandShortcodes(stripWpComments(pg.content), pg.slug, pg.title)));
  fs.writeFileSync(path.join(OUT_CONTENT, `page-${pg.slug}.html`), body);
}

fs.writeFileSync(path.join(OUT_DATA, 'posts.json'), JSON.stringify(postsMeta, null, 2));
fs.writeFileSync(path.join(OUT_DATA, 'authors.json'), JSON.stringify(DATA.authors, null, 2));
fs.writeFileSync(path.join(OUT_DATA, 'categories.json'), JSON.stringify(DATA.categories, null, 2));
fs.writeFileSync(path.join(OUT_DATA, 'pages.json'), JSON.stringify(DATA.pages.map(({ content, ...m }) => m), null, 2));
fs.writeFileSync(path.join(OUT_DATA, 'site.json'), JSON.stringify(DATA.site, null, 2));

console.log(`posts: ${postsMeta.length} | media copied: ${copied}`);
console.log(`auto-desc posts: ${postsMeta.filter(p => p.description_source === 'auto').map(p => p.slug).join(', ') || '(none)'}`);
console.log(`faq totals: ${postsMeta.reduce((n, p) => n + p.faq.length, 0)} Q&A across ${postsMeta.filter(p => p.faq.length).length} posts`);
console.log(`sample toc (${postsMeta[0].slug}): ${postsMeta[0].toc.length} headings`);
