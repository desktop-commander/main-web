const KMWhyMarkdownSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Why Markdown Files?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Markdown is easy to read for both people and AI. ChatGPT and Claude don't need to parse
            proprietary formats or guess at structure. They read and write markdown fluently. And
            unlike database entries or app-specific notes, your knowledge stays in plain text files
            in your own folders, which you can open in any editor, decades from now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KMWhyMarkdownSection;
