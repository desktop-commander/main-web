import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MessageCircle, ArrowRight, Download, Terminal, Star, TrendingUp, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dcHeroAnimation from "@/assets/hero.gif";
import dcLogo from "@/assets/dc-logo-dark.png";
import { getAssetPath } from "@/utils/assets";
import { useAnalytics } from "@/hooks/useAnalytics";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [npmCount, setNpmCount] = useState(0);
  const [githubStars, setGithubStars] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Analytics hook
  const { trackDownload, trackCommunity } = useAnalytics();

  // Preload the video for faster loading
  useEffect(() => {
    const video = document.createElement('video');
    video.oncanplaythrough = () => {
      setVideoLoaded(true);
      console.log('Video preloaded successfully');
    };
    video.onerror = () => {
      setVideoError(true);
      console.log('Video preload failed');
    };
    video.src = '/hero-video.mp4';
    video.load();
  }, []);

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Video restart logic - restart video when it ends for seamless looping
  useEffect(() => {
    const video = videoRef.current;
    if (video && videoLoaded) {
      const handleVideoEnd = () => {
        video.currentTime = 0;
        video.play().catch(console.error);
      };
      
      video.addEventListener('ended', handleVideoEnd);
      return () => video.removeEventListener('ended', handleVideoEnd);
    }
  }, [videoLoaded]);

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
    <section ref={heroRef} className="pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Mobile-first layout: Animation first, then content */}
        <div className="flex flex-col items-center gap-12 lg:gap-16 lg:grid lg:grid-cols-12 lg:items-center">
          
          {/* Animation section - First on mobile, right on desktop */}
          <div className={`w-full max-w-xl lg:max-w-none lg:col-span-6 lg:order-2 transition-all duration-1200 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto w-full">
              {/* Mobile optimized aspect ratio */}
              <AspectRatio 
                ratio={16 / 9} 
                className="rounded-xl lg:rounded-2xl border border-dc-border bg-dc-surface/50 shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="w-full h-full relative bg-gradient-to-r from-dc-surface/50 to-dc-surface/30">
                  {/* Loading state */}
                  {!videoLoaded && !videoError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-dc-surface/80 z-10">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="h-8 w-8 animate-spin text-dc-accent" />
                        <p className="text-sm text-muted-foreground">Loading animation...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Error state */}
                  {videoError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-dc-surface/80 z-10">
                      <div className="flex flex-col items-center gap-3 text-center">
                        <Terminal className="h-12 w-12 text-dc-accent" />
                        <div>
                          <p className="font-semibold text-foreground">Desktop Commander</p>
                          <p className="text-sm text-muted-foreground">Animation preview</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Video element - always rendered but hidden until loaded */}
                  <video
                    ref={videoRef}
                    src="/hero-video.mp4"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      videoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onCanPlay={() => {
                      setVideoLoaded(true);
                      console.log('Video can play');
                    }}
                    onError={(e) => {
                      console.log('Video error:', e);
                      setVideoError(true);
                    }}
                    onLoadedData={() => {
                      console.log('Video loaded successfully');
                    }}
                    style={{ 
                      imageRendering: 'auto',
                    }}
                  />
                </div>
              </AspectRatio>
            </div>
          </div>

          {/* Content section - Second on mobile, left on desktop */}
          <div className="lg:col-span-6 text-center lg:text-left lg:order-1 w-full">
            
            {/* Hero Text - Mobile optimized typography */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 md:mb-8 leading-tight transition-all duration-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              One Chat, Full Stack
            </h1>
            
            <p className={`text-lg sm:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1200 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Give AI direct access to your system—manage files, automate terminal commands, and deploy in plain language
            </p>

            {/* CTA Buttons - Mobile optimized layout */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center items-center mb-8 md:mb-12 transition-all duration-1200 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95 group" 
                asChild
              >
                <a 
                  href="#installation"
                  onClick={() => trackDownload('Install', 'hero_primary_cta')}
                >
                  <Terminal className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Install
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-dc-surface hover:border-dc-accent/50 transform active:scale-95 group" 
                asChild
              >
                <a 
                  href="https://discord.gg/kQ27sNnZr7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackCommunity('discord', 'hero_secondary_cta', 'Join Discord')}
                >
                  <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Join Discord
                </a>
              </Button>
            </div>

            {/* Works with section - Mobile optimized */}
            <div className={`mb-6 md:mb-8 pt-6 md:pt-8 border-t border-dc-border/50 transition-all duration-1200 delay-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-sm text-muted-foreground mb-3 md:mb-4 text-center lg:text-left">Connect to your toolkit</p>
              {/* Mobile: 2 rows, Desktop: single row */}
              <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:flex lg:items-center lg:justify-start opacity-60">
                <img 
                  src={getAssetPath("star-logo.png")} 
                  alt="Star logo" 
                  className="h-5 sm:h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 justify-self-center"
                />
                <img 
                  src={getAssetPath("claude-desktop-logo.png")} 
                  alt="Claude Desktop logo" 
                  className="h-6 sm:h-8 w-6 sm:w-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 justify-self-center"
                />
                <img 
                  src={getAssetPath("cursor-logo.png")} 
                  alt="Cursor IDE logo" 
                  className="h-5 sm:h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 justify-self-center"
                />
                <img 
                  src={getAssetPath("vscode-new-logo.png")} 
                  alt="VS Code logo" 
                  className="h-5 sm:h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 justify-self-center"
                />
                <img 
                  src={getAssetPath("client-logo-1.png")} 
                  alt="Client logo" 
                  className="h-5 sm:h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 justify-self-center lg:justify-self-auto"
                />
                <img 
                  src={getAssetPath("client-logo-2.png")} 
                  alt="Client logo" 
                  className="h-5 sm:h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 justify-self-center lg:justify-self-auto"
                />
                <img 
                  src={getAssetPath("client-logo-3.png")} 
                  alt="Client logo" 
                  className="h-8 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 justify-self-center lg:justify-self-auto col-span-2 lg:col-span-1"
                />
              </div>
            </div>

            {/* Trust Badges - Mobile optimized single column layout */}
            <div className={`flex flex-col sm:flex-row sm:flex-wrap lg:justify-start justify-center gap-3 transition-all duration-1200 delay-2000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-3 px-4 py-3 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[200px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group">
                <div className="flex items-center justify-center w-6 h-6 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0">
                  <Download className="h-3 w-3 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">NPM Downloads</div>
                  <div className="font-semibold text-foreground text-sm">
                    {npmCount}k/week
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[200px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group">
                <div className="flex items-center justify-center w-6 h-6 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0">
                  <Star className="h-3 w-3 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">GitHub Stars</div>
                  <div className="font-semibold text-foreground text-sm">
                    {(githubStars / 10).toFixed(1)}k stars
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-3 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[200px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group">
                <div className="flex items-center justify-center w-6 h-6 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0">
                  <TrendingUp className="h-3 w-3 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">SMITHERY.COM</div>
                  <div className="font-semibold text-foreground text-sm">No.1 (Aug 2025)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;