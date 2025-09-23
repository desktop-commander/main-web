import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Terminal, ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import dcLogo from "@/assets/dc-logo.png";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useState } from "react";

const Navigation = () => {
  const { trackDownload, trackNavigation, trackCommunity } = useAnalytics();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const handleMobileNavClick = (label: string, href: string, type?: string) => {
    setIsSheetOpen(false);
    if (type === 'external') {
      trackNavigation(label, href, type);
    } else {
      trackNavigation(label, href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dc-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a 
              href="https://desktopcommander.app" 
              className="hover:opacity-80 transition-opacity"
              onClick={() => trackNavigation('Logo', 'https://desktopcommander.app', 'external')}
            >
              <img src={dcLogo} alt="Desktop Commander" className="h-7 sm:h-8 w-auto" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="#use-cases" 
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Use Cases', '#use-cases')}
                >
                  Use Cases
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="https://library.desktopcommander.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Prompts', 'https://library.desktopcommander.app/', 'external')}
                >
                  Prompts
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="#community" 
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Community', '#community')}
                >
                  Community
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="/careers" 
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Careers', '/careers')}
                >
                  Careers
                </a>
              </Button>
              
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:text-white/80 font-medium">
                    Resources
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <a 
                      href="#blog" 
                      className="flex items-center"
                      onClick={() => trackNavigation('Blog', '#blog')}
                    >
                      Blog
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="#faq" 
                      className="flex items-center"
                      onClick={() => trackNavigation('FAQ', '#faq')}
                    >
                      FAQ
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://github.com/wonderwhy-er/DesktopCommanderMCP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                      onClick={() => trackCommunity('github', 'navigation_dropdown', 'GitHub')}
                    >
                      GitHub
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Desktop Install Button */}
            <Button size="default" asChild className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2">
              <a 
                href="#installation" 
                className="flex items-center gap-2"
                onClick={() => trackDownload('Install', 'navigation_header')}
              >
                <Terminal className="h-4 w-4" />
                Install
              </a>
            </Button>

            {/* Mobile Install Button - Icon only */}
            <Button size="sm" asChild className="sm:hidden bg-blue-600 hover:bg-blue-700 text-white p-2">
              <a 
                href="#installation" 
                className="flex items-center"
                onClick={() => trackDownload('Install', 'navigation_header_mobile')}
              >
                <Terminal className="h-4 w-4" />
              </a>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden text-white p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-l border-dc-border">
                <div className="flex flex-col space-y-4 mt-6">
                  <a 
                    href="#use-cases" 
                    className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors"
                    onClick={() => handleMobileNavClick('Use Cases', '#use-cases')}
                  >
                    Use Cases
                  </a>
                  
                  <a 
                    href="https://library.desktopcommander.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors"
                    onClick={() => handleMobileNavClick('Prompts', 'https://library.desktopcommander.app/', 'external')}
                  >
                    Prompts
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  
                  <a 
                    href="#community" 
                    className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors"
                    onClick={() => handleMobileNavClick('Community', '#community')}
                  >
                    Community
                  </a>
                  
                  <a 
                    href="/careers" 
                    className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors"
                    onClick={() => handleMobileNavClick('Careers', '/careers')}
                  >
                    Careers
                  </a>
                  
                  <div className="border-t border-dc-border pt-4">
                    <p className="px-4 py-2 text-sm text-muted-foreground font-medium">Resources</p>
                    
                    <a 
                      href="#blog" 
                      className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors"
                      onClick={() => handleMobileNavClick('Blog', '#blog')}
                    >
                      Blog
                    </a>
                    
                    <a 
                      href="#faq" 
                      className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors"
                      onClick={() => handleMobileNavClick('FAQ', '#faq')}
                    >
                      FAQ
                    </a>
                    
                    <a 
                      href="https://github.com/wonderwhy-er/DesktopCommanderMCP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors"
                      onClick={() => {
                        setIsSheetOpen(false);
                        trackCommunity('github', 'navigation_mobile', 'GitHub');
                      }}
                    >
                      GitHub
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  
                  {/* Mobile Install Button in Menu */}
                  <div className="border-t border-dc-border pt-4">
                    <Button size="lg" asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <a 
                        href="#installation" 
                        className="flex items-center justify-center gap-2"
                        onClick={() => {
                          setIsSheetOpen(false);
                          trackDownload('Install', 'navigation_mobile_menu');
                        }}
                      >
                        <Terminal className="h-4 w-4" />
                        Install Desktop Commander
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;