"use client";
import { useState } from "react";
import Image from "next/image";

interface ReviewCardProps {
  text: string;
  name: string;
  role: string;
  person: string;
  image: string;
}

export default function ReviewCard({
  text,
  name,
  person,
  role,
  image,
}: ReviewCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between w-full max-w-96 flex-shrink-0">
      {/*<h3 className="text-primary-50 font-display font-semibold leading-[140%] mb-4 text-2xl">*/}
      {/*  {name}*/}
      {/*</h3>*/}
      {open ? (
        <p className="text-primary-300 flex-grow flex-1 text-[16px]  ">
          {text}
        </p>
      ) : (
        <p className={"flex-1 flex-grow"}>
          <span className="text-primary-300 text-[16px] text-ellipsis line-clamp-3">
            {text}
          </span>
          <button
            type="button"
            className="text-accent-300 text-sm"
            onClick={() => setOpen(true)}
          >
            Lees verder
          </button>
        </p>
      )}
      <div className="flex mt-12">
        <div className="w-[51px] h-[51px] rounded-full bg-accent-300 flex justify-center items-center">
          <Image
            loading="lazy"
            width={50}
            height={50}
            src={image}
            alt={name}
            className="rounded-full object-cover object-center w-[46px] h-[46px]"
          />
        </div>
        <div className="ml-4">
          <p className="text-primary-50 font-medium leading-6">{person}</p>
          <p className="text-primary-400 leading-6">{role}</p>
        </div>
      </div>
    </div>
  );
}
