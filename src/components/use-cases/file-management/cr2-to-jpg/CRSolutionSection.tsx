import { Zap, FolderOpen, Camera } from "lucide-react";
import ChatDemo from "../../remote/ChatDemo";

const CRSolutionSection = () => {
  const features = [
    {
      title: "Batch convert entire shoots",
      description: "Point Desktop Commander at a folder of CR2 files and convert them all at once. No clicking through dialogs, no waiting for imports.",
      icon: Zap,
      command: '"Convert all CR2 files in my Canon photos folder to JPG"',
      result: "All 847 photos converted to JPG"
    },
    {
      title: "Organize as you convert",
      description: "Don't just convert. Sort into folders by date, rename with meaningful names, or move to specific locations. One message does it all.",
      icon: FolderOpen,
      command: '"Convert my wedding shoot to JPG and organize by date"',
      result: "Photos sorted into 2024-06-15/, 2024-06-16/ folders"
    },
    {
      title: "Preserve what matters",
      description: "Ask it to keep your EXIF data, camera settings, and timestamps. Your JPGs carry the details photographers care about.",
      icon: Camera,
      command: '"Convert these CR2 files to JPG and keep the metadata"',
      result: "Converted with EXIF data preserved"
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
            No Lightroom license. No complex export settings. Just describe what you want in ChatGPT or Claude.
          </p>
        </div>

        {/* What it looks like in ChatGPT (the old video showed the retired desktop app) */}
        <div className="max-w-xl mx-auto mb-16">
          <ChatDemo
            user="Convert the CR2 photos in Pictures/Canon/Birthday to JPG"
            workedFor="Worked for 2m 14s"
            reply="Converted 212 photos to JPG."
            steps={[
              "Found 212 CR2 files in Pictures/Canon/Birthday.",
              "Converted each one to a full size JPG and kept the camera data.",
              "Left the RAW files untouched. The JPGs are in Pictures/Canon/Birthday/JPG.",
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

export default CRSolutionSection;
