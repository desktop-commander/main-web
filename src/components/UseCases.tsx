import { useState, useEffect, useRef } from "react";
import {
  FolderOpen,
  BarChart3,
  Plug,
  Hammer,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import { trackDownloadRedirect } from "@/lib/analytics/tracking";

const useCases = [
  {
    icon: FolderOpen,
    title: "Managing files",
    prompts: [
      "Sort my Downloads by file type",
      "Find duplicate photos",
    ],
    href: "/use-cases/file-management/",
  },
  {
    icon: BarChart3,
    title: "Chatting with your data",
    prompts: [
      "Summarize the latest CSV in my Downloads",
      "Turn my newest spreadsheet into a chart",
    ],
    href: "/use-cases/analyze-data/",
  },
  {
    icon: Plug,
    title: "Connecting apps",
    prompts: [
      "Summarize new HubSpot deals in Slack",
      "Export Linear tasks to markdown",
    ],
    href: "/use-cases/connect-apps/",
  },
  {
    icon: Hammer,
    title: "Building things",
    prompts: [
      "Build a simple invoicing site on my domain",
      "Add a loan calculator to my WordPress site",
    ],
    href: "/use-cases/build-prototype/",
  },
];

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const handleCopyPrompt = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedPrompt(prompt);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => {
        setCopiedPrompt((current) => (current === prompt ? null : current));
      }, 2400);
    } catch {
      // Clipboard API may be unavailable in some browsers or insecure contexts.
    }
  };

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      className="relative py-16 md:py-24 bg-dc-surface/20 border-y border-dc-border/40"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
            <span className="h-px w-10 bg-gradient-to-l from-primary/50 to-transparent" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary/70">02</span>
            <span className="h-px w-10 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.1] tracking-[-0.02em]">
            Four ways to get started
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Paste any prompt into Desktop Commander and watch it execute.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className={`group relative flex flex-col h-full p-6 rounded-2xl lp-ring-subtle overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_60px_-18px_hsl(var(--dc-blue)/0.35)] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 120}ms` : "0ms",
                }}
              >
                {/* Ghost numeral */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute -top-5 right-3 font-display text-[6.5rem] font-extrabold leading-none text-primary/[0.055] group-hover:text-primary/[0.09] transition-colors duration-500"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 ring-1 ring-blue-500/30 mb-5 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_22px_hsl(var(--dc-blue)/0.35)]">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>

                {/* Title — stretched link covers the whole card */}
                <h3 className="mb-4">
                  <a
                    href={useCase.href}
                    className="inline-flex items-center gap-1.5 font-display text-lg sm:text-xl font-semibold text-foreground hover:text-blue-400 transition-colors before:absolute before:inset-0 before:content-['']"
                  >
                    {useCase.title}
                    <ArrowRight className="w-4 h-4 text-blue-400/60 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </h3>

                {/* Copyable prompts — z-10 so clicks hit the buttons, not the stretched link */}
                <ul className="space-y-2 flex-grow relative z-10">
                  {useCase.prompts.map((prompt) => {
                    const isCopied = copiedPrompt === prompt;
                    return (
                      <li key={prompt}>
                        <button
                          type="button"
                          onClick={() => handleCopyPrompt(prompt)}
                          aria-label={
                            isCopied
                              ? `Copied: ${prompt}`
                              : `Copy prompt: ${prompt}`
                          }
                          className={`w-full text-left flex items-start justify-between gap-3 px-3 py-2 rounded-lg border transition-all ${
                            isCopied
                              ? "bg-green-500/10 border-green-500/40"
                              : "bg-background/50 border-dc-border/60 hover:bg-background/80 hover:border-blue-500/40"
                          }`}
                        >
                          <span className="font-mono text-xs text-foreground/90 leading-relaxed">
                            <span className="text-primary/60">›&nbsp;</span>
                            {prompt}
                          </span>
                          <span className="flex-shrink-0 mt-0.5">
                            {isCopied ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-muted-foreground/60 group-hover:text-blue-400 transition-colors" />
                            )}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

              </div>
            );
          })}
        </div>

        {/* Compact footer row — install hint + browse prompts link */}
        <div
          className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground mt-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: isVisible ? "560ms" : "0ms",
          }}
        >
          <span>
            Don&rsquo;t have the app yet?{" "}
            <a
              href="#download"
              onClick={() => trackDownloadRedirect("use_cases_inline_hint")}
              className="text-blue-400 hover:text-blue-300 font-medium underline-offset-4 hover:underline"
            >
              Download it first
            </a>
          </span>
          <span className="opacity-50">&middot;</span>
          <a
            href="/library/prompts/"
            className="text-blue-400 hover:text-blue-300 font-medium underline-offset-4 hover:underline"
          >
            Browse 60+ prompts
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
