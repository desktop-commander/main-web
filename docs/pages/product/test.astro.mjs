import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/dc-logo_6kTUD2wC.mjs';
import { N as NavigationAstro } from '../../chunks/NavigationAstro_DRR8vbzV.mjs';
import { F as Footer } from '../../chunks/Footer_CPzrBBdI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Test = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Test Page", "description": "Test" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationAstro", NavigationAstro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationAstro", "client:component-export": "default" })} <main class="pt-32"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-white">Test Page</h1> <p class="text-xl text-slate-300 mt-4">If you can read this with proper styling, the Layout works!</p> </div> </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/rk/DC/main-web/astro-src/pages/product/test.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/product/test.astro";
const $$url = "/product/test/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
