//@ts-ignore
import { JSDOM } from "jsdom";
import { slugify } from "@/helpers";
import { getMediaPath } from "@/services/payload";

export function addIdsToHeaders(html: string): string {
  const dom = new JSDOM(html);
  const { document } = dom.window;

  document.querySelectorAll("h1, h2, h3, h4, h5").forEach((header: any) => {
    header.id = slugify(header.textContent);
  });

  document.querySelectorAll("[src]").forEach((element: any) => {
    element.src = getMediaPath(element.src);
    element.classList.add("rounded-lg");
  });

  return document.body.innerHTML;
}
