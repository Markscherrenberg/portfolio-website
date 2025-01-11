import Button from "@/components/ui/Button";
import React, { PropsWithChildren } from "react";
import CaseCard from "@/components/ui/CaseCard";
import Image from "next/image";
import HeadersFromChildren from "@/components/HeadersFromChildren";
import { getCases, getMediaPath } from "@/services/payload";
import Scrollable from "@/components/Scrollable";
import { proseClasses } from "@/helpers";

export default async function CaseLayout(
  props: PropsWithChildren<{
    title: string;
    description: string;
    cover: string;
    thumb: string;
    logo: string;
    industry: string;
    pathname: string;
    iconClasses?: string;
    type: string;
    html: string;
  }>,
) {
  const cases = await getCases();
  const {
    children,
    iconClasses,
    title,
    description,
    cover,
    logo,
    industry,
    pathname,
    type,
    thumb,
    html,
  } = props;

  return (
    <>
      <section className="px-4 lg:px-20 z-0">
        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <div className="flex items-center flex-row relative order-last lg:order-first">
            <div>
              {/* <Image
                src={logo}
                alt={`Logo of ${title}`}
                width={166}
                height={166}
                className={"z-1 mb-10 " + iconClasses}
              /> */}
              <h1 className="font-display text-primary-50 font-semibold text-4xl lg:text-[56px] leading-[110%]">
                {title}
              </h1>

              <p className="text-lg text-primary-300 mt-2 line-clamp-4 lg:min-h-[150px]">
                {description}
              </p>
            </div>
          </div>
          <div>
            <Image
              src={cover}
              alt={`Image of ${title}`}
              width={680}
              blurDataURL={thumb}
              height={500}
              loading={"lazy"}
              className="rounded-lg shadow-lg w-full object-cover max-h-[500px] max-w-[680px]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-20 lg:rounded-lg bg-primary-900 lg:py-6 mt-10 lg:-mt-10 flex items-center space-x-32 py-4">
        <div>
          <header className="text-sm text-primary-50 font-semibold">
            TECH
          </header>
          <p className={"text-primary-50 font-light mt-1"}>{industry}</p>
        </div>
        <div>
          <header className="text-sm text-primary-50 font-semibold">
            TYPE
          </header>
          <p className={"text-primary-50 font-light mt-1"}>{type}</p>
        </div>
      </section>

      <section className="px-4 lg:px-20 mt-6 lg:mt-14 mb-36 lg:mb-40 flex gap-6">
        <div className="w-52 hidden sticky top-24 lg:block h-full">
          <div>
            <p className="font-medium text-accent-300 mb-[18px]">Inhoud</p>
            <div className="space-y-3">
              <HeadersFromChildren childs={children} html={html} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className={proseClasses("max-w-4xl mx-auto")}>{children}</div>
        </div>
      </section>
      <section className="mb-4 px-4 lg:px-20">
        <div className="flex justify-between items-center pb-8">
          <h2 className="text-primary-50 text-display-2 leading-none font-display font-semibold">
            Cases
          </h2>
          <Button variant="secondary" as="link" href="/cases">
            View all
          </Button>
        </div>
        <Scrollable>
          <div className="flex space-x-4 lg:space-x-4 lg:mt-8">
            {cases
              .filter((ci) => !pathname.includes(ci.slug!))
              .map((caseItem, index) => (
                <CaseCard
                  key={index + "case-study"}
                  name={caseItem.title}
                  description={caseItem.excerpt}
                  //@ts-ignore
                  previewImage={
                    typeof caseItem.cover !== "string" //@ts-ignore
                      ? getMediaPath(caseItem.cover.url)
                      : ""
                  }
                  slug={caseItem.slug!}
                />
              ))}
          </div>
        </Scrollable>
      </section>
    </>
  );
}
