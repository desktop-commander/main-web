import { useEffect, useRef, useState } from "react";
import { Smartphone, HardDrive, Zap, Signal, Wifi, Battery, Menu, SquarePen } from "lucide-react";
import CwCta from "./CwCta";

const HIGHLIGHTS = [
  {
    icon: Smartphone,
    title: "From any device",
    description:
      "Open Claude on your phone and your computer does the work. Kick off a task from the couch, check on it from the street.",
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
      "Link one or more machines to your account. As long as a machine is online, Claude can work with it.",
  },
];

const PHONE_STEPS = [
  "Your Desktop has 47 files:",
  "23 screenshots from this month",
  "9 PDFs, mostly invoices",
  "6 project folders",
];

const CwPhone = () => {
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

  const step = `transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`;
  const d = (ms: number) => ({ transitionDelay: `${ms}ms` });

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
              The connector follows your Claude account, not one device. Ask from your
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
            <CwCta position="phone_section" />
          </div>

          {/* Phone frame with mini Claude chat */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-[240px] mx-auto">
              <div
                className="absolute -inset-6 rounded-[3.5rem] bg-[#C96442]/15 blur-3xl"
                aria-hidden="true"
              />
              {/* iPhone body */}
              <div className="relative rounded-[3rem] bg-[#1c1c1e] p-[9px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
                {/* Side buttons */}
                <span className="absolute -left-[2px] top-24 w-[3px] h-8 bg-[#2a2a2c] rounded-l" aria-hidden="true" />
                <span className="absolute -left-[2px] top-36 w-[3px] h-12 bg-[#2a2a2c] rounded-l" aria-hidden="true" />
                <span className="absolute -right-[2px] top-32 w-[3px] h-16 bg-[#2a2a2c] rounded-r" aria-hidden="true" />
                {/* Screen */}
                <div className="relative rounded-[2.5rem] bg-[#FCFBF8] overflow-hidden flex flex-col h-[470px] text-[#1a1915]">
                  {/* Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-[26px] bg-black rounded-full z-10" aria-hidden="true" />
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-7 pt-3.5 pb-1 text-[13px] font-semibold">
                    <span>9:41</span>
                    <span className="flex items-center gap-1 text-[#1a1915]">
                      <Signal className="w-3.5 h-3.5" />
                      <Wifi className="w-3.5 h-3.5" />
                      <Battery className="w-4.5 h-4.5 w-5 h-5" />
                    </span>
                  </div>
                  {/* App header */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-black/[0.06]">
                    <Menu className="w-4.5 h-4.5 w-5 h-5 text-[#5c594e]" />
                    <span className="text-[14px] font-semibold">Claude</span>
                    <SquarePen className="w-4.5 h-4.5 w-5 h-5 text-[#5c594e]" />
                  </div>
                  {/* Chat area */}
                  <div className="flex-1 px-3 pt-3 space-y-2.5 text-left overflow-hidden">
                    <div className={`ml-auto max-w-[88%] w-fit rounded-2xl bg-[#F0EEE6] px-3 py-2 text-[12px] leading-snug ${step}`} style={d(300)}>
                      Check files on my laptop's Desktop. Give me a summary of what you
                      see there.
                    </div>
                    <div className={`inline-flex items-center gap-1.5 text-[10px] text-[#8a877d] border border-black/[0.07] rounded-lg px-2 py-1 bg-white ${step}`} style={d(900)}>
                      <img src="/favicon-512x512.png" alt="" className="w-3 h-3 rounded-[3px]" />
                      Desktop Commander · your Mac at home
                    </div>
                    {PHONE_STEPS.map((text, i) => (
                      <p
                        key={text}
                        className={`font-serif text-[12px] leading-snug ${i > 0 ? "pl-3" : ""} ${step}`}
                        style={d(1400 + i * 400)}
                      >
                        {i > 0 ? `• ${text}` : text}
                      </p>
                    ))}
                    <div className={`font-serif text-[12px] leading-snug ${step}`} style={d(3100)}>
                      Want me to tidy it up?
                    </div>
                  </div>
                  {/* Composer pinned to bottom */}
                  <div className="px-3 pb-2 pt-2">
                    <div className={`rounded-full border border-black/10 bg-white px-3.5 py-2.5 text-[13px] text-[#a7a495] ${step}`} style={d(2800)}>
                      Write a message...
                    </div>
                  </div>
                  {/* Home indicator */}
                  <div className="flex justify-center pb-2">
                    <span className="w-28 h-1 bg-black/80 rounded-full" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CwPhone;
