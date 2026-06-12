import { Star, Download, Github } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import TestimonialsStrip from "./TestimonialsStrip";

const TrustedBy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Star,
      value: "9.52/10",
      label: "User Rating",
      description: "Developer satisfaction"
    },
    {
      icon: Download,
      value: "26k+",
      label: "Weekly Downloads",
      description: "Active installations"
    },
    {
      icon: Github,
      value: "5.9k+",
      label: "GitHub Stars",
      description: "Community trust"
    }
  ];

  const testimonials = [
    {
      quote: "It is a great tool, thank you, I like using it, as it gives claude an ability to do surgical edits, making it more like a human developer.",
      author: "naranbaz",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Life saver! I was paying for both Claude + Cursor which felt duplicated. This solves that perfectly. With MCP + web search, it writes code with the latest updates. So good when Cursor doesn't work or fast requests run out.",
      author: "play365alltime",
      role: "Developer",
      company: "Community"
    },    {
      quote: "I had 76 errors in 23 files in my Svelte 5 project. Used desktop-commander, sequentialthinking, and tree-sitter to fix them all. Never resolved type errors this quickly with AI before!",
      author: "dependablecalls",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "I'm the one who is grateful for this, which is the best MCP that exists!",
      author: "Dhiego Pagotto",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Just joined I absolutely love this thing",
      author: "Uloi",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "happy command coding everyone - god I love this tool",
      author: "Geoff F",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Wow, I've been building something similar. This makes my project so much easier to build now. I'm truly grateful. Thank you!",
      author: "Creedo",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "btw @DC Dmitry , thanks for such great MCP 🙂 I'm loving it 🙂",
      author: "Damian Pastorini",
      role: "Developer",
      company: "COLY"
    },
    {
      quote: "Switched from Windsurf to Claude MCP and love it! No more token limits or cascade issues. Can code as much as I want without worrying about costs. This is much more than just code editing!",
      author: "jesseburstrom5920",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Been using this MCP daily for a couple of months now and onboarded a bunch of buddies onto it as well, a go to in my arsenal, great work!!",
      author: "Bjorn Melin",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Played with DesktopCommander today, replaced FileServer and continued my project. The diff-based editing is awesome - could continue longer in the same chat before hitting limits. Great!",
      author: "eszpee",
      role: "Developer",
      company: "Community"
    }
  ];

  return (
    <section ref={sectionRef} className="relative pt-16 md:pt-24 pb-10 md:pb-12 bg-dc-surface/20 border-y border-dc-border/40 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
            <span className="h-px w-10 bg-gradient-to-l from-primary/50 to-transparent" />
            <span className="font-mono text-xs tracking-[0.3em] text-primary/70">06</span>
            <span className="h-px w-10 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-[-0.02em]">
            From the community
          </h2>
        </div>

        {/* Trust Stats — oversized telemetry readouts */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 mb-10 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`group relative flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: isVisible ? `${500 + index * 200}ms` : '0ms'
                }}
              >
                {index > 0 && (
                  <span aria-hidden="true" className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-dc-border/70" />
                )}
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent className="h-4 w-4 text-blue-400 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <div className="font-display text-5xl md:text-6xl font-bold lp-gradient-text tracking-tight">
                  {stat.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials - Outside container for full-width */}
      <div className={`transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <TestimonialsStrip testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TrustedBy;
