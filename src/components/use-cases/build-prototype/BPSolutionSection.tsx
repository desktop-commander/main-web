import { Code, Link, Rocket } from "lucide-react";

const BPSolutionSection = () => {
  const features = [
    {
      title: "Build without learning to code",
      description: "Create functional apps, sites, and scripts—skip the technical learning curve and just build.",
      icon: Code,
    },
    {
      title: "Connect the services you need",
      description: "Integrate APIs, databases, and third-party apps—just describe what should talk to what.",
      icon: Link,
    },
    {
      title: "Deploy without the complexity",
      description: "Track changes in Git, deploy to GitHub Pages or anywhere else—no commands to memorize.",
      icon: Rocket,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Desktop Commander turns plain English into working code on your machine.
          </h2>
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

        {/* Video Placeholder */}
        <div className="relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden max-w-4xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <p className="text-lg">Video demo coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BPSolutionSection;
