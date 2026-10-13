import { Folder, FileImage, Database, FolderSearch } from "lucide-react";
import ChatDemo, { type ChatDemoProps } from "./remote/ChatDemo";

type Feature = {
  title: string;
  description: string;
  icon: typeof Folder;
  /** A real ChatGPT recording, or a chat card when there is no recording. */
  demo: { video: string; prompt: string } | { chat: ChatDemoProps };
};

const features: Feature[] = [
  {
    title: "Find and organize files by describing them",
    description:
      '"Find all invoices from Q3 and move them to my Accounting folder." Desktop Commander finds them and moves them for you.',
    icon: FolderSearch,
    demo: {
      chat: {
        user: "Find all invoices from Q3 and move them to my Accounting folder",
        workedFor: "Worked for 41s",
        reply: "Moved 14 Q3 invoices to Accounting.",
        steps: [
          "Searched Downloads, Desktop and Documents for invoice PDFs.",
          "Checked the dates inside each file, not only the file names.",
          "Moved 14 files to Accounting/Q3 2026. Nothing was deleted.",
        ],
      },
    },
  },
  {
    title: "Convert file formats in one message",
    description:
      '"Convert these HEIC photos to JPG." Skip the converter websites and the extra apps. Works with HEIC, PNG, WebP, PDF pages, and more.',
    icon: FileImage,
    demo: {
      chat: {
        user: "Convert the HEIC photos in my London folder to JPG",
        workedFor: "Worked for 22s",
        reply: "Converted 5 photos to JPG.",
        steps: [
          "Found 5 HEIC files in Pictures/London.",
          "Converted each one to JPG at full quality.",
          "Kept the originals. The JPGs are in the same folder.",
        ],
      },
    },
  },
  {
    title: "Clean up folders with simple instructions",
    description:
      '"Organize my Desktop by file content." Your files are sorted the way you would sort them, and you can ask for changes in the same chat.',
    icon: Folder,
    demo: { video: "/videos/remote-mcp-fileorg-chatgpt.mp4", prompt: "Organize my Desktop by file content" },
  },
  {
    title: "Analyze data files directly",
    description:
      '"Show me the trends in this CSV" or "What are the totals in this Excel file?" Desktop Commander opens spreadsheets and data files straight from your folders, so there is nothing to attach to the chat.',
    icon: Database,
    demo: {
      chat: {
        user: "Show me the trends in sales.csv in my Documents",
        workedFor: "Worked for 1m 3s",
        reply: "Here is what stands out in sales.csv.",
        steps: [
          "Read 12,480 rows from Documents/sales.csv.",
          "Revenue grew 18% from Q1 to Q2, mostly from two products.",
          "Saved a chart as sales-trends.png next to the file.",
        ],
      },
    },
  },
];

const benefits = [
  { emoji: "⚡", title: "Save time", body: "One message replaces a pile of manual steps." },
  { emoji: "📱", title: "Ask from anywhere", body: "Use ChatGPT or Claude on the web or on your phone." },
  { emoji: "🎯", title: "Do it all in one chat", body: "Convert, move, rename and analyze files in the chat you already use." },
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Work with your files directly
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander connects ChatGPT or Claude to the files on your computer, so one
            message replaces the downloading, renaming, and dragging you would do by hand.
          </p>
        </div>

        {/* Features grid */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={feature.title} className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>

              {/* Demo */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {"video" in feature.demo ? (
                  <>
                    <div className="relative aspect-video rounded-xl border border-dc-border bg-dc-surface overflow-hidden">
                      <video className="w-full h-full object-cover" autoPlay loop muted playsInline controls>
                        <source src={feature.demo.video} type="video/mp4" />
                        Your browser doesn't support video playback.
                      </video>
                    </div>
                    <div className="mt-4 p-4 rounded-lg bg-dc-surface border border-dc-border">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Try this in ChatGPT or Claude:</p>
                      <p className="text-sm font-mono text-foreground">"{feature.demo.prompt}"</p>
                    </div>
                  </>
                ) : (
                  <ChatDemo {...feature.demo.chat} className="max-w-lg mx-auto" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Key benefits */}
        <div className="mt-24 pt-12 border-t border-dc-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">The smarter way to manage your files</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-2xl bg-gradient-to-b from-dc-surface to-dc-card border-2 border-dc-border hover:border-primary/50 transition-colors text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{b.emoji}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
