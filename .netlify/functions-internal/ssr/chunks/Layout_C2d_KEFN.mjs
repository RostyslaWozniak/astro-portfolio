import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent, e as renderTransition, g as renderHead } from './astro/server_x2vLjE--.mjs';
import { clsx } from 'clsx';
/* empty css                         */
import { Linkedin, Github, Mail, ChevronRight, Check, Circle, Sun, Moon } from 'lucide-react';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
/* empty css                         */

const $$Astro$3 = createAstro();
const $$MaxWidthWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MaxWidthWrapper;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["w-full max-w-7xl mx-auto px-4", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/components/MaxWidthWrapper.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/node_modules/.pnpm/astro@4.10.3_typescript@5.4.5/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-slate-100 py-6 dark:bg-slate-800"> ${renderComponent($$result, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "grid w-full grid-cols-1 gap-5 md:grid-cols-3" }, { "default": ($$result2) => renderTemplate` <a href="#" class="flex items-center gap-2"> Logo </a> <div class="flex items-center justify-center gap-4"> <a href="https://www.linkedin.com/in/rostyslav-vozniak" target="_blank"> ${renderComponent($$result2, "Linkedin", Linkedin, { "className": "cursor-pointer hover:animate-pulse" })} </a> <a href="https://github.com/RostyslaWozniak" target="_blank"> ${renderComponent($$result2, "Github", Github, { "className": "cursor-pointer hover:animate-pulse" })} </a> <a href="mailto: rostyslav.vozniak.dev@gmail.com"> ${renderComponent($$result2, "Mail", Mail, { "className": "cursor-pointer hover:animate-pulse", "target": "_blank" })} </a> </div> <p class="text-center text-sm text-gray-500 dark:text-gray-400 md:text-right">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()}. All rights reserved.
</p> ` })} </footer>`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/components/Footer.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function createPathName(text) {
  let pathName = text.toLowerCase();
  pathName = pathName.replace(/\s+/g, "-");
  pathName = pathName.replace(/[^a-z0-9\-]/g, "");
  return pathName;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const themes = ["light", "dark", "system"];
function ModeToggle() {
  const [theme, setThemeState] = useState("system");
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);
  useEffect(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", children: [
      /* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", children: themes.map((t) => /* @__PURE__ */ jsx(
      DropdownMenuItem,
      {
        onClick: () => setThemeState(t),
        className: cn({ border: theme === t }),
        children: t
      }
    )) })
  ] });
}

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const pages = [
    { name: "home", path: "/" },
    { name: "about", path: "/about/" },
    { name: "portfolio", path: "/portfolio/" },
    { name: "blog", path: "/blog/" },
    { name: "contact", path: "/contact/" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed inset-x-0 top-0 z-50 w-screen bg-popover bg-slate-100 shadow-sm dark:bg-slate-800"> ${renderComponent($$result, "MaxWidthWrapper", $$MaxWidthWrapper, {}, { "default": ($$result2) => renderTemplate` <div class="flex h-14 items-center justify-between"> <a href="/" class="flex items-center font-serif text-3xl"> RW</a> <nav> <ul class="hidden gap-4 md:flex"> ${pages.map(({ name, path }) => renderTemplate`<li> <a${addAttribute(path, "href")}${addAttribute([
    "flex items-center text-sm font-medium capitalize transition-colors",
    {
      "border-b-2 border-foreground": Astro2.url.pathname.replace(/\/$/, "") === path.replace(/\/$/, "")
    }
  ], "class:list")}> ${name} </a> </li>`)} </ul> </nav> <div class="flex items-center gap-4"> <a href="https://www.linkedin.com/in/rostyslav-vozniak" target="_blank"> ${renderComponent($$result2, "Linkedin", Linkedin, { "className": "cursor-pointer hover:animate-pulse" })} </a> <a href="https://github.com/RostyslaWozniak" target="_blank"> ${renderComponent($$result2, "Github", Github, { "className": "cursor-pointer hover:animate-pulse", "target": "_blank" })} </a> <div${addAttribute(renderTransition($$result2, "ak3djpsh", "", "theme"), "data-astro-transition-scope")}> ${renderComponent($$result2, "ModeToggle", ModeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ModeToggle", "client:component-export": "ModeToggle" })} </div> </div> </div> ` })} </header>`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/components/Header.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<script>
  function setDarkMode(document) {
    const getThemePreference = () => {
      if (
        typeof localStorage !== 'undefined' &&
        localStorage.getItem('theme')
      ) {
        return localStorage.getItem('theme');
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'theme-light';
    };
    const isDark = getThemePreference() === 'dark';
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

    if (typeof localStorage !== 'undefined') {
      const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'theme-light');
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }
  }

  setDarkMode(document);

  document.addEventListener('astro:before-swap', (ev) => {
    // Pass the incoming document to set the theme on it
    setDarkMode(ev.newDocument);
  });
<\/script> <html lang="en"> <head><meta charset="UTF-8"><meta name="description"`, '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", "", '</head> <body class="flex min-h-screen flex-col"> ', ' <main class="flex h-full flex-1 flex-col items-center justify-center"> ', " </main> ", " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/layouts/Layout.astro", void 0);

export { $$MaxWidthWrapper as $, Button as B, $$Layout as a, createPathName as b, cn as c, buttonVariants as d };
