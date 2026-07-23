import { useEffect, useRef, useState } from "react";
import { Cpu, Lock, GitBranch, Monitor, Terminal, FolderOpen } from "lucide-react";
import CdCta from "./CdCta";

const HIGHLIGHTS = [
  {
    icon: Cpu,
    title: "Runs on your machine",
    description:
      "Desktop Commander is a local MCP server. It starts with Claude Desktop, works directly on your files and terminal, and needs no extra account.",
  },
  {
    icon: Lock,
    title: "Your data stays local",
    description:
      "File contents go only into your Claude conversation when Claude reads them. Nothing is uploaded anywhere else.",
  },
  {
    icon: GitBranch,
    title: "Free and open source",
    description:
      "The most popular file and terminal MCP, with 26k+ weekly downloads. Same server powers Cursor, Windsurf, and VS Code setups.",
  },
];

const CdLocal = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setVisible(true),
      { threshold: 0.15, rootMargin: "-40px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const nodeStep = `transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`;

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              100% local MCP
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5">
              Everything happens on your machine
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Claude Desktop already runs on your computer, so Desktop Commander plugs in
              as a local MCP server. No cloud bridge, no middleman, no waiting.
            </p>
            <div className="space-y-5 mb-9">
              {HIGHLIGHTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 transition-all duration-500 ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${200 + i * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <CdCta position="local_section" />
          </div>

          {/* Diagram: everything inside your computer */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl border-2 border-dashed border-primary/30 bg-dc-surface/40 p-6 md:p-8">
              <span className="absolute -top-3 left-6 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary bg-background border border-primary/30 rounded-full">
                Your computer
              </span>

              <div className="space-y-4">
                <div className={`flex items-center gap-3 rounded-xl bg-dc-card border border-dc-border px-4 py-3.5 ${nodeStep}`} style={{ transitionDelay: "200ms" }}>
                  <span className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                    <img src="/claude-logo.png" alt="" className="w-5 h-5 object-contain" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Claude Desktop</p>
                    <p className="text-xs text-muted-foreground">the app you already use</p>
                  </div>
                </div>

                <div className="flex justify-center" aria-hidden="true">
                  <span className="text-xs text-muted-foreground border border-dc-border rounded-full px-3 py-1 bg-dc-card">
                    local MCP
                  </span>
                </div>

                <div className={`flex items-center gap-3 rounded-xl bg-dc-card border border-primary/40 px-4 py-3.5 ${nodeStep}`} style={{ transitionDelay: "500ms" }}>
                  <span className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                    <img src="/favicon-512x512.png" alt="" className="w-5 h-5 object-contain" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Desktop Commander</p>
                    <p className="text-xs text-muted-foreground">free, open source, runs locally</p>
                  </div>
                </div>

                <div className="flex justify-center" aria-hidden="true">
                  <span className="text-xs text-muted-foreground border border-dc-border rounded-full px-3 py-1 bg-dc-card">
                    direct access
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: FolderOpen, label: "Your files" },
                    { icon: Terminal, label: "Your terminal" },
                    { icon: Monitor, label: "Your processes" },
                  ].map((node, i) => {
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.label}
                        className={`flex flex-col items-center gap-2 rounded-xl bg-dc-card border border-dc-border px-2 py-3.5 text-center ${nodeStep}`}
                        style={{ transitionDelay: `${800 + i * 150}ms` }}
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <p className="text-xs text-muted-foreground">{node.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CdLocal;
