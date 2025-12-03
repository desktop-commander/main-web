import { Globe, Terminal, Server, Link } from "lucide-react";

const BPExamplesSection = () => {
  const examples = [
    {
      title: "Build apps and webpages without coding",
      description: "Desktop Commander writes the HTML, CSS, and JavaScript, saves it locally, and you can preview it immediately.",
      command: "Create a simple landing page for my newsletter with an email signup form",
      icon: Globe,
    },
    {
      title: "Write scripts that automate your workflow",
      description: "Working automation in seconds, not hours of Stack Overflow.",
      command: "Write a Python script that renames all my client folders to include today's date",
      icon: Terminal,
    },
    {
      title: "Connect third-party services",
      description: "Integrate APIs, databases, and analytics without reading documentation.",
      command: "Add Google Analytics tracking to my project",
      icon: Link,
    },
    {
      title: "Deploy and manage without DevOps knowledge",
      description: "Complex technical setup becomes a simple request.",
      command: "Set up a local development server for this project",
      icon: Server,
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="space-y-8">
          {examples.map((example, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-dc-border bg-dc-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                  <example.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{example.title}</h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                {example.description}
              </p>
              
              <div className="p-4 rounded-lg bg-dc-surface border border-dc-border font-mono text-sm">
                "{example.command}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BPExamplesSection;
