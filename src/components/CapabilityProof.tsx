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
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: copy + checklist */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-[1.15] mb-6">
              Most AI assistants talk. Desktop Commander{" "}
              <span className="text-primary">executes.</span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Describe the outcome in plain English. Your agent figures out the steps, works across your apps, and brings back what you asked for.
            </p>

            {/* Checklist */}
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4">
                Build agents that can:
              </p>
              <ul className="space-y-3">
                {capabilities.map((capability, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-700 ${
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
                    <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-dc-accent/15 ring-1 ring-dc-accent/30">
                      <Check className="w-3 h-3 text-dc-accent" />
                    </span>
                    <span className="text-foreground text-base sm:text-lg">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div
              className={`mt-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? "620ms" : "0ms",
              }}
            >
              <Button size="lg" asChild className="group">
                <a
                  href="#download"
                  onClick={() => trackDownloadRedirect("capability_proof")}
                >
                  <Download className="w-5 h-5" />
                  Download App
                </a>
              </Button>
            </div>
          </div>

          {/* Right: video with overlays */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-video rounded-xl lg:rounded-2xl border border-dc-border bg-dc-surface/50 overflow-hidden shadow-elegant">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityProof;
