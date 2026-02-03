import DownloadButtons from "@/components/shared/DownloadButtons";
import { Terminal, MessageSquare } from "lucide-react";

const CAHowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Download Desktop Commander",
      description: "One-time setup on your Mac or Windows computer. No accounts required to start."
    },
    {
      number: "2",
      title: "Ask Desktop Commander to connect your tools",
      description: "Just tell it what you want to connect. Desktop Commander handles the setup — installing MCP servers, configuring APIs, or connecting via terminal. You don't need to know how it works.",
      subPoints: [
        "\"Connect my HubSpot account\"",
        "\"Set up Google Analytics integration\"", 
        "\"I want to control WordPress from here\""
      ]
    },
    {
      number: "3",
      title: "Describe what you want done",
      description: "Once connected, just talk to your tools. Ask questions, give commands, chain actions across services — all in natural language."
    }
  ];

  return (
    <section id="get-started" className="py-16 md:py-24 bg-dc-card/30 scroll-mt-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three steps to control your entire stack
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Number circle */}
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Sub-points for step 2 */}
                {step.subPoints && (
                  <div className="space-y-2 mb-4">
                    {step.subPoints.map((point, i) => (
                      <div 
                        key={i}
                        className="inline-block mr-3 mb-2 px-3 py-1.5 rounded-lg bg-dc-surface border border-dc-border font-mono text-sm"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Download buttons - only show on first step */}
                {index === 0 && (
                  <div className="mt-6">
                    <DownloadButtons location="connect_apps" />
                  </div>
                )}

                {/* Connection methods note - show on step 2 */}
                {index === 1 && (
                  <div className="mt-4 p-4 rounded-xl bg-dc-surface border border-dc-border">
                    <div className="flex items-start gap-3">
                      <Terminal className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-foreground font-medium">Under the hood:</span> Desktop Commander uses MCP (Model Context Protocol), terminal integrations, and API connections. But you don't need to configure any of this manually — just ask, and it sets everything up.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CAHowItWorksSection;
