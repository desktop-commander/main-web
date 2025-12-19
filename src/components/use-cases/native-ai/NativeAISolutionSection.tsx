"use client";

import { FileText, Database, FolderOpen, GitBranch, ArrowRight } from "lucide-react";

const replacements = [
  {
    from: "Your CMS",
    to: "a /content folder with markdown files",
    icon: FileText,
    example: '"Create a new blog post about our product launch, save it to /content/posts"',
  },
  {
    from: "Your CRM",
    to: "a local database + markdown notes",
    icon: Database,
    example: '"Add a new lead: Sarah Chen, sarah@acme.com, met at the conference"',
  },
  {
    from: "Your project tracker",
    to: "folders and files AI can read and update",
    icon: FolderOpen,
    example: '"Create a new project folder for Q1 launch with tasks, notes, and assets subfolders"',
  },
  {
    from: "Your deployment pipeline",
    to: "Git commits AI makes on your behalf",
    icon: GitBranch,
    example: '"Commit my changes and push to main"',
  },
];

const NativeAISolutionSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Same outcomes. <span className="text-primary">AI-readable.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander replaces dashboard interfaces with primitives AI can actually operate on. You describe what you want. AI does the work.
          </p>
        </div>

        {/* Replacements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {replacements.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-muted-foreground line-through">{item.from}</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{item.to}</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-dc-surface border border-dc-border">
                <code className="text-sm text-muted-foreground">{item.example}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NativeAISolutionSection;
