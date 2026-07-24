import { useEffect, useRef, useState } from "react";
import { Globe, MonitorSmartphone, Server } from "lucide-react";
import CuCta from "./CuCta";

const HIGHLIGHTS = [
  {
    icon: Globe,
    title: "From anywhere Cursor runs",
    description:
      "Start an agent in the IDE or from cursor.com in any browser. Your machine does the work, wherever you are.",
  },
  {
    icon: MonitorSmartphone,
    title: "All your machines, one account",
    description:
      "Link your workstation, laptop, and home server. Pick which machine an agent works with per task.",
  },
  {
    icon: Server,
    title: "Your real dev machine",
    description:
      "Agents act on your actual environment: your tools, your services, your data. Not a fresh cloud sandbox.",
  },
];

const MACHINES = [
  { name: "Workstation", detail: "home office", online: true },
  { name: "Home server", detail: "media + backups", online: true },
  { name: "Work MacBook", detail: "on the move", online: false },
];

const CuMachines = () => {
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
              Remote MCP
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5">
              All your machines, one Cursor
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The plugin follows your account, not one install. Kick off an agent from
              the IDE or from cursor.com in a browser and Desktop Commander carries it
              out on whichever machine you choose.
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
            <CuCta position="machines_section" />
          </div>

          {/* Diagram: Cursor anywhere → Remote MCP → your machines */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-2xl border border-dc-border bg-dc-surface/40 p-6 md:p-8">
              {/* Cursor node */}
              <div className={`flex items-center gap-3 rounded-xl bg-dc-card border border-dc-border px-4 py-3.5 ${nodeStep}`} style={{ transitionDelay: "200ms" }}>
                <span className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                  <img src="/cursor-mark.png" alt="" className="w-5 h-5 object-contain" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Cursor</p>
                  <p className="text-xs text-muted-foreground">
                    in the IDE or cursor.com in any browser
                  </p>
                </div>
              </div>

              <div className="flex justify-center my-4" aria-hidden="true">
                <span className="text-xs text-muted-foreground border border-primary/30 rounded-full px-3 py-1 bg-dc-card inline-flex items-center gap-2">
                  <img src="/favicon-512x512.png" alt="" className="w-3.5 h-3.5 rounded-[3px]" />
                  Desktop Commander Remote MCP
                </span>
              </div>

              {/* Machines */}
              <div className="space-y-3">
                {MACHINES.map((machine, i) => (
                  <div
                    key={machine.name}
                    className={`flex items-center gap-3 rounded-xl bg-dc-card border px-4 py-3 ${
                      machine.online ? "border-dc-border" : "border-dc-border/50 opacity-60"
                    } ${nodeStep}`}
                    style={{ transitionDelay: `${500 + i * 180}ms` }}
                  >
                    <Server className="h-4.5 w-4.5 h-5 w-5 text-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{machine.name}</p>
                      <p className="text-xs text-muted-foreground">{machine.detail}</p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs ${
                        machine.online ? "text-green-400" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          machine.online ? "bg-green-400 animate-pulse" : "bg-muted-foreground/50"
                        }`}
                      />
                      {machine.online ? "online" : "offline"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuMachines;
