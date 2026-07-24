import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

export const CHATGPT_LISTING_URL =
  "https://chatgpt.com/plugins/plugin_asdk_app_6a057d268ebc81919918d37eec718425?category=developer-tools";

interface Props {
  position: string;
  label?: string;
  size?: "default" | "lg" | "sm";
  variant?: "hero" | "outline";
  className?: string;
}

/** The one CTA of this page, reused everywhere with per-position analytics */
const GptCta = ({
  position,
  label = "Add to ChatGPT",
  size = "lg",
  variant = "hero",
  className = "",
}: Props) => {
  const { trackCustomEvent } = useAnalyticsAstro();

  return (
    <Button variant={variant} size={size} className={`group ${className}`} asChild>
      <a
        href={CHATGPT_LISTING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackCustomEvent("mcp_client_page_cta_clicked", {
            client: "chatgpt",
            transport: "remote",
            cta_position: position,
            destination: CHATGPT_LISTING_URL,
          })
        }
      >
        {label}
        <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  );
};

export default GptCta;
