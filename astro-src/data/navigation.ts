/**
 * Single source of truth for the main site navigation.
 *
 * Consumed by:
 *   - astro-src/components/Navigation.astro    (desktop, server-rendered)
 *   - src/components/MobileMenu.tsx            (mobile drawer, React)
 *
 * Keep IA changes here — both nav surfaces will pick them up.
 *
 * Source of design: SEO project / improvements / nav mega-menu
 * (audit items #4, #12, #26)
 */

export type NavLink = {
  label: string;
  href: string;
  /** Optional one-liner shown beneath the label in mega-menus */
  description?: string;
  /** Optional small badge after the label (e.g. "MCP", "New") */
  badge?: string;
  external?: boolean;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type MegaMenu = {
  label: string;
  columns: NavColumn[];
  /** Optional footer link rendered below the columns (e.g. "View all use cases →") */
  footer?: NavLink;
};

// ---------------------------------------------------------------------------
// Use Cases mega-menu
// ---------------------------------------------------------------------------

export const useCasesMenu: MegaMenu = {
  label: 'Use Cases',
  columns: [
    {
      heading: 'By role',
      links: [
        {
          label: 'For builders',
          href: '/use-cases/build-prototype/',
          description: 'Prototype, scripts, dev workflows',
        },
        {
          label: 'For knowledge workers',
          href: '/use-cases/knowledge-management/',
          description: 'Notes, research, second brain',
        },
        {
          label: 'For data analysts',
          href: '/use-cases/analyze-data/',
          description: 'CSVs, logs, ad-hoc analysis',
        },
      ],
    },
    {
      heading: 'All use cases',
      links: [
        { label: 'File Management', href: '/use-cases/file-management/' },
        { label: 'Knowledge Management', href: '/use-cases/knowledge-management/' },
        { label: 'Analyze Data', href: '/use-cases/analyze-data/' },
        { label: 'Build Prototypes', href: '/use-cases/build-prototype/' },
        { label: 'Connect Apps', href: '/use-cases/connect-apps/' },
      ],
    },
    {
      heading: 'Time savers',
      links: [
        { label: 'HEIC → JPG', href: '/use-cases/file-management/heic-to-jpg/' },
        { label: 'PDF → PNG', href: '/use-cases/file-management/pdf-to-png/' },
        { label: 'WebP → JPG', href: '/use-cases/file-management/webp-to-jpg/' },
        { label: 'PNG → JPG', href: '/use-cases/file-management/png-to-jpg/' },
      ],
    },
  ],
  footer: { label: 'View all use cases →', href: '/use-cases/' },
};

// ---------------------------------------------------------------------------
// Resources mega-menu (absorbs the standalone "Blog" item)
// ---------------------------------------------------------------------------

export const resourcesMenu: MegaMenu = {
  label: 'Resources',
  columns: [
    {
      heading: 'Resources',
      links: [
        { label: 'All articles', href: '/blog/' },
        { label: 'Prompt Library', href: '/library/prompts/' },
        { label: 'MCP server', href: '/mcp/' },
      ],
    },
    {
      heading: 'Popular guides',
      links: [
        { label: 'Best MCP servers', href: '/blog/best-mcp-servers/' },
        { label: 'What is an MCP server?', href: '/blog/what-is-an-mcp-server-and-how-it-works-in-plain-english/' },
        { label: 'Zettelkasten in Obsidian', href: '/blog/zettelkasten-obsidian/' },
        { label: 'Best Obsidian plugins', href: '/blog/best-obsidian-plugins/' },
        { label: 'Obsidian Markdown cheatsheet', href: '/blog/obsidian-markdown-cheatsheet-every-syntax-you-actually-need/' },
      ],
    },
    {
      heading: 'Community & dev',
      links: [
        { label: 'Discord', href: 'https://discord.gg/pyXshw54', external: true },
        {
          label: 'GitHub',
          href: 'https://github.com/wonderwhy-er/DesktopCommanderMCP',
          external: true,
          badge: 'MCP',
        },
        { label: 'Careers', href: '/careers/' },
        { label: 'About', href: 'https://blog.desktopcommander.app/about/', external: true },
      ],
    },
  ],
  footer: { label: 'View all guides →', href: '/blog/' },
};

// ---------------------------------------------------------------------------
// Flat top-level items rendered alongside the mega-menus
// ---------------------------------------------------------------------------

export const flatNavLinks: NavLink[] = [
  { label: 'Prompts', href: '/library/' },
  { label: 'MCP', href: '/mcp/' },
  { label: 'Pricing', href: '/pricing/' },
];

// Order in which top-level items appear in the desktop nav.
// `mega:<label>` slots a mega-menu, anything else is treated as a flat link href.
export const navOrder: ReadonlyArray<string> = [
  'mega:Use Cases',
  '/library/',
  '/mcp/',
  '/pricing/',
  'mega:Resources',
];
