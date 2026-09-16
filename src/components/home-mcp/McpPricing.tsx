import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { PLATFORM_URL } from "./links";

/** Remote MCP plans, mirroring what users see in Plan & billing. */

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    features: [
      "10,000 tool calls per month",
      "ChatGPT, Claude and any MCP client",
      "Community support",
    ],
    cta: { label: "Install", href: "#install", external: false, variant: "outline" as const },
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/ month",
    features: ["Unlimited tool calls", "Priority support"],
    cta: { label: "Upgrade to Pro", href: PLATFORM_URL, external: true, variant: "hero" as const },
    highlighted: true,
  },
];

const McpPricing = () => {
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
    <section ref={sectionRef} id="pricing" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Start free. Upgrade when you outgrow it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {PLANS.map((plan, index) => (
            <Card
              key={plan.name}
              className={`p-6 md:p-8 flex flex-col transition-all duration-500 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-dc-surface to-dc-card border-2 border-primary/60 shadow-elegant"
                  : "bg-dc-card border-2 border-dc-border"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${150 + index * 120}ms` : "0ms" }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">{plan.name}</h3>

              <p className="flex items-baseline gap-2 mb-6">
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
                  href={plan.cta.href}
                  {...(plan.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() =>
                    trackCustomEvent("pricing_cta_clicked", {
                      button_text: plan.cta.label,
                      button_location: "home_pricing",
                      plan: plan.name.toLowerCase(),
                      destination: plan.cta.href,
                    })
                  }
                >
                  {plan.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          The local MCP server stays free and open source.{" "}
          <a href="/pricing/" className="text-primary underline-offset-4 hover:underline">
            See all plans
          </a>
        </p>
      </div>
    </section>
  );
};

export default McpPricing;
