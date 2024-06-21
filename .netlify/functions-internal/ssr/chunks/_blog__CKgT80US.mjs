import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from './astro/server_x2vLjE--.mjs';
import 'clsx';

const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { blog: "clifford" } },
    { params: { blog: "rover" } },
    { params: { blog: "spot" } }
  ];
}
const $$blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blog;
  const { blog } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<h1>${blog}</h1>`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/blog/[blog].astro", void 0);

const $$file = "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/blog/[blog].astro";
const $$url = "/blog/[blog]";

export { $$blog as default, $$file as file, getStaticPaths, $$url as url };
