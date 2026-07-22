import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

interface Props {
  slug: string;
  name: string;
  transport: "remote" | "local";
  logo?: string;
  badge: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
}

const ClientHero = ({
  slug,
  name,
  transport,
  logo,
  badge,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
}: Props) => {
  const { trackCustomEvent } = useAnalyticsAstro();
  const external = ctaHref.startsWith("http");

  return (
    <section className="pt-28 pb-14 md:pt-36 md:pb-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Logo pairing: DC + client */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <img
            src="/favicon-512x512.png"
            alt="Desktop Commander"
            className="w-14 h-14 rounded-2xl border border-dc-border bg-dc-surface object-contain p-2"
          />
          <span className="text-2xl text-muted-foreground">×</span>
          {logo ? (
            <img
              src={`/${logo}`}
              alt={name}
              className="w-14 h-14 rounded-2xl border border-dc-border bg-dc-surface object-contain p-2"
            />
          ) : (
            <span className="w-14 h-14 rounded-2xl border border-dc-border bg-dc-surface flex items-center justify-center text-xl font-bold text-foreground">
              {name.charAt(0)}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-5">
          {badge}
          <span className="text-muted-foreground">
            · {transport === "remote" ? "Remote MCP" : "Local MCP"}
          </span>
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {subheadline}
        </p>

        <Button variant="hero" size="lg" className="group" asChild>
          <a
            href={ctaHref}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            onClick={() =>
              trackCustomEvent("mcp_client_page_cta_clicked", {
                client: slug,
                transport,
                cta_position: "hero",
                destination: ctaHref,
              })
            }
          >
            {ctaLabel}
            {external ? (
              <ExternalLink className="h-4 w-4 ml-1" />
            ) : (
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            )}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ClientHero;
