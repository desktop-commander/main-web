import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

export const CURSOR_DIRECTORY_URL = "https://cursor.directory/plugins/remote-desktop-commander";

interface Props {
  position: string;
  label?: string;
  size?: "default" | "lg" | "sm";
  variant?: "hero" | "outline";
  className?: string;
}

/** The one CTA of the Cursor page, reused everywhere with per-position analytics */
const CuCta = ({
  position,
  label = "Add to Cursor",
  size = "lg",
  variant = "hero",
  className = "",
}: Props) => {
  const { trackCustomEvent } = useAnalyticsAstro();

  return (
    <Button variant={variant} size={size} className={`group ${className}`} asChild>
      <a
        href={CURSOR_DIRECTORY_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackCustomEvent("mcp_client_page_cta_clicked", {
            client: "cursor",
            transport: "remote",
            cta_position: position,
            destination: CURSOR_DIRECTORY_URL,
          })
        }
      >
        {label}
        <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  );
};

export default CuCta;
