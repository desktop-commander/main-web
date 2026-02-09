import { AlertCircle } from "lucide-react";

const CRProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Canon RAW files are trapped.
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            You shot hundreds of photos on your Canon camera, but now you can't share them. CR2 files won't open on most devices, social media rejects them, and email clients choke on the file size. You're stuck opening Lightroom or Photoshop just to export a few JPGs — or worse, uploading your personal photos to sketchy online converters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CRProblemSection;
