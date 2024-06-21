import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, e as renderTransition } from './astro/server_x2vLjE--.mjs';
import { b as createPathName, a as $$Layout, $ as $$MaxWidthWrapper } from './Layout_C2d_KEFN.mjs';
import { L as LinkBtn } from './link-arrow_-DTxUEU3.mjs';
import { p as projects } from './projects_Cpwvq9He.mjs';
/* empty css                         */

const $$Astro = createAstro();
function getStaticPaths() {
  const projectsTitles = Object.values(projects).map(({ title }) => title);
  return projectsTitles.map((title) => {
    return { params: { project: createPathName(title) } };
  });
}
const $$project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$project;
  const { project } = Astro2.params;
  const projectResult = Object.values(projects).find(
    ({ title: title2 }) => createPathName(title2) === project
  );
  if (!projectResult) return Astro2.redirect("/");
  const { title, description, demoUrl, img } = projectResult;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": projectResult?.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full md:py-24 lg:py-32"> ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "relative" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LinkBtn", LinkBtn, { "href": "/portfolio/", "variant": "link", "arrowPosition": "left" }, { "default": ($$result4) => renderTemplate`
go back
` })} <div class="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]"> <div class="flex flex-col justify-center space-y-4"> <div class="space-y-2"> <h1 class="text-3xl font-bold capitalize tracking-tighter sm:text-5xl"> ${title} </h1> <p class="0 max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"> ${description} </p> ${renderComponent($$result3, "LinkBtn", LinkBtn, { "href": demoUrl, "variant": "outline", "size": "lg", "arrowPosition": "right", "target": "_blank" }, { "default": ($$result4) => renderTemplate`
See Demo
` })} </div> </div> <img${addAttribute(img, "src")} width="550" height="310" alt="About" class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-top shadow-lg dark:shadow-slate-50 sm:w-full lg:order-last"${addAttribute(renderTransition($$result3, "jg7jif3k", "", title), "data-astro-transition-scope")}> </div> ` })} </section> ` })}`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/portfolio/[project].astro", "self");

const $$file = "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/portfolio/[project].astro";
const $$url = "/portfolio/[project]";

export { $$project as default, $$file as file, getStaticPaths, $$url as url };
