import { useEffect, useState } from "react";
import OpenAIMark from "./OpenAIMark";
import GptCta from "./GptCta";
import { ChevronDown, ArrowUp, Check } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const TYPED_PROMPTS = [
  "Organize my Downloads folder",
  "Convert these photos to JPG",
  "Launch my local server",
];

const TYPE_SPEED = 38;
const HOLD_MS = 1600;
const DELETE_SPEED = 14;

/** Typewriter cycling through example prompts */
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
      if (i < current.length) {
        timer = setTimeout(() => type(i + 1), TYPE_SPEED);
      } else {
        timer = setTimeout(() => erase(current.length), HOLD_MS);
      }
    };
    const erase = (i: number) => {
      if (cancelled) return;
      setText(current.slice(0, i));
      if (i > 0) {
        timer = setTimeout(() => erase(i - 1), DELETE_SPEED);
      } else {
        setPhrase((p) => (p + 1) % phrases.length);
      }
    };
    type(0);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [phrase, phrases]);

  return { text, current: phrases[phrase] };
};

const CHAT_STEPS = [
  "Scanning your Downloads folder",
  "Created 12 folders by type",
  "Moved 1,248 files",
];

const GptHero = () => {
  const [mounted, setMounted] = useState(false);
  const { text: typed, current: currentPrompt } = useTypewriter(TYPED_PROMPTS);
  const { trackCustomEvent } = useAnalyticsAstro();

  useEffect(() => {
    setMounted(true);
  }, []);

  const sendHref = `https://chatgpt.com/?q=${encodeURIComponent(currentPrompt)}`;

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-24 pb-16">
      {/* Local keyframes */}
      <style>{`
        @keyframes gpt-travel {
          0% { left: 0%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes gpt-travel-back {
          0% { left: 100%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { left: 0%; opacity: 0; }
        }
        @keyframes gpt-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -25px) scale(1.08); }
        }
        @keyframes gpt-step-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gpt-dot { animation: gpt-travel 2.4s ease-in-out infinite; }
        .gpt-dot-back { animation: gpt-travel-back 2.4s ease-in-out infinite; animation-delay: 1.2s; }
        .gpt-orb-a { animation: gpt-float 9s ease-in-out infinite; }
        .gpt-orb-b { animation: gpt-float 12s ease-in-out infinite reverse; }
        .gpt-step { animation: gpt-step-in 0.5s ease-out both; }
      `}</style>

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="gpt-orb-a absolute -top-40 left-1/4 w-[850px] h-[520px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="gpt-orb-b absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-dc-blue-glow/10 blur-[120px]" />
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
                <span className="gpt-dot absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                <span className="gpt-dot-back absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-dc-blue-glow shadow-[0_0_10px_hsl(var(--dc-blue-glow))]" />
              </div>
              <span className="w-14 h-14 rounded-2xl border border-dc-border bg-white text-black flex items-center justify-center shadow-elegant">
                <OpenAIMark className="w-8 h-8" />
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-6xl xl:text-7xl font-bold text-foreground leading-[1.04] tracking-tight mb-6 ${reveal("delay-100")}`}
            >
              Give ChatGPT
              <br />
              access to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-dc-blue-glow to-primary">
                your
                <br />
                local computer
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed ${reveal("delay-200")}`}
            >
              Edit documents, organize folders, and run commands on your own machine
              straight from your chat.
            </p>

            <div className={reveal("delay-300")}>
              <GptCta position="hero" className="text-lg px-10 py-6" />
            </div>
          </div>

          {/* Right: live chat window */}
          <div className={`lg:col-span-5 ${reveal("delay-400")}`}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div
                className="absolute -inset-5 rounded-3xl bg-primary/15 blur-3xl opacity-70"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl border border-dc-border bg-dc-surface/90 backdrop-blur overflow-hidden shadow-elegant">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-dc-border bg-dc-card">
                  <span className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center">
                    <OpenAIMark className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">ChatGPT</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    connected to your machine
                  </span>
                </div>

                {/* Conversation */}
                <div className="p-4 space-y-3 min-h-[240px]">
                  <div className="gpt-step ml-auto max-w-[85%] w-fit rounded-2xl rounded-tr-sm bg-primary/15 border border-primary/25 px-4 py-2.5 text-sm text-foreground" style={{ animationDelay: "300ms" }}>
                    Organize my Downloads folder
                  </div>
                  {CHAT_STEPS.map((step, i) => (
                    <div
                      key={step}
                      className="gpt-step flex items-center gap-2.5 text-sm text-muted-foreground"
                      style={{ animationDelay: `${800 + i * 450}ms` }}
                    >
                      <span className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-400" />
                      </span>
                      {step}
                    </div>
                  ))}
                  <div
                    className="gpt-step max-w-[85%] w-fit rounded-2xl rounded-tl-sm bg-dc-card border border-dc-border px-4 py-2.5 text-sm text-foreground"
                    style={{ animationDelay: "2300ms" }}
                  >
                    Done. Your Downloads folder is tidy.
                  </div>
                </div>

                {/* Composer */}
                <div className="p-3 border-t border-dc-border bg-dc-card/60">
                  <div className="flex items-center gap-2 rounded-full border border-dc-border bg-dc-card pl-4 pr-1.5 py-1.5">
                    <div className="flex-1 flex items-center gap-0.5 min-w-0">
                      <span className="text-sm text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                        {typed}
                      </span>
                      <span className="w-[2px] h-4 bg-primary animate-pulse flex-shrink-0" />
                    </div>
                    <a
                      href={sendHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Send "${currentPrompt}" to ChatGPT`}
                      onClick={() =>
                        trackCustomEvent("mcp_client_page_cta_clicked", {
                          client: "chatgpt",
                          transport: "remote",
                          cta_position: "hero_composer_send",
                          destination: sendHref,
                        })
                      }
                      className="w-8 h-8 rounded-full bg-primary hover:bg-primary/85 transition-colors flex items-center justify-center flex-shrink-0"
                    >
                      <ArrowUp className="h-4 w-4 text-primary-foreground" />
                    </a>
                  </div>
                  <p className="text-[11px] text-muted-foreground text-center mt-2">
                    Try it: sending opens this prompt in ChatGPT
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

export default GptHero;
