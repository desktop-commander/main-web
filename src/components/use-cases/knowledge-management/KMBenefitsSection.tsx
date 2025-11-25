import { Sparkles, FileEdit, Move } from "lucide-react";

const KMBenefitsSection = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Never lose valuable insights",
      description: "Every useful answer can be instantly saved to your knowledge base"
    },
    {
      icon: FileEdit,
      title: "Self-maintaining documentation",
      description: "Your notes and docs update themselves based on your work"
    },
    {
      icon: Move,
      title: "End context switching",
      description: "Work with your AI and your files in one unified flow"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How Desktop Commander Solves It
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander doesn't just read your files—it writes, edits, and organizes them directly. 
            Your AI assistant becomes your knowledge management system, automatically keeping everything up-to-date.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KMBenefitsSection;
