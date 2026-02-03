import { AlertCircle } from "lucide-react";

const JJProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              "What is a .jfif file and why can't I open it?"
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            You downloaded an image from the web or a message, and now you're stuck with a .jfif file that won't open in your apps. JFIF is actually the same as JPEG — just with an obscure extension that confuses everything. You shouldn't need to search for online converters or install random software just to view a photo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JJProblemSection;
