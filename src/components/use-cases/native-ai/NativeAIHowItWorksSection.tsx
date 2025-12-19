"use client";

import { MessageSquare, Cpu, FolderOpen, GitBranch, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "You describe what you want",
    description: '"Update the CRM." "Publish the blog post." "Generate the weekly report." Just talk.',
  },
  {
    icon: Cpu,
    title: "AI operates on your machine",
    description: "DC orchestrates AI to create files, update databases, run scripts, modify markdown — whatever the task requires.",
  },
  {
    icon: GitBranch,
    title: "Everything is versioned in Git",
    description: "Every change AI makes is committed. You can review diffs, roll back mistakes, and see exactly what happened.",
  },
  {
    icon: FolderOpen,
    title: "Your data stays local",
    description: "Files live on your machine. Push to GitHub to share or deploy. No cloud lock-in, no subscription to access your own work.",
  },
];

const NativeAIHowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How it <span className="text-primary">works</span>
          </h2>
        </div>

        {/* Vertical Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6 p-6 rounded-2xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all">
                {/* Step Number */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-5 h-5 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NativeAIHowItWorksSection;
