import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Play, Package } from "lucide-react";
import dcLogo from "@/assets/dc-logo-dark.png";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  /** Fired alongside the standard navigation_clicked event */
  onClickExtra?: () => void;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const Footer = () => {
  const { trackCustomEvent } = useAnalyticsAstro();
  const currentYear = new Date().getFullYear();
  const hubSpotScriptUrl = 'https://js-eu1.hs-scripts.com/146727725.js';

  // Mirrors the top-nav IA (see astro-src/data/navigation.ts).
  const columns: FooterColumn[] = [
    {
      heading: 'Product',
      links: [
        {
          label: 'Download App',
          href: '/#download',
          onClickExtra: () => trackDownloadRedirect('footer'),
        },
        { label: 'MCP Server', href: '/mcp/' },
        { label: 'Prompt Library', href: '/library/' },
        { label: 'Pricing', href: '/pricing/' },
      ],
    },
    {
      heading: 'Use Cases',
      links: [
        { label: 'For builders', href: '/use-cases/build-prototype/' },
        { label: 'For knowledge workers', href: '/use-cases/knowledge-management/' },
        { label: 'For data analysts', href: '/use-cases/analyze-data/' },
        { label: 'File Management', href: '/use-cases/file-management/' },
        { label: 'All use cases', href: '/use-cases/' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '/blog/' },
        { label: 'AI value comparison', href: '/best-value-ai/' },
        { label: 'Discord', href: 'https://discord.gg/pyXshw54', external: true },
        {
          label: 'GitHub',
          href: 'https://github.com/wonderwhy-er/DesktopCommanderMCP',
          external: true,
        },
        { label: 'Careers', href: '/careers/' },
      ],
    },
  ];

  const handleLinkClick = (link: FooterLink, column: FooterColumn) => {
    link.onClickExtra?.();
    trackCustomEvent('navigation_clicked', {
      button_text: link.label,
      button_location: 'footer',
      link_type: link.external ? 'external' : 'internal',
      section: column.heading.toLowerCase().replace(/\s+/g, '-'),
      destination: link.href,
    });
  };

  const openHubSpotChat = () => {
    if (typeof window === 'undefined') {
      return;
    }

    trackCustomEvent('support_chat_opened', {
      button_location: 'footer',
      provider: 'hubspot',
    });

    const hubspotWindow = window as any;
    const openWidget = () => {
      const widget = hubspotWindow.HubSpotConversations?.widget;

      if (!widget) {
        return;
      }

      const status = widget.status?.();
      if (status?.loaded) {
        widget.open?.();
        return;
      }

      widget.load?.({ widgetOpen: true });
    };

    hubspotWindow.hsConversationsSettings = {
      ...(hubspotWindow.hsConversationsSettings || {}),
      loadImmediately: false,
    };

    if (hubspotWindow.HubSpotConversations) {
      openWidget();
      return;
    }

    hubspotWindow.hsConversationsOnReady = [
      ...(hubspotWindow.hsConversationsOnReady || []),
      openWidget,
    ];

    if (document.getElementById('hs-script-loader')) {
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = hubSpotScriptUrl;
    document.body.appendChild(script);
  };

  return (
    <footer className="border-t border-dc-border bg-dc-surface/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        {/* Brand row */}
        <div className="mb-10 md:mb-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <img src={dcLogo.src} alt="Desktop Commander" className="h-8 w-8" loading="lazy" />
            <h3 className="text-xl font-bold text-foreground">Desktop Commander</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
            AI that executes. Read files, run commands, and automate workflows — all in natural language.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/wonderwhy-er/DesktopCommanderMCP" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://discord.gg/pyXshw54" target="_blank" rel="noopener noreferrer" title="Discord">
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.youtube.com/@EduardsRuzga" target="_blank" rel="noopener noreferrer" title="YouTube">
                <Play className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com/desktopcommandr" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.npmjs.com/package/@wonderwhy-er/desktop-commander" target="_blank" rel="noopener noreferrer" title="NPM">
                <Package className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="mt-5">
            <Button
              type="button"
              variant="outline"
              onClick={openHubSpotChat}
              className="group h-11 gap-2 rounded-lg border-white/15 bg-white/[0.06] px-5 text-white shadow-sm shadow-black/10 backdrop-blur-sm hover:border-primary/45 hover:bg-white/[0.1] hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-primary transition-smooth group-hover:text-dc-blue-glow" />
              Chat with us
            </Button>
          </div>
        </div>

        {/* Link columns — 3 across on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {columns.map((column) => (
            <div key={column.heading}>
              <h4 className="font-semibold text-foreground mb-4">{column.heading}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                      onClick={() => handleLinkClick(link, column)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dc-border mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Desktop Commander.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://legal.desktopcommander.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth"
            >
              Terms
            </a>
            <a
              href="https://legal.desktopcommander.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth"
            >
              Privacy
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== 'undefined' && (window as any).Cookiebot) {
                  (window as any).Cookiebot.renew();
                }
              }}
              className="hover:text-primary transition-smooth"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
