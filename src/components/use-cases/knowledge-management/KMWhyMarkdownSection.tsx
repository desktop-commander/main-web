const KMWhyMarkdownSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Why Markdown Files?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Markdown is the only format that's native to both AI and humans. Large language models 
            don't need to parse proprietary formats or guess at structure—they read and write markdown 
            fluently. And unlike database entries or app-specific notes, your knowledge stays in plain 
            text files you can open anywhere, on any device, decades from now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KMWhyMarkdownSection;
