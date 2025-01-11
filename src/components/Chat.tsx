"use client";
import WhatsappOutline from "@/components/icons/WhatsappOutline";
import Link from "next/link";
import { logEvent } from "@/lib/gtag";
import Image from "next/image";

export default function Chat() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href={"https://wa.me/+31648984280"}
        target={"_blank"}
        onClick={() => {
          logEvent({
            action: "contact_whatsapp",
            category: "contact",
            label: "whatsapp",
            value: 1,
          });
        }}
        className={
          "bg-primary-950 rounded-full duration-100 flex items-center justify-center relative"
        }
        aria-label="Chat met ons via Whatsapp"
      >
        <Image
          src={"/images/team/mark.png"}
          alt={"team"}
          width={200}
          height={200}
          className={
            "rounded-full object-cover object-center w-14 h-14 border-accent border-2"
          }
        />
        <WhatsappOutline
          className={
            "w-6 h-6 fill-green-500 absolute -right-0 -bottom-0 bg-black rounded-full"
          }
        />
      </Link>
    </div>
  );
}
