import { Database, Calculator, Zap } from "lucide-react";
import ChatDemo from "../remote/ChatDemo";

const ADSolutionSection = () => {
  const features = [
    {
      title: "Work with large files",
      description: "ChatGPT or Claude writes a Python script and runs it in your terminal, so the whole file gets processed, not just the part that fits in the chat.",
      icon: Database,
    },
    {
      title: "Real calculations, not guesses",
      description: "The numbers come from code that ran on the actual file, every row of it. No estimating, no summarizing, no truncated data.",
      icon: Calculator,
    },
    {
      title: "Skip the Python learning curve",
      description: "Describe what you want to know in plain words. ChatGPT or Claude writes and runs the code for you.",
      icon: Zap,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Desktop Commander turns plain English into accurate data analysis.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Describe what you want to know. ChatGPT or Claude writes a Python script, runs it on your actual file, and reports back the results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 p-6 rounded-xl bg-dc-surface border border-dc-border">
          <span className="text-lg font-medium">Ask in ChatGPT or Claude</span>
          <span className="text-primary text-xl">→</span>
          <span className="text-lg font-medium">It writes Python</span>
          <span className="text-primary text-xl">→</span>
          <span className="text-lg font-medium">Runs it on your actual file</span>
          <span className="text-primary text-xl">→</span>
          <span className="text-lg font-medium text-primary">Returns real results</span>
        </div>

        {/* What it looks like in ChatGPT (the old video showed the retired desktop app) */}
        <div className="max-w-xl mx-auto">
          <ChatDemo
            user="Analyze q4_sales.csv in my Downloads. Which products grew the most?"
            workedFor="Worked for 52s"
            reply="Here is what stands out in q4_sales.csv."
            steps={[
              "Read all 48,210 rows with a Python script, not a sample.",
              "Revenue was up 12% on Q3. Three products drove most of the growth.",
              "Saved a summary table and a chart as q4-growth.png next to the file.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ADSolutionSection;
