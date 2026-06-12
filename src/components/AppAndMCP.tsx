import { Button } from "@/components/ui/button";
import { Download, ArrowRight, AppWindow, Plug } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { trackDownloadRedirect, trackCtaClick } from "@/lib/analytics/tracking";

const mcpClients = [
  "Claude Desktop",
  "Cursor",
  "Warp",
  "VS Code",
  "Windsurf",
];

const AppAndMCP = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
            <span className="h-px w-10 bg-gradient-to-l from-primary/50 to-transparent" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary/70">05</span>
            <span className="h-px w-10 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.1] tracking-[-0.02em]">
            Experience the full power of local agents.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Or extend what your current AI tools can do with the MCP.
          </p>
        </div>

        {/* Two-card split */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-12">
          {/* App card — primary, wider */}
          <div
            className={`relative lg:col-span-7 flex flex-col p-8 sm:p-10 rounded-3xl lp-ring overflow-hidden shadow-[0_24px_90px_-24px_hsl(var(--dc-blue)/0.4)] transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            {/* Aurora inside the card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-[340px] w-[340px]"
              style={{ background: 'radial-gradient(closest-side, hsl(var(--dc-blue) / 0.17), transparent 72%)' }}
            />
            {/* Ghost window icon */}
            <AppWindow
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-8 w-56 h-56 text-primary/[0.04] select-none"
            />

            <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 ring-1 ring-blue-500/30 mb-6 shadow-[0_0_28px_hsl(var(--dc-blue)/0.25)]">
              <AppWindow className="w-7 h-7 text-blue-400" />
            </div>

            <h3 className="relative font-display text-2xl sm:text-3xl font-semibold text-foreground mb-3 tracking-[-0.01em]">
              Desktop Commander App
            </h3>
            <p className="relative text-base text-muted-foreground mb-6 leading-relaxed font-light">
              The full experience. Any model, your files, and every action in plain view.
              Built for people who want an agent running alongside them, not inside a code editor.
            </p>

            {/* Quick feature row */}
            <ul className="relative space-y-2.5 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm text-foreground/90">
                <span aria-hidden="true" className="font-mono text-primary/60 text-xs">›</span>
                Opus 4.7, GPT-5.4, Gemini 3.0, or any model
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/90">
                <span aria-hidden="true" className="font-mono text-primary/60 text-xs">›</span>
                Reads and edits files directly on your computer
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/90">
                <span aria-hidden="true" className="font-mono text-primary/60 text-xs">›</span>
                Watch every action as it happens
              </li>
            </ul>

            <div className="relative">
              <Button
                variant="hero"
                size="lg"
                className="lp-shimmer group rounded-xl ring-1 ring-white/15 shadow-[0_10px_44px_-10px_hsl(var(--dc-blue)/0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                asChild
              >
                <a
                  href="#download"
                  onClick={() => trackDownloadRedirect("app_and_mcp_app_card")}
                  className="inline-flex items-center gap-2"
                >
                  <Download className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Download App
                </a>
              </Button>
            </div>
          </div>

          {/* MCP card — secondary, narrower */}
          <div
            className={`lg:col-span-5 flex flex-col p-8 sm:p-10 rounded-3xl lp-ring-subtle transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "340ms" : "0ms" }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 ring-1 ring-purple-500/30 mb-6">
              <Plug className="w-6 h-6 text-purple-400" />
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-2">
              MCP server
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed font-light">
              Install Desktop Commander as an MCP in the client you already use.
              Same engine, different surface.
            </p>

            {/* Client chips */}
            <div className="mb-8 flex-grow">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 mb-3">
                Works with
              </p>
              <div className="flex flex-wrap gap-2">
                {mcpClients.map((client) => (
                  <span
                    key={client}
                    className="inline-flex items-center px-3 py-1.5 rounded-md bg-background/60 border border-dc-border font-mono text-xs text-foreground/90 transition-colors hover:border-purple-500/40"
                  >
                    {client}
                  </span>
                ))}
                <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-background/40 border border-dashed border-dc-border/60 font-mono text-xs text-muted-foreground">
                  + any MCP client
                </span>
              </div>
            </div>

            <div>
              <a
                href="/mcp/"
                onClick={() => trackCtaClick("Set up the MCP", "app_and_mcp_mcp_card", { destination: "/mcp/" })}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:gap-2.5 transition-all"
              >
                Set up the MCP
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppAndMCP;
