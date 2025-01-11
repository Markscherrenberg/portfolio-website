import Link from "next/link";
import Logo from "../ui/Logo";
import Github from "@/components/icons/Github";

import Linkedin from "@/components/icons/Linkedin";
import Cta from "@/components/Cta";

export default function Footer() {
  return (
    <>
      <Cta />

      <section className="bg-black border-t border-primary-925 pb-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-20 py-4 lg:py-9">
          <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-3">
            <div className={"flex justify-start lg:justify-normal"}>
              <Link href="/" aria-label="Link naar Home pagina">
                <Logo />
              </Link>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:mt-0 order-last lg:order-none">
              <nav className="flex items-center space-x-10 text-center justify-end lg:justify-center mt-0">
                <Link href="/contact" className="text-primary-50 ">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <div className={"flex justify-end"}>
                <div className="flex items-center space-x-2">
                  <Link
                    target={"_blank"}
                    href={"https://www.linkedin.com/in/mark-scherrenberg"}
                    aria-label="Linkedin"
                  >
                    <Linkedin className={"w-5 border-transparent border"} />
                  </Link>
                  <Link
                    target={"_blank"}
                    href={"https://github.com/Markscherrenberg"}
                    aria-label="Github"
                  >
                    <Github className={"w-6"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
