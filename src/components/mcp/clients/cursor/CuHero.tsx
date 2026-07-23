import { useEffect, useState } from "react";
import CuCta, { CURSOR_DIRECTORY_URL } from "./CuCta";
import { ChevronDown, ArrowUp, Plus, Check } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const TYPED_PROMPTS = [
  "Organize my Downloads folder",
  "Find every TODO across all my repos",
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

const AGENT_STEPS = [
  "Read 3 repos outside this workspace",
  "Found 42 TODOs in 17 files",
  "Created todo-report.md in your project",
];

const CuHero = () => {
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
        @keyframes cu-travel {
          0% { left: 0%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes cu-travel-back {
          0% { left: 100%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: 0%; opacity: 0; }
        }
        @keyframes cu-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -25px) scale(1.08); }
        }
        @keyframes cu-step-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cu-dot { animation: cu-travel 2.4s ease-in-out infinite; }
        .cu-dot-back { animation: cu-travel-back 2.4s ease-in-out infinite; animation-delay: 1.2s; }
        .cu-orb-a { animation: cu-float 9s ease-in-out infinite; }
        .cu-orb-b { animation: cu-float 12s ease-in-out infinite reverse; }
        .cu-step { animation: cu-step-in 0.5s ease-out both; }
      `}</style>

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="cu-orb-a absolute -top-40 left-1/4 w-[850px] h-[520px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="cu-orb-b absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
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
                <span className="cu-dot absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                <span className="cu-dot-back absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <span className="w-14 h-14 rounded-2xl border border-dc-border bg-white flex items-center justify-center shadow-elegant">
                <img src="/cursor-mark.png" alt="Cursor" className="w-8 h-8 object-contain" />
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-6xl xl:text-7xl font-bold text-foreground leading-[1.04] tracking-tight mb-6 ${reveal("delay-100")}`}
            >
              Give Cursor
              <br />
              access to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-dc-blue-glow to-primary">
                your
                <br />
                whole computer
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed ${reveal("delay-200")}`}
            >
              Any file on your disk, your real terminal, running processes. Not just the
              workspace you have open.
            </p>

            <div className={reveal("delay-300")}>
              <CuCta position="hero" className="text-lg px-10 py-6" />
            </div>
          </div>

          {/* Right: Cursor-style agent window (light, like cursor.com/agents) */}
          <div className={`lg:col-span-5 ${reveal("delay-400")}`}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div
                className="absolute -inset-5 rounded-3xl bg-white/10 blur-3xl opacity-70"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-white text-[#1a1a1a]">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.08]">
                  <img src="/cursor-mark.png" alt="" className="w-5 h-5 object-contain" />
                  <span className="text-sm font-semibold">New Agent</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-[#16a34a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                    Desktop Commander enabled
                  </span>
                </div>

                {/* Conversation */}
                <div className="px-4 py-4 space-y-3 min-h-[240px] text-left">
                  <div
                    className="cu-step ml-auto max-w-[92%] w-fit rounded-xl bg-[#f0f0f0] px-4 py-2.5 text-sm leading-relaxed"
                    style={{ animationDelay: "300ms" }}
                  >
                    Find every TODO across all my repos, not just this one
                  </div>
                  <div
                    className="cu-step inline-flex items-center gap-2 text-xs text-[#6b6b6b] border border-black/[0.08] rounded-lg px-2.5 py-1.5 bg-[#fafafa]"
                    style={{ animationDelay: "900ms" }}
                  >
                    <img src="/favicon-512x512.png" alt="" className="w-3.5 h-3.5 rounded-[3px]" />
                    Desktop Commander · reading beyond the workspace
                  </div>
                  <ul className="space-y-1.5 text-sm">
                    {AGENT_STEPS.map((step, i) => (
                      <li
                        key={step}
                        className="cu-step flex items-center gap-2.5 leading-relaxed text-[#1a1a1a]"
                        style={{ animationDelay: `${1500 + i * 400}ms` }}
                      >
                        <span className="w-4.5 h-4.5 w-5 h-5 rounded-full bg-[#16a34a]/10 border border-[#16a34a]/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#16a34a]" />
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Composer, cursor.com style */}
                <div className="px-3 pb-3 pt-1">
                  <div className="rounded-2xl border border-black/[0.09] bg-[#f7f7f7] px-3.5 pt-3 pb-2.5">
                    <div className="flex items-center gap-0.5 min-w-0 mb-3">
                      <span className="text-sm text-[#1a1a1a] whitespace-nowrap overflow-hidden text-ellipsis">
                        {typed}
                      </span>
                      <span className="w-[2px] h-4 bg-[#1a1a1a] animate-pulse flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-2 text-[#6b6b6b]">
                      <span className="w-7 h-7 rounded-full bg-black/[0.06] flex items-center justify-center">
                        <Plus className="w-4 h-4" />
                      </span>
                      <span className="text-xs font-medium inline-flex items-center gap-1">
                        Cursor Grok 4.5 High Fast
                        <ChevronDown className="w-3 h-3" />
                      </span>
                      <a
                        href={CURSOR_DIRECTORY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get Desktop Commander for Cursor"
                        onClick={() =>
                          trackCustomEvent("mcp_client_page_cta_clicked", {
                            client: "cursor",
                            transport: "local",
                            cta_position: "hero_composer_send",
                            destination: CURSOR_DIRECTORY_URL,
                          })
                        }
                        className="ml-auto w-8 h-8 rounded-full bg-[#e5e5e5] hover:bg-[#d9d9d9] transition-colors flex items-center justify-center"
                      >
                        <ArrowUp className="h-4 w-4 text-[#1a1a1a]" />
                      </a>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#8f8f8f] text-center mt-2">
                    Desktop Commander runs locally with any model Cursor uses
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

export default CuHero;
