import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Star, Download, FolderOpen, Terminal, Cpu, Bot } from "lucide-react";
import { useState, useEffect } from "react";

/** Official OpenAI knot mark */
const OPENAI_PATH =
  "M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z";

const CLIENTS = [
  { slug: "chatgpt", name: "ChatGPT", href: "/mcp/chatgpt/", x: 60 },
  { slug: "claude", name: "Claude", logo: "/claude-logo.png", href: "/mcp/claude-desktop/", x: 155 },
  { slug: "cursor", name: "Cursor", logo: "/cursor-mark.png", href: "/mcp/cursor/", x: 250 },
  { slug: "generic", name: "Your AI client", href: "#installation", x: 345 },
];

const RESOURCES = [
  { icon: FolderOpen, label: "Your files" },
  { icon: Terminal, label: "Your terminal" },
  { icon: Cpu, label: "Your processes" },
];

const MCPHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <style>{`
        @keyframes mcp-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -25px) scale(1.08); }
        }
        @keyframes mcp-ring {
          0% { transform: translate(-50%, -60%) scale(0.7); opacity: 0.5; }
          100% { transform: translate(-50%, -60%) scale(1.6); opacity: 0; }
        }
        .mcp-orb-a { animation: mcp-float 9s ease-in-out infinite; }
        .mcp-orb-b { animation: mcp-float 12s ease-in-out infinite reverse; }
        .mcp-ring { animation: mcp-ring 3s ease-out infinite; }
        .mcp-ring-2 { animation: mcp-ring 3s ease-out infinite; animation-delay: 1.5s; }
      `}</style>

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="mcp-orb-a absolute -top-40 left-1/4 w-[850px] h-[520px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="mcp-orb-b absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-dc-blue-glow/10 blur-[120px]" />
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

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className={`mb-6 ${reveal("delay-0")}`}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Free & Open Source
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6 ${reveal("delay-100")}`}
            >
              Desktop Commander
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-dc-blue-glow to-primary">
                MCP Server
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl text-muted-foreground mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed ${reveal("delay-200")}`}
            >
              Give Claude, ChatGPT and other AI assistants direct access to your file
              system, terminal, and development tools.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10 ${reveal("delay-300")}`}
            >
              <Button variant="hero" size="lg" className="flex items-center justify-center gap-2 group text-base px-8" asChild>
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

            <div
              className={`flex items-center justify-center lg:justify-start gap-8 flex-wrap ${reveal("delay-500")}`}
            >
              <a
                href="https://www.npmjs.com/package/@wonderwhy-er/desktop-commander"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
              >
                <Download className="h-5 w-5 text-primary" />
                <span className="text-left">
                  <span className="block text-xl font-bold text-foreground leading-tight">50k+</span>
                  <span className="block text-xs text-muted-foreground group-hover:text-foreground transition-colors">weekly npm downloads</span>
                </span>
              </a>
              <a
                href="https://github.com/wonderwhy-er/DesktopCommanderMCP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
              >
                <Star className="h-5 w-5 text-primary" />
                <span className="text-left">
                  <span className="block text-xl font-bold text-foreground leading-tight">8.8k</span>
                  <span className="block text-xs text-muted-foreground group-hover:text-foreground transition-colors">GitHub stars</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right: hub constellation */}
          <div className={`lg:col-span-6 ${reveal("delay-400")}`}>
            <div className="relative max-w-md mx-auto select-none">
              {/* Client tiles */}
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
                          <svg viewBox="0 0 24 24" className="w-8 h-8 text-black" fill="currentColor" fillRule="evenodd" aria-hidden="true">
                            <path d={OPENAI_PATH} />
                          </svg>
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

              {/* Beams: clients → DC */}
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

              {/* DC core with pulsing rings */}
              <div className="relative flex flex-col items-center">
                <span className="mcp-ring absolute top-[40%] left-1/2 w-32 h-32 rounded-full border border-primary/40" aria-hidden="true" />
                <span className="mcp-ring-2 absolute top-[40%] left-1/2 w-32 h-32 rounded-full border border-primary/40" aria-hidden="true" />
                <span className="relative w-20 h-20 rounded-3xl bg-white border-2 border-primary/50 flex items-center justify-center shadow-[0_0_45px_-5px_hsl(var(--primary)/0.5)]">
                  <img src="/favicon-512x512.png" alt="Desktop Commander" className="w-12 h-12 object-contain" />
                </span>
                <span className="relative mt-2.5 text-sm font-semibold text-foreground">
                  Desktop Commander
                </span>
                <span className="relative text-xs text-muted-foreground">Local and remote MCP</span>
              </div>

              {/* Beams: DC → resources */}
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

              {/* Resources */}
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

export default MCPHero;
