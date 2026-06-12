import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles, HardDrive, Plug, Eye } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

const features = [
  {
    icon: Sparkles,
    text: "Any model, your choice",
    desc: "Opus 4.7, GPT-5.4, Gemini 3.0, or any model that fits your use case.",
  },
  {
    icon: HardDrive,
    text: "Works with your files",
    desc: "No uploads, no round-trips. Your data stays put.",
  },
  {
    icon: Plug,
    text: "Connect with apps",
    desc: "Plug in the tools you already use.",
  },
  {
    icon: Eye,
    text: "Watch it work",
    desc: "Every action your agent takes on your computer, in plain view.",
  },
];

const WhyTheApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className={`mb-12 md:mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
              <span className="h-px w-10 bg-gradient-to-l from-primary/50 to-transparent" />
              <span className="font-mono text-xs tracking-[0.3em] text-primary/70">03</span>
              <span className="h-px w-10 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground mb-4 leading-[1.1] tracking-[-0.02em]">
              Your agent, running where the work is.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              On your computer, with your files, and your choice of model.
            </p>
          </div>

          {/* Features — instrument panel: hairline grid, no card chrome */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden bg-dc-border/60 ring-1 ring-dc-border/60 mb-12 md:mb-14 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative flex items-start gap-4 p-6 sm:p-7 bg-background/90 text-left transition-colors duration-300 hover:bg-[hsl(var(--dc-blue)/0.05)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-5 font-mono text-[10px] text-primary/30 select-none"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/30 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_18px_hsl(var(--dc-blue)/0.3)]">
                    <Icon className="w-[18px] h-[18px] text-blue-400" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-foreground mb-1">{feature.text}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className={`flex justify-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button
              variant="hero"
              size="lg"
              className="lp-shimmer inline-flex items-center justify-center gap-2 rounded-xl ring-1 ring-white/15 shadow-[0_10px_44px_-10px_hsl(var(--dc-blue)/0.5)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_56px_-10px_hsl(var(--dc-blue)/0.65)] transform active:scale-95 group"
              asChild
            >
              <a href="#download" onClick={() => trackDownloadRedirect('why_the_app_cta')}>
                <Download className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Download App
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTheApp;
