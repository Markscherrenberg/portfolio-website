import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classNames(classes: string[]) {
  return classes.join(" ");
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
//
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function proseClasses(extra?: string) {
  return classNames([
    "prose prose-headings:text-primary-50 prose-headings:font-display",
    "prose-p:text-primary-300 prose-p:text-lg",
    "prose-li:text-lg prose-li:text-primary-300",
    "prose-a:text-accent-300",
    "lg:prose-h2:text-[32px] prose-strong:text-primary-100",
    extra ? extra : "",
  ]);
}

export function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
