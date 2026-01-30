import { AlertCircle } from "lucide-react";

const WJProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Downloaded images won't open in your apps.
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            WebP is great for websites, but terrible for everything else. Photoshop can't edit them. Word won't insert them. Email clients show broken images. You're stuck with online converters that are slow, limit file sizes, and want your email for "premium features."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WJProblemSection;
