import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Zap } from "lucide-react";
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
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start free with 100 messages per week. Upgrade when you need unlimited.
          </p>
        </div>

        {/* Compact two-card teaser */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Free */}
          <div className="bg-dc-surface border border-dc-border rounded-xl p-6">
            <h3 className="text-base font-semibold text-foreground mb-1">Free</h3>
            <div className="mb-3">
              <span className="text-3xl font-bold text-foreground">$0</span>
              <span className="text-muted-foreground ml-1 text-sm">/month</span>
            </div>
            <ul className="space-y-2">
              {["100 messages/week", "All AI models", "$10 free credits"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Unlimited */}
          <div className="bg-dc-surface border-2 border-blue-500/50 rounded-xl p-6 relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                Popular
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">Unlimited</h3>
            <div className="mb-3">
              <span className="text-3xl font-bold text-foreground">$7</span>
              <span className="text-muted-foreground ml-1 text-sm">/month</span>
            </div>
            <ul className="space-y-2">
              {["Unlimited messages", "Priority support", "No weekly limits"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA to full pricing page */}
        <div className={`text-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button variant="outline" size="lg" asChild className="border-dc-border hover:bg-dc-surface/80">
            <a
              href="/pricing"
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
