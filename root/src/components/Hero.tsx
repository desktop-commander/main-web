import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MessageCircle, ArrowRight, Download, Terminal, Star, TrendingUp } from "lucide-react";
import dcPreview from "@/assets/dc-demo-preview.png";

const dcLogo = "/lovable-uploads/219b65f9-744a-4c23-9134-1a277e1f448a.png";

const Hero = () => {
  return (
    <section className="pt-48 pb-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:gap-20 lg:grid-cols-12">
          {/* Left: copy + CTA + badges */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Hero Text */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              One Chat, Full Stack
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              Give AI direct access to your system—manage files, automate terminal commands, and deploy in plain language
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center mb-16">
              <Button variant="hero" size="lg" className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Install
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Join Discord
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap lg:justify-start justify-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-xs w-48">
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm">
                  <Download className="h-2.5 w-2.5 text-muted-foreground" />
                </div>
                <div className="text-left">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide">NPM Downloads</div>
                  <div className="font-semibold text-foreground text-xs">24k/week</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-xs w-48">
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm">
                  <Star className="h-2.5 w-2.5 text-muted-foreground" />
                </div>
                <div className="text-left">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide">GitHub Stars</div>
                  <div className="font-semibold text-foreground text-xs">4.4k stars</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-xs w-48">
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm">
                  <TrendingUp className="h-2.5 w-2.5 text-muted-foreground" />
                </div>
                <div className="text-left">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide">SMITHERY.COM</div>
                  <div className="font-semibold text-foreground text-xs">No.1 (Aug 2025)</div>
                </div>
              </div>
            </div>

            {/* Works with section */}
            <div className="mt-12 pt-8 border-t border-dc-border/50">
              <p className="text-sm text-muted-foreground mb-4 lg:text-left text-center">Connect to your toolkit</p>
              <div className="flex items-center lg:justify-start justify-center gap-6 opacity-60">
                <img 
                  src="/lovable-uploads/ed3b3a05-2313-48cb-9eb3-3edb097375a8.png" 
                  alt="Client logo" 
                  className="h-8 w-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/c6b2cb6a-d36a-457f-ae75-b9371e1807a1.png" 
                  alt="Cursor logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/b4ed8368-5f42-4175-b3ef-6f2e6f3f6a16.png" 
                  alt="Claude logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/526398c8-40f8-45a1-96ba-31739b3166bd.png" 
                  alt="Client logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/874eb1ee-538a-453b-9904-db31d0c1486a.png" 
                  alt="Client logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/beed7f22-eaaa-437f-bd66-85bb78f29e3c.png" 
                  alt="Client logo" 
                  className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
                <img 
                  src="/lovable-uploads/468db3ab-a24e-416f-ac24-b2a1da66e78d.png" 
                  alt="Client logo" 
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right: visualization */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto lg:mx-0 w-full max-w-[680px]">
              <AspectRatio ratio={16 / 10} className="rounded-2xl border border-dc-border bg-dc-surface/50 shadow-elegant overflow-hidden">
                <img
                  src={dcPreview}
                  alt="How Desktop Commander works - AI chat interface with terminal integration"
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