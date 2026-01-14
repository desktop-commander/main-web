import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import posthog from 'posthog-js';

const downloadOptions = [
  {
    label: "macOS M Chip",
    platform: "macos-m",
    url: "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg",
  },
  {
    label: "macOS Intel",
    platform: "macos-intel",
    url: "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg",
  },
  {
    label: "Windows",
    platform: "windows",
    url: "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-win-x64.exe",
  },
];

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = (option: typeof downloadOptions[0]) => {
    posthog.capture('download_clicked', {
      platform: option.platform,
      url: option.url,
      button_location: 'download_section',
      page_path: window.location.pathname
    });
  };

  return (
    <section ref={sectionRef} id="download" className="py-24 md:py-32 scroll-mt-24 bg-gradient-to-b from-dc-accent/5 via-dc-accent/10 to-dc-accent/5 border-y border-dc-accent/20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center gap-3 justify-center mb-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-dc-accent/20 text-dc-accent border border-dc-accent/30 rounded-full">
                Beta
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Download Desktop Commander
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-dc-accent" />
              <span>84% of users save 3+ hours every week</span>
            </div>
          </div>

          {/* Download buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {downloadOptions.map((option, index) => (
              <Button
                key={index}
                variant="hero"
                size="lg"
                className="min-w-[180px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20"
                asChild
              >
                <a
                  href={option.url}
                  onClick={() => handleDownload(option)}
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  {option.label}
                </a>
              </Button>
            ))}
          </div>

          {/* MCP Link */}
          <div className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a 
              href="/mcp" 
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 text-sm"
            >
              Looking for MCP?
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
