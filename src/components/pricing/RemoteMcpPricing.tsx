import { useState, useEffect, useRef } from "react";
import { Check, ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { PLATFORM_URL, LOCAL_MCP_URL } from "@/components/home-mcp/links";

/**
 * Remote MCP plans, the main content of /pricing/.
 * Mirrors what a signed-in user sees under Plan & billing.
 */

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Everything you need to connect your first machine.",
    features: [
      "10,000 tool calls per month",
      "ChatGPT, Claude and any MCP client",
      "Connect your devices",
      "Community support",
    ],
    cta: { label: "Get started", variant: "outline" as const },
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "For daily use, with no monthly ceiling.",
    features: [
      "Unlimited tool calls",
      "ChatGPT, Claude and any MCP client",
      "Connect your devices",
      "Priority support",
    ],
    cta: { label: "Upgrade to Pro", variant: "hero" as const },
    highlighted: true,
  },
];

const RemoteMcpPricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { trackCustomEvent } = useAnalyticsAstro();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Already in view on a direct visit to /pricing/
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

  return (
    <section ref={sectionRef} id="pricing" className="pt-32 pb-16 bg-background">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desktop Commander connects ChatGPT, Claude and other AI clients to your own
            machine. Start free, upgrade when you outgrow it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {PLANS.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 flex flex-col transition-all duration-700 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-dc-surface to-dc-card border-2 border-primary/60 shadow-elegant"
                  : "bg-dc-surface border-2 border-dc-border"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${200 + index * 120}ms` : "0ms" }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h2>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <p className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check
                      className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-green-500" : "text-muted-foreground"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.cta.variant}
                size="lg"
                className="w-full flex items-center justify-center gap-2 group"
                asChild
              >
                <a
                  href={PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackCustomEvent("pricing_cta_clicked", {
                      button_text: plan.cta.label,
                      button_location: "pricing_page",
                      plan: plan.name.toLowerCase(),
                      destination: PLATFORM_URL,
                    })
                  }
                >
                  {plan.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div
          className={`mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-xl border border-dc-border bg-dc-surface/40 px-5 py-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Terminal className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <p className="text-sm text-muted-foreground flex-1">
            The local MCP server is free and open source, with no account and no monthly
            limit. It runs on your machine and works with Claude Desktop, Cursor, Windsurf
            and any other MCP client.
          </p>
          <a
            href={LOCAL_MCP_URL}
            className="text-sm font-medium text-primary underline-offset-4 hover:underline whitespace-nowrap"
          >
            Install local MCP &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default RemoteMcpPricing;
