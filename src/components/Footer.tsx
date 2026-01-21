import { Button } from "@/components/ui/button";
import { Github, MessageCircle, Play, Package } from "lucide-react";
import dcLogo from "@/assets/dc-logo-dark.png";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

const Footer = () => {
  const { trackCustomEvent } = useAnalyticsAstro();

  return (
    <footer className="border-t border-dc-border bg-dc-surface/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={dcLogo.src} alt="Desktop Commander" className="h-8 w-8" loading="lazy" />
              <h3 className="text-xl font-bold text-foreground">Desktop Commander</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              AI that executes. Read files, run commands, and automate workflows — all in natural language.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/wonderwhy-er/DesktopCommanderMCP" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://discord.gg/kQ27sNnZr7" target="_blank" rel="noopener noreferrer" title="Discord">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.youtube.com/@EduardsRuzga" target="_blank" rel="noopener noreferrer" title="YouTube">
                  <Play className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/DCommander_MCP" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.npmjs.com/package/@wonderwhy-er/desktop-commander" target="_blank" rel="noopener noreferrer" title="NPM">
                  <Package className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/#download"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackDownloadRedirect('footer')}
                >
                  Download App
                </a>
              </li>
              <li>
                <a 
                  href="/mcp"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'MCP Server',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'mcp'
                  })}
                >
                  MCP Server
                </a>
              </li>
              <li>
                <a 
                  href="/library"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'Prompt Library',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'prompts'
                  })}
                >
                  Prompt Library
                </a>
              </li>
              <li>
                <a 
                  href="/#use-cases"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'Use Cases',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'use-cases'
                  })}
                >
                  Use Cases
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/#blog"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'Blog',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'blog'
                  })}
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="/mcp#faq"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'FAQ',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'faq'
                  })}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dc-border mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Desktop Commander.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a 
              href="https://legal.desktopcommander.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-smooth"
            >
              Terms
            </a>
            <a 
              href="https://legal.desktopcommander.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-smooth"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
