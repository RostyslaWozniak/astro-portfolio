import React from "react";
import { buttonVariants } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkBtnProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  arrowPosition?: "left" | "right";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  target?: "_blank" | "_parent" | "_self" | "_top";
}

export default function LinkBtn({
  children,
  href,
  className,
  arrowPosition = "right",
  variant = "default",
  size = "default",
  target = "_self",
}: LinkBtnProps) {
  const baseClasses =
    "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 group";

  return (
    <a
      href={href}
      target={target}
      className={cn(
        "group border",
        buttonVariants({ variant, size }),
        baseClasses,
        className,
      )}
    >
      {arrowPosition === "left" && (
        <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-2">
          <ArrowLeft />
        </span>
      )}
      {children}
      {arrowPosition === "right" && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
          <ArrowRight />
        </span>
      )}
    </a>
  );
}
