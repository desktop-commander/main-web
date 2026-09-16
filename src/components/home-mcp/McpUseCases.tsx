import { FolderOpen, Code, Server, Wrench } from "lucide-react";
import { useState, useEffect, useRef } from "react";

/**
 * The four things people actually do with Remote MCP, taken from the
 * interview and survey copy rather than invented for the page.
 */

// Cards are plain content for now: the /use-cases/ pages they used to link to
// are being reworked for the MCP-first positioning.
const BUCKETS = [
  {
    icon: FolderOpen,
    title: "Files and documents",
    description:
      "Finding things, comparing versions, renaming and sorting, searching large local archives.",
  },
  {
    icon: Code,
    title: "Code and projects",
    description: "Writing, running and fixing code on your own machine.",
  },
  {
    icon: Server,
    title: "Servers and devices",
    description: "Checking a VPS, deploying a change, reading logs, home automation.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description:
      "Why a program will not start, a disk that has filled up, a service that stopped working.",
  },
];

const McpUseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.15]">
            What people use it for
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ordinary work on a real machine, done in the chat you already have open.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {BUCKETS.map((bucket, index) => {
            const Icon = bucket.icon;
            return (
              <div
                key={bucket.title}
                className={`flex flex-col p-6 rounded-2xl bg-dc-card border border-dc-border transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${120 + index * 100}ms` : "0ms" }}
              >
                <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {bucket.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bucket.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default McpUseCases;
