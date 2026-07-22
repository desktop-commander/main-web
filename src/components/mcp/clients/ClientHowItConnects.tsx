import { Card } from "@/components/ui/card";
import { Check, Globe, Monitor, ArrowLeftRight } from "lucide-react";

interface Props {
  name: string;
  transport: "remote" | "local";
  heading: string;
  body: string;
  bullets: string[];
}

const ClientHowItConnects = ({ name, transport, heading, body, bullets }: Props) => {
  const ClientIcon = transport === "remote" ? Globe : Monitor;

  return (
    <section className="py-14 md:py-20 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{heading}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{body}</p>
        </div>

        {/* Connection diagram */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 flex-wrap">
          <Card className="px-5 py-4 bg-dc-card border-dc-border flex items-center gap-3">
            <ClientIcon className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">{name}</span>
          </Card>
          <ArrowLeftRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <Card className="px-5 py-4 bg-dc-card border-primary/40 flex items-center gap-3">
            <img src="/favicon-32x32.png" alt="" className="w-5 h-5" />
            <span className="font-semibold text-foreground">
              Desktop Commander{transport === "remote" ? " Remote MCP" : " MCP"}
            </span>
          </Card>
          <ArrowLeftRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <Card className="px-5 py-4 bg-dc-card border-dc-border flex items-center gap-3">
            <Monitor className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Your computer</span>
          </Card>
        </div>

        <div className="max-w-xl mx-auto space-y-3">
          {bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientHowItConnects;
