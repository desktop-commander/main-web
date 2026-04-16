/**
 * schema.org JSON-LD definitions for Desktop Commander.
 *
 * These objects are consumed by `Layout.astro` via the `jsonLd` prop and
 * emitted inside `<script type="application/ld+json">` tags.
 *
 * Keep the canonical `@id` values stable — other pages can reference them
 * (e.g. a blog `Article` can point `publisher` at `#organization`) without
 * redefining the full node.
 */

export const SITE_ORIGIN = 'https://desktopcommander.app';

/**
 * Organization node for the publisher entity.
 *
 * Rendered on the homepage only. Other pages can reference it by `@id`:
 *   { "@type": "Article", "publisher": { "@id": "https://desktopcommander.app/#organization" } }
 *
 * Source of truth for legal/corporate facts (legalName, founders, address,
 * foundingDate) — update here, not in page-level overrides.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_ORIGIN}/#organization`,
  name: 'Desktop Commander',
  legalName: 'Desktop Commander SIA',
  url: `${SITE_ORIGIN}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_ORIGIN}/favicon-512x512.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_ORIGIN}/favicon-512x512.png`,
  description:
    'Desktop Commander reads your files, runs commands, and automates workflows — all in natural language.',
  foundingDate: '2025',
  founder: [
    {
      '@type': 'Person',
      name: 'Eduards Ruzga',
      sameAs: [
        'https://github.com/wonderwhy-er',
        'https://x.com/wonderwhy_er',
        'https://wonderwhy-er.medium.com/',
        'https://www.youtube.com/@EduardsRuzga',
      ],
    },
    {
      '@type': 'Person',
      name: 'Dmitry Sergeev',
    },
    {
      '@type': 'Person',
      name: 'Lauris Lietavietis',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Elizabetes iela 8 - 6',
    addressLocality: 'Rīga',
    postalCode: 'LV-1010',
    addressCountry: 'LV',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'team@desktopcommander.app',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://github.com/wonderwhy-er/DesktopCommanderMCP',
    'https://www.linkedin.com/company/desktop-commander/',
    'https://x.com/desktopcommandr',
    'https://www.youtube.com/@EduardsRuzga',
    'https://discord.gg/pyXshw54',
    'https://www.npmjs.com/package/@wonderwhy-er/desktop-commander',
  ],
};
