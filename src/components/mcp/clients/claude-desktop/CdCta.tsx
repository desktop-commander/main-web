import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

export const CLAUDE_DESKTOP_CONNECTOR_URL =
  "https://claude.ai/directory/connectors/ant.dir.gh.wonderwhy-er.desktopcommandermcp";

interface Props {
  position: string;
  label?: string;
  size?: "default" | "lg" | "sm";
  variant?: "hero" | "outline";
  className?: string;
}

/** The one CTA of the Claude Desktop page, reused everywhere with per-position analytics */
const CdCta = ({
  position,
  label = "Add to Claude Desktop",
  size = "lg",
  variant = "hero",
  className = "",
}: Props) => {
  const { trackCustomEvent } = useAnalyticsAstro();

  return (
    <Button variant={variant} size={size} className={`group ${className}`} asChild>
      <a
        href={CLAUDE_DESKTOP_CONNECTOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackCustomEvent("mcp_client_page_cta_clicked", {
            client: "claude-desktop",
            transport: "local",
            cta_position: position,
            destination: CLAUDE_DESKTOP_CONNECTOR_URL,
          })
        }
      >
        {label}
        <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  );
};

export default CdCta;
