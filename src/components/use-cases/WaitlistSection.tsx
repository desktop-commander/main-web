import DownloadButtons from "@/components/shared/DownloadButtons";

interface WaitlistSectionProps {
  useCase?: string;
}

const WaitlistSection = ({ useCase = 'unknown' }: WaitlistSectionProps) => {
  const steps = [
    {
      number: "1",
      title: "Download Desktop Commander",
      description: "One-time setup on your Mac or Windows PC. No accounts, no subscriptions required to start."
    },
    {
      number: "2",
      title: "Describe what you need",
      description: '"Organize my Downloads by file type" or "Create a markdown summary of this folder" — just type it naturally.'
    },
    {
      number: "3",
      title: "Done",
      description: "Desktop Commander handles it instantly. Your files are organized, converted, or found — all privately on your machine."
    }
  ];

  return (
    <section id="get-started" className="py-16 md:py-24 bg-dc-card/30 scroll-mt-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander makes file management as simple as having a conversation
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Number circle */}
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Download buttons - only show on first step */}
                {index === 0 && (
                  <div className="mt-6">
                    <DownloadButtons location={useCase} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
