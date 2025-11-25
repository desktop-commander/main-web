import { AlertCircle } from "lucide-react";

const KMProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          {/* Headline */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Without organized context, AI tools can't deliver their full value.
            </h2>
          </div>

          {/* Impact statement */}
          <p className="text-xl text-muted-foreground leading-relaxed">
            Each AI conversation could build on the last. Instead, insights disappear when tabs close. 
            Documentation goes stale. The same questions get asked repeatedly because the context that 
            would make AI truly powerful remains fragmented across tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KMProblemSection;
