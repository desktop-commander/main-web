import { FileImage, Layers, Settings } from "lucide-react";
import ChatDemo from "../../remote/ChatDemo";

const PPSolutionSection = () => {
  const features = [
    {
      title: "Extract any page as an image",
      description: "Get specific pages, a range, or the entire document as individual PNG files. Just describe which pages you need.",
      icon: FileImage,
      command: '"Convert page 3 of report.pdf to a PNG image"',
      result: "report-page-3.png created at full quality"
    },
    {
      title: "Convert entire PDFs at once",
      description: "Need every page as a separate image? Convert them all in one message. Useful for presentations, slideshows, or archiving.",
      icon: Layers,
      command: '"Convert every page of handbook.pdf to PNG images"',
      result: "50 PNG files created, one per page"
    },
    {
      title: "Control quality and resolution",
      description: "Get high-resolution images for printing or presentations. Name the DPI you want, or just say what the images are for.",
      icon: Settings,
      command: '"Convert brochure.pdf to high-res PNGs for printing"',
      result: "300 DPI images ready for print"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Just describe what you need.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No complicated settings. No figuring out which tool to use. Just describe what you want in ChatGPT or Claude.
          </p>
        </div>

        {/* What it looks like in ChatGPT */}
        <div className="max-w-xl mx-auto mb-16">
          <ChatDemo
            user="Save pages 4 to 6 of Q3-report.pdf in my Documents folder as PNGs"
            workedFor="Worked for 22s"
            reply="Saved 3 pages as PNG images."
            steps={[
              "Found Q3-report.pdf in Documents.",
              "Rendered pages 4, 5 and 6 at 300 DPI.",
              "Saved them next to the PDF as Q3-report-p4.png, Q3-report-p5.png and Q3-report-p6.png.",
            ]}
          />
        </div>

        {/* Features */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border border-dc-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
                <div className="lg:w-96 space-y-3">
                  <div className="p-4 rounded-lg bg-dc-surface border border-dc-border">
                    <p className="text-sm text-muted-foreground mb-1">You say:</p>
                    <p className="font-mono text-sm text-primary">{feature.command}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                    <p className="text-sm text-muted-foreground mb-1">Result:</p>
                    <p className="text-sm text-green-400">{feature.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PPSolutionSection;
