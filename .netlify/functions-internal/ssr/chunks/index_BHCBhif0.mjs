import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_x2vLjE--.mjs';
import { c as cn, B as Button, b as createPathName, $ as $$MaxWidthWrapper, a as $$Layout } from './Layout_C2d_KEFN.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { p as projects } from './projects_Cpwvq9He.mjs';
import { $ as $$BrainImg } from './BrainImg_BLnH_D0D.mjs';

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

const Projects = () => {
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      opts: {
        align: "center",
        loop: true
      },
      children: [
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "hidden md:flex" }),
        /* @__PURE__ */ jsx(CarouselContent, { className: "flex items-center lg:p-2", children: Object.values(projects).map(({ title, img }) => /* @__PURE__ */ jsx(CarouselItem, { className: "group md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsx(Card, { className: "cursor-pointer overflow-hidden transition-transform duration-1000 lg:group-hover:rotate-2", children: /* @__PURE__ */ jsxs("a", { href: `/portfolio/${createPathName(title)}`, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: img,
              alt: `${title} image`,
              width: 300,
              height: 200,
              className: "h-[180px] w-full object-cover object-top duration-300 group-hover:scale-110 group-hover:opacity-70 lg:group-hover:rotate-2"
            }
          ),
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold capitalize tracking-tight", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "TODO: Description." })
          ] })
        ] }) }) }, title)) }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "hidden md:flex" })
      ]
    }
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Portfolio";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": `${pageTitle} page` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col justify-start"> <section class="w-full py-12"> ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, {}, { "default": ($$result3) => renderTemplate` <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_300px]"> <div class="flex flex-col justify-center space-y-4"> <div class="space-y-2"> <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
My Portfolio
</h1> <p class="max-w-[800px] text-foreground md:text-xl">
Welcome to my portfolio, where I present a collection of web
                projects I have designed and implemented. Each project is
                bringing creativity, functionality, and a passion for delivering
                exceptional digital experiences. You can also check out my
                websites on GitHub. Enjoy!
</p> </div> </div> ${renderComponent($$result3, "BrainImg", $$BrainImg, {})} </div> ` })} </section> <section class="flex min-h-[300px] items-center px-0"> ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Projects", Projects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/portfolio/components/Projects.tsx", "client:component-export": "Projects" })} ` })} </section> </div>` })}`;
}, "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/portfolio/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/Projects/portfolio/astro-my-website/src/pages/portfolio/index.astro";
const $$url = "/portfolio";

export { $$Index as default, $$file as file, $$url as url };
