"use client";

import { classNames } from "@/helpers";
import clsx from "clsx";
import { useState } from "react";

interface TabsProps {
  tabs: {
    title: string;
    content: string | React.ReactNode;
  }[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="flex justify-between gap-5 border-b border-primary-900 relative">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            className={classNames([
              "lg:text-lg font-medium px-1 pb-[18px]",
              clsx({
                "text-primary-50": activeTab !== index,
                "text-accent-300": activeTab === index,
              }),
            ])}
            style={{
              width: `calc(${100 / tabs.length}% - ${20 * (tabs.length - 1)}px)`,
            }}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
        <div
          className="h-px bg-accent-300 absolute bottom-0 transition-all duration-300"
          style={{
            width: `calc(${100 / tabs.length}% - ${20 * (tabs.length - 1)}px)`,
            left: `calc(${activeTab * (100 / tabs.length)}% + ${20 * activeTab}px)`,
          }}
        />
      </div>
      <div className="pt-10">{tabs[activeTab].content}</div>
    </section>
  );
}
