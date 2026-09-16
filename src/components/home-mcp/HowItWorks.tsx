import { useState, useEffect, useRef } from "react";

/** The real setup path: sign up, connect a device, connect the client, chat. */

const STEPS = [
  {
    number: "1",
    title: "Sign up",
    description: "Create an account on mcp.desktopcommander.app with your email.",
  },
  {
    number: "2",
    title: "Connect a device",
    description:
      "Add the computer you want to reach: a laptop, a desktop, or a server. Connect as many as you need.",
  },
  {
    number: "3",
    title: "Connect your AI client",
    description:
      "Install the plugin in ChatGPT, or add the connector in Claude. Any other MCP client works too.",
  },
  {
    number: "4",
    title: "Start chatting",
    description:
      "Ask for what you want done. Your assistant works on the machine and reports back.",
  },
];

const HowItWorks = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-dc-surface/30 border-y border-dc-border/60">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground">Set it up once, in a few minutes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + index * 130}ms` : "0ms" }}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold mb-4">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
