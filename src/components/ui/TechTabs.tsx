"use client";

import { classNames } from "@/helpers";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import React from "@/components/icons/tech/React";
import Html from "@/components/icons/tech/Html";
import Css from "@/components/icons/tech/Css";
import Typescript from "@/components/icons/tech/Typescript";
import Golang from "@/components/icons/tech/Golang";
import Node from "@/components/icons/tech/Node";
import Laravel from "@/components/icons/tech/Laravel";
import Php from "@/components/icons/tech/Php";
import Postgres from "@/components/icons/tech/Postgres";
import MySQL from "@/components/icons/tech/MySQL";
import Tailwind from "@/components/icons/tech/Tailwind";
import Apple from "@/components/icons/tech/Apple";
import Android from "@/components/icons/tech/Android";
import Mongo from "@/components/icons/tech/Mongo";
import Next from "@/components/icons/tech/Next";
import Solidity from "@/components/icons/tech/Solidity";
import Rust from "@/components/icons/tech/Rust";
import Solana from "@/components/icons/tech/Solana";
import Nginx from "@/components/icons/tech/Nginx";
import Docker from "@/components/icons/tech/Docker";
import Github from "@/components/icons/tech/Github";
import Linux from "@/components/icons/tech/Linux";
import Ethereum from "@/components/icons/tech/Ethereum";
import Scrollable from "@/components/Scrollable";

const tabs = [
  {
    title: "Backend",
    icons: [
      {
        icon: <Laravel className={"text-primary-50 h-12 w-12"} />,
        title: "Laravel",
      },
      {
        icon: <Node className={"text-primary-50 h-12 w-12"} />,
        title: "Node.js",
      },
      {
        icon: <Php className={"w-12 h-12 text-primary-50"} />,
        title: "PHP",
      },
      {
        icon: <Golang className={"text-primary-50 h-12 w-12"} />,
        title: "Golang",
      },
    ],
  },
  {
    title: "Frontend",
    icons: [
      {
        icon: <React className={"text-primary-50 h-12 w-12"} />,
        title: "React",
      },
      {
        icon: (
          <Typescript
            secondColor={"#F6F6F6"}
            className={"w-12 h-12 text-[#000]"}
          />
        ),
        title: "TypeScript",
      },
      {
        icon: <Tailwind className={"text-primary-50 h-12 w-12"} />,
        title: "Tailwind",
      },
      {
        icon: <Next className={"text-primary-50 h-12 w-12"} />,
        title: "Next.js",
      },
      {
        icon: (
          <Html
            className={"text-primary-50 h-12 w-12"}
            secondColor={"#B0B0B0"}
            thirdColor={"#000"}
            fourthColor={"#000"}
          />
        ),
        title: "HTML",
      },
      {
        icon: (
          <Css
            className={"text-primary-50 h-12 w-12"}
            secondColor={"#000"}
            thirdColor={"#000"}
            fourthColor={"#B0B0B0"}
          />
        ),
        title: "CSS",
      },
    ],
  },
  {
    title: "Mobile",
    icons: [
      {
        icon: <Apple className={"w-12 h-12 text-primary-50"} />,
        title: "Apple",
      },
      {
        icon: (
          <Android
            secondColor={"transparent"}
            className={"w-12 h-12 text-primary-50"}
          />
        ),
        title: "Android",
      },
      {
        icon: <React className={"text-primary-50 h-12 w-12"} />,
        title: "React Native",
      },
      {
        icon: (
          <Typescript
            secondColor={"#F6F6F6"}
            className={"w-12 h-12 text-[#000]"}
          />
        ),
        title: "Typescript",
      },
    ],
  },
  {
    title: "Database",
    icons: [
      {
        icon: (
          <Postgres
            secondColor={"#000"}
            className={"text-primary-50 h-12 w-12"}
          />
        ),
        title: "Postgres",
      },
      {
        icon: <MySQL className={"w-12 h-12 text-primary-50"} />,
        title: "MySQL",
      },
      {
        icon: (
          <Mongo secondColor={"#F6F6F6"} className={"w-12 h-12 text-[#000]"} />
        ),
        title: "Mongodb",
      },
    ],
  },
  {
    title: "Infrastructure",
    icons: [
      {
        icon: <Nginx className={"text-primary-50 h-12 w-12"} />,
        title: "Nginx",
      },
      {
        icon: <Docker className={"text-primary-50 h-12 w-12"} />,
        title: "Docker",
      },
      {
        icon: <Linux className={"text-primary-50 h-12 w-12"} />,
        title: "Linux",
      },
      {
        icon: <Github className={"w-12 h-12 text-primary-50"} />,
        title: "Github",
      },
    ],
  },
  {
    title: "Blockchain",
    icons: [
      {
        icon: <Solidity className={"text-primary-50 h-12 w-12"} />,
        title: "Solidity",
      },
      {
        icon: (
          <Ethereum
            secondColor={"#B0B0B0"}
            thirdColor={"#B0B0B0"}
            fourthColor={"#F6F6F6"}
            fifthColor={"#4F4F4F"}
            sixthColor={"#5D5D5D"}
            className={"text-primary-50 h-12 w-12"}
          />
        ),
        title: "Ethereum",
      },
      {
        icon: <Solana className={"text-primary-50 h-12 w-12"} />,
        title: "Solana",
      },
      {
        icon: <Rust className={"w-12 h-12 text-primary-50"} />,
        title: "Rust",
      },
    ],
  },
] as {
  title: string;
  icons: {
    icon: React.ReactNode;
    title: string;
  }[];
}[];

export default function TechTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollableRef = useRef<{ resetScroll: () => void }>(null);

  useEffect(() => {
    scrollableRef.current?.resetScroll();
  }, [activeTab]);

  return (
    <section className="-mx-4 lg:mx-0">
      <Scrollable>
        <div className="flex w-full justify-between relative">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              className={classNames([
                "lg:text-lg font-medium px-1 z-1 pb-[18px]  min-w-[150px] lg:w-full transition-all",
                clsx({
                  "text-primary-50 border-b border-primary-900 hover:border-accent-50 hover:text-accent-50":
                    activeTab !== index,
                  "text-accent-300 border-b border-accent-300":
                    activeTab === index,
                }),
              ])}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </Scrollable>
      <div className="pt-10">
        <Scrollable ref={scrollableRef}>
          <div className={"flex lg:w-full items-center gap-10 mt-6"}>
            {tabs[activeTab].icons.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center w-[125px] lg:w-full"
              >
                {item.icon}
                <label className="mt-5 text-lg text-primary-100">
                  {item.title}
                </label>
              </div>
            ))}
          </div>
        </Scrollable>
      </div>
    </section>
  );
}
