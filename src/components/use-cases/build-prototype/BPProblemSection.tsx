import { AlertCircle } from "lucide-react";

const BPProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Technical barriers shouldn't stop you from building stuff.
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Every founder has automation ideas, app concepts, and workflows that could save hours. But CLIs feel cryptic, deployment seems scary, and hiring a developer for a quick script doesn't make sense. So the ideas stay ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BPProblemSection;
