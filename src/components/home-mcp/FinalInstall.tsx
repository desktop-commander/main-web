import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { PLATFORM_URL } from "./links";

/** Closing band: same two CTAs as the hero, nothing else competing. */

const FinalInstall = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { trackCustomEvent } = useAnalyticsAstro();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[130px]" />
      </div>

      <div
        className={`container mx-auto max-w-3xl px-4 sm:px-6 relative text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.15]">
          Put your computer in the chat
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Install the connector, sign in, and connect the machine you want to reach.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="hero" size="lg" className="flex items-center justify-center gap-2 group text-base px-8" asChild>
            <a
              href="#install"
              onClick={() =>
                trackCustomEvent("install_cta_clicked", {
                  button_text: "Install",
                  button_location: "home_final_cta",
                  destination: "#install",
                })
              }
            >
              Install
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center justify-center gap-2 border-dc-border hover:bg-dc-surface"
            asChild
          >
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCustomEvent("manage_devices_clicked", {
                  button_text: "Manage devices",
                  button_location: "home_final_cta",
                  destination: PLATFORM_URL,
                })
              }
            >
              Manage devices
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalInstall;
