import { Shield, Lock, CheckCircle, XCircle } from "lucide-react";

const PrivacyDiagramSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <Shield className="w-4 h-4" />
            <span>100% Private & Secure</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything Happens on Your Computer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your files never leave your machine. No uploading, no cloud storage, complete privacy.
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
                    <Lock className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                    <span>Files stay on your local machine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                    <span>No internet upload required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                    <span>Complete control over your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                    <span>Works offline</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-red-500/5 border-2 border-red-500/20">
              <div className="shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-red-400">Traditional Online Tools</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span>Files uploaded to unknown servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span>Privacy risks and data harvesting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span>Sketchy websites with malware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span>Requires internet connection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side - Visual diagram */}
          <div className="relative">
            <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8">
              {/* Your Computer */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary mb-4">
                  <span className="text-4xl">💻</span>
                </div>
                <h4 className="text-lg font-semibold">Your Computer</h4>
                <p className="text-sm text-muted-foreground">All processing happens here</p>
              </div>

              {/* Files staying local */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">📄</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Documents</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🖼️</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Images</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Data Files</p>
                </div>
              </div>

              {/* Shield barrier */}
              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-dashed border-primary/30"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-dc-card px-4 py-2 rounded-full border-2 border-primary flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Protected</span>
                  </div>
                </div>
              </div>

              {/* Internet/Cloud - blocked */}
              <div className="text-center opacity-40">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-2">
                  <span className="text-3xl">☁️</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <XCircle className="w-12 h-12 text-red-500" strokeWidth={3} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">No cloud upload needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyDiagramSection;
