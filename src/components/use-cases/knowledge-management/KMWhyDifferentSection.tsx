import { CheckCircle, XCircle } from "lucide-react";

const KMWhyDifferentSection = () => {

  const traditionalSteps = [
    "Upload or paste context files every session",
    "Re-explain project background each time",
    "Copy valuable answers before tab closes",
    "Manually maintain what the AI should \"remember\"",
    "Start from zero in the next conversation"
  ];

  const dcSteps = [
    "Point to knowledge base folder once: \"Use ~/Documents/ProjectContext\"",
    "AI automatically finds relevant context for each question",
    "Answers build on existing knowledge",
    "Updates context files as work progresses",
    "Every conversation starts where the last one ended"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Desktop Commander is Different
          </h2>
        </div>

        {/* Comparison Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Context That Persists Across Conversations
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional AI - Red */}
            <div className="flex items-start gap-4 p-6 rounded-xl bg-red-500/5 border-2 border-red-500/20">
              <div className="shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-red-400">Traditional AI Chat</h4>
                <ul className="space-y-3 text-muted-foreground">
                  {traditionalSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-400 font-mono text-sm mt-0.5">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop Commander - Green */}
            <div className="flex items-start gap-4 p-6 rounded-xl bg-green-500/5 border-2 border-green-500/20">
              <div className="shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-green-400">With Desktop Commander</h4>
                <ul className="space-y-3 text-muted-foreground">
                  {dcSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-400 font-mono text-sm mt-0.5">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KMWhyDifferentSection;
