import { FolderOpen, Code, Smartphone } from "lucide-react";

const ADWhyDifferentSection = () => {
  const points = [
    {
      icon: FolderOpen,
      title: "Works with the files where they are",
      description: "Point ChatGPT or Claude at a file or a whole folder on your Mac or Windows PC. It opens the files directly, so there is nothing to attach and nothing to copy into the chat."
    },
    {
      icon: Code,
      title: "Real code, real calculations",
      description: "Nothing is guessed. ChatGPT or Claude writes Python scripts that run actual computations. You can see the code, check the logic, and reuse it."
    },
    {
      icon: Smartphone,
      title: "Ask from the web or your phone",
      description: "Start an analysis from ChatGPT or Claude in any browser or on your phone. Your computer needs to be on and linked to your account."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
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

export default ADWhyDifferentSection;
