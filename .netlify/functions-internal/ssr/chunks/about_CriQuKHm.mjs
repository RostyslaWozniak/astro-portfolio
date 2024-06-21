import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_x2vLjE--.mjs';
import { $ as $$MaxWidthWrapper, a as $$Layout } from './Layout_C2d_KEFN.mjs';
import { $ as $$BrainImg } from './BrainImg_BLnH_D0D.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "About";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": `${pageTitle} page` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col"> <section class="w-full py-12"> ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, {}, { "default": ($$result3) => renderTemplate` <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"> <div class="flex flex-col justify-center space-y-4"> <div class="space-y-2"> <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
About Me
</h1> <p class="max-w-[600px] text-foreground md:text-xl">
Acme Software is a leading provider of innovative software
                solutions. Our mission is to empower businesses with
                cutting-edge technology that drives efficiency, productivity,
                and growth.
</p> <p class="max-w-[600px] text-foreground md:text-xl">
At the heart of our company are our core values: innovation,
                integrity, and customer-centricity. We are committed to
                delivering exceptional products and services that exceed our
                clients' expectations.
</p> </div> </div> ${renderComponent($$result3, "BrainImg", $$BrainImg, {})} </div> ` })} </section> </div> ` })}`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/about.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
