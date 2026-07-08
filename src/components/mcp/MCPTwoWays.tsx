import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Globe, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const MCPTwoWays = () => {
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

  const options = [
    {
      icon: Monitor,
      badge: "Most popular",
      badgeClass: "bg-primary/10 text-primary border border-primary/20",
      title: "Local MCP",
      description: "Runs directly on your machine. Free & open source.",
      bullets: [
        "Works with Claude Desktop, Cursor, Windsurf, and any MCP client",
        "One-command install, everything stays on your computer",
        "26k+ weekly downloads"
      ],
      cta: {
        label: "Install locally",
        href: "#installation",
        external: false,
        variant: "hero" as const,
        event: "mcp_local_choice_clicked"
      }
    },
    {
      icon: Globe,
      badge: "New",
      badgeClass: "bg-green-500/10 text-green-400 border border-green-500/20",
      title: "Remote MCP",
      description: "Use Desktop Commander from web AI clients — ChatGPT, Claude web, and more.",
      bullets: [
        "Connect one or more of your devices remotely",
        "Work with real files, terminal, and processes on your machine",
        "Control your computer from your phone or any browser"
      ],
      cta: {
        label: "Set up Remote MCP",
        href: "https://mcp.desktopcommander.app/",
        external: true,
        variant: "outline" as const,
        event: "remote_mcp_cta_clicked"
      }
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`text-center mb-10 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Two ways to run it</h2>
          <p className="text-lg text-muted-foreground">
            On your machine in a desktop client, or from anywhere through the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card
                key={index}
                className={`p-6 md:p-8 bg-dc-card border-2 border-dc-border hover:border-primary/40 transition-all duration-500 flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${option.badgeClass}`}>
                    {option.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {option.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={option.cta.variant}
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 group"
                  asChild
                >
                  <a
                    href={option.cta.href}
                    {...(option.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={() => trackCustomEvent(option.cta.event, {
                      button_text: option.cta.label,
                      button_location: 'mcp_two_ways',
                      destination: option.cta.href
                    })}
                  >
                    {option.cta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MCPTwoWays;
