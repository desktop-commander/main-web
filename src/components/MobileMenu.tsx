import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Download, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

// Use case pages data
const useCasePages = [
  { name: 'File Management', href: '/use-cases/file-management/' },
  { name: 'Knowledge Management', href: '/use-cases/knowledge-management/' },
  { name: 'Analyze Data', href: '/use-cases/analyze-data/' },
  { name: 'Build Prototypes', href: '/use-cases/build-prototype/' },
  { name: 'Connect Apps', href: '/use-cases/connect-apps/' },
];

// Mobile menu drawer - React component for interactivity
const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);

  const handleNavClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {/* Use Cases Accordion */}
          <div>
            <button 
              onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
              className="w-full flex items-center justify-between text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
            >
              <span>Use Cases</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isUseCasesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isUseCasesOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {useCasePages.map((page) => (
                  <a
                    key={page.href}
                    href={page.href}
                    onClick={handleNavClick}
                    className="text-base text-gray-300 px-2 py-1.5 hover:text-primary transition-colors"
                  >
                    {page.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a 
            href="/library" 
            onClick={handleNavClick}
            className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
          >
            Prompts
          </a>
          <a 
            href="/mcp" 
            onClick={handleNavClick}
            className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
          >
            MCP
          </a>
          <a 
            href="https://desktopcommander.app/blog/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
          >
            Blog
          </a>
          <a 
            href="/careers" 
            onClick={handleNavClick}
            className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
          >
            Careers
          </a>
          <Button size="default" asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            <a 
              href="/#download" 
              className="flex items-center gap-2"
              onClick={() => {
                trackDownloadRedirect('mobile_menu');
                handleNavClick();
              }}
            >
              <Download className="h-4 w-4" />
              Download
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
