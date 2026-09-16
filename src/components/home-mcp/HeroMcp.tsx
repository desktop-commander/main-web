import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star, FolderOpen, Terminal, Cpu, Bot } from "lucide-react";
import { useState, useEffect } from "react";
import OpenAIMark from "@/components/mcp/clients/chatgpt/OpenAIMark";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { PLATFORM_URL, GITHUB_URL, NPM_URL, STATS } from "./links";

/**
 * MCP-first homepage hero.
 *
 * Primary CTA is Install (scrolls to the on-page chooser), secondary is
 * Manage devices (the Remote MCP platform). The right side shows the
 * client -> Desktop Commander -> your machine model rather than the app.
 */

const CLIENTS = [
  { slug: "chatgpt", name: "ChatGPT", href: "/mcp/chatgpt/", x: 60 },
  { slug: "claude", name: "Claude", logo: "/claude-logo.png", href: "/mcp/claude-web/", x: 155 },
  { slug: "cursor", name: "Cursor", logo: "/cursor-mark.png", href: "/mcp/cursor/", x: 250 },
  { slug: "generic", name: "Your AI client", href: "#install", x: 345 },
];

const RESOURCES = [
  { icon: FolderOpen, label: "Your files" },
  { icon: Terminal, label: "Your terminal" },
  { icon: Cpu, label: "Your processes" },
];

const HeroMcp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { trackCustomEvent } = useAnalyticsAstro();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:min-h-[100svh] lg:flex lg:items-center">
      <style>{`
        @keyframes home-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -25px) scale(1.08); }
        }
        @keyframes home-ring {
          0% { transform: translate(-50%, -60%) scale(0.7); opacity: 0.5; }
          100% { transform: translate(-50%, -60%) scale(1.6); opacity: 0; }
        }
        .home-orb-a { animation: home-float 9s ease-in-out infinite; }
        .home-orb-b { animation: home-float 12s ease-in-out infinite reverse; }
        .home-ring { animation: home-ring 3s ease-out infinite; }
        .home-ring-2 { animation: home-ring 3s ease-out infinite; animation-delay: 1.5s; }
      `}</style>

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="home-orb-a absolute -top-40 left-1/4 w-[850px] h-[520px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="home-orb-b absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-dc-blue-glow/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--dc-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--dc-border)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 90% 70% at 45% 30%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 45% 30%, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Two lines, always: the first line is kept on one line from sm up. */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight mb-6 ${reveal("delay-100")}`}
            >
              <span className="block sm:whitespace-nowrap">Use your computer</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-dc-blue-glow to-primary">
                from chat
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl text-muted-foreground mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed ${reveal("delay-200")}`}
            >
              Desktop Commander gives AI chat access to your computer &mdash; no more copying
              output back and forth. It reads your files, runs the commands, sees the results,
              and continues from there. Works with ChatGPT, Claude and Codex, on your own
              machine or a server you own.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10 ${reveal("delay-300")}`}
            >
              <Button
                variant="hero"
                size="lg"
                className="flex items-center justify-center gap-2 group text-base px-8"
                asChild
              >
                <a
                  href="#install"
                  onClick={() =>
                    trackCustomEvent("install_cta_clicked", {
                      button_text: "Install",
                      button_location: "home_hero",
                      destination: "#install",
                    })
                  }
                >
                  Install
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
                  href={PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackCustomEvent("manage_devices_clicked", {
                      button_text: "Manage devices",
                      button_location: "home_hero",
                      destination: PLATFORM_URL,
                    })
                  }
                >
                  Manage devices
                </a>
              </Button>
            </div>

            <div
              className={`flex items-center justify-center lg:justify-start gap-8 flex-wrap ${reveal("delay-500")}`}
            >
              <a href={NPM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                <Download className="h-5 w-5 text-primary" />
                <span className="text-left">
                  <span className="block text-xl font-bold text-foreground leading-tight">
                    {STATS.weeklyDownloads}
                  </span>
                  <span className="block text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    weekly npm downloads
                  </span>
                </span>
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-left">
                  <span className="block text-xl font-bold text-foreground leading-tight">
                    {STATS.githubStars}
                  </span>
                  <span className="block text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    GitHub stars
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right: client -> DC -> your machine */}
          <div className={`lg:col-span-6 ${reveal("delay-400")}`}>
            <div className="relative max-w-md mx-auto select-none">
              <div className="grid grid-cols-4 gap-3">
                {CLIENTS.map((client) => (
                  <a
                    key={client.slug}
                    href={client.href}
                    className="group flex flex-col items-center gap-2"
                    aria-label={`Desktop Commander for ${client.name}`}
                  >
                    {client.slug === "generic" ? (
                      <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-dc-card border-2 border-dashed border-dc-border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-primary/60">
                        <Bot className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                      </span>
                    ) : (
                      <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-dc-border flex items-center justify-center shadow-elegant transition-all duration-300 group-hover:scale-110 group-hover:border-primary/60">
                        {client.slug === "chatgpt" ? (
                          <OpenAIMark className="w-8 h-8 text-black" />
                        ) : (
                          <img src={client.logo} alt="" className="w-8 h-8 object-contain" />
                        )}
                      </span>
                    )}
                    <span className="text-[11px] text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                      {client.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Beams: clients -> DC */}
              <svg viewBox="0 0 405 90" className="w-full h-[90px] block" aria-hidden="true">
                {CLIENTS.map((client, i) => {
                  const path = `M ${client.x} 0 C ${client.x} 55, 202 35, 202 90`;
                  return (
                    <g key={client.slug}>
                      <path d={path} fill="none" stroke="hsl(var(--dc-border))" strokeWidth="1.5" />
                      <circle r="3.5" fill="hsl(var(--primary))">
                        <animateMotion dur="2.6s" begin={`${i * 0.65}s`} repeatCount="indefinite" path={path} />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* Core */}
              <div className="relative flex flex-col items-center">
                <span className="home-ring absolute top-[40%] left-1/2 w-32 h-32 rounded-full border border-primary/40" aria-hidden="true" />
                <span className="home-ring-2 absolute top-[40%] left-1/2 w-32 h-32 rounded-full border border-primary/40" aria-hidden="true" />
                <span className="relative w-20 h-20 rounded-3xl bg-white border-2 border-primary/50 flex items-center justify-center shadow-[0_0_45px_-5px_hsl(var(--primary)/0.5)]">
                  <img src="/favicon-512x512.png" alt="Desktop Commander" className="w-12 h-12 object-contain" />
                </span>
                <span className="relative mt-2.5 text-sm font-semibold text-foreground">
                  Desktop Commander
                </span>
                <span className="relative text-xs text-muted-foreground">On your machine</span>
              </div>

              {/* Beams: DC -> your machine */}
              <svg viewBox="0 0 405 60" className="w-full h-[60px] block" aria-hidden="true">
                {[80, 202, 324].map((x, i) => {
                  const path = `M 202 0 C 202 35, ${x} 25, ${x} 60`;
                  return (
                    <g key={x}>
                      <path d={path} fill="none" stroke="hsl(var(--dc-border))" strokeWidth="1.5" />
                      <circle r="3" fill="hsl(var(--dc-blue-glow))">
                        <animateMotion dur="2.2s" begin={`${0.4 + i * 0.5}s`} repeatCount="indefinite" path={path} />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              <div className="grid grid-cols-3 gap-3">
                {RESOURCES.map((res) => {
                  const Icon = res.icon;
                  return (
                    <div
                      key={res.label}
                      className="flex items-center justify-center gap-2 rounded-xl bg-dc-card border border-dc-border px-3 py-2.5"
                    >
                      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{res.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMcp;
