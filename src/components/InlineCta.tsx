import Button from "@/components/ui/Button";
import { ScrollUp } from "@/components/ScrollAnimations";
import Image from "next/image";
import Calendly from "@/components/Calendly";
import WhatsappOutline from "@/components/icons/WhatsappOutline";
import Whatsapp from "@/components/icons/Whatsapp";

const imageUrls = [
  {
    name: "Mark",
    src: "/images/team/mark.png",
  },
  {
    name: "Daan",
    src: "/images/team/daan.png",
  },
  {
    name: "Marleen",
    src: "/images/team/marleen.png",
  },
];

export default function InlineCta({
  title,
  description,
  action,
}: {
  title?: string;
  description?: string;
  action?: string;
}) {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const randomImage = imageUrls[randomIndex];

  return (
    <ScrollUp>
      <section className="bg-grid pt-8 px-4 lg:px-20 lg:flex lg:flex-col lg:items-center justify-center z-0 relative overflow-hidden">
        <div className="bg-radial w-full h-full absolute top-0 left-0 z-[-1]" />
        <div className="bg-primary-950/80 blur-2xl w-[919px] h-[603px] rounded-[919px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]" />

        <div className="lg:flex lg:space-x-14 justify-center">
          <div className="hidden lg:flex lg:justify-end items-center">
            <div>
              <div className={"relative"}>
                <div
                  className={
                    "bg-green-500 border border-green-600 rounded-full absolute right-5 top-5 h-6 w-6 hidden lg:block"
                  }
                ></div>
                <Image
                  loading="lazy"
                  width={212}
                  height={212}
                  alt={"Team on CTA"}
                  src={randomImage.src}
                  className="rounded-full object-cover bg-accent-300 w-[100px] h-[100px] lg:w-[212px] lg:h-[212px] lg:mt-6 border-2 shadow-lg border-accent"
                />
              </div>
            </div>
          </div>
          <div>
            <header className="font-display text-primary-50 font-semibold text-4xl leading-[120%] lg:leading-[1] lg:mt-14">
              {title ?? "Klaar voor optimale prestaties?"}
            </header>
            <p className="text-lg lg:text-xl text-primary-300 max-w-2xl mt-3 mb-6 py-4 lg:py-0">
              {description ??
                "Ervaar hoe jouw bedrijf zijn marktpositie kan versterken door slimme digitalisering."}
            </p>
            <div
              className={
                "items-center space-x-4 lg:space-x-0 flex mb-10 lg:mb-0"
              }
            >
              <Image
                loading="lazy"
                width={212}
                height={212}
                alt={"Team on CTA"}
                src={randomImage.src}
                className="lg:hidden rounded-full object-cover bg-accent-300 w-20 h-20 lg:mt-6 border-2 shadow-lg border-accent"
              />

              <p className="text-lg lg:text-xl text-primary-300 max-w-3xl mx-auto mt-3 mb-6 py-0 lg:py-0">
                {randomImage.name} staat klaar om al je vragen te beantwoorden.
              </p>
            </div>

            <div className={"flex items-center space-x-4"}>
              <Button
                as={"link"}
                target="_blank"
                href={"https://wa.me/+31648984280"}
                startIcon={<WhatsappOutline className={"w-6 h-6"} />}
              >
                Whatsapp
              </Button>

              <Button as={"link"} href={"/contact"} variant="secondary">
                Contact opnemen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ScrollUp>
  );
}
