import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro } from './astro/server_x2vLjE--.mjs';
import { $ as $$BrainImg } from './BrainImg_BLnH_D0D.mjs';
import { c as cn, B as Button, $ as $$MaxWidthWrapper, a as $$Layout } from './Layout_C2d_KEFN.mjs';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

const $$Astro = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("username");
      const email = data.get("email");
      const message = data.get("message");
      console.log(name, email);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<form class="grid gap-4" method="POST"> ${renderComponent($$result, "Input", Input, { "name": "username", "type": "text", "placeholder": "Name", "className": "" })} ${renderComponent($$result, "Input", Input, { "name": "email", "type": "email", "placeholder": "Email", "className": "" })} ${renderComponent($$result, "Textarea", Textarea, { "name": "message", "placeholder": "Message", "rows": 5 })} ${renderComponent($$result, "Button", Button, { "type": "submit", "className": "w-full text-background" }, { "default": ($$result2) => renderTemplate` Submit ` })} </form>`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/components/form/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Contact";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": `${pageTitle} page` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full"> ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "grid grid-cols-[1fr_800px] items-center" }, { "default": ($$result3) => renderTemplate` <div class="container space-y-4 px-4 md:px-6"> <div class="flex flex-col items-center justify-center space-y-2 text-center"> <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
Get in Touch
</h2> <p class="max-w-[600px] text-muted-foreground lg:text-lg">
Are You Interested In Collaboration?<br> Let's Get In Touch!
</p> </div> <div class="mx-auto w-full max-w-md space-y-4"> ${renderComponent($$result3, "ContactForm", $$ContactForm, {})} </div> </div> ${renderComponent($$result3, "BrainImg", $$BrainImg, {})} ` })} </section> ` })}`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
