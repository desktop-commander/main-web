import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

/**
 * Hero CTA for the use-case pages, same as the homepage: Install scrolls to the
 * on-page chooser (#install). Below it, links to the ChatGPT and Claude pages.
 */
const UseCaseHeroCta = ({ location }: { location: string }) => {
  const { trackCustomEvent } = useAnalyticsAstro();
  const track = (button_text: string, destination: string) =>
    trackCustomEvent("install_cta_clicked", {
      button_text,
      button_location: `${location}_hero`,
      destination,
    });

  const linkClass = "text-primary underline-offset-4 hover:underline";

  return (
    <div className="flex flex-col items-center gap-4 pt-2">
      <Button variant="hero" size="lg" className="flex items-center justify-center gap-2 group text-base px-10" asChild>
        <a href="#install" onClick={() => track("Install", "#install")}>
          Install
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
      <p className="text-sm text-muted-foreground">
        Works in ChatGPT and Claude, on the web and on your phone. See how it works in{" "}
        <a href="/mcp/chatgpt/" className={linkClass} onClick={() => track("ChatGPT", "/mcp/chatgpt/")}>
          ChatGPT
        </a>{" "}
        or{" "}
        <a href="/mcp/claude-web/" className={linkClass} onClick={() => track("Claude", "/mcp/claude-web/")}>
          Claude
        </a>
        .
      </p>
    </div>
  );
};

export default UseCaseHeroCta;
