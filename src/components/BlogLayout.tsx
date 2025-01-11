import Button from "@/components/ui/Button";
import React, { PropsWithChildren } from "react";
import { blogs } from "@/services/data";
import BlogCard from "@/components/ui/BlogCard";
import HeadersFromChildren from "@/components/HeadersFromChildren";
import { getBlogs } from "@/services/payload";
import moment from "moment";
import { proseClasses } from "@/helpers";

export default async function BlogLayout(
  props: PropsWithChildren<{
    title: string;
    author: string;
    date: string;
    description: string;
    pathname: string;
    html: string;
  }>,
) {
  const blogs = await getBlogs();
  const { children, title, description, author, date, pathname, html } = props;

  return (
    <>
      <section className="bg-grid px-4 lg:px-20 py-10 lg:py-[120px] items-center z-0 relative border-b border-primary-900 overflow-hidden">
        <div className="bg-radial w-full h-full absolute top-0 left-0 z-[-1]" />
        <div className="bg-primary-950/80 blur-2xl w-full lg:w-[919px] h-[603px] rounded-[919px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]" />

        <h1 className="font-display text-primary-50 font-semibold lg:text-center text-[32px] lg:text-[64px] leading-[110%] lg:mt-8">
          {title}
        </h1>
      </section>
      <section className="px-4 lg:px-20 mt-8 lg:mt-14 mb-24 lg:mb-40 flex gap-6">
        <div className="w-52 hidden relative lg:block">
          <div className="sticky top-24">
            <p className="font-medium text-accent-300 mb-[18px]">Inhoud</p>
            <div className="space-y-3">
              <HeadersFromChildren childs={children} html={html} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className={proseClasses("max-w-4xl mx-auto")}>{children}</div>
          <div className="max-w-4xl mx-auto border-t border-primary-900 pt-6 flex justify-between items-center mt-12">
            <p className="text-primary-50 font-medium">{author}</p>
            <p className="text-primary-400">{date}</p>
          </div>
        </div>
      </section>
      <section className="mb-24 lg:mb-40 px-4 lg:px-20">
        <div className="flex justify-between items-center pb-8">
          <h2 className="text-primary-50 text-display-2 leading-none font-display font-semibold">
            Meer blogs
          </h2>
          <Button variant="secondary" as="link" href="/blog">
            View all
          </Button>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-10 gap-y-10 lg:gap-y-16 lg:mt-8">
          {blogs
            .filter((ci) => !pathname.includes(ci.slug!))
            .map((blog, index) => (
              <BlogCard
                key={blog.slug}
                category={blog.category}
                title={blog.title}
                description={blog.excerpt}
                author={blog.author}
                date={moment(blog.publishedDate)
                  .format("D MMM, YYYY")
                  .toString()}
                href={`/blog/${blog.slug}`}
              />
            ))}
        </div>
      </section>
    </>
  );
}
