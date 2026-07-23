import { useEffect, useState } from "react";
import CdCta, { CLAUDE_DESKTOP_CONNECTOR_URL } from "./CdCta";
import { ChevronDown, ArrowUp, Plus, Mic, Folder, Hand, Cloud, Check } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const TYPED_PROMPTS = [
  "Organize files on my Desktop",
  "Convert these photos to JPG",
  "Launch my local server",
];

const TYPE_SPEED = 38;
const HOLD_MS = 1600;
const DELETE_SPEED = 14;

const useTypewriter = (phrases: string[]) => {
  const [text, setText] = useState("");
  const [phrase, setPhrase] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    const current = phrases[phrase];

    const type = (i: number) => {
      if (cancelled) return;
      setText(current.slice(0, i));
      if (i < current.length) timer = setTimeout(() => type(i + 1), TYPE_SPEED);
      else timer = setTimeout(() => erase(current.length), HOLD_MS);
    };
    const erase = (i: number) => {
      if (cancelled) return;
      setText(current.slice(0, i));
      if (i > 0) timer = setTimeout(() => erase(i - 1), DELETE_SPEED);
      else setPhrase((p) => (p + 1) % phrases.length);
    };
    type(0);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [phrase, phrases]);

  return { text };
};

const RECENT_TASKS = [
  { name: "Desktop cleanup", when: "just now" },
  { name: "HEIC batch conversion", when: "yesterday" },
];

const CdHero = () => {
  const [mounted, setMounted] = useState(false);
  const { text: typed } = useTypewriter(TYPED_PROMPTS);
  const { trackCustomEvent } = useAnalyticsAstro();

  useEffect(() => {
    setMounted(true);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-24 pb-16">
      <style>{`
        @keyframes cd-travel {
          0% { left: 0%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes cd-travel-back {
          0% { left: 100%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: 0%; opacity: 0; }
        }
        @keyframes cd-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -25px) scale(1.08); }
        }
        @keyframes cd-step-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cd-dot { animation: cd-travel 2.4s ease-in-out infinite; }
        .cd-dot-back { animation: cd-travel-back 2.4s ease-in-out infinite; animation-delay: 1.2s; }
        .cd-orb-a { animation: cd-float 9s ease-in-out infinite; }
        .cd-orb-b { animation: cd-float 12s ease-in-out infinite reverse; }
        .cd-step { animation: cd-step-in 0.5s ease-out both; }
      `}</style>

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="cd-orb-a absolute -top-40 left-1/4 w-[850px] h-[520px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="cd-orb-b absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-[#C96442]/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--dc-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--dc-border)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 90% 70% at 40% 30%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 40% 30%, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div
              className={`flex items-center justify-center lg:justify-start mb-9 ${reveal("delay-0")}`}
            >
              <img
                src="/favicon-512x512.png"
                alt="Desktop Commander"
                className="w-14 h-14 rounded-2xl border border-dc-border bg-white object-contain p-2 shadow-elegant"
              />
              <div className="relative w-20 sm:w-28 h-px mx-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent">
                <span className="cd-dot absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                <span className="cd-dot-back absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-[#C96442] shadow-[0_0_10px_#C96442]" />
              </div>
              <span className="w-14 h-14 rounded-2xl border border-dc-border bg-white flex items-center justify-center shadow-elegant">
                <img src="/claude-logo.png" alt="Claude Desktop" className="w-8 h-8 object-contain" />
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-6xl xl:text-7xl font-bold text-foreground leading-[1.04] tracking-tight mb-6 ${reveal("delay-100")}`}
            >
              Give Claude Desktop
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-dc-blue-glow to-primary">
                full control of
                <br />
                your computer
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed ${reveal("delay-200")}`}
            >
              The most popular file and terminal MCP for Claude Desktop. Fully local,
              free, open source, with 50k+ weekly downloads.
            </p>

            <div className={reveal("delay-300")}>
              <CdCta position="hero" className="text-lg px-10 py-6" />
            </div>
          </div>

          {/* Right: Claude Desktop style window */}
          <div className={`lg:col-span-5 ${reveal("delay-400")}`}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div
                className="absolute -inset-5 rounded-3xl bg-[#C96442]/15 blur-3xl opacity-70"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-[#FCFBF8] text-[#1a1915]">
                {/* Window bar with traffic lights */}
                <div className="flex items-center gap-1.5 px-4 py-3">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-[#8a877d]">
                    <Cloud className="w-3.5 h-3.5" />
                    Beta
                  </span>
                </div>

                {/* Empty state heading */}
                <div className="flex items-center justify-center gap-2.5 pt-4 pb-5">
                  <img src="/claude-logo.png" alt="" className="w-6 h-6 object-contain" />
                  <span className="font-serif text-2xl text-[#1a1915]">Let's noodle</span>
                </div>

                {/* Composer card */}
                <div className="px-4 pb-3">
                  <div className="rounded-2xl border border-black/10 bg-white shadow-sm px-4 pt-3.5 pb-3">
                    <div className="flex items-center gap-0.5 min-w-0 mb-4">
                      <span className="text-[15px] text-[#1a1915] whitespace-nowrap overflow-hidden text-ellipsis">
                        {typed}
                      </span>
                      <span className="w-[2px] h-4.5 h-5 bg-[#1a1915] animate-pulse flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-2.5 text-[#6e6b60]">
                      <Plus className="w-4 h-4" />
                      <span className="inline-flex items-center rounded-full border border-black/10 p-0.5 text-xs">
                        <span className="px-2.5 py-0.5 text-[#8a877d]">Chat</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white border border-black/10 font-medium text-[#1a1915] shadow-sm">
                          Cowork
                        </span>
                      </span>
                      <span className="ml-auto text-xs font-medium">
                        Fable 5 <span className="text-[#a7a495]">High</span>
                      </span>
                      <Mic className="w-4 h-4" />
                      <a
                        href={CLAUDE_DESKTOP_CONNECTOR_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get Desktop Commander for Claude Desktop"
                        onClick={() =>
                          trackCustomEvent("mcp_client_page_cta_clicked", {
                            client: "claude-desktop",
                            transport: "local",
                            cta_position: "hero_composer_send",
                            destination: CLAUDE_DESKTOP_CONNECTOR_URL,
                          })
                        }
                        className="w-8 h-8 rounded-xl bg-[#C96442] hover:bg-[#b55535] transition-colors flex items-center justify-center"
                      >
                        <ArrowUp className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                  {/* Context chips row */}
                  <div className="flex items-center gap-2 px-2 py-2 text-xs text-[#6e6b60]">
                    <span className="inline-flex items-center gap-1.5">
                      <Folder className="w-3.5 h-3.5" />
                      Desktop
                      <ChevronDown className="w-3 h-3" />
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Hand className="w-3.5 h-3.5" />
                      Manual
                      <ChevronDown className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Recent tasks */}
                <div className="px-4 pb-4">
                  <p className="text-xs text-[#8a877d] mb-2">Pinned or active</p>
                  <div className="space-y-1.5">
                    {RECENT_TASKS.map((task, i) => (
                      <div
                        key={task.name}
                        className="cd-step flex items-center gap-2.5 border-t border-black/[0.05] pt-2"
                        style={{ animationDelay: `${600 + i * 350}ms` }}
                      >
                        <span className="w-5 h-5 rounded-full bg-[#10a37f]/10 border border-[#10a37f]/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#10a37f]" />
                        </span>
                        <span className="text-sm text-[#1a1915]">{task.name}</span>
                        <span className="ml-auto text-xs text-[#a7a495]">{task.when}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#8a877d] text-center mt-3">
                    Powered by the Desktop Commander MCP on your machine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#discover"
        aria-label="Scroll to see more"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default CdHero;
