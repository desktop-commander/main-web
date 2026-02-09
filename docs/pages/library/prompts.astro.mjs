import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../chunks/PostHogInit_DvwonWEB.mjs';
import { N as NavigationAstro } from '../../chunks/NavigationAstro_DRR8vbzV.mjs';
import { F as Footer } from '../../chunks/Footer_CPzrBBdI.mjs';
import { P as PromptsLibrary } from '../../chunks/PromptsLibraryAstro_Dp2Mzywd.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const promptId = url.searchParams.get("i");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Prompt Library - Desktop Commander", "description": "Browse 60+ curated prompts for Desktop Commander MCP" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationAstro", NavigationAstro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationAstro", "client:component-export": "default" })} <main> ${renderComponent($$result2, "PromptsLibrary", PromptsLibrary, { "client:load": true, "initialPromptId": promptId, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/library/PromptsLibraryAstro", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/library/prompts/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/library/prompts/index.astro";
const $$url = "/library/prompts/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
