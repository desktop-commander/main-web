import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, HardDrive, Bot, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const highlights = [
  {
    icon: HardDrive,
    title: "Your real machine",
    description: "Give AI assistants access to local files, terminal, previews, and running processes — not a sandbox."
  },
  {
    icon: Bot,
    title: "Works in web AI clients",
    description: "Connect ChatGPT, Claude, and other AI services directly to your computer."
  },
  {
    icon: Smartphone,
    title: "From any device",
    description: "Use it yourself from another device — for example, from your phone to your PC."
  },
  {
    icon: Zap,
    title: "Same Desktop Commander core",
    description: "AI that can read, write, run, and act on your system. Connect one or more devices."
  }
];

const MCPRemote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { trackCustomEvent } = useAnalyticsAstro();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const trackCta = (location: string) => {
    trackCustomEvent('remote_mcp_cta_clicked', {
      button_text: 'Get Remote MCP',
      button_location: location,
      destination: 'https://mcp.desktopcommander.app/'
    });
  };

  return (
    <section ref={sectionRef} id="remote" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            New: Remote MCP
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Your machine, from anywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desktop Commander Remote MCP lets remote AI clients like ChatGPT and Claude
            work directly with files and commands on your own computer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Left: highlights + CTA */}
          <div className={`lg:col-span-6 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-5 mb-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              variant="hero"
              size="lg"
              className="flex items-center justify-center gap-2 group w-full sm:w-auto"
              asChild
            >
              <a
                href="https://mcp.desktopcommander.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCta('mcp_remote_section')}
              >
                Get Remote MCP
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Right: demo video */}
          <div className={`lg:col-span-6 transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative aspect-[4/3] rounded-xl lg:rounded-2xl border border-dc-border bg-dc-surface/50 overflow-hidden shadow-elegant">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                title="Desktop Commander Remote MCP demo — controlling your computer from your phone"
              >
                <source src="/videos/remote-mcp-mobile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Controlling your computer from your phone via Remote MCP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MCPRemote;
