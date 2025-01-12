"use client";
import Scrollable from "@/components/Scrollable";
import { ScrollUp } from "@/components/ScrollAnimations";
import { useMemo } from "react";
import moment from "moment";
import {
  CalendarDateRangeIcon,
  ClockIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const getDate = (date: string) => {
  return moment(date, "DD-MM-YYYY");
};

const workProcess = [
  {
    num: moment(moment()).diff(getDate("01-05-2021"), "months"),
    title: "Rocksolid Development",
    role: "Co-founder",
    description:
      "Ontwikkelen van webshops, webapplicaties, mobiele apps. Waaronder: Learning, matching en medische software.",
    skills: [
      "Laravel",
      "React.js",
      "Node.js",
      "JavaScript",
      "Tailwind",
      "React Native",
      "Go lang",
      "PHP",
      "PostgresQL",
      "MySQL",
      "Solidity",
      "Rust",
    ],
  },
  {
    num: moment(moment()).diff(getDate("01-04-2013"), "months"),
    title: "Freelance developer",
    role: "Freelence",
    description:
      "Ontwikkelen van webshops, webapplicaties en mobiele apps. Samenwerkingen met verschillende marketing- en developmentbureaus.",
    skills: [
      "Laravel",
      "React.js",
      "Node.js",
      "JavaScript",
      "Tailwind",
      "React Native",
      "Go lang",
      "MySQL",
      "PHP",
      "PostgresQL",
    ],
  },
  {
    num: moment(getDate("01-11-2021")).diff(getDate("01-09-2017"), "months"),
    title: "Programic",
    role: "Freelance",
    description:
      "Meerdere projecten voor verschillende klanten. Onder andere: Medische EPD, KPI dashboards en Fintech oplossingen.",
    skills: [
      "Laravel",
      "Vue.js",
      "Ionic",
      "MySQL",
      "CSS",
      "HTML",
      "Javascript",
    ],
  },
  {
    num: moment(getDate("01-09-2017")).diff(getDate("01-02-2015"), "months"),
    title: "Elevate Digital",
    role: "Freelance",
    description:
      "Meerdere projecten voor verschillende klanten. Onder andere: Boeking software, financiële software en maatwerk webshops.",
    skills: [
      "Laravel",
      "Vue.js",
      "Ionic",
      "WordPress",
      "WooCommerce",
      "MySQL",
      "CSS",
      "HTML",
      "Javascript",
    ],
  },
];

export default function Experience({
  variant,
}: {
  variant?: "mobile" | "websites" | "webshops";
}) {
  return (
    <ScrollUp>
      <Scrollable>
        <div className="mt-4 flex justify-between gap-x-4 relative">
          {workProcess.map((item, index) => (
            <div
              key={item.num}
              className="flex flex-col -mt-2.5 min-w-[400px] cursor-grab bg-box/70 rounded-xl border-primary-900 p-4"
            >
              <div className="flex items-center space-x-4">
                <CodeBracketIcon className={"w-6 h-6 text-accent"} />
                <span className="font-medium text-base lg:text-lg flex items-center space-x-2">
                  <span>Full-Stack Developer</span>
                  <span>-</span>
                  <span className="text-sm">{item.role}</span>
                </span>
              </div>
              <div>
                <h3 className="text-primary-50 mt-4 mb-0 text-display-6 lg:text-2xl font-display font-semibold text-left select-none">
                  {item.title}
                </h3>
              </div>
              <p className="mb-2 text-primary-300 text-base lg:text-xl font-medium mt-1 leading-none select-none flex items-center space-x-2">
                <CalendarDateRangeIcon className="w-6 h-6 text-accent" />{" "}
                <span>
                  {Math.floor(item.num / 12)} jaar{" - "}
                </span>
                <span className="text-base font-medium text-primary-300">
                  {item.num % 12} maanden
                </span>
              </p>
              <p className="mt-2 text-primary-300 select-none">
                {item.description}
              </p>
              <div className="mt-3">
                {item.skills?.map((t: string) => (
                  <div
                    key={t}
                    className="text-sm inline-block font-medium rounded bg-primary text-white px-2 py-0.5 mb-1 mr-1"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Scrollable>
    </ScrollUp>
  );
}
