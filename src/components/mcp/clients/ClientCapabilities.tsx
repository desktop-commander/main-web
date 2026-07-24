import { Card } from "@/components/ui/card";
import { FolderOpen, Terminal, MessageSquare } from "lucide-react";

interface CapabilityCard {
  key: "file-access" | "terminal";
  title: string;
  description: string;
  prompts: string[];
}

interface Props {
  name: string;
  capabilities: CapabilityCard[];
}

const ICONS = {
  "file-access": FolderOpen,
  terminal: Terminal,
} as const;

const ClientCapabilities = ({ name, capabilities }: Props) => {
  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            What {name} can do with it
          </h2>
          <p className="text-lg text-muted-foreground">
            Real files, real terminal — just describe what you want.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => {
            const Icon = ICONS[cap.key];
            return (
              <Card key={cap.key} className="p-6 md:p-8 bg-dc-card border-dc-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{cap.description}</p>
                <div className="space-y-2">
                  {cap.prompts.map((prompt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 bg-muted/40 border border-dc-border rounded-lg px-3.5 py-2.5"
                    >
                      <MessageSquare className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground italic">{prompt}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientCapabilities;
