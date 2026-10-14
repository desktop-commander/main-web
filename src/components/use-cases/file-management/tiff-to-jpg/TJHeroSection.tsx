import UseCaseHeroCta from "../../remote/UseCaseHeroCta";

const TJHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Batch convert TIFF to JPG, <span className="text-primary">from chat</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Ask ChatGPT or Claude to convert a folder of scans or print files on your Mac or Windows
            PC. One message, every file, no image editor and no exporting files one at a time.
          </p>

          {/* Format Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Converts:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["TIFF → JPG", "TIF → JPEG", "Batch Processing", "Multi-page TIFF"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <UseCaseHeroCta location="tiff_to_jpg" />

          {/* Value Props */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-muted-foreground">
            {["Convert whole folders of scans at once", "Ask from web or phone", "Mac and Windows"].map((point) => (
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

export default TJHeroSection;
