import {
  ArrowUpRightIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { classNames, proseClasses } from "@/helpers";
import { ScrollFadeIn } from "@/components/ScrollAnimations";
import Image from "next/image";
import { Media } from "@/services/payload-types";
import { getMediaPath } from "@/services/payload";

interface CaseCardProps {
  variant?: "default" | "index";
  previewImage: string;
  name: string;
  description: string;
  slug: string;
  width?: string;
  className?: string;
  tech?: string;
  type?: string;
}

export default function CaseCard({
  previewImage,
  name,
  description,
  slug,
  width,
  className,
  variant,
  tech,
  type,
}: CaseCardProps) {
  // if (variant === "index") {
  //   return (
  //     <div
  //       draggable={false}
  //       className={`group w-full ${className} select-none flex-shrink-0 ${!width ? "max-w-[250px] lg:max-w-[350px]" : width}`}
  //     >
  //       <Image
  //         loading="lazy"
  //         src={previewImage}
  //         alt={`Preview image of ${name}`}
  //         className="mt-2 pointer-events-none rounded-lg w-full lg:h-[250px] object-cover object-center"
  //         width={366}
  //         height={208}
  //       />
  //       <div className="flex justify-between items-center mt-6">
  //         <h3 className="text-primary-50  text-xl font-display font-medium">
  //           {name}
  //         </h3>
  //         {/*<ArrowUpRightIcon className="text-primary-50 w-6 h-6 group-hover:text-accent-300" />*/}
  //       </div>
  //       <p className="mt-4 text-primary-300 text-base lg:text-lg line-clamp-2">
  //         {description}
  //       </p>
  //     </div>
  //   );
  // }

  const toIconType = (type: any) => {
    switch (type) {
      case "Web applicatie":
        return <CodeBracketIcon className="text-accent-300 w-5 h-5" />;
      case "Mobiele app":
        return <DevicePhoneMobileIcon className="text-accent-300 w-5 h-5" />;
      case "Website":
        return <GlobeAltIcon className="text-accent-300 w-5 h-5" />;
      case "Blockchain":
        return <Square2StackIcon className="text-accent-300 w-5 h-5" />;
      default:
        return "";
    }
  };

  return (
    <div
      draggable={false}
      className={`group relative w-full ${className} select-none flex-shrink-0 ${!width ? "max-w-[350px] lg:max-w-[400px]" : width}`}
    >
      <div className="relative">
        <div className="absolute  text-sm rounded right-1 bottom-1 px-4 font-medium pt-2 pb-2 bg-black/80 text-white flex items-center space-x-2">
          {toIconType(type)} <span>{type}</span>
        </div>
        <Image
          loading="lazy"
          src={previewImage}
          alt={`Preview image of ${name}`}
          className="mt-2 pointer-events-none rounded-lg w-full h-[225px] lg:h-[300px] object-cover object-center"
          width={366}
          height={208}
        />
      </div>
      <div className="flex justify-between items-center mt-6">
        <h3 className="text-primary-50 lg:text-xl font-display font-medium">
          {name}
        </h3>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex space-x-2">
          {tech?.split(", ").map((t) => (
            <div
              key={t}
              className="text-sm font-medium rounded bg-primary text-white px-2 py-0.5"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <div className={proseClasses("prose-p:text-base prose-p:leading-6")}>
        <p className="mt-2 text-primary-300 !text-base">{description}</p>
      </div>
    </div>
  );
}
