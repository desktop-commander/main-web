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
    <section ref={sectionRef} className="py-20 md:py-28 bg-dc-surface/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className={`mb-10 md:mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your agent, running where the work is.
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              On your computer, with your files, and your choice of model.
            </p>
          </div>

          {/* Features */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-dc-surface border border-dc-border rounded-lg text-left"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/30 flex-shrink-0">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{feature.text}</p>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button
              variant="hero"
              size="lg"
              className="flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95 group"
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
