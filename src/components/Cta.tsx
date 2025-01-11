"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import WhatsappOutline from "@/components/icons/WhatsappOutline";
import ArrowRight from "@/components/icons/ArrowRight";
import { usePathname } from "next/navigation";

const imageUrls = [
  {
    name: "Mark",
    src: "/images/team/mark.png",
  },
];

export default function Cta() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const randomImage = imageUrls[randomIndex];

  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <section className="bg-grid py-24 lg:py-32 px-4 lg:px-20 lg:flex lg:flex-col lg:items-center justify-center z-0 relative overflow-hidden">
      <div className="bg-radial w-full h-full absolute top-0 left-0 z-[-1]" />
      <div className="bg-primary-950/80 blur-2xl w-[919px] h-[603px] rounded-[919px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]" />

      <div className="lg:flex lg:space-x-14 justify-center">
        <div className="lg:mb-0 mb-10 flex lg:justify-end items-center">
          <div>
            <div className={"relative"}>
              <Image
                loading="lazy"
                width={212}
                height={212}
                alt={"Team on CTA"}
                src={randomImage.src}
                className="rounded-full object-cover bg-accent-300 w-[125px] h-[125px] lg:w-[212px] lg:h-[212px] lg:mt-6 border-2 shadow-lg border-accent flex-shrink-0"
              />
            </div>
          </div>
        </div>
        <div>
          <header className="font-display text-primary-50 font-semibold text-4xl leading-[120%] lg:leading-[1] lg:mt-14">
            Benieuwd hoe ik je kan helpen?
          </header>
          <p className="text-lg lg:text-xl text-primary-300 max-w-2xl mt-3 mb-6 py-4 lg:py-0">
            Ontdek hoe ik jouw digitale visie tot leven kan brengen. Neem
            vandaag nog contact op voor een vrijblijvend adviesgesprek. Ik sta
            klaar om al je vragen te beantwoorden.
          </p>
          {/* <div
            className={"items-center space-x-4 lg:space-x-0 flex mb-10 lg:mb-0"}
          >
            <Image
              loading="lazy"
              width={212}
              height={212}
              alt={"Team on CTA"}
              src={randomImage.src}
              className="lg:hidden rounded-full object-cover bg-accent-300 w-20 h-20 lg:mt-6 border-2 shadow-lg border-accent"
            />            
          </div> */}

          <div className={"flex items-center space-x-4"}>
            <Button
              as={"link"}
              target="_blank"
              href={"https://wa.me/+31648984280"}
              startIcon={<WhatsappOutline className={"w-6 h-6"} />}
            >
              Whatsapp
            </Button>

            <Button
              as={"link"}
              href={"/contact"}
              variant="secondary"
              endIcon={<ArrowRight className={"w-4 h-4"} />}
            >
              Contact opnemen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
