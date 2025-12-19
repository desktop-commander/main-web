"use client";

import { Rocket, Users, TrendingUp } from "lucide-react";

const personas = [
  {
    icon: Rocket,
    title: "Founders building AI-native companies",
    description: "Skip the SaaS sprawl. Build on primitives from day one. One person with DC can do what used to require a tools budget and a team.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Teams adopting AI across workflows",
    description: "Unlock AI for operations that were 'too complex' or 'too locked down.' Start simple and migrate to primitives when ready.",
    color: "purple",
  },
  {
    icon: TrendingUp,
    title: "Operators who see what's coming",
    description: "AI leverage is the new competitive advantage. Learn to work in primitives — files, Git, scripts — and become the person who makes AI work across the org.",
    color: "green",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; border: string; iconBg: string; iconColor: string; titleColor: string }> = {
    blue: {
      bg: "bg-blue-500/5",
      border: "border-blue-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      titleColor: "text-blue-400",
    },
    purple: {
      bg: "bg-purple-500/5",
      border: "border-purple-500/20",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
      titleColor: "text-purple-400",
    },
    green: {
      bg: "bg-green-500/5",
      border: "border-green-500/20",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
      titleColor: "text-green-400",
    },
  };
  return colors[color] || colors.blue;
};

const NativeAIPersonasSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Who this is <span className="text-primary">for</span>
          </h2>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, index) => {
            const colors = getColorClasses(persona.color);
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl ${colors.bg} border-2 ${colors.border} transition-colors`}
              >
                <div className={`w-14 h-14 rounded-full ${colors.iconBg} flex items-center justify-center mb-6`}>
                  <persona.icon className={`w-7 h-7 ${colors.iconColor}`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${colors.titleColor}`}>
                  {persona.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {persona.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NativeAIPersonasSection;
