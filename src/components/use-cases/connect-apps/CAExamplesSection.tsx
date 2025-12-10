import { Users, FileText, BarChart3, GitBranch, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const CAExamplesSection = () => {
  const examples = [
    {
      title: "Manage your CRM without opening HubSpot",
      description: "Create contacts, update deals, pull reports — all from chat.",
      command: "Show me all deals closing this month over $10k",
      icon: Users,
    },
    {
      title: "Publish content without touching WordPress",
      description: "Write, edit, and publish — without navigating the admin panel.",
      command: "Publish my draft post about product updates and schedule it for Monday 9am",
      icon: FileText,
    },
    {
      title: "Get analytics insights without the dashboards",
      description: "Ask questions about your data instead of building reports.",
      command: "What were my top 5 traffic sources last week?",
      icon: BarChart3,
    },
    {
      title: "Version control without learning Git commands",
      description: "Commit, branch, and push — in plain English.",
      command: "Commit these changes with message 'Fixed pricing page' and push to main",
      icon: GitBranch,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-dc-card/30 to-background">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header with Note */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What You Can Do
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dc-surface border border-dc-border text-sm text-muted-foreground">
            <Info className="w-4 h-4" />
            <span>Install an integration, then control it through chat</span>
          </div>
        </div>

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

        {/* Secondary CTA */}
        <div className="text-center pt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="group"
          >
            <a href="/library/">
              Explore More Commands
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CAExamplesSection;
