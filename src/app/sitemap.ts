import { getBlogs, getCases } from "@/services/payload";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const cases = await getCases();
  // const blogs = await getBlogs();

  // const caseUrls = cases.map((c) => ({
  //   url: `https://markscherrenberg.com/cases/${c.slug}`,
  //   lastModified: new Date(c.publishedDate as string),
  //   changeFrequency: 'monthly',
  //   priority: 0.8,
  // }));
  // const blogUrls = blogs.map((b) => ({
  //   url: `https://markscherrenberg.com/blog/${b.slug}`,
  //   lastModified: new Date(b.publishedDate as string),
  //   changeFrequency: 'monthly',
  //   priority: 0.5,
  // }));

  return [
    {
      url: "https://markscherrenberg.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://markscherrenberg.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // @ts-ignore
    // ...caseUrls,
    // @ts-ignore
    // ...blogUrls,
  ];
}
