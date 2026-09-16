import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Terminal, Plug, Copy, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import OpenAIMark from "@/components/mcp/clients/chatgpt/OpenAIMark";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";
import { CHATGPT_CONNECTOR, CLAUDE_CONNECTOR, LOCAL_MCP_URL, MCP_ENDPOINT } from "./links";

/**
 * The single install destination for the whole site.
 *
 * ChatGPT and Claude are the two prominent paths. Local MCP sits below them as
 * a quieter option for people who would rather run it themselves.
 */

const OPTIONS = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    href: CHATGPT_CONNECTOR,
    cta: "Install in ChatGPT",
    description:
      "Add Desktop Commander to ChatGPT, then work with your real files and terminal in an ordinary conversation.",
    bullets: [
      "Works on web and on your phone",
      "Reaches a laptop, desktop, or server you choose",
      "Sign in with your email, connect your device",
    ],
  },
  {
    slug: "claude",
    name: "Claude",
    href: CLAUDE_CONNECTOR,
    cta: "Install in Claude",
    description:
      "Connect Claude to a computer you are not sitting in front of, from the web or your phone.",
    bullets: [
      "Claude on web, desktop, and mobile",
      "Your actual files and programs, not a sandbox",
      "Sign in with your email, connect your device",
    ],
  },
];

const LOCAL_INSTALL_COMMAND = "npx @wonderwhy-er/desktop-commander@latest setup";

const InstallChooser = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [localOpen, setLocalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { trackCustomEvent } = useAnalyticsAstro();

  const toggleLocal = () => {
    if (!localOpen) {
      trackCustomEvent("install_local_expanded", {
        button_location: "home_install_chooser",
      });
    }
    setLocalOpen((open) => !open);
  };

  const copyEndpoint = async () => {
    try {
      await navigator.clipboard.writeText(MCP_ENDPOINT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      trackCustomEvent("install_cta_clicked", {
        button_text: "Copy URL",
        button_location: "home_install_chooser",
        client: "any_mcp_client",
        destination: MCP_ENDPOINT,
      });
    } catch {
      /* clipboard unavailable, the URL is still selectable */
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="install" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            Install it where you chat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick the assistant you already use. Setup takes a couple of minutes and you
            choose which machine it reaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {OPTIONS.map((option, index) => (
            <Card
              key={option.slug}
              className={`p-6 md:p-8 bg-dc-card border-2 border-dc-border hover:border-primary/40 transition-all duration-500 flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + index * 120}ms` : "0ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 rounded-2xl bg-white border border-dc-border flex items-center justify-center shadow-sm">
                  {option.slug === "chatgpt" ? (
                    <OpenAIMark className="w-7 h-7 text-black" />
                  ) : (
                    <img src="/claude-logo.png" alt="" className="w-7 h-7 object-contain" />
                  )}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{option.name}</h3>
              </div>

              <p className="text-muted-foreground text-sm mb-4">{option.description}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {option.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg" className="w-full flex items-center justify-center gap-2 group" asChild>
                <a
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackCustomEvent("install_cta_clicked", {
                      button_text: option.cta,
                      button_location: "home_install_chooser",
                      client: option.slug,
                      destination: option.href,
                    })
                  }
                >
                  {option.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Any other MCP client: the endpoint, copied straight in */}
        <div
          className={`max-w-4xl mx-auto mt-5 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="rounded-xl border border-dc-border bg-dc-surface/40 px-5 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Plug className="h-5 w-5 text-primary" />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Any MCP client
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Cursor, VS Code, custom agents. Register this endpoint as a remote MCP
                  server with OAuth, then authorize once. Tokens are scoped per client and
                  can be revoked from Settings.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <code className="flex-1 min-w-0 truncate rounded-lg bg-background border border-dc-border px-4 py-2.5 text-sm text-muted-foreground font-mono">
                    {MCP_ENDPOINT}
                  </code>
                  <Button
                    variant="outline"
                    onClick={copyEndpoint}
                    className="flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : "Copy URL"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local option, folded away so it stays quiet */}
        <div
          className={`max-w-4xl mx-auto mt-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            type="button"
            onClick={toggleLocal}
            aria-expanded={localOpen}
            aria-controls="local-mcp-details"
            className="flex items-center gap-2 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Terminal className="h-4 w-4" />
            Prefer to run it locally?
            <ChevronDown
              className={`h-4 w-4 transition-transform ${localOpen ? "rotate-180" : ""}`}
            />
          </button>

          {localOpen && (
            <div
              id="local-mcp-details"
              className="mt-4 rounded-xl border border-dc-border bg-dc-surface/40 px-5 py-4"
            >
              <p className="text-sm text-muted-foreground mb-3">
                The local MCP server is free and open source. It runs entirely on your
                machine and works with Claude Desktop, Cursor, Windsurf and any other MCP
                client.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="flex-1 min-w-0 truncate rounded-lg bg-background border border-dc-border px-4 py-2.5 text-sm text-muted-foreground font-mono">
                  {LOCAL_INSTALL_COMMAND}
                </code>
                <a
                  href={LOCAL_MCP_URL}
                  onClick={() =>
                    trackCustomEvent("install_cta_clicked", {
                      button_text: "Install local MCP",
                      button_location: "home_install_chooser",
                      client: "local",
                      destination: LOCAL_MCP_URL,
                    })
                  }
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline whitespace-nowrap sm:px-2"
                >
                  Setup guide &rarr;
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstallChooser;
