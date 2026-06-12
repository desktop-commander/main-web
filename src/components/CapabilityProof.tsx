import { useState, useEffect, useRef } from "react";
import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackDownloadRedirect } from "@/lib/analytics/tracking";

const capabilities = [
  "Organize files and folders",
  "Connect apps and tools",
  "Automate repetitive workflows",
  "Build apps and software",
];

const CapabilityProof = () => {
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
    <section ref={sectionRef} className="relative py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy + instrument checklist */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Section index */}
            <div className="flex items-center gap-3 mb-6" aria-hidden="true">
              <span className="font-mono text-xs tracking-[0.3em] text-primary/70">01</span>
              <span className="h-px w-12 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground leading-[1.08] tracking-[-0.02em] mb-6">
              Most AI assistants talk. Desktop Commander{" "}
              <span className="lp-gradient-text">executes.</span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light mb-10 max-w-xl">
              Describe the outcome in plain English. Your agent figures out the steps, works across your apps, and brings back what you asked for.
            </p>

            {/* Checklist — spec-sheet rows */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Build agents that can:
              </p>
              <ul>
                {capabilities.map((capability, index) => (
                  <li
                    key={index}
                    className={`group flex items-center gap-4 py-3.5 border-b border-dc-border/60 transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${200 + index * 80}ms`
                        : "0ms",
                    }}
                  >
                    <span aria-hidden="true" className="font-mono text-[11px] text-primary/50 w-6 flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground text-base sm:text-lg flex-1 transition-transform duration-300 group-hover:translate-x-1">
                      {capability}
                    </span>
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-dc-accent/15 ring-1 ring-dc-accent/30 transition-all duration-300 group-hover:bg-dc-accent/25 group-hover:shadow-[0_0_14px_hsl(var(--dc-blue)/0.35)]">
                      <Check className="w-3 h-3 text-dc-accent" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: video framed as evidence */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Glow pool */}
              <div
                aria-hidden="true"
                className="absolute -inset-x-8 -bottom-10 h-36 pointer-events-none"
                style={{ background: 'radial-gradient(closest-side, hsl(var(--dc-blue) / 0.18), transparent 72%)' }}
              />
              <div className="relative lp-ring lp-glow aspect-video rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  title="Desktop Commander App Demo - AI executing tasks on your computer"
                >
                  <source
                    src="/videos/desktop-commander-app-demo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Corner crosshairs */}
              <span aria-hidden="true" className="hidden md:block absolute -top-3 -left-3 font-mono text-primary/30 select-none">+</span>
              <span aria-hidden="true" className="hidden md:block absolute -bottom-3 -right-3 font-mono text-primary/30 select-none">+</span>
            </div>
          </div>
        </div>

        {/* Full-width centered CTA */}
        <div
          className={`mt-16 md:mt-20 flex justify-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: isVisible ? "700ms" : "0ms",
          }}
        >
          <Button
            variant="hero"
            size="lg"
            asChild
            className="lp-shimmer group rounded-xl ring-1 ring-white/15 shadow-[0_10px_44px_-10px_hsl(var(--dc-blue)/0.5)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_56px_-10px_hsl(var(--dc-blue)/0.65)] active:scale-95"
          >
            <a
              href="#download"
              onClick={() => trackDownloadRedirect("capability_proof")}
              className="flex items-center gap-2"
            >
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              Download App
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CapabilityProof;
