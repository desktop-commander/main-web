import { c as createComponent, a as createAstro, b as renderTemplate, e as renderSlot, r as renderComponent, f as renderHead, g as defineScriptVars, d as addAttribute } from './astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$BasePathFixer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BasePathFixer;
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script>
  // Fix internal links to include base path
  (function() {
    // Get base path from Astro
    const basePath = window.__BASE_PATH__ || '/';
    
    // Only fix links if we have a non-root base path
    if (basePath === '/') return;
    
    function fixLink(element) {
      const href = element.getAttribute('href');
      if (!href) return;
      
      // Only fix internal links (starting with /)
      if (href.startsWith('/') && !href.startsWith(basePath)) {
        // Don't fix if it's already correctly prefixed or if it's a hash/anchor
        if (!href.startsWith('#')) {
          const newHref = basePath.replace(/\\/$/, '') + href;
          element.setAttribute('href', newHref);
        }
      }
    }
    
    // Fix all existing links
    function fixAllLinks() {
      document.querySelectorAll('a[href^="/"]').forEach(fixLink);
    }
    
    // Fix on load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fixAllLinks);
    } else {
      fixAllLinks();
    }
    
    // Also fix dynamically added links
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            if (node.tagName === 'A') {
              fixLink(node);
            }
            node.querySelectorAll?.('a[href^="/"]').forEach(fixLink);
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  })();
<\/script>`], [`<script>
  // Fix internal links to include base path
  (function() {
    // Get base path from Astro
    const basePath = window.__BASE_PATH__ || '/';
    
    // Only fix links if we have a non-root base path
    if (basePath === '/') return;
    
    function fixLink(element) {
      const href = element.getAttribute('href');
      if (!href) return;
      
      // Only fix internal links (starting with /)
      if (href.startsWith('/') && !href.startsWith(basePath)) {
        // Don't fix if it's already correctly prefixed or if it's a hash/anchor
        if (!href.startsWith('#')) {
          const newHref = basePath.replace(/\\\\/$/, '') + href;
          element.setAttribute('href', newHref);
        }
      }
    }
    
    // Fix all existing links
    function fixAllLinks() {
      document.querySelectorAll('a[href^="/"]').forEach(fixLink);
    }
    
    // Fix on load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fixAllLinks);
    } else {
      fixAllLinks();
    }
    
    // Also fix dynamically added links
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            if (node.tagName === 'A') {
              fixLink(node);
            }
            node.querySelectorAll?.('a[href^="/"]').forEach(fixLink);
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  })();
<\/script>`])));
}, "/Users/rk/DC/main-web/astro-src/components/BasePathFixer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, ogImage = "/bg-social-share.png" } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "http://localhost:4321");
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="author" content="Desktop Commander"><!-- Favicon --><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="canonical"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:image"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@desktop_commander"><meta name="twitter:image"', `><!-- AI Crawling Control - Opt out of AI training --><meta name="robots" content="noai, noimageai"><meta name="googlebot" content="noai"><!-- Cookiebot - MUST be first script in head --><script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="83cceb09-32d2-409b-ada6-17cc28478ba6" data-blockingmode="auto" type="text/javascript" async></script><!-- Google tag (gtag.js) - blocked until statistics consent --><script type="text/plain" data-cookieconsent="statistics" async src="https://www.googletagmanager.com/gtag/js?id=G-HXL4Y3Y62N"></script><script type="text/plain" data-cookieconsent="statistics">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HXL4Y3Y62N');
    </script><!-- Ahrefs Analytics - blocked until statistics consent --><script type="text/plain" data-cookieconsent="statistics" src="https://analytics.ahrefs.com/analytics.js" data-key="5Iumy4Rr7Do+R0CWUtQkHA" async></script><!-- Inject base path for React components --><script>(function(){`, "\n      window.__BASE_PATH__ = basePath;\n    })();</script><!-- PostHog Analytics --><!-- PostHog is initialized by the PostHogInit React component --><!-- This ensures proper initialization in the Astro environment -->", "</head> <body> ", " ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(ogImage, "content"), defineScriptVars({ basePath: "/" }), renderHead(), renderComponent($$result, "BasePathFixer", $$BasePathFixer, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/rk/DC/main-web/astro-src/layouts/Layout.astro", void 0);

const dcLogo = new Proxy({"src":"/assets/dc-logo.BtymwVD4.png","width":1920,"height":221,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rk/DC/main-web/src/assets/dc-logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/rk/DC/main-web/src/assets/dc-logo.png");
							return target[name];
						}
					});

export { $$Layout as $, dcLogo as d };
