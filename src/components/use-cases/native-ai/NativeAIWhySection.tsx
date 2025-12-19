"use client";

import { FileCode, HardDrive, Eye } from "lucide-react";

const benefits = [
  {
    icon: FileCode,
    title: "AI speaks in primitives",
    description:
      "AI works best with what it can read, write, and reason about: markdown files instead of rich text editors, folder structures instead of database GUIs, Git history instead of 'undo', commands instead of clicks.",
  },
  {
    icon: HardDrive,
    title: "Local-first means you own it",
    description:
      "No vendor lock-in. No subscription to access your own data. Files live on your machine. Sync to GitHub when you want. The stack is yours.",
  },
  {
    icon: Eye,
    title: "Transparency by default",
    description:
      "Every action AI takes is visible. Files change, commits happen, diffs appear. You see what's happening — and build trust through traceability.",
  },
];

const NativeAIWhySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why this architecture <span className="text-primary">wins</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border border-dc-border hover:border-primary/30 transition-colors text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NativeAIWhySection;
