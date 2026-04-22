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
      className="py-14 md:py-20 bg-dc-surface/30"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.15]">
            Four ways to get started
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Paste any prompt into Desktop Commander and watch it execute.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className={`group relative flex flex-col h-full p-5 rounded-2xl border border-dc-border bg-background/60 hover:border-blue-500/40 hover:bg-background/80 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 120}ms` : "0ms",
                }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 ring-1 ring-blue-500/30 mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>

                {/* Title — stretched link covers the whole card */}
                <h3 className="mb-3">
                  <a
                    href={useCase.href}
                    className="inline-flex items-center gap-1.5 text-lg sm:text-xl font-semibold text-foreground hover:text-blue-400 transition-colors before:absolute before:inset-0 before:content-['']"
                  >
                    {useCase.title}
                    <ArrowRight className="w-4 h-4 text-blue-400/60 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </h3>

                {/* Copyable prompts — z-10 so clicks hit the buttons, not the stretched link */}
                <ul className="space-y-1.5 flex-grow relative z-10">
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
                          className={`w-full text-left flex items-start justify-between gap-3 px-3 py-1.5 rounded-lg border transition-all ${
                            isCopied
                              ? "bg-green-500/10 border-green-500/40"
                              : "bg-dc-surface/40 border-dc-border/60 hover:bg-dc-surface/80 hover:border-blue-500/40"
                          }`}
                        >
                          <span className="text-xs text-foreground/90 leading-relaxed font-mono">
                            <span className="text-muted-foreground/60">
                              &ldquo;
                            </span>
                            {prompt}
                            <span className="text-muted-foreground/60">
                              &rdquo;
                            </span>
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
          className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground mt-10 transition-all duration-1000 ${
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
            href="/library"
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
