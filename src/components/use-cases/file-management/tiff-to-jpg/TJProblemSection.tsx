import { AlertCircle } from "lucide-react";

const TJProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              TIFF files are stuck in professional workflows.
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Your scanner outputs TIFF. Your print shop sends TIFF. Your archive is full of TIFF. But try to share one — email rejects it, websites won't accept it, and most programs can't even open it. You're stuck with files nobody else can use, converting them one at a time through clunky software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TJProblemSection;
