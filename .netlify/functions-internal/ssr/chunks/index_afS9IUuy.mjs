import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_x2vLjE--.mjs';
import { a as $$Layout } from './Layout_C2d_KEFN.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Blog";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": `${pageTitle} page` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${pageTitle}</h1> ` })}`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
