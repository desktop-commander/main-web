import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { trackDownloadRedirect } from '@/lib/analytics/tracking';

// Astro-compatible Hero - Redesigned for App-first positioning
type LogStep = { label: string; delay: number; done?: boolean };

const EXECUTION_STEPS: LogStep[] = [
  { label: "Opened ~/Downloads", delay: 600 },
  { label: 'Scanning 247 files…', delay: 900 },
  { label: 'Found 12 matching "invoice"', delay: 900 },
  { label: "Created /Desktop/Invoices-2026", delay: 900 },
  { label: "Moved 12 files · 1.4s", delay: 900, done: true },
];

const HeroAstro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Streaming execution log — steps appear one at a time, then loop.
  useEffect(() => {
    let cancelled = false;
    let timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setVisibleSteps(0);
      EXECUTION_STEPS.forEach((_step, i) => {
        const cumulative = EXECUTION_STEPS.slice(0, i + 1).reduce(
          (acc, s) => acc + s.delay,
          0,
        );
        timers.push(
          setTimeout(() => {
            if (!cancelled) setVisibleSteps(i + 1);
          }, cumulative),
        );
      });
      // Restart the loop after the last step lingers on screen.
      const total = EXECUTION_STEPS.reduce((a, s) => a + s.delay, 0) + 3200;
      timers.push(
        setTimeout(() => {
          if (!cancelled) run();
        }, total),
      );
    };

    // Small initial delay so the entrance animation can breathe.
    const boot = setTimeout(run, 800);

    return () => {
      cancelled = true;
      clearTimeout(boot);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-16 lg:gap-20 lg:grid lg:grid-cols-12 lg:items-center">
          
          {/* Product interface mockup - styled as screenshot */}
          <div className={`w-full max-w-xl lg:max-w-none lg:col-span-6 lg:order-2 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto w-full perspective-1000">
              {/* Screenshot frame with subtle tilt */}
              <div className="transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="rounded-xl lg:rounded-2xl border border-dc-border bg-dc-surface shadow-2xl shadow-black/30 overflow-hidden pointer-events-none select-none">
                  {/* Window chrome / title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-dc-surface/80 border-b border-dc-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-muted-foreground">Desktop Commander</span>
                    </div>
                    <div className="w-12"></div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-4 sm:p-6 bg-gradient-to-b from-dc-surface to-background">
                    {/* Folder selector */}
                    <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-background/50 border border-dc-border rounded-lg w-fit">
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      <span className="text-sm text-foreground">~/Desktop</span>
                      <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    {/* Main input - dark theme */}
                    <div className="bg-background border border-dc-border rounded-2xl px-4 py-4 mb-4 flex items-center justify-between">
                      <span className="text-muted-foreground text-sm sm:text-base">Move all invoices from Downloads to a new folder</span>
                      <div className="w-8 h-8 bg-dc-accent rounded-full flex items-center justify-center flex-shrink-0 ml-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Action buttons - no Auto */}
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs sm:text-sm text-blue-400">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                        Prompts
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs sm:text-sm text-purple-400">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Apps
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-dc-surface border border-dc-border rounded-full text-xs sm:text-sm text-muted-foreground">
                        + Add Knowledge
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-dc-surface border border-dc-border rounded-full text-xs sm:text-sm text-muted-foreground">
                        claude-sonnet-4
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Live execution log — proves "reports back" */}
                    <div className="mt-5 pt-4 border-t border-dc-border/60">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex h-2 w-2">
                          <span className={`absolute inline-flex h-full w-full rounded-full bg-dc-accent ${
                            visibleSteps > 0 && visibleSteps < EXECUTION_STEPS.length ? 'animate-ping opacity-60' : 'opacity-0'
                          }`}></span>
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${
                            visibleSteps >= EXECUTION_STEPS.length ? 'bg-green-500' : 'bg-dc-accent'
                          }`}></span>
                        </span>
                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                          {visibleSteps >= EXECUTION_STEPS.length ? 'Completed' : visibleSteps > 0 ? 'Executing' : 'Ready'}
                        </span>
                      </div>
                      <div className="font-mono text-[11px] sm:text-xs space-y-1.5 min-h-[132px]">
                        {EXECUTION_STEPS.map((step, i) => {
                          const shown = i < visibleSteps;
                          const isLast = i === EXECUTION_STEPS.length - 1;
                          return (
                            <div
                              key={i}
                              className={`flex items-start gap-2 transition-all duration-500 ${
                                shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                              }`}
                            >
                              {step.done ? (
                                <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                              ) : (
                                <span className="text-dc-accent flex-shrink-0 mt-0.5 leading-none">›</span>
                              )}
                              <span className={`${isLast && shown ? 'text-foreground' : 'text-muted-foreground'} break-words`}>
                                {step.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* File browser overlay widget */}
              <div className="absolute -top-4 -right-6 sm:-top-6 sm:-right-10 transform rotate-3 hover:rotate-1 transition-transform duration-500 pointer-events-none select-none opacity-90">
                <div className="bg-dc-surface border border-dc-border rounded-lg shadow-xl shadow-black/40 overflow-hidden w-44 sm:w-52">
                  {/* Mini title bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-background/50 border-b border-dc-border">
                    <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span className="text-[10px] text-muted-foreground">~/Desktop</span>
                  </div>
                  {/* File list */}
                  <div className="p-2 space-y-1 text-xs">
                    {/* Newly created folder — appears when the log reports "Created …" */}
                    <div
                      aria-hidden={visibleSteps < 4}
                      className={`flex items-center gap-2 px-2 rounded overflow-hidden transition-all duration-500 ease-out ${
                        visibleSteps >= 4
                          ? 'max-h-8 py-1 opacity-100'
                          : 'max-h-0 py-0 opacity-0'
                      } ${
                        visibleSteps === 4
                          ? 'bg-green-500/15 ring-1 ring-green-500/40'
                          : 'hover:bg-dc-border/30'
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 flex-shrink-0 transition-colors duration-500 ${
                          visibleSteps === 4 ? 'text-green-400' : 'text-blue-400'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      <span className="text-foreground truncate">Invoices-2026</span>
                      <span
                        className={`ml-auto text-[8px] uppercase tracking-wider font-medium text-green-400 transition-opacity duration-500 ${
                          visibleSteps === 4 ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        New
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30">
                      <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      <span className="text-foreground">Projects</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30">
                      <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      <span className="text-foreground">Invoices</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30">
                      <svg className="w-3.5 h-3.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground">invoice-1.pdf</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30">
                      <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground">budget.xlsx</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30">
                      <svg className="w-3.5 h-3.5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground">photo.jpg</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dc-border/30">
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground">notes.txt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="lg:col-span-6 text-center lg:text-left lg:order-1 w-full">
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 md:mb-10 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              AI that executes.
            </h1>

            <p className={`text-lg sm:text-xl text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Most AI assistants talk. Desktop Commander opens folders, runs commands, writes files, reports back.
            </p>

            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center items-center mb-5 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95 group"
                asChild
              >
                <a href="#download" onClick={() => trackDownloadRedirect('hero_main')}>
                  <Download className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Download App
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Quiet trust line — replaces the old badges */}
            <p className={`text-sm text-muted-foreground transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              join 250k+ people agentising their workflows.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAstro;
