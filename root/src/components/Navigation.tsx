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
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const { trackDownload, trackNavigation, trackCommunity } = useAnalytics();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Helper function to navigate to main page sections
  const navigateToSection = (sectionId: string, trackingLabel: string, trackingLocation?: string) => {
    if (location.pathname === '/') {
      // Already on main page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Navigate to main page with hash - the Index page will handle the scrolling
      navigate(`/#${sectionId}`);
    }
    trackNavigation(trackingLabel, `/#${sectionId}`);
  };
  
  const handleMobileNavClick = (label: string, sectionId: string, type?: string) => {
    setIsSheetOpen(false);
    if (type === 'external') {
      trackNavigation(label, sectionId, type);
    } else if (type === 'internal') {
      trackNavigation(label, sectionId, type);
    } else if (sectionId.startsWith('#')) {
      // This is a section link
      const id = sectionId.replace('#', '');
      navigateToSection(id, label);
    } else {
      trackNavigation(label, sectionId);
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
              <Button variant="ghost" size="sm">
                <button 
                  onClick={() => navigateToSection('use-cases', 'Use Cases')}
                  className="text-white hover:text-white/80 font-medium"
                >
                  Use Cases
                </button>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="/library/" 
                  className="text-white hover:text-white/80 font-medium"
                  onClick={() => trackNavigation('Prompts', '/library/', 'internal')}
                >
                  Prompts
                </a>
              </Button>
              
              <Button variant="ghost" size="sm">
                <button 
                  onClick={() => navigateToSection('community', 'Community')}
                  className="text-white hover:text-white/80 font-medium"
                >
                  Community
                </button>
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
                  <DropdownMenuItem>
                    <button 
                      onClick={() => navigateToSection('blog', 'Blog')}
                      className="flex items-center w-full"
                    >
                      Blog
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button 
                      onClick={() => navigateToSection('faq', 'FAQ')}
                      className="flex items-center w-full"
                    >
                      FAQ
                    </button>
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
            <Button size="default" className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2">
              <button 
                onClick={() => {
                  navigateToSection('installation', 'Install');
                  trackDownload('Install', 'navigation_header');
                }}
                className="flex items-center gap-2"
              >
                <Terminal className="h-4 w-4" />
                Install
              </button>
            </Button>

            {/* Mobile Install Button - Icon only */}
            <Button size="sm" className="sm:hidden bg-blue-600 hover:bg-blue-700 text-white p-2">
              <button 
                onClick={() => {
                  navigateToSection('installation', 'Install');
                  trackDownload('Install', 'navigation_header_mobile');
                }}
                className="flex items-center"
              >
                <Terminal className="h-4 w-4" />
              </button>
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
                  <button 
                    onClick={() => handleMobileNavClick('Use Cases', '#use-cases')}
                    className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors w-full text-left"
                  >
                    Use Cases
                  </button>
                  
                  <a 
                    href="/library/" 
                    className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors"
                    onClick={() => handleMobileNavClick('Prompts', '/library/', 'internal')}
                  >
                    Prompts
                  </a>
                  
                  <button 
                    onClick={() => handleMobileNavClick('Community', '#community')}
                    className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors w-full text-left"
                  >
                    Community
                  </button>
                  
                  <a 
                    href="/careers" 
                    className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors"
                    onClick={() => handleMobileNavClick('Careers', '/careers')}
                  >
                    Careers
                  </a>
                  
                  <div className="border-t border-dc-border pt-4">
                    <p className="px-4 py-2 text-sm text-muted-foreground font-medium">Resources</p>
                    
                    <button 
                      onClick={() => handleMobileNavClick('Blog', '#blog')}
                      className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors w-full text-left"
                    >
                      Blog
                    </button>
                    
                    <button 
                      onClick={() => handleMobileNavClick('FAQ', '#faq')}
                      className="flex items-center px-4 py-3 text-foreground hover:bg-dc-surface rounded-lg transition-colors w-full text-left"
                    >
                      FAQ
                    </button>
                    
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
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <button 
                        onClick={() => {
                          setIsSheetOpen(false);
                          navigateToSection('installation', 'Install');
                          trackDownload('Install', 'navigation_mobile_menu');
                        }}
                        className="flex items-center justify-center gap-2 w-full"
                      >
                        <Terminal className="h-4 w-4" />
                        Install Desktop Commander
                      </button>
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