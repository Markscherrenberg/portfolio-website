"use client";
import Image from "next/image";
import { team } from "@/services/data";

export default function TeamBubbles({
  className,
  marginRight,
}: {
  className?: string;
  marginRight?: number;
}) {
  return (
    <>
      <div
        className="flex items-center"
        style={{
          marginRight: marginRight ?? -30,
        }}
      >
        {team
          .filter((m, idx) => idx < 3)
          .reverse()
          .map((member, idx) => (
            <Image
              key={member.image}
              loading="lazy"
              width={212}
              height={212}
              alt={member.name}
              src={member.image}
              className={`rounded-full object-cover bg-accent-300 shadow-sm border border-accent-400 ${className ? className : "h-10 w-10"}`}
              style={{
                transform: `translateX(-${idx * 10}px)`,
                zIndex: team.length - idx,
              }}
            />
          ))}
      </div>
    </>
  );
}
