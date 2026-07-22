import { useEffect, useState } from "react";
import OpenAIMark from "./OpenAIMark";
import GptCta from "./GptCta";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
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

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 relative text-center">
        {/* Logo pairing */}
        <div className={`flex items-center justify-center gap-5 mb-10 ${reveal("delay-0")}`}>
          <img
            src="/favicon-512x512.png"
            alt="Desktop Commander"
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-dc-border bg-white object-contain p-2.5 shadow-elegant"
          />
          <span className="text-3xl text-muted-foreground font-light select-none">×</span>
          <span className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-dc-border bg-white text-black flex items-center justify-center shadow-elegant">
            <OpenAIMark className="w-9 h-9 md:w-11 md:h-11" />
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.08] tracking-tight mb-6 ${reveal("delay-100")}`}
        >
          Give ChatGPT access to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-dc-blue-glow to-primary whitespace-nowrap">
            your local computer
          </span>
        </h1>

        <p
          className={`text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-9 leading-relaxed ${reveal("delay-200")}`}
        >
          Edit documents, organize folders, and run commands on your own machine straight
          from your chat.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${reveal("delay-300")}`}
        >
          <GptCta position="hero" className="w-full sm:w-auto text-base px-8" />
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <a href="#capabilities">
              See what it can do
              <ChevronDown className="h-4 w-4 ml-1.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GptHero;
