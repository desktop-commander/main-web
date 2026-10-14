import { AlertCircle } from "lucide-react";

const AJProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              AVIF images? Most software has no idea what to do with them.
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            AVIF is one of the newest image formats. The compression is great, but support is patchy. Your photo editor may not open it, older apps show a blank icon, and many online converters either don't support it or put it behind a paywall. You just want to use the image you saved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AJProblemSection;
