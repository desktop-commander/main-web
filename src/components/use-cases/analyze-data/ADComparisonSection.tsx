import { Table, MessageSquare, Code, Sparkles } from "lucide-react";

const ADComparisonSection = () => {
  const approaches = [
    {
      icon: Table,
      name: "Excel / Google Sheets",
      problem: "Slow and manual. Requires learning formulas, pivot tables, and navigating endless sheets.",
      color: "red"
    },
    {
      icon: MessageSquare,
      name: "Paste data into AI chat",
      problem: "Context limits force you to truncate. AI \"summarizes\" instead of calculating. Hallucinated numbers.",
      color: "red"
    },
    {
      icon: Code,
      name: "Learn Python yourself",
      problem: "Weeks of tutorials before you're productive. Easy to make mistakes.",
      color: "red"
    },
    {
      icon: Sparkles,
      name: "Desktop Commander",
      problem: "Describe what you want → DC writes Python → runs it on your actual file → returns real results.",
      color: "green"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why This Approach Is Different
          </h2>
        </div>

        <div className="space-y-4">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border-2 ${
                approach.color === "green" 
                  ? "bg-green-500/5 border-green-500/30" 
                  : "bg-dc-card border-dc-border"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg shrink-0 ${
                  approach.color === "green"
                    ? "bg-green-500/20"
                    : "bg-dc-surface border border-dc-border"
                }`}>
                  <approach.icon className={`w-5 h-5 ${
                    approach.color === "green" ? "text-green-400" : "text-muted-foreground"
                  }`} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${
                    approach.color === "green" ? "text-green-400" : ""
                  }`}>
                    {approach.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {approach.problem}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ADComparisonSection;
