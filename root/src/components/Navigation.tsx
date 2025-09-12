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
          <div className="flex items-center gap-3">
            <img src={dcLogo} alt="Desktop Commander" className="h-8 w-auto" />
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#use-cases" className="text-muted-foreground hover:text-foreground">
                Use Cases
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a href="#prompts" className="text-muted-foreground hover:text-foreground">
                Prompts
              </a>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  Resources
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <a href="#blog" className="flex items-center">
                    Blog
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#community" className="flex items-center">
                    Community
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
                <DropdownMenuItem asChild>
                  <a href="#faq" className="flex items-center">
                    FAQ
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
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