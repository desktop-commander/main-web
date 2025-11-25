import { Code, Briefcase, Users } from "lucide-react";

const KMPersonasSection = () => {
  const personas = [
    {
      icon: Code,
      title: "Developers",
      color: "blue",
      useCases: [
        "Generate documentation from codebases",
        "Update README files after code changes",
        "Create architecture notes from existing code",
        "Maintain technical specs alongside development"
      ]
    },
    {
      icon: Briefcase,
      title: "Knowledge Workers",
      color: "purple",
      useCases: [
        "Build and maintain project context documents",
        "Transform meeting notes into actionable documentation",
        "Create knowledge bases from scattered information",
        "Organize Obsidian vaults and markdown files automatically"
      ]
    },
    {
      icon: Users,
      title: "Teams",
      color: "green",
      useCases: [
        "Keep shared documentation current",
        "Synchronize knowledge across tools",
        "Create project overviews from scattered files",
        "Maintain decision logs from discussions"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/30",
          iconBg: "bg-blue-500/20",
          iconColor: "text-blue-400",
          titleColor: "text-blue-400"
        };
      case "purple":
        return {
          bg: "bg-purple-500/10",
          border: "border-purple-500/30",
          iconBg: "bg-purple-500/20",
          iconColor: "text-purple-400",
          titleColor: "text-purple-400"
        };
      case "green":
        return {
          bg: "bg-green-500/10",
          border: "border-green-500/30",
          iconBg: "bg-green-500/20",
          iconColor: "text-green-400",
          titleColor: "text-green-400"
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          iconBg: "bg-primary/20",
          iconColor: "text-primary",
          titleColor: "text-primary"
        };
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Users Do with Desktop Commander
          </h2>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, index) => {
            const colors = getColorClasses(persona.color);
            return (
              <div 
                key={index}
                className={`p-6 rounded-2xl ${colors.bg} border-2 ${colors.border} transition-all hover:scale-[1.02]`}
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full ${colors.iconBg} flex items-center justify-center`}>
                    <persona.icon className={`w-6 h-6 ${colors.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.titleColor}`}>{persona.title}</h3>
                </div>

                {/* Use Cases */}
                <ul className="space-y-2">
                  {persona.useCases.map((useCase, uIndex) => (
                    <li key={uIndex} className="flex items-start gap-2 text-foreground">
                      <span className={`${colors.iconColor} mt-1.5`}>•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KMPersonasSection;
