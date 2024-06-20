import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createPathName(text: string) {
  // Convert to lowercase
  let pathName = text.toLowerCase();

  // Replace spaces with hyphens
  pathName = pathName.replace(/\s+/g, "-");

  // Remove any special characters (keeping only alphanumeric and hyphens)
  pathName = pathName.replace(/[^a-z0-9\-]/g, "");

  return pathName;
}
