import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../chunks/PostHogInit_DvwonWEB.mjs';
import { N as NavigationAstro } from '../chunks/NavigationAstro_DRR8vbzV.mjs';
import { P as PromptsLibrary } from '../chunks/PromptsLibraryAstro_Dp2Mzywd.mjs';
import { F as Footer } from '../chunks/Footer_CPzrBBdI.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Prompt Library - Desktop Commander", "description": "Browse our collection of AI prompts for Desktop Commander - deploy servers, analyze data, and automate tasks." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationAstro", NavigationAstro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationAstro", "client:component-export": "default" })} <main> ${renderComponent($$result2, "PromptsLibraryAstro", PromptsLibrary, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/library/PromptsLibraryAstro", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/library/index.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/library/index.astro";
const $$url = "/library/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
