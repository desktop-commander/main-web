import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Terminal, Check, Copy } from "lucide-react";
import CdCta from "./CdCta";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const INSTALL_COMMAND = "npx @wonderwhy-er/desktop-commander@latest setup";

const CdSetup = () => {
  const [copied, setCopied] = useState(false);
  const { trackCustomEvent } = useAnalyticsAstro();

  const copyCommand = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackCustomEvent("mcp_client_setup_command_copied", { client: "claude-desktop", step: 2 });
  };

  return (
    <section id="setup" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
          Install it your way
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          One click from the Claude directory, or one command in your terminal.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-8 text-left">
          <Card className="p-7 bg-dc-card border-primary/30 relative overflow-hidden">
            <span
              className="absolute -top-4 -right-2 text-[96px] font-bold text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              A
            </span>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative">
              From the Claude directory
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Open Desktop Commander in the Claude connectors directory and add it to
              Claude Desktop. Easiest path, no terminal needed.
            </p>
          </Card>
          <Card className="p-7 bg-dc-card border-dc-border relative overflow-hidden">
            <span
              className="absolute -top-4 -right-2 text-[96px] font-bold text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              B
            </span>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative">
              With one command
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Prefer the terminal? Run the installer below (needs Node.js v18 or newer),
              then restart Claude Desktop.
            </p>
          </Card>
        </div>

        {/* Install command */}
        <div className="relative text-left mb-10">
          <pre className="bg-dc-surface border border-dc-border rounded-xl px-5 py-4 pr-14 text-sm text-foreground overflow-x-auto whitespace-pre">
            {INSTALL_COMMAND}
          </pre>
          <button
            onClick={copyCommand}
            className="absolute top-3 right-3 p-2 rounded-md bg-muted hover:bg-muted/70 transition-colors"
            aria-label="Copy install command"
          >
            {copied ? (
              <Check className="h-4 w-4 text-primary" />
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>

        <CdCta position="setup" className="text-base px-8" />

        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6">
          <Terminal className="h-4 w-4" />
          Free and open source. Works on macOS and Windows. Restart Claude Desktop after
          installing.
        </p>
      </div>
    </section>
  );
};

export default CdSetup;
