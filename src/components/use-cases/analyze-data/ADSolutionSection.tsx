import { Database, ShieldCheck, Zap } from "lucide-react";

const ADSolutionSection = () => {
  const features = [
    {
      title: "Analyze files of any size",
      description: "Process thousands of rows without crashes or context limits—DC runs Python locally, not in a chat window.",
      icon: Database,
    },
    {
      title: "Get accurate results, not hallucinations",
      description: "DC reads the actual file and runs real calculations on your machine—no guessing, no summarizing, no truncated data.",
      icon: ShieldCheck,
    },
    {
      title: "Skip the Python learning curve",
      description: "Describe what you want to know. DC writes and runs the code for you.",
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
            Describe what you want to know—DC writes Python scripts, runs them on your actual files, and returns real results.
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
          <span className="text-lg font-medium">Describe what you want</span>
          <span className="text-primary text-xl">→</span>
          <span className="text-lg font-medium">DC writes Python</span>
          <span className="text-primary text-xl">→</span>
          <span className="text-lg font-medium">Runs it on your actual file</span>
          <span className="text-primary text-xl">→</span>
          <span className="text-lg font-medium text-primary">Returns real results</span>
        </div>

        {/* Video Demo */}
        <div className="relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden max-w-4xl mx-auto shadow-lg mb-12">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Desktop Commander analyzing CSV data - showing how to get insights from spreadsheets using natural language"
            title="Analyze CSV and Excel data with natural language - Desktop Commander demo"
          >
            <source src="/videos/analyze-data-csv-demo.mp4" type="video/mp4" />
            <p className="text-muted-foreground">Your browser does not support the video tag. <a href="/videos/analyze-data-csv-demo.mp4" className="text-primary hover:underline">Download the demo video</a></p>
          </video>
        </div>

        {/* Stat Callout */}
        <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-xl md:text-2xl font-medium">
            <span className="text-primary font-bold">70% of users</span> save 3+ hours per week with Desktop Commander
          </p>
        </div>
      </div>
    </section>
  );
};

export default ADSolutionSection;
