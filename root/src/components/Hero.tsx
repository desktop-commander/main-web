import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MessageCircle, ArrowRight, Download, Terminal, Star, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dcHeroAnimation from "@/assets/dc-hero-animation-full.gif";
import dcLogo from "@/assets/dc-logo-dark.png";
import { getAssetPath } from "@/utils/assets";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [npmCount, setNpmCount] = useState(0);
  const [githubStars, setGithubStars] = useState(0);
  const [gifKey, setGifKey] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Restart GIF after full 17 seconds + 1 second buffer to ensure complete playthrough  
  useEffect(() => {
    const restartInterval = setInterval(() => {
      setGifKey(prev => prev + 1);
    }, 18000); // 18 seconds (17 second animation + 1 second buffer)

    return () => clearInterval(restartInterval);
  }, []);

  // Counter animations - slower and more dramatic
  useEffect(() => {
    if (isVisible) {
      // NPM Downloads counter (24k) - slower animation
      const npmTarget = 24;
      const npmDuration = 3500; // Increased from 2000ms
      const npmIncrement = npmTarget / (npmDuration / 16);
      
      let npmCurrent = 0;
      const npmTimer = setInterval(() => {
        npmCurrent += npmIncrement;
        if (npmCurrent >= npmTarget) {
          npmCurrent = npmTarget;
          clearInterval(npmTimer);
        }
        setNpmCount(Math.floor(npmCurrent));
      }, 16);

      // GitHub Stars counter (4.4k) - slower animation
      const githubTarget = 44; // We'll divide by 10 to show 4.4
      const githubDuration = 4000; // Increased from 2200ms
      const githubIncrement = githubTarget / (githubDuration / 16);
      
      let githubCurrent = 0;
      const githubTimer = setInterval(() => {
        githubCurrent += githubIncrement;
        if (githubCurrent >= githubTarget) {
          githubCurrent = githubTarget;
          clearInterval(githubTimer);
        }
        setGithubStars(Math.floor(githubCurrent));
      }, 16);

      return () => {
        clearInterval(npmTimer);
        clearInterval(githubTimer);
      };
    }
  }, [isVisible]);
  return (
    <section ref={heroRef} className="pt-48 pb-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:gap-20 lg:grid-cols-12">
          {/* Left: copy + CTA + badges */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Hero Text - Slower staggered fade-in */}
            <h1 className={`text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight transition-all duration-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              One Chat, Full Stack
            </h1>
            
            <p className={`text-xl text-muted-foreground mb-12 max-w-2xl lg:mx-0 mx-auto leading-relaxed transition-all duration-1200 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Give AI direct access to your system—manage files, automate terminal commands, and deploy in plain language
            </p>

            {/* CTA Buttons - Enhanced hover animations */}
            <div className={`flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center mb-12 transition-all duration-1200 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                variant="hero" 
                size="lg" 
                className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95" 
                asChild
              >
                <a href="#installation">
                  <Terminal className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Install
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-dc-surface hover:border-dc-accent/50 transform active:scale-95" 
                asChild
              >
                <a href="https://discord.gg/kQ27sNnZr7" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Join Discord
                </a>
              </Button>
            </div>

            {/* Works with section - Moved up and given more prominence */}
            <div className={`mb-8 pt-8 border-t border-dc-border/50 transition-all duration-1200 delay-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-sm text-muted-foreground mb-4 lg:text-left text-center">Connect to your toolkit</p>
              <div className="flex items-center lg:justify-start justify-center gap-6 opacity-60">
                <img 
                  src={getAssetPath("star-logo.png")} 
                  alt="Star logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
                <img 
                  src={getAssetPath("claude-desktop-logo.png")} 
                  alt="Claude Desktop logo" 
                  className="h-8 w-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
                <img 
                  src={getAssetPath("cursor-logo.png")} 
                  alt="Cursor IDE logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
                <img 
                  src={getAssetPath("vscode-new-logo.png")} 
                  alt="VS Code logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
                <img 
                  src={getAssetPath("client-logo-1.png")} 
                  alt="Client logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
                <img 
                  src={getAssetPath("client-logo-2.png")} 
                  alt="Client logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
                <img 
                  src={getAssetPath("client-logo-3.png")} 
                  alt="Client logo" 
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                />
              </div>
            </div>

            {/* Trust Badges - Moved after integration logos for better hierarchy */}
            <div className={`flex flex-wrap lg:justify-start justify-center gap-3 transition-all duration-1200 delay-2000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-xs w-48 transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group">
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20">
                  <Download className="h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">NPM Downloads</div>
                  <div className="font-semibold text-foreground text-xs">
                    {npmCount}k/week
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-xs w-48 transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group">
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20">
                  <Star className="h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">GitHub Stars</div>
                  <div className="font-semibold text-foreground text-xs">
                    {(githubStars / 10).toFixed(1)}k stars
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-xs w-48 transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group">
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20">
                  <TrendingUp className="h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">SMITHERY.COM</div>
                  <div className="font-semibold text-foreground text-xs">No.1 (Aug 2025)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: visualization - Slower staggered fade-in */}
          <div className={`lg:col-span-5 order-1 lg:order-2 transition-all duration-1200 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto lg:mx-0 w-full max-w-[680px]">
              <AspectRatio ratio={16 / 10} className="rounded-2xl border border-dc-border bg-dc-surface/50 shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <img
                  key={`hero-gif-${gifKey}`}
                  src={`${dcHeroAnimation}?v=${gifKey}`}
                  alt="Desktop Commander in action - AI-powered terminal and file management animation"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;