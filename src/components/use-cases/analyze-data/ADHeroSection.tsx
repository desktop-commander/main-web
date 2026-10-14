import UseCaseHeroCta from "../remote/UseCaseHeroCta";

const ADHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Chat with <span className="text-primary">your data</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Ask ChatGPT or Claude about the CSV, Excel and JSON files on your Mac or Windows PC.
            Find patterns and build reports without learning Python or pasting data into the chat.
          </p>

          {/* Tool Integration Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Works with:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["CSV", "Excel", "JSON", "Python", "Pandas"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <UseCaseHeroCta location="analyze_data" />

          {/* Value Props */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-muted-foreground">
            {["Real calculations, not guesses", "Ask from web or phone", "Mac and Windows"].map((point) => (
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

export default ADHeroSection;
