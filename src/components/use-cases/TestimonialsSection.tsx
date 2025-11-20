const TestimonialsSection = () => {
  const useCases = [
    {
      title: "Organizing years of accumulated files",
      description: "Sort 3 years of downloads by file type and date in under a minute"
    },
    {
      title: "Converting image formats without extra software",
      description: "Transform 200+ HEIC photos to JPG locally while working on something else—no uploading to sketchy websites"
    },
    {
      title: "Finding scattered documents",
      description: "Locate all Q1 invoices across different folders and consolidate them before tax time—find 47+ documents in seconds"
    },
    {
      title: "Working with unfamiliar formats",
      description: "Convert EDOC files to DOC format instantly so you can keep working without installing extra software"
    },
    {
      title: "Converting PDFs to editable formats",
      description: "Transform PDF reports to Word to edit actual text instead of retyping everything"
    },
    {
      title: "Analyzing data files quickly",
      description: "Process CSV files with thousands of rows to show top products and monthly trends in 2 minutes instead of spending an hour in Excel"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Users Do with Desktop Commander
          </h2>
        </div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all group"
            >
              {/* Title */}
              <div className="mb-3">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {useCase.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
