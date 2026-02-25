import { useState, useEffect, useRef } from "react";
import { Check, Zap, Sparkles, Key, Monitor, MessageSquare, Coins, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
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

  const handleToggle = () => {
    const newValue = !isYearly;
    setIsYearly(newValue);
    trackCustomEvent('pricing_toggle', {
      billing_period: newValue ? 'yearly' : 'monthly',
      section: 'pricing'
    });
  };

  const handleCTA = (plan: string, location: string) => {
    trackCustomEvent('pricing_cta_clicked', {
      plan,
      billing_period: isYearly ? 'yearly' : 'monthly',
      button_location: location,
    });
    trackDownloadRedirect(`pricing_${plan}`);
  };

  return (
    <section ref={sectionRef} id="pricing" className="pt-32 pb-20 bg-background">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start free with 100 messages per week. Upgrade when you need unlimited.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className={`flex items-center justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={handleToggle}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
              isYearly ? 'bg-blue-600' : 'bg-dc-border'
            }`}
            aria-label="Toggle yearly billing"
          >
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
              isYearly ? 'translate-x-6' : 'translate-x-0'
            }`} />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
              Save 17%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Free Plan */}
          <div className="relative bg-dc-surface border border-dc-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-dc-border/80">
            <h3 className="text-lg font-semibold text-foreground mb-2">Free</h3>
            <div className="mb-1">
              <span className="text-4xl font-bold text-foreground">$0</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Get started with 100 messages per week.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="w-full mb-8 border-dc-border hover:bg-dc-surface/80"
              asChild
            >
              <a
                href="/#download"
                onClick={() => handleCTA('free', 'pricing_card')}
                className="flex items-center justify-center gap-2"
              >
                Get started free
              </a>
            </Button>
            <ul className="space-y-3">
              {[
                "100 messages per week",
                "All AI models included",
                "MCP tool support",
                "Community support",
                "$10 free AI credits",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Unlimited Plan */}
          <div className="relative bg-dc-surface border-2 border-blue-500/50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
            {/* Recommended badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                <Sparkles className="h-3 w-3" />
                Recommended
              </span>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2">Unlimited</h3>
            <div className="mb-1">
              <span className="text-4xl font-bold text-foreground">
                {isYearly ? '$5.83' : '$7'}
              </span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              {isYearly
                ? 'Billed as $70/year. No weekly limits.'
                : 'Unlimited messages, no weekly limits.'}
            </p>
            <Button
              size="lg"
              className="w-full mb-8 bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <a
                href="/#download"
                onClick={() => handleCTA('unlimited', 'pricing_card')}
                className="flex items-center justify-center gap-2"
              >
                <Zap className="h-4 w-4" />
                Upgrade now
              </a>
            </Button>
            <ul className="space-y-3">
              {[
                "Unlimited messages",
                "All AI models included",
                "MCP tool support",
                "Priority support",
                "No weekly limits",
                "$10 free AI credits",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Choose how you power your AI */}
        <div className={`mt-20 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose how you power your AI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your plan controls how many messages you can send. How those messages are powered is up to you — bring your own keys, use a subscription you already pay for, run models locally, or use DC credits.
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
                    Every account starts with $10 in free credits. Use them with any cloud model — Claude, GPT, Gemini, and more. Top up in $10–$200 increments whenever you need more.
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
