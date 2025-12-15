import { AlertCircle } from "lucide-react";

const ADProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Data analysis shouldn't take so much time and effort.
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            You have spreadsheets full of answers—but getting them out is painful. Excel breaks on large files. ChatGPT hallucinates when you paste data in. Learning Python and Pandas takes weeks. So you either do it manually, hire someone, or make decisions without the full picture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ADProblemSection;
