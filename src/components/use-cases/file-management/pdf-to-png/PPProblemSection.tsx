import { AlertCircle } from "lucide-react";

const PPProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              You just need one page as an image. Why is that so hard?
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            You have a PDF with a chart, diagram, or page you need as an image. Maybe for a presentation, social media post, or to paste into another document. Online converters add watermarks, limit pages, or require you to upload sensitive documents to their servers. Built-in screenshot tools give you low-quality results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PPProblemSection;
