import { Search, MessageSquareText, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ADExamplesSection = () => {
  const examples = [
    {
      title: "Explore your data instantly",
      description: "Understand what you're working with before diving deep.",
      command: "Analyze the sales data in /Downloads/q4_sales.csv — show me the columns, data types, and any obvious patterns",
      icon: Search,
    },
    {
      title: "Answer specific business questions",
      description: "Get the numbers you need without writing formulas.",
      command: "From this customer spreadsheet, show me which regions have the highest churn rate and break it down by plan type",
      icon: MessageSquareText,
    },
    {
      title: "Automate recurring reports",
      description: "Build analysis you can run again and again.",
      command: "Create a Python script that generates a weekly summary from my transaction logs — totals by category, top 10 vendors, and month-over-month comparison",
      icon: RefreshCw,
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

        {/* Secondary CTA */}
        <div className="text-center pt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="group"
          >
            <a href="/library/">
              Explore More Prompts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ADExamplesSection;
