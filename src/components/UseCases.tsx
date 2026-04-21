import { useState, useEffect, useRef } from "react";
import { FolderOpen, BarChart3, Plug, ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackDownloadRedirect } from "@/lib/analytics/tracking";

const useCases = [
  {
    icon: FolderOpen,
    title: "Managing files",
    prompts: [
      "Sort my Downloads by file type",
      "Convert HEIC photos to JPG",
      "Find duplicate photos",
    ],
    href: "/use-cases/file-management/",
  },
  {
    icon: BarChart3,
    title: "Chatting with your data",
    prompts: [
      "Summarize revenue.csv by region",
      "Find customers who churned",
      "Compare last month's invoices to this month's",
    ],
    href: "/use-cases/analyze-data/",
  },
  {
    icon: Plug,
    title: "Connecting apps",
    prompts: [
      "Summarize new HubSpot deals in Slack",
      "Add Calendly calls to the CRM",
      "Export Linear tasks to markdown",
    ],
    href: "/use-cases/connect-apps/",
  },
];

const UseCases = () => {
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
    <section
      ref={sectionRef}
      id="use-cases"
      className="py-20 md:py-28 bg-dc-surface/30"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-14 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.15]">
            Three ways people use it
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start with one of these and let your agent run.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <a
                key={useCase.title}
                href={useCase.href}
                className={`group relative flex flex-col h-full p-6 sm:p-8 rounded-2xl border border-dc-border bg-background/60 hover:border-dc-blue/40 hover:bg-background/80 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 120}ms` : "0ms",
                }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-dc-blue/10 ring-1 ring-dc-blue/20 mb-6 group-hover:bg-dc-blue/15 transition-colors">
                  <Icon className="w-6 h-6 text-dc-blue" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-5">
                  {useCase.title}
                </h3>

                {/* Starter prompts */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {useCase.prompts.map((prompt) => (
                    <li
                      key={prompt}
                      className="text-sm text-foreground/85 leading-relaxed font-mono"
                    >
                      <span className="text-muted-foreground/60">&ldquo;</span>
                      {prompt}
                      <span className="text-muted-foreground/60">&rdquo;</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                  <span>See the full guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-14 md:mt-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: isVisible ? "640ms" : "0ms",
          }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="group">
              <a
                href="#download"
                onClick={() => trackDownloadRedirect("use_cases_cta")}
                className="flex items-center justify-center gap-2"
              >
                <Terminal className="h-5 w-5" />
                Start Building
              </a>
            </Button>
            <a
              href="/library"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-dc-border text-foreground rounded-lg font-medium hover:bg-dc-surface/50 transition-all"
            >
              Browse 60+ prompts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
