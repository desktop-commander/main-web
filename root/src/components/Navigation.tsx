import { Button } from "@/components/ui/button";
import { Terminal, ExternalLink } from "lucide-react";
const dcLogo = "/lovable-uploads/b2768463-fe98-491d-b457-bc0c76a04d60.png";
const Navigation = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dc-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={dcLogo} alt="Desktop Commander" className="h-8 w-auto" />
            
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#features" className="text-muted-foreground hover:text-foreground">
                Features
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#installation" className="text-muted-foreground hover:text-foreground">
                Installation
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#installation" className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Install
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;