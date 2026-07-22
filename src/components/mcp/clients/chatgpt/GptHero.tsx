import { useEffect, useState } from "react";
import OpenAIMark from "./OpenAIMark";
import GptCta from "./GptCta";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const STATS = [
  { value: "26k+", label: "weekly downloads" },
  { value: "5.4k", label: "GitHub stars" },
  { value: "100%", label: "on your machine" },
];

const GptHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--dc-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--dc-border)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="text-center">
          {/* Logo pairing */}
          <div className={`flex items-center justify-center gap-5 mb-10 ${reveal("delay-0")}`}>
            <img
              src="/favicon-512x512.png"
              alt="Desktop Commander"
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-dc-border bg-dc-surface object-contain p-2.5 shadow-elegant"
            />
            <span className="text-3xl text-muted-foreground font-light select-none">×</span>
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-dc-border bg-white text-black flex items-center justify-center shadow-elegant">
              <OpenAIMark className="w-9 h-9 md:w-11 md:h-11" />
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6 ${reveal("delay-100")}`}
          >
            Give ChatGPT access to
            <br className="hidden sm:block" />{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-dc-blue-glow to-primary">
              your local computer
            </span>
          </h1>

          <p
            className={`text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-9 leading-relaxed ${reveal("delay-200")}`}
          >
            The Desktop Commander plugin works with your real files and your computer's
            terminal. Edit documents, organize folders, and run commands on your own
            machine straight from your chat.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 mb-14 ${reveal("delay-300")}`}
          >
            <GptCta position="hero" className="w-full sm:w-auto text-base px-8" />
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#capabilities">
                See what it can do
                <ChevronDown className="h-4 w-4 ml-1.5" />
              </a>
            </Button>
          </div>

          {/* Demo video in a window frame */}
          <div className={`relative max-w-4xl mx-auto ${reveal("delay-500")}`}>
            <div
              className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl opacity-60"
              aria-hidden="true"
            />
            <div className="relative rounded-xl md:rounded-2xl border border-dc-border bg-dc-surface overflow-hidden shadow-elegant">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-dc-border bg-dc-card">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-muted-foreground truncate">
                  ChatGPT working with local files through Desktop Commander
                </span>
              </div>
              <video
                className="w-full h-auto block"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                title="Demo: ChatGPT organizes files on a real computer through Desktop Commander"
              >
                <source src="/videos/remote-mcp-fileorg-chatgpt.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`flex items-center justify-center gap-8 sm:gap-14 mt-12 flex-wrap ${reveal("delay-700")}`}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GptHero;
