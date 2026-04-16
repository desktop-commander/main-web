import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Download, Terminal, Menu, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';
import { useAnalyticsAstro } from '@/hooks/useAnalyticsAstro';
import {
  navOrder,
  flatNavLinks,
  useCasesMenu,
  resourcesMenu,
  type MegaMenu,
  type NavLink,
} from '../../astro-src/data/navigation';

const flatByHref = new Map(flatNavLinks.map((l) => [l.href, l]));
const megaByKey: Record<string, MegaMenu> = {
  [`mega:${useCasesMenu.label}`]: useCasesMenu,
  [`mega:${resourcesMenu.label}`]: resourcesMenu,
};

interface MobileMenuProps {
  // SEO #10 — passed from Navigation.astro via Astro.url.pathname so the
  // primary CTA can switch to "Install MCP" on /mcp routes.
  pathname?: string;
}

const MobileMenu = ({ pathname = '/' }: MobileMenuProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const { trackNavigation } = useAnalyticsAstro();

  const isMcpPage = pathname.startsWith('/mcp');
  const ctaLabel = isMcpPage ? 'Install MCP' : 'Download App';
  const ctaHref = isMcpPage ? '/mcp#installation' : '/#download';

  const handleNavClick = (link: NavLink | { label: string; href: string; external?: boolean }) => {
    trackNavigation(link.label, link.href, link.external ? 'external' : 'internal');
    setIsSheetOpen(false);
  };

  const renderLink = (link: NavLink, opts: { compact?: boolean } = {}) => (
    <a
      key={link.href + link.label}
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      onClick={() => handleNavClick(link)}
      className={`flex items-center justify-between gap-2 ${opts.compact ? 'text-sm text-gray-300' : 'text-base text-white'} px-2 py-1.5 hover:text-primary transition-colors`}
    >
      <span className="flex items-center gap-2">
        {link.label}
        {link.badge && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-300 bg-blue-500/15 border border-blue-400/20 rounded px-1.5 py-0.5">{link.badge}</span>
        )}
      </span>
      {link.external && <ExternalLink className="h-3 w-3 text-gray-500" />}
    </a>
  );

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[400px] overflow-y-auto">
        <nav className="flex flex-col gap-2 mt-8">
          {navOrder.map((slot) => {
            if (slot.startsWith('mega:')) {
              const menu = megaByKey[slot];
              if (!menu) return null;
              const isOpen = openMega === slot;
              return (
                <div key={slot} className="border-b border-dc-border/50 pb-2">
                  <button
                    type="button"
                    onClick={() => setOpenMega(isOpen ? null : slot)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-lg font-medium px-2 py-2 hover:text-primary transition-colors"
                  >
                    <span>{menu.label}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="mt-1 ml-2 flex flex-col gap-3">
                      {menu.columns.map((col) => (
                        <div key={col.heading}>
                          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 px-2 mb-1 mt-2">{col.heading}</h4>
                          <div className="flex flex-col">
                            {col.links.map((l) => renderLink(l, { compact: true }))}
                          </div>
                        </div>
                      ))}
                      {menu.footer && (
                        <a
                          href={menu.footer.href}
                          onClick={() => handleNavClick(menu.footer!)}
                          className="text-base text-blue-400 hover:text-blue-300 px-2 py-1.5 mt-1 transition-colors"
                        >{menu.footer.label}</a>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            const link = flatByHref.get(slot);
            if (!link) return null;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link)}
                className="text-lg font-medium px-2 py-2 hover:text-primary transition-colors"
              >{link.label}</a>
            );
          })}

          <Button size="default" asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            <a
              href={ctaHref}
              className="flex items-center gap-2"
              onClick={() => {
                if (isMcpPage) {
                  // Match Navigation.astro's event name for /mcp nav CTA.
                  const ph = (window as unknown as { posthog?: { capture: (e: string, p?: object) => void } }).posthog;
                  if (ph) ph.capture('install_mcp_redirect', { location: 'mobile_menu' });
                } else {
                  trackDownloadRedirect('mobile_menu');
                }
                setIsSheetOpen(false);
              }}
            >
              {isMcpPage ? <Terminal className="h-4 w-4" /> : <Download className="h-4 w-4" />}
              {ctaLabel}
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
