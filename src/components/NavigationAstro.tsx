import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Download, ExternalLink, Menu } from "lucide-react";
import dcLogo from "@/assets/dc-logo.png";
import { useState } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

// Astro-compatible Navigation - Redesigned for App-first positioning
const NavigationAstro = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { trackNavigation } = useAnalyticsAstro();
  
  const handleMobileNavClick = (linkText: string, destination: string, linkType: 'internal' | 'external' = 'internal') => {
    trackNavigation(linkText, destination, linkType);
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
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="/#use-cases"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Use Cases', '/#use-cases', 'internal')}
                >
                  Use Cases
                </a>
              </Button>
              
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
          <div className="hidden lg:flex items-center gap-3">
            <Button size="default" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              <a 
                href="/#download" 
                className="flex items-center gap-2"
                onClick={() => trackNavigation('Download', '/#download', 'internal')}
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a 
                  href="/#use-cases" 
                  onClick={() => handleMobileNavClick('Use Cases', '/#use-cases')}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  Use Cases
                </a>
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
                <Button size="default" asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                  <a 
                    href="/#download" 
                    className="flex items-center gap-2"
                    onClick={() => handleMobileNavClick('Download', '/#download')}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationAstro;
