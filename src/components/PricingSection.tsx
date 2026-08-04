import { useState, useEffect, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

const creditPackages = [
  { label: "$20 AI Usage credits/month", value: 20 },
  { label: "$50 AI Usage credits/month", value: 50 },
  { label: "$100 AI Usage credits/month", value: 100 },
];

const PricingSection = () => {
  const [selectedCredits, setSelectedCredits] = useState(20);
  const [creditsDropdownOpen, setCreditsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { trackCustomEvent } = useAnalyticsAstro();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // If already in viewport on mount (e.g. /pricing/ page), show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCreditsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCTA = (plan: string, location: string) => {
    trackCustomEvent('pricing_cta_clicked', {
      plan,
      button_location: location,
    });
    trackDownloadRedirect(`pricing_${plan}`);
  };

  const creditsPrice = `$${selectedCredits}`;

  return (
    <section ref={sectionRef} id="pricing" className="pt-32 pb-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            One simple plan. Pick the credits bundle that fits how much you use Desktop Commander.
          </p>
        </div>

        {/* Single plan card */}
        <div className={`max-w-md mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative bg-dc-surface border-2 border-green-500/50 rounded-xl p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-foreground">Credits Plan</h3>
              <Sparkles className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              We handle the AI models — you pick how much you need.
            </p>

            <div className="mb-6">
              <span className="text-5xl font-bold text-foreground">{creditsPrice}</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>

            {/* Credits package selector */}
            <div className="relative mb-6" ref={dropdownRef}>
              <p className="text-xs text-muted-foreground mb-1.5">Choose AI usage credits package</p>
              <button
                onClick={() => setCreditsDropdownOpen(!creditsDropdownOpen)}
                className="w-full flex items-center justify-between gap-2 bg-dc-surface-elevated border border-dc-border rounded-lg px-3 py-2 text-sm text-foreground hover:border-dc-border/80 transition-colors"
              >
                <span>${selectedCredits} AI Usage credits/month</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${creditsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {creditsDropdownOpen && (
                <div className="absolute z-50 mt-1 left-0 right-0 bg-[#1a1f2e] border border-dc-border rounded-lg shadow-2xl overflow-hidden">
                  {creditPackages.map((pkg) => (
                    <button
                      key={pkg.value}
                      onClick={() => {
                        setSelectedCredits(pkg.value);
                        setCreditsDropdownOpen(false);
                        trackCustomEvent('pricing_credits_package_selected', { package_value: pkg.value });
                      }}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors hover:bg-dc-border/30 ${
                        selectedCredits === pkg.value ? 'text-foreground bg-dc-border/20' : 'text-muted-foreground'
                      }`}
                    >
                      {pkg.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Access to best AI models available on the market",
                "Change bundle package any time",
                "Cancel any time",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <a
                href="/#download"
                onClick={() => handleCTA('credits', 'pricing_card')}
              >
                Get started
              </a>
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              New accounts include free starting credits — try it before you commit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
