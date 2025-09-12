import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Terminal, ChevronDown, ExternalLink } from "lucide-react";

const dcLogo = "/lovable-uploads/b2768463-fe98-491d-b457-bc0c76a04d60.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dc-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src={dcLogo} alt="Desktop Commander" className="h-8 w-auto" />
            
            <div className="hidden md:flex items-center gap-6">
              <Button variant="ghost" size="sm" asChild>
                <a href="#use-cases" className="text-white hover:text-white/80 font-medium">
                  Use Cases
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="https://library.desktopcommander.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 font-medium"
                >
                  Prompts
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a href="#community" className="text-white hover:text-white/80 font-medium">
                  Community
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
                    <a href="#blog" className="flex items-center">
                      Blog
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#faq" className="flex items-center">
                      FAQ
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://github.com/wonderwhy-er/DesktopCommanderMCP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      GitHub
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button size="default" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              <a href="#installation" className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Install
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;