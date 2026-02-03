import { Clock, Zap, Workflow } from "lucide-react";

const CASolutionSection = () => {
  const features = [
    {
      title: "Skip the UI entirely",
      description: "AI speaks directly to the service in its data language. No menus, no clicks, no learning curve.",
      icon: Zap,
    },
    {
      title: "Describe outcomes, not steps",
      description: "\"Extract leads from last week's conference\" — you say what you want, not how to get it.",
      icon: Clock,
    },
    {
      title: "Chain actions across tools",
      description: "Read Slack → summarize in Notion → pull supporting analytics → all in one conversation.",
      icon: Workflow,
    }
  ];

  const exampleCommands = [
    "Extract leads I added to my CRM after last week's conference.",
    "Send a branded email to this contact segment.",
    "Find any traffic spikes in the last 30 days.",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            One conversation. All your tools.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander connects to your services and lets you control them in plain English.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Example Commands */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-sm text-muted-foreground text-center mb-4">Just say things like:</p>
          <div className="space-y-3">
            {exampleCommands.map((command, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-dc-surface border border-dc-border font-mono text-sm md:text-base text-center"
              >
                "{command}"
              </div>
            ))}
          </div>
        </div>

        {/* Video Demo */}
        <div className="relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden max-w-4xl mx-auto shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Desktop Commander connect apps demo - showing how to control HubSpot, WordPress, and other services using natural language"
            title="Control your apps through chat - Desktop Commander demo"
          >
            <source src="/videos/connect-apps-demo.mov" type="video/quicktime" />
            <source src="/videos/connect-apps-demo.mov" type="video/mp4" />
            <p className="text-muted-foreground">Your browser does not support the video tag. <a href="/videos/connect-apps-demo.mov" className="text-primary hover:underline">Download the demo video</a></p>
          </video>
        </div>
      </div>
    </section>
  );
};

export default CASolutionSection;
