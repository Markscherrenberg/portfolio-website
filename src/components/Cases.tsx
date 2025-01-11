import Scrollable from "@/components/Scrollable";
import CaseCard from "@/components/ui/CaseCard";
import { getCases, getMediaPath } from "@/services/payload";
import React from "react";

export default async function Cases() {
  const cases = await getCases();

  return (
    <section id="projects" className="lg:py-32 py-16 lg:pb-10">
      <div className="px-4 lg:px-20 flex justify-between items-center ">
        <h2 className="text-primary-50 text-display-2 leading-none font-display font-semibold">
          Projecten
        </h2>
      </div>
      <Scrollable>
        <div className="pl-4 lg:pl-20 flex space-x-8 lg:space-x-8 mt-4 lg:mt-6">
          {cases.map((caseItem, index) => (
            <CaseCard
              key={index + "case-study"}
              name={caseItem.title}
              description={caseItem.excerpt}
              tech={caseItem.technologies}
              type={caseItem.type}
              //@ts-ignore
              previewImage={
                typeof caseItem.cover !== "string" //@ts-ignore
                  ? getMediaPath(caseItem.cover.url)
                  : ""
              }
              slug={caseItem.slug!}
            />
          ))}
          <div className={"block lg:hidden"}>&nbsp;</div>
        </div>
      </Scrollable>
    </section>
  );
}
