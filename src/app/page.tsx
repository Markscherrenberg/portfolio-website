import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";
import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import MetricSection from "@/components/MetricSection";
import Cases from "@/components/Cases";
import Reviews from "@/components/Reviews";
import React from "@/components/icons/tech/React";
import { getBlogs } from "@/services/payload";
import moment from "moment/moment";
import { Metadata } from "next";
import Image from "next/image";
import { team } from "@/services/data";
import TechTabs from "@/components/ui/TechTabs";
import { ScrollUp } from "@/components/ScrollAnimations";
import ContactOption from "@/components/ContactOption";
import WorkProcess from "@/components/WorkProcess";
import Experience from "@/components/Experience";

export const revalidate = 5;

export default async function Home() {
  // const blogs = await getBlogs(3);

  return (
    <>
      <section className="bg-grid px-4 lg:px-20 pb-24 lg:py-0 lg:min-h-[800px] lg:h-banner flex flex-col lg:items-center justify-center z-0 relative">
        <div className="bg-radial w-full h-full absolute top-0 left-0 z-[-1]" />
        <div className="bg-primary-950/80 blur-2xl w-full lg:w-[919px] h-[603px] rounded-[919px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]" />
        <div
          className={
            "lg:grid flex-col flex-col-reverse flex lg:grid-cols-6 lg:gap-10 lg:py-10 py-10 gap-4"
          }
        >
          <div
            className={
              "flex flex-col justify-center lg:col-span-3 xl:col-span-4"
            }
          >
            <h1 className="font-display text-primary-50 text-display-3 font-medium lg:text-display-3 leading-[110%] lg:leading-[1]">
              <span className={"text-[32px] text-primary-300"}>
                👋 Hi, ik ben Mark
              </span>{" "}
              <br />
              <span className="font-semibold">Full-Stack Developer</span>
            </h1>
            <p className="text-lg lg:text-xl mt-6 mb-10 text-gray-300">
              Met meer dan 10 jaar ervaring in het ontwikkelen van software, ben
              ik gespecialiseerd in het bouwen van webapplicaties en mobiele
              apps. Zowel front-end als back-end, en een oog voor design.
            </p>
            <ContactOption />
          </div>
          <div
            className={
              "flex items-center flex-shrink-0  lg:justify-end lg:col-span-3 xl:col-span-2"
            }
          >
            <div className={"relative"}>
              <Image
                loading="lazy"
                width={212}
                height={212}
                alt={"Team on CTA"}
                src={"/images/team/mark.png"}
                className="rounded-full flex-shrink-0 object-cover bg-accent-300 w-[125px] h-[125px] lg:w-[312px] lg:h-[312px] lg:mt-6 border-2 shadow-lg border-accent flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </section>

      <MetricSection />
      <ServicesSection />
      <ScrollUp>
        <section id="tech" className="px-4 lg:px-20 lg:pt-32 py-16">
          <div className="flex justify-between items-center pb-8">
            <h2 className="text-primary-50 text-[40px] leading-none font-display font-semibold">
              Technology
            </h2>
          </div>
          <TechTabs />
        </section>
      </ScrollUp>

      <Cases />

      <section
        id={"experience"}
        className="px-4 lg:px-20 lg:pt-40 lg:pb-32 pb-16 pt-10"
      >
        <ScrollUp direction="up">
          <div className="pb-8">
            <h2 className="text-primary-50 text-display-2 leading-none font-display font-semibold">
              Ervaring
            </h2>
            <div className="prose prose-p:text-primary-300 prose-2xl"></div>
          </div>
        </ScrollUp>
        <Experience />
      </section>

      {/*<section className="py-2 lg:py-32 px-4 lg:px-20">*/}
      {/*  <div className="flex justify-between items-center pb-8">*/}
      {/*    <h2 className="text-primary-50 text-display-2 leading-none font-display font-semibold">*/}
      {/*      Blog*/}
      {/*    </h2>*/}
      {/*    <Button*/}
      {/*      href={"/blog"}*/}
      {/*      variant="secondary"*/}
      {/*      endIcon={<ArrowRight className={"w-4 h-4"} />}*/}
      {/*    >*/}
      {/*      Alles bekijken*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*  <div className="grid lg:grid-cols-3 gap-x-10 gap-y-14 lg:gap-y-16 lg:mt-8">*/}
      {/*    {blogs.map((blog, index) => (*/}
      {/*      <BlogCard*/}
      {/*        key={blog.slug}*/}
      {/*        category={blog.category}*/}
      {/*        title={blog.title}*/}
      {/*        description={blog.excerpt}*/}
      {/*        author={blog.author}*/}
      {/*        date={moment(blog.publishedDate).format("D MMM, YYYY").toString()}*/}
      {/*        href={`/blog/${blog.slug}`}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/*<Reviews />*/}
    </>
  );
}
