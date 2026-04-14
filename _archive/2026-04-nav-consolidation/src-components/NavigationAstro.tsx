import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Download, ExternalLink, Menu, ChevronDown } from "lucide-react";
import dcLogo from "@/assets/dc-logo.png";
import { useState } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

interface NavigationAstroProps {
  hideInstall?: boolean;
}

// Use case pages data
const useCasePages = [
  { name: 'File Management', href: '/use-cases/file-management/', description: 'Organize, rename, and convert files' },
  { name: 'Knowledge Management', href: '/use-cases/knowledge-management/', description: 'Build searchable knowledge bases' },
  { name: 'Analyze Data', href: '/use-cases/analyze-data/', description: 'Process CSVs, logs, and datasets' },
  { name: 'Build Prototypes', href: '/use-cases/build-prototype/', description: 'Rapid app and tool development' },
  { name: 'Connect Apps', href: '/use-cases/connect-apps/', description: 'Automate cross-app workflows' },
];

// Astro-compatible Navigation - Redesigned for App-first positioning
const NavigationAstro = ({ hideInstall = false }: NavigationAstroProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMobileUseCasesOpen, setIsMobileUseCasesOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const { trackNavigation } = useAnalyticsAstro();
  
  const handleMobileNavClick = (linkText: string, destination: string, linkType: 'internal' | 'external' = 'internal') => {
    trackNavigation(linkText, destination, linkType);
    setIsSheetOpen(false);
  };

  const handleMobileDownloadClick = () => {
    trackDownloadRedirect('nav_mobile');
    setIsSheetOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 z-50 border-b border-dc-border bg-background/80 backdrop-blur-md transition-all duration-300" style={{ top: 'var(--banner-height, 0px)' }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a 
              href="https://desktopcommander.app" 
              className="hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <img src={dcLogo.src} alt="Desktop Commander" className="h-7 sm:h-8 w-auto min-w-[270px]" width="200" height="32" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Use Cases Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsUseCasesOpen(true)}
                onMouseLeave={() => setIsUseCasesOpen(false)}
              >
                <button className="flex items-center gap-1 text-white hover:text-white/80 font-medium text-sm px-3 py-2 rounded-md hover:bg-accent transition-colors">
                  <span>Use Cases</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isUseCasesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isUseCasesOpen && (
                  <div className="absolute left-0 top-full pt-2 z-50">
                    <div className="bg-[#1a1a2e] border border-dc-border rounded-lg shadow-xl py-2 min-w-[280px]">
                      {useCasePages.map((page) => (
                        <a
                          key={page.href}
                          href={page.href}
                          onClick={() => trackNavigation(page.name, page.href, 'internal')}
                          className="block px-4 py-3 hover:bg-white/10 transition-colors"
                        >
                          <div className="text-white font-medium text-sm">{page.name}</div>
                          <div className="text-gray-400 text-xs mt-0.5">{page.description}</div>
                        </a>
                      ))}
                      <div className="border-t border-dc-border mt-2 pt-2">
                        <a
                          href="/use-cases/"
                          onClick={() => trackNavigation('All Use Cases', '/use-cases/', 'internal')}
                          className="block px-4 py-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                        >
                          View all use cases →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="/library"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Prompts', '/library', 'internal')}
                >
                  Prompts
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="/mcp"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('MCP', '/mcp', 'internal')}
                >
                  MCP
                </a>
              </Button>

              <Button variant="ghost" size="sm" asChild>
                <a
                  href="/pricing"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Pricing', '/pricing', 'internal')}
                >
                  Pricing
                </a>
              </Button>

              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://desktopcommander.app/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Blog', 'https://desktopcommander.app/blog/', 'external')}
                >
                  Blog
                </a>
              </Button>

              <Button variant="ghost" size="sm" asChild>
                <a
                  href="/careers"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Careers', '/careers', 'internal')}
                >
                  Careers
                </a>
              </Button>
            </div>
          </div>

          {/* Desktop CTA */}
          {!hideInstall && (
            <div className="hidden lg:flex items-center gap-3">
              <Button size="default" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                <a 
                  href="/#download" 
                  className="flex items-center gap-2"
                  onClick={() => trackDownloadRedirect('nav_desktop')}
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          )}

          {/* Mobile Menu Trigger */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {/* Mobile Use Cases with Accordion */}
                <div>
                  <button 
                    onClick={() => setIsMobileUseCasesOpen(!isMobileUseCasesOpen)}
                    className="w-full flex items-center justify-between text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                  >
                    <span>Use Cases</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isMobileUseCasesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileUseCasesOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {useCasePages.map((page) => (
                        <a
                          key={page.href}
                          href={page.href}
                          onClick={() => handleMobileNavClick(page.name, page.href)}
                          className="text-base text-gray-300 px-2 py-1.5 hover:text-primary transition-colors"
                        >
                          {page.name}
                        </a>
                      ))}
                      <a
                        href="/use-cases/"
                        onClick={() => handleMobileNavClick('All Use Cases', '/use-cases/')}
                        className="text-base text-blue-400 px-2 py-1.5 hover:text-blue-300 transition-colors"
                      >
                        View all →
                      </a>
                    </div>
                  )}
                </div>
                <a 
                  href="/library" 
                  onClick={() => handleMobileNavClick('Prompts', '/library')}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  Prompts
                </a>
                <a 
                  href="/mcp" 
                  onClick={() => handleMobileNavClick('MCP', '/mcp')}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  MCP
                </a>
                <a
                  href="/pricing"
                  onClick={() => handleMobileNavClick('Pricing', '/pricing')}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="https://desktopcommander.app/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleMobileNavClick('Blog', 'https://desktopcommander.app/blog/', 'external')}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  Blog
                </a>
                <a
                  href="/careers"
                  onClick={() => handleMobileNavClick('Careers', '/careers')}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  Careers
                </a>
                {!hideInstall && (
                  <Button size="default" asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    <a 
                      href="/#download" 
                      className="flex items-center gap-2"
                      onClick={handleMobileDownloadClick}
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationAstro;
