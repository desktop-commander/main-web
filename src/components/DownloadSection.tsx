import { Download, Star, Github } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import posthog from "posthog-js";

// Platform icons — inline SVGs so we don't depend on lucide for brand marks.
const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.564 13.203c-.028-2.877 2.349-4.253 2.458-4.32-1.34-1.962-3.425-2.231-4.167-2.26-1.775-.18-3.469 1.045-4.371 1.045-.902 0-2.296-1.019-3.773-.991-1.94.028-3.73 1.13-4.728 2.869-2.015 3.498-.514 8.67 1.448 11.513.96 1.39 2.102 2.948 3.603 2.893 1.448-.06 1.994-.937 3.744-.937 1.75 0 2.242.937 3.773.91 1.556-.028 2.54-1.419 3.489-2.815 1.099-1.615 1.551-3.176 1.579-3.258-.035-.014-3.025-1.16-3.055-4.649zM14.84 4.96c.796-.967 1.334-2.308 1.187-3.644-1.147.047-2.537.764-3.36 1.725-.739.854-1.383 2.22-1.21 3.531 1.28.099 2.585-.648 3.383-1.612z"/>
  </svg>
);

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

const DOWNLOADS = {
  macArm:
    "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-arm64.dmg",
  macIntel:
    "https://github.com/desktop-commander/dc-app-client-releases/releases/latest/download/desktop-commander-mac-x64.dmg",
  windows:
    "https://github.com/desktop-commander/dc-app-client-releases-windows/releases/latest/download/desktop-commander-win-x64.msi",
};

const trustStats = [
  { icon: Star, value: "9.52/10", label: "User rating" },
  { icon: Download, value: "26k+", label: "Weekly downloads" },
  { icon: Github, value: "5.9k+", label: "GitHub stars" },
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
      { threshold: 0.1, rootMargin: "-50px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = (platform: string, url: string) => {
    posthog.capture("download_clicked", {
      platform,
      url,
      button_location: "download_section",
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="download"
      className="relative overflow-hidden py-24 md:py-32 scroll-mt-24 bg-gradient-to-b from-background via-dc-surface/40 to-background border-y border-blue-500/10"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-20%] bottom-[-20%] h-[400px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Brand mark */}
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-2xl" />
            <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl shadow-blue-500/30 ring-1 ring-white/10">
              <img
                src="/favicon-512x512.png"
                alt="Desktop Commander"
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
            </div>
          </div>
        </div>

        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-12 transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 leading-[1.1] tracking-tight">
            Download Desktop Commander
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Install the AI agent that runs where your work lives.
          </p>
        </div>

        {/* Trust strip */}
        <div
          className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12 md:mb-14 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {trustStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                {i < trustStats.length - 1 && (
                  <span className="hidden sm:inline-block ml-6 w-1 h-1 rounded-full bg-muted-foreground/40" />
                )}
              </div>
            );
          })}
        </div>

        {/* Download cards */}
        <div
          className={`grid sm:grid-cols-2 gap-4 md:gap-5 max-w-2xl mx-auto mb-5 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* macOS — Apple Silicon (the common case) */}
          <a
            href={DOWNLOADS.macArm}
            onClick={() => handleDownload("macos-m", DOWNLOADS.macArm)}
            className="group relative inline-flex items-center justify-center gap-3 px-7 py-5 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-500/30 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40"
          >
            <AppleIcon className="w-6 h-6" />
            <span>Download for Mac</span>
          </a>

          {/* Windows */}
          <a
            href={DOWNLOADS.windows}
            onClick={() => handleDownload("windows", DOWNLOADS.windows)}
            className="group relative inline-flex items-center justify-center gap-3 px-7 py-5 rounded-xl bg-dc-surface hover:bg-dc-surface/80 text-foreground font-semibold text-base border border-dc-border hover:border-blue-500/40 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <WindowsIcon className="w-6 h-6" />
            <span>Download for Windows</span>
          </a>
        </div>

        {/* Secondary row: release info + architecture fallback */}
        <div
          className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href={DOWNLOADS.macIntel}
            onClick={() => handleDownload("macos-intel", DOWNLOADS.macIntel)}
            className="hover:text-foreground transition-colors"
          >
            Using Intel Mac?
          </a>
          <span className="opacity-50">&middot;</span>
          <span>Free to download</span>
          <span className="opacity-50">&middot;</span>
          <a
            href="https://github.com/desktop-commander/dc-app-client-releases/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            All releases
          </a>
        </div>

      </div>
    </section>
  );
};

export default DownloadSection;
