import UseCaseHeroCta from "../../remote/UseCaseHeroCta";

const PJHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Batch convert PNG to JPG, <span className="text-primary">from chat</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Ask ChatGPT or Claude to turn a folder of PNG screenshots and graphics on your Mac or
            Windows PC into smaller JPGs. One message, every file, no converter websites and no
            dragging files around.
          </p>

          {/* Format Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Converts:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["PNG → JPG", "Batch Processing", "Quality Control", "Size Reduction"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <UseCaseHeroCta location="png_to_jpg" />

          {/* Value Props */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-muted-foreground">
            {["Batch convert entire folders at once", "Pick the quality you need", "Ask from web or phone"].map((point) => (
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

export default PJHeroSection;
