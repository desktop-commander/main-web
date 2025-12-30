import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Download, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Astro-compatible Hero - Redesigned for App-first positioning
const HeroAstro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-16 lg:gap-20 lg:grid lg:grid-cols-12 lg:items-center">
          
          {/* Product image placeholder */}
          <div className={`w-full max-w-xl lg:max-w-none lg:col-span-6 lg:order-2 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto w-full">
              <AspectRatio 
                ratio={16 / 10} 
                className="rounded-xl lg:rounded-2xl border border-dc-border bg-dc-surface/50 shadow-elegant overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dc-surface to-dc-surface/50">
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm uppercase tracking-wide mb-2">Product Image</p>
                    <p className="text-xs">Coming soon</p>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>

          {/* Content section */}
          <div className="lg:col-span-6 text-center lg:text-left lg:order-1 w-full">
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 md:mb-10 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              AI that executes
            </h1>
            
            <p className={`text-lg sm:text-xl text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Desktop Commander reads your files, runs commands, and automates workflows — all in natural language.
            </p>

            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center items-center mb-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95 group" 
                asChild
              >
                <a href="#download">
                  <Download className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Download App
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* MCP Link */}
            <div className={`mb-10 md:mb-14 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <a 
                href="/mcp" 
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 text-sm"
              >
                Looking for MCP?
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className={`flex flex-col sm:flex-row sm:flex-wrap lg:justify-start justify-center gap-3 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <a 
                href="https://www.npmjs.com/package/@wonderwhy-er/desktop-commander" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[160px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group"
              >
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0">
                  <Download className="h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">Weekly Downloads</div>
                  <div className="font-semibold text-foreground text-xs">26k+</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/wonderwhy-er/DesktopCommanderMCP/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[160px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group"
              >
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0">
                  <Star className="h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">GitHub Stars</div>
                  <div className="font-semibold text-foreground text-xs">4.4k</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAstro;
