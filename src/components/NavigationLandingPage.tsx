import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { Terminal, ChevronDown, ExternalLink, Menu, X, ArrowRight } from "lucide-react";
import dcLogo from "@/assets/dc-logo.png";
import { useState } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

// Landing Page specific Navigation with Download CTA
const NavigationLandingPage = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { trackNavigation, trackCustomEvent } = useAnalyticsAstro();
  
  const handleMobileNavClick = (linkText: string, destination: string, linkType: 'internal' | 'external' = 'internal') => {
    trackNavigation(linkText, destination, linkType);
    setIsSheetOpen(false);
  };

  const handleDownloadClick = () => {
    trackCustomEvent('download_cta_clicked', {
      location: 'navigation',
      button_text: 'Download DC'
    });
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
                  href="/library/"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Prompts', '/library/', 'internal')}
                >
                  Prompts
                </a>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:text-white/80 font-medium">
                    Community
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-dc-card border-dc-border">
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://discord.gg/desktop-commander" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => trackNavigation('Discord', 'https://discord.gg/desktop-commander', 'external')}
                    >
                      Discord
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://www.reddit.com/r/DesktopCommander/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => trackNavigation('Reddit', 'https://www.reddit.com/r/DesktopCommander/', 'external')}
                    >
                      Reddit
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:text-white/80 font-medium">
                    Resources
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-dc-card border-dc-border">
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://github.com/desktop-commander/desktop-commander" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => trackNavigation('GitHub', 'https://github.com/desktop-commander/desktop-commander', 'external')}
                    >
                      GitHub
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="/careers/" 
                      className="cursor-pointer"
                      onClick={() => trackNavigation('Careers', '/careers/', 'internal')}
                    >
                      Careers
                      <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-400 border-green-500/20 text-xs px-1.5 py-0">
                        Hiring
                      </Badge>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="https://desktopcommander.app/blog"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Blog', 'https://desktopcommander.app/blog', 'internal')}
                >
                  Blog
                </a>
              </Button>

              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="https://desktopcommander.app/about"
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('About', 'https://desktopcommander.app/about', 'internal')}
                >
                  About
                </a>
              </Button>
            </div>
          </div>
          
          {/* Desktop CTA - Join Waitlist */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              size="sm" 
              className="shadow-lg shadow-primary/20 group"
              asChild
            >
              <a 
                href="/product/early-access/"
                onClick={handleDownloadClick}
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-dc-card border-dc-border">
                <div className="flex flex-col gap-4 mt-8">
                  <Button variant="ghost" size="sm" asChild>
                    <a 
                      href="/library/"
                      className="text-white hover:text-white/80 font-medium justify-start"
                      onClick={() => handleMobileNavClick('Prompts', '/library/', 'internal')}
                    >
                      Prompts
                    </a>
                  </Button>
                  
                  <div className="border-t border-dc-border pt-4">
                    <p className="text-sm font-medium text-muted-foreground mb-2 px-3">Community</p>
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href="https://discord.gg/desktop-commander"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 font-medium justify-start w-full"
                        onClick={() => handleMobileNavClick('Discord', 'https://discord.gg/desktop-commander', 'external')}
                      >
                        Discord
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href="https://www.reddit.com/r/DesktopCommander/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 font-medium justify-start w-full"
                        onClick={() => handleMobileNavClick('Reddit', 'https://www.reddit.com/r/DesktopCommander/', 'external')}
                      >
                        Reddit
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="border-t border-dc-border pt-4">
                    <p className="text-sm font-medium text-muted-foreground mb-2 px-3">Resources</p>
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href="https://github.com/desktop-commander/desktop-commander"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 font-medium justify-start w-full"
                        onClick={() => handleMobileNavClick('GitHub', 'https://github.com/desktop-commander/desktop-commander', 'external')}
                      >
                        GitHub
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href="/careers/"
                        className="text-white hover:text-white/80 font-medium justify-start w-full"
                        onClick={() => handleMobileNavClick('Careers', '/careers/', 'internal')}
                      >
                        Careers
                        <Badge variant="secondary" className="ml-2 bg-green-500/10 text-green-400 border-green-500/20 text-xs">
                          Hiring
                        </Badge>
                      </a>
                    </Button>
                  </div>

                  <div className="border-t border-dc-border pt-4">
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href="https://desktopcommander.app/blog"
                        className="text-white hover:text-white/80 font-medium justify-start w-full"
                        onClick={() => handleMobileNavClick('Blog', 'https://desktopcommander.app/blog', 'internal')}
                      >
                        Blog
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href="https://desktopcommander.app/about"
                        className="text-white hover:text-white/80 font-medium justify-start w-full"
                        onClick={() => handleMobileNavClick('About', 'https://desktopcommander.app/about', 'internal')}
                      >
                        About
                      </a>
                    </Button>
                  </div>
                  
                  {/* Mobile CTA */}
                  <div className="border-t border-dc-border pt-4 mt-4">
                    <Button 
                      size="lg" 
                      className="w-full shadow-lg shadow-primary/20 group"
                      asChild
                    >
                      <a 
                        href="/product/early-access/"
                        onClick={() => {
                          handleDownloadClick();
                          setIsSheetOpen(false);
                        }}
                      >
                        Join the Waitlist
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

export default NavigationLandingPage;
