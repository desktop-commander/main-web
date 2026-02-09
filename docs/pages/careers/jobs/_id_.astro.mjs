import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../../../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../../../chunks/PostHogInit_DvwonWEB.mjs';
import { N as NavigationAstro } from '../../../chunks/NavigationAstro_DRR8vbzV.mjs';
import { F as Footer } from '../../../chunks/Footer_CPzrBBdI.mjs';
import { j as jobsData } from '../../../chunks/jobs_Dva_hmV8.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return jobsData.jobs.map((job) => ({
    params: { id: job.id },
    props: { job }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { job } = Astro2.props;
  if (!job) {
    return Astro2.redirect("/careers", 302);
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const formatResponsibility = (text) => {
    if (text.includes(":")) {
      const parts = text.split(":");
      return { label: parts[0], rest: parts.slice(1).join(":") };
    }
    return { label: null, rest: text };
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${job.title} - Desktop Commander`, "description": job.description }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationAstro", NavigationAstro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationAstro", "client:component-export": "default" })} <div class="pt-20"> <!-- Hero Section with Gradient Background --> <div class="relative bg-gradient-to-br from-primary/5 via-background to-background border-b"> <div class="container mx-auto px-4 py-12 max-w-4xl"> <!-- Back Button --> <a href="/careers" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground mb-6 -ml-2 text-muted-foreground h-10 px-4 py-2"> <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Back to Careers
</a> <!-- Header --> <div> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">${job.title}</h1> <div class="flex flex-wrap gap-3 mb-6"> <span class="inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect> <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path> </svg> ${job.department} </span> <span class="inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path> <circle cx="12" cy="10" r="3"></circle> </svg> ${job.location} </span> <span class="inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <polyline points="12 6 12 12 16 14"></polyline> </svg> ${job.type} </span> <span class="inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect> <line x1="16" x2="16" y1="2" y2="6"></line> <line x1="8" x2="8" y1="2" y2="6"></line> <line x1="3" x2="21" y1="10" y2="10"></line> </svg>
Posted ${formatDate(job.postedDate)} </span> </div> <!-- Apply Button in Hero --> <a${addAttribute(job.applyUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dc-button-primary h-11 px-8"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> </svg> <span>Apply for this Position</span> </a> </div> </div> </div> <!-- Main Content --> <div class="container mx-auto px-4 py-12 max-w-4xl"> <div class="space-y-10"> <!-- Description --> <article> <h2 class="text-2xl font-semibold mb-4">About the Role</h2> <div class="text-muted-foreground space-y-4 text-base leading-relaxed"> ${job.description.split("\n\n").map((paragraph) => renderTemplate`<p>${paragraph}</p>`)} </div> </article> <hr class="border-border"> <!-- Responsibilities --> <section> <h2 class="text-2xl font-semibold mb-4">What you'll do:</h2> <ul class="space-y-3"> ${job.responsibilities.map((responsibility) => {
    const formatted = formatResponsibility(responsibility);
    return renderTemplate`<li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary flex-shrink-0 mt-0.5"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span class="text-muted-foreground leading-relaxed"> ${formatted.label && renderTemplate`<strong>${formatted.label}:</strong>`} ${formatted.rest} </span> </li>`;
  })} </ul> </section> <hr class="border-border"> <!-- Requirements --> <section> <h2 class="text-2xl font-semibold mb-4">What we're looking for:</h2> <ul class="space-y-3"> ${job.requirements.map((requirement) => renderTemplate`<li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary flex-shrink-0 mt-0.5"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span class="text-muted-foreground leading-relaxed">${requirement}</span> </li>`)} </ul> </section> ${job.niceToHave && job.niceToHave.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <hr class="border-border"> <section> <h2 class="text-2xl font-semibold mb-4">Nice to Have:</h2> <ul class="space-y-3"> ${job.niceToHave.map((item) => renderTemplate`<li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary flex-shrink-0 mt-0.5"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span class="text-muted-foreground leading-relaxed">${item}</span> </li>`)} </ul> </section> ` })}`} ${job.benefits && job.benefits.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <hr class="border-border"> <section> <h2 class="text-2xl font-semibold mb-4">What we offer:</h2> <ul class="space-y-3"> ${job.benefits.map((benefit) => renderTemplate`<li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary flex-shrink-0 mt-0.5"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span class="text-muted-foreground leading-relaxed">${benefit}</span> </li>`)} </ul> </section> ` })}`} <!-- Final CTA --> <div class="pt-8"> <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-8 text-center"> <h3 class="text-2xl font-semibold mb-4">Ready to Apply?</h3> <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
Join us in building the future of AI-powered development tools.
</p> <a${addAttribute(job.applyUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dc-button-primary h-11 px-8 mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> </svg> <span>Apply Now</span> </a> </div> </div> </div> </div> </div> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/careers/jobs/[id].astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/careers/jobs/[id].astro";
const $$url = "/careers/jobs/[id]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
