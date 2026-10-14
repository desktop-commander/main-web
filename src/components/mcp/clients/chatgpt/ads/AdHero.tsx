import { useEffect, useState } from "react";
import GptCta from "../GptCta";
import RankingPill from "@/components/home-mcp/RankingPill";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import AdVisual from "./AdVisual";
import { getAdVariant, useCaseOf, type AdPageKey } from "./adPages";

interface Props {
  page: AdPageKey;
  variant?: string;
}

/** Ads page hero: the advertised task, the primary button, the install requirement, the matching visual. */
const AdHero = ({ page: pageKey, variant: variantKey = "" }: Props) => {
  const { page, variant } = getAdVariant(pageKey, variantKey);
  const useCase = useCaseOf(variant);
  const { trackCustomEvent } = useAnalyticsAstro();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  const { text, accent } = variant.headline;
  const i = text.indexOf(accent);
  const before = i >= 0 ? text.slice(0, i) : text;
  const after = i >= 0 ? text.slice(i + accent.length) : "";

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/4 w-[850px] h-[520px] rounded-full bg-primary/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--dc-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--dc-border)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 90% 70% at 40% 30%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 40% 30%, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <RankingPill
              className={reveal("delay-0")}
              platform="chatgpt"
              onSelect={(r) =>
                trackCustomEvent("ranking_pill_clicked", {
                  ranking: `#${r.rank} ${r.label}`,
                  button_location: "ads_hero",
                  destination: r.href,
                  campaign: page.campaign,
                  use_case: useCase,
                })
              }
            />

            <h1
              className={`text-4xl sm:text-5xl xl:text-6xl font-bold text-foreground leading-[1.08] tracking-tight mb-6 ${reveal("delay-100")}`}
            >
              {before}
              {i >= 0 && (
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-dc-blue-glow to-primary">
                  {accent}
                </span>
              )}
              {after}
            </h1>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed ${reveal("delay-200")}`}
            >
              {variant.sub}
            </p>

            <div className={reveal("delay-300")}>
              <GptCta
                position="hero"
                label={page.button}
                campaign={page.campaign}
                useCase={useCase}
                className="text-lg px-10 py-6"
              />
              <p className="text-sm text-muted-foreground max-w-xl mx-auto lg:mx-0 mt-4 leading-relaxed">
                {page.note}{" "}
                <a href="#setup" className="underline underline-offset-4 hover:text-foreground">
                  How setup works
                </a>
              </p>
            </div>
          </div>

          <div className={`lg:col-span-5 ${reveal("delay-400")}`}>
            <AdVisual kind={variant.visual} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdHero;
