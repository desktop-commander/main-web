import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const PricingTeaser = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { trackCustomEvent } = useAnalyticsAstro();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className={`text-center mb-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            One simple plan. We handle the AI models — you pick how much you need.
          </p>
        </div>

        {/* Single-card teaser */}
        <div className={`max-w-md mx-auto mb-10 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-dc-surface border-2 border-green-500/50 rounded-xl p-6 relative">
            <h3 className="text-base font-semibold text-foreground mb-1">Credits Plan</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Monthly AI usage credits bundle — from $20 per month.
            </p>
            <div className="mb-3">
              <span className="text-3xl font-bold text-foreground">from $20</span>
              <span className="text-muted-foreground ml-1 text-sm">/month</span>
            </div>
            <ul className="space-y-2">
              {[
                "Access to best AI models available on the market",
                "Change bundle package any time",
                "Cancel any time",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-muted-foreground/80 mt-3 pt-3 border-t border-dc-border/60">
              New accounts include free starting credits to try it out.
            </p>
          </div>
        </div>

        {/* CTA to full pricing page */}
        <div className={`text-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button variant="outline" size="lg" asChild className="border-dc-border hover:bg-dc-surface/80">
            <a
              href="/pricing/"
              className="inline-flex items-center gap-2"
              onClick={() => trackCustomEvent('pricing_teaser_cta_clicked', {
                button_text: 'View full pricing',
                button_location: 'homepage_pricing_teaser',
              })}
            >
              View full pricing
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
