import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { c as cn, d as buttonVariants } from './Layout_C2d_KEFN.mjs';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function LinkBtn({
  children,
  href,
  arrowPosition = "right",
  variant = "default",
  size = "default",
  target = "_self"
}) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      target,
      className: cn("group", buttonVariants({ variant, size }), {
        "!text-background": variant === "default"
      }),
      children: [
        arrowPosition === "left" && /* @__PURE__ */ jsx("span", { className: "mr-2 transition-transform duration-300 group-hover:-translate-x-2", children: /* @__PURE__ */ jsx(ArrowLeft, {}) }),
        children,
        arrowPosition === "right" && /* @__PURE__ */ jsx("span", { className: "ml-2 transition-transform duration-300 group-hover:translate-x-2", children: /* @__PURE__ */ jsx(ArrowRight, {}) })
      ]
    }
  );
}

export { LinkBtn as L };
