import { Clock, Link, Workflow } from "lucide-react";

const CASolutionSection = () => {
  const features = [
    {
      title: "Cut hours of dashboard time",
      description: "No more hunting through menus or remembering where settings live — just ask for what you need and get it instantly.",
      icon: Clock,
    },
    {
      title: "Connect 100+ services",
      description: "HubSpot, WordPress, Google Analytics, GitHub, Ahrefs, and more — your whole stack, one conversation.",
      icon: Link,
    },
    {
      title: "Build frictionless workflows",
      description: "Pull data from one service, push to another, automate across your stack — remove the friction from everything you do.",
      icon: Workflow,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Desktop Commander connects to your tools and lets you control them in plain English.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        {/* Stat Callout */}
        <div className="text-center mb-16 p-6 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-xl md:text-2xl font-medium">
            <span className="text-primary font-bold">70% of users</span> save 3+ hours per week with Desktop Commander
          </p>
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
