/**
 * JSON-LD builders for the blog — mirror the WordPress theme output exactly
 * (functions.php: desktopcommander_output_jsonld_schema + _faq_schema).
 *
 * Posts emit a @graph node [WebSite, WebPage, Article] plus a separate FAQPage
 * node (when the post has an FAQ). Author archives emit [WebSite, ProfilePage, Person].
 */
import { site, type Author, type BlogPost } from './posts';

const ORIGIN = 'https://desktopcommander.app';
const HOME = `${ORIGIN}/blog/`;

const abs = (u: string) => (u.startsWith('http') ? u : `${ORIGIN}${u}`);
const wordCount = (html: string) => {
  const t = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return t ? t.split(' ').length : 0;
};

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${HOME}#website`,
    url: HOME,
    name: site.name,
    description: site.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${HOME}?s={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function personNode(author?: Author) {
  if (!author) return undefined;
  const url = `${HOME}author/${author.login}/`;
  const node: Record<string, unknown> = { '@type': 'Person', '@id': `${url}#person`, name: author.display_name, url };
  if (author.avatar_url) node.image = { '@type': 'ImageObject', url: author.avatar_url, width: 400, height: 400 };
  if (author.bio) node.description = author.bio;
  const sameAs = [author.linkedin, author.x_url, author.github].filter(Boolean);
  if (sameAs.length) node.sameAs = sameAs;
  return node;
}

export function articleGraph(post: BlogPost, author?: Author) {
  const permalink = `${HOME}${post.slug}/`;
  const article: Record<string, unknown> = {
    '@type': 'Article',
    '@id': `${permalink}#article`,
    isPartOf: { '@id': `${permalink}#webpage` },
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.modified,
    mainEntityOfPage: permalink,
    author: personNode(author),
    publisher: { '@type': 'Organization', name: site.name, url: HOME },
    wordCount: wordCount(post.body),
  };
  if (post.featured_image) {
    article.image = {
      '@type': 'ImageObject',
      url: abs(post.featured_image),
      width: post.featured_image_w || 1200,
      height: post.featured_image_h || 630,
    };
  }
  const webpage = {
    '@type': 'WebPage',
    '@id': `${permalink}#webpage`,
    url: permalink,
    name: post.title,
    isPartOf: { '@id': `${HOME}#website` },
    datePublished: post.date,
    dateModified: post.modified,
  };
  return { '@context': 'https://schema.org', '@graph': [websiteNode(), webpage, article] };
}

export function faqPage(faq: { q: string; a: string }[]) {
  if (!faq || !faq.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function profileGraph(author: Author) {
  const url = `${HOME}author/${author.login}/`;
  const profile = {
    '@type': 'ProfilePage',
    '@id': `${url}#profile`,
    url,
    name: author.display_name,
    isPartOf: { '@id': `${HOME}#website` },
    mainEntity: { '@id': `${url}#person` },
  };
  return { '@context': 'https://schema.org', '@graph': [websiteNode(), profile, personNode(author)] };
}
