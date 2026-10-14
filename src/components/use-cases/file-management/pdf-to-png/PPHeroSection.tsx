import UseCaseHeroCta from "../../remote/UseCaseHeroCta";

const PPHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Convert PDF to PNG images, <span className="text-primary">from chat</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Ask ChatGPT or Claude to save pages from the PDFs on your Mac or Windows PC as
            high-quality PNG images. One page, a page range, or a whole folder of PDFs, in one message.
          </p>

          {/* Format Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Features:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["PDF → PNG", "All Pages at Once", "High Resolution", "Batch Processing"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <UseCaseHeroCta location="pdf_to_png" />

          {/* Value Props */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-muted-foreground">
            {["Extract any page or range", "Ask from web or phone", "Mac and Windows"].map((point) => (
              <span key={point} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPHeroSection;
