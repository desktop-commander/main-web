import { Button } from "@/components/ui/button";
import { Github, Twitter, BookOpen, Heart } from "lucide-react";
import dcLogo from "@/assets/dc-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-dc-border bg-dc-surface/50">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={dcLogo} alt="Desktop Commander" className="h-8 w-8" />
              <h3 className="text-xl font-bold text-foreground">Desktop Commander</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              The powerful MCP tool for developers. Manage files, deploy servers, and automate workflows with ease.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  GitHub Issues
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contributors
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dc-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Desktop Commander. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Built with
            <Heart className="h-4 w-4 text-primary" />
            for developers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;