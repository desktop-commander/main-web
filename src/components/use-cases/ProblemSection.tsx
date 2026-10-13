import { AlertCircle } from "lucide-react";

const ProblemSection = () => {
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
              File chores shouldn't take a dozen tools.
            </h2>
          </div>

          {/* Impact statement */}
          <p className="text-xl text-muted-foreground leading-relaxed">
            Converting a photo means one website. Renaming a batch means another app. Sorting a
            messy folder means an afternoon of dragging files around. Each small job eats time you
            would rather spend on the work itself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
