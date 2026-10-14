import { CheckCircle } from "lucide-react";

const KMToolsSection = () => {
  const tools = [
    {
      name: "Obsidian",
      icon: "📓",
      features: [
        "Writes new notes directly to your vault",
        "Updates existing notes with new information",
        "Adds backlinks and tags as it writes"
      ]
    },
    {
      name: "VS Code & Codebases",
      icon: "💻",
      features: [
        "Generates documentation from code",
        "Updates README files when the code changes",
        "Creates architecture notes from your codebase"
      ]
    },
    {
      name: "Synced Folders",
      icon: "☁️",
      features: [
        "Works with Google Drive, Dropbox, or iCloud folders synced to your computer",
        "Organizes files across folders",
        "Creates summary documents next to your files"
      ]
    },
    {
      name: "Plain Markdown Files",
      icon: "📁",
      features: [
        "Text files in folders you choose, readable in any editor",
        "Works with any markdown-based system",
        "Git-friendly for version control"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Works With Your Existing Tools
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander enhances the tools you already use, without replacing them
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl border border-dc-border bg-dc-card hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{tool.icon}</span>
                <h3 className="text-xl font-bold">With {tool.name}</h3>
              </div>
              <ul className="space-y-2">
                {tool.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KMToolsSection;
