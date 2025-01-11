"use client";
import Copy from "@/components/icons/Copy";
import { IContactItem } from "@/app/contact/page";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { logEvent } from "@/lib/gtag";
import { slugify } from "@/helpers";

const ContactCopy = ({ item }: { item: IContactItem }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        setClicked(true);

        logEvent({
          action: "contact_copy",
          category: "contact",
          label: slugify(item.title),
          value: 1,
        });

        if (item.action === "copy") {
          navigator.clipboard.writeText(item.description);
        } else {
          window.open(item.action, "_blank");
        }

        setTimeout(() => {
          setClicked(false);
        }, 500);
      }}
    >
      <div
        className={`w-7 h-7 transition-all ease-in-out ${clicked ? "-translate-y-0 scale-150" : ""}`}
      >
        {clicked ? (
          <CheckIcon className={"w-6 h-6"} />
        ) : (
          <>
            {item.action === "copy" ? (
              <Copy className="w-7 h-7" />
            ) : (
              <ArrowUpRight className="w-6 h-6" />
            )}
          </>
        )}
      </div>
    </button>
  );
};

export default ContactCopy;
