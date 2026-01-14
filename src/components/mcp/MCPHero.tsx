import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Star, Download, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const MCPHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className={`mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Free & Open Source
            </span>
          </div>

          {/* Headline */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Desktop Commander
            <span className="block text-primary">MCP Server</span>
          </h1>
          
          {/* Subhead */}
          <p className={`text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Give Claude and other AI assistants direct access to your file system, terminal, and development tools.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-3 justify-center mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              variant="hero" 
              size="lg" 
              className="flex items-center justify-center gap-2 group" 
              asChild
            >
              <a href="#installation">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center justify-center gap-2 border-dc-border hover:bg-dc-surface" 
              asChild
            >
              <a 
                href="https://github.com/wonderwhy-er/DesktopCommanderMCP" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a 
              href="https://www.npmjs.com/package/@wonderwhy-er/desktop-commander" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="h-4 w-4" />
              26k+ weekly downloads
            </a>
            <a 
              href="https://github.com/wonderwhy-er/DesktopCommanderMCP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Star className="h-4 w-4" />
              5.2k GitHub stars
            </a>
            <a 
              href="https://smithery.ai/server/@wonderwhy-er/desktop-commander" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <TrendingUp className="h-4 w-4" />
              Top Ranked on Smithery
            </a>
          </div>

          {/* App upsell */}
          <div className={`mt-12 pt-8 border-t border-dc-border transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-sm text-muted-foreground mb-3">
              Want a full-featured app with visual UI and model flexibility?
            </p>
            <a 
              href="/" 
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Try Desktop Commander App
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MCPHero;
