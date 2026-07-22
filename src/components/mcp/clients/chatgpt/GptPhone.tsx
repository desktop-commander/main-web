import { useEffect, useRef, useState } from "react";
import { Smartphone, HardDrive, Zap, Check } from "lucide-react";
import GptCta from "./GptCta";

const HIGHLIGHTS = [
  {
    icon: Smartphone,
    title: "From any device",
    description:
      "Open ChatGPT on your phone and your computer does the work. Kick off a build from the couch, check on it from the street.",
  },
  {
    icon: HardDrive,
    title: "Your real machine",
    description:
      "Files, terminal, previews, and running processes on your actual computer. Not a sandbox in the cloud.",
  },
  {
    icon: Zap,
    title: "Always ready",
    description:
      "Link one or more machines to your account. As long as a machine is online, ChatGPT can work with it.",
  },
];

const GptPhone = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && setVisible(true),
      { threshold: 0.15, rootMargin: "-40px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Works from your phone
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5">
              Control your computer from your pocket
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The plugin follows your ChatGPT account, not one device. Ask from your
              phone or any browser and Desktop Commander carries it out on your machine
              at home.
            </p>
            <div className="space-y-5 mb-9">
              {HIGHLIGHTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 transition-all duration-500 ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${200 + i * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <GptCta position="phone_section" />
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-primary/15 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] rounded-2xl border border-dc-border bg-dc-surface/50 overflow-hidden shadow-elegant">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  title="Controlling a computer from a phone through ChatGPT and Desktop Commander"
                >
                  <source src="/videos/remote-mcp-mobile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GptPhone;
