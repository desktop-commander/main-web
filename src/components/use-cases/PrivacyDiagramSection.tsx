import { Shield, Lock, CheckCircle, XCircle } from "lucide-react";

const PrivacyDiagramSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <Shield className="w-4 h-4" />
            <span>AI Processing • No Random Sites</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connect AI to Your Files
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander connects your AI assistant directly to your files. File processing happens through your trusted AI provider—no sketchy third-party websites.
          </p>
        </div>

        {/* Diagram */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - How it works */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-green-500/5 border-2 border-green-500/20">
              <div className="shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">With Desktop Commander</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                    <span>Direct access to files on your computer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                    <span>Processed by Claude, ChatGPT, Gemini, or Qwen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                    <span>No random third-party conversion websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                    <span>You control what files your AI accesses</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-red-500/5 border-2 border-red-500/20">
              <div className="shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-red-400">Random Online Tools</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span>Files uploaded to unknown third-party servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span>Sketchy websites with malware risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span>Unknown data handling and privacy policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span>Manual download and re-upload workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Visual diagram */}
          <div className="relative">
            <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8">
              {/* Step 1: Your Computer */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-4">
                  <span className="text-4xl">💻</span>
                </div>
                <h4 className="text-lg font-semibold">Your Computer</h4>
                <p className="text-sm text-muted-foreground mb-6">Desktop Commander accesses files here</p>
                
                {/* Files on your computer */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto">
                      <span className="text-2xl">📄</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto">
                      <span className="text-2xl">🖼️</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto">
                      <span className="text-2xl">📊</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Desktop Commander reads & sends */}
              <div className="relative py-6 mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-dashed border-primary/30"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-dc-card px-4 py-2 rounded-full border-2 border-primary flex items-center gap-2">
                    <span className="text-sm font-semibold text-primary">Directly Processed By</span>
                  </div>
                </div>
              </div>

              {/* Step 3: Your AI Provider (with multiple options) */}
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-3">
                  <span className="text-3xl">🤖</span>
                </div>
                <p className="text-sm font-medium mb-2">Your AI Provider</p>
                
                {/* AI Provider names */}
                <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-dc-surface border border-dc-border">Claude</span>
                  <span className="px-2 py-1 rounded bg-dc-surface border border-dc-border">ChatGPT</span>
                  <span className="px-2 py-1 rounded bg-dc-surface border border-dc-border">Gemini</span>
                  <span className="px-2 py-1 rounded bg-dc-surface border border-dc-border">Qwen</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How data is handled callout */}
        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10 shrink-0">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-lg font-medium mb-2">
                How data is handled
              </p>
              <p className="text-muted-foreground">
                Desktop Commander connects your AI directly to files on your computer. Your files are processed by your chosen AI provider (Claude, ChatGPT, Gemini, or Qwen)—not random third-party websites. You get AI-powered file management without the risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyDiagramSection;
