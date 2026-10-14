import UseCaseHeroCta from "../remote/UseCaseHeroCta";

const BPHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Vibe-code your next app <span className="text-primary">in ChatGPT or Claude</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Describe what you want to build. ChatGPT or Claude writes the code in a real project folder
            on your Mac or Windows PC, runs it in your terminal, and fixes what breaks.
          </p>

          {/* Tool Integration Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-sm text-muted-foreground">Works with:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Python", "JavaScript", "HTML/CSS", "Git", "Terminal"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full bg-dc-surface border border-dc-border text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <UseCaseHeroCta location="build_prototype" />

          {/* Value Props */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-muted-foreground">
            {["Real project files", "Runs your dev server", "Ask from web or phone"].map((point) => (
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

export default BPHeroSection;
