import { CheckIcon } from "@heroicons/react/24/outline";
import React from "@/components/icons/tech/React";

export default function ServiceUsp({ item }: { item: string }) {
  return (
    <div className="flex flex-row items-center rounded-lg bg-primary-900/5 mb-4 justify-between px-4 py-4 ">
      <p className="text-primary-200 font-display text-base mt-1">{item}</p>
      <CheckIcon className={"w-5 h-5"} />
    </div>
  );
}
