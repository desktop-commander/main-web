import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

export const CLAUDE_CONNECTOR_URL =
  "https://claude.ai/directory/connectors/218bbf02-d0dd-4aa9-8bdd-06bb2a8589af";

interface Props {
  position: string;
  label?: string;
  size?: "default" | "lg" | "sm";
  variant?: "hero" | "outline";
  className?: string;
}

/** The one CTA of the Claude Web page, reused everywhere with per-position analytics */
const CwCta = ({
  position,
  label = "Add to Claude",
  size = "lg",
  variant = "hero",
  className = "",
}: Props) => {
  const { trackCustomEvent } = useAnalyticsAstro();

  return (
    <Button variant={variant} size={size} className={`group ${className}`} asChild>
      <a
        href={CLAUDE_CONNECTOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackCustomEvent("mcp_client_page_cta_clicked", {
            client: "claude-web",
            transport: "remote",
            cta_position: position,
            destination: CLAUDE_CONNECTOR_URL,
          })
        }
      >
        {label}
        <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  );
};

export default CwCta;
