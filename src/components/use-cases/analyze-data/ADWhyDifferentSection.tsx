import { HardDrive, Code } from "lucide-react";

const ADWhyDifferentSection = () => {
  const points = [
    {
      icon: HardDrive,
      title: "Files stay on your machine",
      description: "No uploading spreadsheets to websites. DC reads your files locally and runs Python scripts right on your computer—no context window limits."
    },
    {
      icon: Code,
      title: "Real code, real calculations",
      description: "DC doesn't guess at your data—it writes Python scripts that run actual computations. You can see the code, verify the logic, and reuse it."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8">
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

export default ADWhyDifferentSection;
