import { useEffect, useState } from "react";
import OpenAIMark from "./OpenAIMark";
import GptCta from "./GptCta";
import { ChevronDown } from "lucide-react";

const TYPED_PROMPTS = [
  "Organize my Downloads folder by file type",
  "Convert all HEIC photos on my Desktop to JPG",
  "Launch my local server and watch the logs",
  "Extract totals from every invoice into a spreadsheet",
  "Check my system's health and tell me what needs attention",
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

  return text;
};

const GptHero = () => {
  const [mounted, setMounted] = useState(false);
  const typed = useTypewriter(TYPED_PROMPTS);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-24 pb-20">
      {/* Local keyframes for beam dots and floating orbs */}
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
        .gpt-dot { animation: gpt-travel 2.4s ease-in-out infinite; }
        .gpt-dot-back { animation: gpt-travel-back 2.4s ease-in-out infinite; animation-delay: 1.2s; }
        .gpt-orb-a { animation: gpt-float 9s ease-in-out infinite; }
        .gpt-orb-b { animation: gpt-float 12s ease-in-out infinite reverse; }
      `}</style>

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="gpt-orb-a absolute -top-40 left-1/2 -translate-x-1/2 w-[950px] h-[550px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="gpt-orb-b absolute top-1/2 -left-40 w-[450px] h-[450px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="gpt-orb-a absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-dc-blue-glow/10 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--dc-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--dc-border)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 65% at 50% 20%, black 30%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 65% at 50% 20%, black 30%, transparent 78%)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative text-center">
        {/* Logos connected by an animated data beam */}
        <div className={`flex items-center justify-center mb-12 ${reveal("delay-0")}`}>
          <img
            src="/favicon-512x512.png"
            alt="Desktop Commander"
            className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl border border-dc-border bg-white object-contain p-2.5 shadow-elegant"
          />
          <div className="relative w-24 sm:w-36 h-px mx-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent">
            <span className="gpt-dot absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            <span className="gpt-dot-back absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-dc-blue-glow shadow-[0_0_10px_hsl(var(--dc-blue-glow))]" />
          </div>
          <span className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-2xl border border-dc-border bg-white text-black flex items-center justify-center shadow-elegant">
            <OpenAIMark className="w-9 h-9 md:w-10 md:h-10" />
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6 ${reveal("delay-100")}`}
        >
          Give ChatGPT access
          <br />
          to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-dc-blue-glow to-primary">
            your local computer
          </span>
        </h1>

        <p
          className={`text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed ${reveal("delay-200")}`}
        >
          Edit documents, organize folders, and run commands on your own machine straight
          from your chat.
        </p>

        <div className={reveal("delay-300")}>
          <GptCta position="hero" className="text-lg px-10 py-6" />
        </div>

        {/* Typing prompt line */}
        <div
          className={`mt-12 flex items-center justify-center ${reveal("delay-500")}`}
          aria-hidden="true"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-dc-border bg-dc-card/80 backdrop-blur px-5 py-3 max-w-full">
            <span className="text-primary select-none">›</span>
            <span className="text-sm sm:text-base text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
              {typed}
            </span>
            <span className="w-[2px] h-4 bg-primary animate-pulse flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#discover"
        aria-label="Scroll to see more"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default GptHero;
