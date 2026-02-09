import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment, d as addAttribute } from '../chunks/astro/server_Dp1VJtNq.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/dc-logo_6kTUD2wC.mjs';
import { P as PostHogInit } from '../chunks/PostHogInit_DvwonWEB.mjs';
import { N as NavigationAstro } from '../chunks/NavigationAstro_DRR8vbzV.mjs';
import { F as Footer } from '../chunks/Footer_CPzrBBdI.mjs';
import { j as jobsData } from '../chunks/jobs_Dva_hmV8.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Careers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Careers;
  const activeJobs = jobsData.jobs.filter((job) => job.isActive);
  const hasJobs = activeJobs.length > 0;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const truncateDescription = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Careers - Desktop Commander", "description": "Join us in building the future of developer automation" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PostHogInit", PostHogInit, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/PostHogInit", "client:component-export": "default" })} ${maybeRenderHead()}<div class="min-h-screen bg-background"> ${renderComponent($$result2, "NavigationAstro", NavigationAstro, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rk/DC/main-web/src/components/NavigationAstro", "client:component-export": "default" })} <main> <section id="job-listings" class="pt-32 pb-20 bg-background"> <div class="container mx-auto px-4"> <!-- Header --> <div class="text-center mb-16"> <h1 class="text-4xl md:text-6xl font-bold mb-6"> ${hasJobs ? "Join Our Team" : "Careers"} </h1> ${hasJobs ? renderTemplate`<p class="text-xl text-muted-foreground max-w-2xl mx-auto">
We're building the future of AI-powered development tools. Join us!
</p>` : renderTemplate`<p class="text-xl text-muted-foreground max-w-2xl mx-auto">
Stay tuned for opportunities to join our team.
</p>`} </div> <!-- Open Positions Section --> ${hasJobs ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-bold text-center mb-8">Open Positions</h2> <div class="space-y-6 max-w-4xl mx-auto"> ${activeJobs.map((job) => renderTemplate`<a${addAttribute(`/careers/jobs/${job.id}`, "href")} class="block"> <article class="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"> <div class="flex flex-col space-y-1.5 p-6"> <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4"> <div class="flex-1"> <h3 class="text-xl font-semibold leading-none tracking-tight mb-2 group-hover:text-primary transition-colors"> ${job.title} </h3> <div class="flex flex-wrap gap-3 text-sm text-muted-foreground"> <div class="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect> <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path> </svg> <span class="font-semibold">${job.department}</span> </div> <div class="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path> <circle cx="12" cy="10" r="3"></circle> </svg> <span class="font-semibold">${job.location}</span> </div> <div class="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <polyline points="12 6 12 12 16 14"></polyline> </svg> <span class="font-semibold">${job.type}</span> </div> <div class="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect> <line x1="16" x2="16" y1="2" y2="6"></line> <line x1="8" x2="8" y1="2" y2="6"></line> <line x1="3" x2="21" y1="10" y2="10"></line> </svg> ${formatDate(job.postedDate)} </div> </div> </div> <span class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit"> ${job.department} </span> </div> </div> <div class="p-6 pt-0"> <p class="text-muted-foreground mb-3 line-clamp-4"> ${truncateDescription(job.description)} </p> <!-- SEO-friendly content (hidden visually but visible to crawlers) --> <div class="sr-only"> <h4>Responsibilities:</h4> <ul> ${job.responsibilities.map((item) => renderTemplate`<li>${item}</li>`)} </ul> <h4>Requirements:</h4> <ul> ${job.requirements.map((item) => renderTemplate`<li>${item}</li>`)} </ul> ${job.benefits && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <h4>Benefits:</h4> <ul> ${job.benefits.map((item) => renderTemplate`<li>${item}</li>`)} </ul> ` })}`} </div> <div class="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform"> <span>View full details</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"> <path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> </svg> </div> </div> </article> </a>`)} </div> ` })}` : renderTemplate`<div class="max-w-3xl mx-auto"> <div class="rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/20 text-card-foreground shadow-sm"> <div class="p-12 md:p-16 text-center"> <div class="mb-8"> <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary/60"> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> </svg> </div> <h3 class="text-2xl font-bold mb-4">No Open Positions</h3> <p class="text-muted-foreground text-lg mb-8">
We don't have any openings right now, but check back soon!
</p> </div> <div class="space-y-4"> <p class="text-sm font-medium text-foreground">
Interested in our mission? We'd love to hear from you!
</p> <div class="flex flex-col sm:flex-row gap-3 justify-center"> <a href="mailto:ll@desktopcommander.app" class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="16" x="2" y="4" rx="2"></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path> </svg>
Get in Touch
</a> <a href="https://discord.gg/kQ27sNnZr7" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path> </svg>
Let's chat on Discord
</a> </div> </div> </div> </div> </div>`} </div> </section> </main> ${renderComponent($$result2, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/rk/DC/main-web/src/components/Footer", "client:component-export": "default" })} </div> ` })} `;
}, "/Users/rk/DC/main-web/astro-src/pages/careers.astro", void 0);

const $$file = "/Users/rk/DC/main-web/astro-src/pages/careers.astro";
const $$url = "/careers/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Careers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
