import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Zap, Key, Coins, Sparkles } from "lucide-react";
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
    <section ref={sectionRef} id="pricing" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
            <span className="h-px w-10 bg-gradient-to-l from-primary/50 to-transparent" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary/70">04</span>
            <span className="h-px w-10 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-[-0.02em]">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Start free. Bring your tokens or top up with us.
          </p>
        </div>

        {/* Three ways to power the AI */}
        <div className={`max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-150 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="flex items-center gap-2 font-mono text-xs text-foreground/90 bg-dc-surface/50 border border-dc-border/70 rounded-lg px-3 py-2.5">
              <Key className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
              <span>Bring your API keys</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-foreground/90 bg-dc-surface/50 border border-dc-border/70 rounded-lg px-3 py-2.5">
              <Sparkles className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
              <span>Use your ChatGPT plan</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-foreground/90 bg-dc-surface/50 border border-dc-border/70 rounded-lg px-3 py-2.5">
              <Coins className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
              <span>Top up credits in app</span>
            </div>
          </div>
        </div>

        {/* Compact two-card teaser */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Free */}
          <div className="lp-ring-subtle rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5">
            <h3 className="font-display text-base font-semibold text-foreground mb-1">Free</h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              For occasional use with DC credits, your own API keys, or ChatGPT.
            </p>
            <div className="mb-5 flex items-baseline">
              <span className="font-display text-5xl font-bold text-foreground tracking-tight">$0</span>
              <span className="font-mono text-muted-foreground ml-2 text-xs">/month</span>
            </div>
            <ul className="space-y-2.5">
              {[
                "200 messages per week, resets Mondays",
                "Works across all models: DC credits, BYOK, or ChatGPT",
                "Top up AI credits any time",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="relative lp-ring rounded-2xl p-7 shadow-[0_20px_70px_-20px_hsl(var(--dc-blue)/0.4)] transition-all duration-300 hover:-translate-y-0.5">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 bg-blue-600 text-white font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-[0_0_18px_hsl(var(--dc-blue)/0.5)]">
                Bring your own keys
              </span>
            </div>
            <h3 className="font-display text-base font-semibold text-foreground mb-1">Pro</h3>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              For active use with your own API keys, local models, or ChatGPT.
            </p>
            <div className="mb-5 flex items-baseline">
              <span className="font-display text-5xl font-bold lp-gradient-text tracking-tight">$7</span>
              <span className="font-mono text-muted-foreground ml-2 text-xs">/month</span>
            </div>
            <ul className="space-y-2.5">
              {[
                "No weekly message cap",
                "Works across every model and API key source",
                "Cancel any time, no questions asked",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-muted-foreground/80 mt-4 pt-3 border-t border-dc-border/60">
              Tokens are not included. Bring your own keys or top up credits in app.
            </p>
          </div>
        </div>

        {/* CTA to full pricing page */}
        <div className={`text-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button variant="outline" size="lg" asChild className="rounded-xl border-dc-border bg-background/40 hover:bg-dc-surface/80 hover:border-primary/40">
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
