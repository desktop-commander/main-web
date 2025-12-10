import { Rocket, Megaphone, Code } from "lucide-react";

const CAPersonasSection = () => {
  const personas = [
    {
      icon: Rocket,
      title: "Founders & Operators",
      color: "blue",
      useCases: [
        "Manage CRM, analytics, and content from one place",
        "Get quick answers without building reports",
        "Save hours on repetitive admin work"
      ]
    },
    {
      icon: Megaphone,
      title: "Marketers & Content Creators",
      color: "purple",
      useCases: [
        "Publish and schedule without dashboard fatigue",
        "Pull performance data instantly",
        "Connect content tools to analytics"
      ]
    },
    {
      icon: Code,
      title: "Developers & Technical Teams",
      color: "green",
      useCases: [
        "Git operations without CLI memorization",
        "Quick deploys and status checks",
        "Integrate dev tools with project management"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; iconBg: string; iconColor: string; titleColor: string }> = {
      blue: {
        bg: "bg-blue-500/5",
        border: "border-blue-500/30",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-400",
        titleColor: "text-blue-400"
      },
      purple: {
        bg: "bg-purple-500/5",
        border: "border-purple-500/30",
        iconBg: "bg-purple-500/20",
        iconColor: "text-purple-400",
        titleColor: "text-purple-400"
      },
      green: {
        bg: "bg-green-500/5",
        border: "border-green-500/30",
        iconBg: "bg-green-500/20",
        iconColor: "text-green-400",
        titleColor: "text-green-400"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Who This Is For
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => {
            const colors = getColorClasses(persona.color);
            return (
              <div 
                key={index}
                className={`p-6 rounded-xl ${colors.bg} border-2 ${colors.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4`}>
                  <persona.icon className={`w-6 h-6 ${colors.iconColor}`} />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${colors.titleColor}`}>
                  {persona.title}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {persona.useCases.map((useCase, ucIndex) => (
                    <li key={ucIndex} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.iconBg} mt-2 shrink-0`} />
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

export default CAPersonasSection;
