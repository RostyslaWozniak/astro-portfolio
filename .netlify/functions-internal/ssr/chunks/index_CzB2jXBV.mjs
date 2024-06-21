import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_x2vLjE--.mjs';
import { $ as $$MaxWidthWrapper, d as buttonVariants, a as $$Layout } from './Layout_C2d_KEFN.mjs';
import { $ as $$BrainImg } from './BrainImg_BLnH_D0D.mjs';
import { L as LinkBtn } from './link-arrow_-DTxUEU3.mjs';
import { ArrowDown } from 'lucide-react';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Home";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": `${pageTitle} page` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex w-full items-center justify-center"> ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_500px]" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BrainImg", $$BrainImg, {})} <div class="flex flex-col justify-center space-y-5"> <div class="space-y-4"> <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
Hi,
<br>
My Name is Rostyslav
</h1> <p class="max-w-[600px] text-muted-foreground md:text-xl">
I am a Web Developer who is currently based in Warsaw, Poland.
</p> </div> <div class="flex flex-col gap-2 min-[400px]:flex-row"> ${renderComponent($$result3, "LinkBtn", LinkBtn, { "href": "/portfolio/", "variant": "default", "size": "lg", "arrowPosition": "right" }, { "default": ($$result4) => renderTemplate`
My Portfolio
` })} <a href="#"${addAttribute([
    buttonVariants({ variant: "outline", size: "lg" }),
    "group relative"
  ], "class:list")}> ${renderComponent($$result3, "ArrowDown", ArrowDown, { "className": "mr-3 -translate-y-1 transition-transform duration-300 group-hover:translate-y-0", "size": 20 })} Resume
<span class="absolute bottom-3 left-[30px] h-2 w-6 border-2 border-t-0 border-foreground"></span> </a> </div> </div> ` })} </section> ` })}`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
