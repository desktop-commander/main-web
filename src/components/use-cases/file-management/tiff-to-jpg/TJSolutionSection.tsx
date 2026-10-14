import { Zap, Layers, FolderOpen } from "lucide-react";
import ChatDemo from "../../remote/ChatDemo";

const TJSolutionSection = () => {
  const features = [
    {
      title: "Batch convert scanner output",
      description: "Name the folder with your scans. Desktop Commander converts every file to a shareable JPG, with no clicking through dialogs.",
      icon: Zap,
      command: '"Convert all TIFF files in my Scans folder to JPG"',
      result: "47 scanned documents converted and ready to share"
    },
    {
      title: "Handle multi-page TIFFs",
      description: "Multi-page TIFF files from scanners? No problem. Extract each page as a separate JPG, or keep them organized by document.",
      icon: Layers,
      command: '"Split this multi-page TIFF into separate JPG files"',
      result: "12-page document split into individual images"
    },
    {
      title: "Organize as you convert",
      description: "Don't just convert. Rename files, sort them into folders by date or type, and clean up your archive in one message.",
      icon: FolderOpen,
      command: '"Convert these TIFFs to JPG and organize by year"',
      result: "Files sorted into 2022/, 2023/, 2024/ folders"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Just describe what you need. It handles the rest.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No Photoshop. No image editing software. Just describe what you want in ChatGPT or Claude.
          </p>
        </div>

        {/* What it looks like in ChatGPT (the old video showed the retired desktop app) */}
        <div className="max-w-xl mx-auto mb-16">
          <ChatDemo
            user="Convert the TIFF scans on my Desktop to JPG"
            workedFor="Worked for 41s"
            reply="Converted 32 TIFF files into 41 JPGs."
            steps={[
              "Found 32 TIFF files on your Desktop. Two of them had several pages.",
              "Saved each page of those two as its own JPG.",
              "Kept the originals. The JPGs are in Desktop/JPG.",
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

export default TJSolutionSection;
