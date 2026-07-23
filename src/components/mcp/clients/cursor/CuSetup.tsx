import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Terminal, Check, Copy } from "lucide-react";
import CuCta from "./CuCta";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const MCP_CONFIG = `{
  "mcpServers": {
    "desktop-commander": {
      "command": "npx",
      "args": ["-y", "@wonderwhy-er/desktop-commander"]
    }
  }
}`;

const CuSetup = () => {
  const [copied, setCopied] = useState(false);
  const { trackCustomEvent } = useAnalyticsAstro();

  const copyConfig = () => {
    navigator.clipboard.writeText(MCP_CONFIG);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackCustomEvent("mcp_client_setup_command_copied", { client: "cursor", step: 2 });
  };

  return (
    <section id="setup" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
          Set up in two steps
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Fully local. No account, no API keys. About two minutes.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-8 text-left">
          <Card className="p-7 bg-dc-card border-dc-border relative overflow-hidden">
            <span
              className="absolute -top-4 -right-2 text-[96px] font-bold text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              1
            </span>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative">
              Open Cursor's MCP settings
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Go to Settings, then MCP, and add a new server. Or edit ~/.cursor/mcp.json
              directly.
            </p>
          </Card>
          <Card className="p-7 bg-dc-card border-dc-border relative overflow-hidden">
            <span
              className="absolute -top-4 -right-2 text-[96px] font-bold text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              2
            </span>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative">
              Paste this config and reload
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Desktop Commander's tools appear in the agent after Cursor reloads. Node.js
              v18 or newer is required.
            </p>
          </Card>
        </div>

        {/* Config snippet */}
        <div className="relative text-left mb-10">
          <pre className="bg-dc-surface border border-dc-border rounded-xl px-5 py-4 pr-14 text-sm text-foreground overflow-x-auto whitespace-pre">
            {MCP_CONFIG}
          </pre>
          <button
            onClick={copyConfig}
            className="absolute top-3 right-3 p-2 rounded-md bg-muted hover:bg-muted/70 transition-colors"
            aria-label="Copy MCP config"
          >
            {copied ? (
              <Check className="h-4 w-4 text-primary" />
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>

        <CuCta position="setup" label="See it on cursor.directory" className="text-base px-8" />

        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6">
          <Terminal className="h-4 w-4" />
          Free and open source. Works on macOS and Windows. Remove the config entry to
          uninstall.
        </p>
      </div>
    </section>
  );
};

export default CuSetup;
