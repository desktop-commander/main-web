import { Layers, HardDrive, Zap } from "lucide-react";

const CAWhyDifferentSection = () => {
  const points = [
    {
      icon: Layers,
      title: "One interface, zero friction",
      description: "Instead of context-switching between dashboards, you work in one place. No menus to learn, no tabs to manage — just ask and get."
    },
    {
      icon: HardDrive,
      title: "Runs locally, connects globally",
      description: "Desktop Commander runs on your machine — fast, private, no cloud queues. But it connects to all your cloud services when you need them."
    },
    {
      icon: Zap,
      title: "Automate across your stack",
      description: "Chain actions across services: \"When a new lead comes in, create a task in Notion and send me a Slack message.\" Describe it once, run it forever."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why This Approach is Different
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CAWhyDifferentSection;
