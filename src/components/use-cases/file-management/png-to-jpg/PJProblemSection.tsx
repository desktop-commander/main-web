import { AlertCircle } from "lucide-react";

const PJProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              PNG files are huge. Too huge.
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Screenshots, graphics, and downloaded images come as PNGs — and they're massive. Your email bounces because attachments are too large. Your website loads slowly. Your storage fills up. You need JPGs, but converting them one by one through online tools wastes your time and exposes your files to who-knows-what servers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PJProblemSection;
