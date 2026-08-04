import { useState, useEffect, useRef } from "react";
import { Check, Key, Monitor, Coins, CreditCard, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

const creditPackages = [
  { label: "$20 AI Usage credits/month", value: 20 },
  { label: "$50 AI Usage credits/month", value: 50 },
  { label: "$100 AI Usage credits/month", value: 100 },
  { label: "$200 AI Usage credits/month", value: 200 },
];

type PricingSectionProps = {
  includeTwoHundredDollarPackage?: boolean;
};

const PricingSection = ({ includeTwoHundredDollarPackage = true }: PricingSectionProps) => {
  const availableCreditPackages = includeTwoHundredDollarPackage
    ? creditPackages
    : creditPackages.filter((pkg) => pkg.value !== 200);
  const [proYearly, setProYearly] = useState(true);
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

  // Pro pricing
  const proMonthly = 7;
  const proYearlyTotal = 70;
  const proPrice = proYearly ? `$${proYearlyTotal}` : `$${proMonthly}`;
  const proPeriod = proYearly ? '/year' : '/month';

  // Pro + Credits pricing: just the selected credits package
  const creditsPrice = `$${selectedCredits}`;

  return (
    <section ref={sectionRef} id="pricing" className="pt-32 pb-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Available plans
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Pick the plan that fits how much you use Desktop Commander.
          </p>
        </div>

        {/* Pricing Cards — 3 columns */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          {/* ── Free Plan ── */}
          <div className="relative bg-dc-surface border border-dc-border rounded-xl p-7 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-dc-border/80">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">Free</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              For occasional use with your own API keys, local models, or ChatGPT subscription.
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">$0</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "200 messages per week, resets Monday midnight UTC",
                "Applies to all providers — LLM API key, local models or ChatGPT",
                "Good fit for occasional usage",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="lg"
              className="w-full border-dc-border hover:bg-dc-surface/80"
              asChild
            >
              <a
                href="/#download"
                onClick={() => handleCTA('free', 'pricing_card')}
              >
                Get started free
              </a>
            </Button>
          </div>

          {/* ── Pro Plan (Bring your own AI Model) ── */}
          <div className="relative bg-dc-surface border border-dc-border rounded-xl p-7 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-dc-border/80">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">Pro</h3>
              <span className="text-xs font-medium text-muted-foreground bg-dc-surface-elevated border border-dc-border px-2.5 py-1 rounded-full">
                Bring your own AI Model
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              For active use with your own LLM API keys, local models, or ChatGPT subscription.
            </p>

            <div className="mb-2">
              <span className="text-4xl font-bold text-foreground">{proPrice}</span>
              <span className="text-muted-foreground ml-1">{proPeriod}</span>
            </div>

            {/* Annual toggle */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-sm text-muted-foreground">Annual</span>
              <button
                onClick={() => {
                  setProYearly(!proYearly);
                  trackCustomEvent('pricing_toggle', { plan: 'pro', billing_period: !proYearly ? 'yearly' : 'monthly' });
                }}
                className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                  proYearly ? 'bg-blue-600' : 'bg-dc-border'
                }`}
                aria-label="Toggle Pro yearly billing"
              >
                <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                  proYearly ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
              {proYearly && (
                <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                  Save 17%
                </span>
              )}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "No weekly message cap",
                "AI Usage credits are not included",
                "On-demand AI Usage credit top-ups",
                "Best fit if you use ChatGPT subscription, local models or other LLM API key and do not want message caps",
                "Choose monthly or yearly billing, with yearly saving 17%",
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
                onClick={() => handleCTA('pro', 'pricing_card')}
              >
                Get started
              </a>
            </Button>
          </div>

          {/* ── Pro + Credits Plan ── */}
          <div className="relative bg-dc-surface border-2 border-green-500/50 rounded-xl p-7 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5">
            {/* Best value badge */}
            <div className="absolute -top-3 right-6">
              <span className="inline-flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Best value
              </span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">Pro + Credits</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              For active use — we handle AI models, works with any supported model.
            </p>

            <div className="mb-5">
              <span className="text-4xl font-bold text-foreground">{creditsPrice}</span>
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
                  {availableCreditPackages.map((pkg) => (
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
                "No weekly message cap",
                "On-demand credit top-ups",
                "Best fit if you want to work and not think about AI providers credits and usage",
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
                onClick={() => handleCTA('pro_credits', 'pricing_card')}
              >
                Get started
              </a>
            </Button>
          </div>
        </div>

        {/* Choose how you power your AI */}
        <div className={`mt-20 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div id="ai-providers" className="text-center mb-4 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose how you power your AI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your plan controls how many messages you can send per week. How those messages are powered is up to you — bring your own keys, use a subscription you already pay for, run models locally, or use DC credits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {/* DC Credits */}
            <div className="bg-dc-surface border border-dc-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-dc-border/80">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Coins className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-foreground">DC Credits</h3>
                    <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">$10 free</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every account starts with $10 in free credits. Use them with any cloud model — Claude, GPT, Gemini, and more. Top up in {includeTwoHundredDollarPackage ? '$10–$200' : '$10–$100'} increments whenever you need more.
                  </p>
                </div>
              </div>
            </div>

            {/* Bring Your Own Keys */}
            <div className="bg-dc-surface border border-dc-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-dc-border/80">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Key className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-foreground">Bring Your Own Keys</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Already have API keys from OpenAI, Anthropic, Google, or other providers? Plug them in directly. Some models even offer free tiers — no cost at all.
                  </p>
                </div>
              </div>
            </div>

            {/* ChatGPT Subscription */}
            <div className="bg-dc-surface border border-dc-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-dc-border/80">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-foreground">ChatGPT Subscription</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Already paying for ChatGPT Plus or Team? Use your existing subscription directly inside Desktop Commander. No extra cost, no duplicate billing.
                  </p>
                </div>
              </div>
            </div>

            {/* Local Models */}
            <div className="bg-dc-surface border border-dc-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-dc-border/80">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-foreground">Local Models (Ollama)</h3>
                    <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Free</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Run open-source models on your own machine with Ollama. Completely free — no credits, no API keys, no cloud costs. Your data stays on your device.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Mix and match however you like. Choose the setup that works best for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
