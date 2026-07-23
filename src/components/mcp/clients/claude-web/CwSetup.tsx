import { Card } from "@/components/ui/card";
import { Terminal } from "lucide-react";
import CwCta from "./CwCta";

const CwSetup = () => {
  return (
    <section id="setup" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
          Set up in two steps
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          No config files, no API keys. About three minutes.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-10 text-left">
          <Card className="p-7 bg-dc-card border-dc-border relative overflow-hidden">
            <span
              className="absolute -top-4 -right-2 text-[96px] font-bold text-primary/10 leading-none select-none"
              aria-hidden="true"
            >
              1
            </span>
            <h3 className="text-xl font-semibold text-foreground mb-3 relative">
              Add the connector in Claude
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Open Desktop Commander in the Claude connectors directory and add it to
              your account.
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
              Connect your machine
            </h3>
            <p className="text-muted-foreground leading-relaxed relative">
              Follow the instructions shown right in Claude. You will run one command in
              your computer's terminal and your machine appears in the chat.
            </p>
          </Card>
        </div>

        <CwCta position="setup" className="text-base px-8" />

        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6">
          <Terminal className="h-4 w-4" />
          Requires running one command in your computer's terminal. Works on macOS and
          Windows. Disconnect any time.
        </p>
      </div>
    </section>
  );
};

export default CwSetup;
