import { HardDrive, GitBranch, Lightbulb } from "lucide-react";

const BPWhyDifferentSection = () => {
  const points = [
    {
      icon: HardDrive,
      title: "Build locally, deploy anywhere",
      description: "Everything runs on your machine first. No cloud IDE, no vendor lock-in. When you're ready, connect to databases, APIs, or deploy to any hosting service. Local-first means faster iteration and complete ownership of your code."
    },
    {
      icon: GitBranch,
      title: "Save and undo without learning Git",
      description: "Want to track your changes? Just ask. Desktop Commander handles Git for you—save your progress, roll back mistakes, or restore earlier versions using natural language."
    },
    {
      icon: Lightbulb,
      title: "Learn by doing",
      description: "Watch how your requests become real code. Over time, you'll understand what's happening—without needing to learn first."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background">
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

export default BPWhyDifferentSection;
