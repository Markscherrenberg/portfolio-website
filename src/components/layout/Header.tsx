"use client";
import Link from "next/link";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { classNames } from "@/helpers";
import {
  Bars3Icon,
  ChevronDownIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Globe from "@/components/icons/Globe";
import WindowAlt from "@/components/icons/WindowAlt";
import Layers from "@/components/icons/Layers";
import MobileMenu from "./MobileMenu";
import ArrowRight from "@/components/icons/ArrowRight";

export interface ILink {
  title: string | React.ReactNode;
  href: string;
  children?: ILink[];
}

const links: ILink[] = [
  {
    title: "Diensten",
    href: "/#services",
  },
  {
    title: "Skills",
    href: "/#tech",
  },
  {
    title: "Projecten",
    href: "/#projects",
  },
  {
    title: "Ervaring",
    href: "/#experience",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  // {
  //   title: "Over ons",
  //   href: "/about",
  // },
];

function NavLink(props: { link: ILink; scrolled: boolean }) {
  const { link, scrolled } = props;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 250);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={"relative hidden lg:block"}
    >
      <Link
        draggable={false}
        key={link.href}
        href={link.href}
        className={classNames([
          "font-medium group hover:text-accent-200 flex items-center space-x-2",
          pathname.startsWith(link.href) || open
            ? "text-accent-200"
            : "text-accent-50",
        ])}
      >
        <span>{link.title}</span>{" "}
        {link.children ? (
          <ChevronDownIcon className="h-4 w-4"></ChevronDownIcon>
        ) : (
          <></>
        )}
      </Link>

      {link.children && (
        <div
          className={classNames([
            "absolute transition-all",
            scrolled ? "pt-[25px]" : "pt-[15px]",
            open
              ? "visible opacity-100 scale-100 origin-bottom translate-y-0"
              : "invisible opacity-0 pointer-events-none scale-75 -translate-y-10",
          ])}
        >
          <ul
            className={classNames([
              "bg-black p-1 rounded-lg shadow-lg border border-primary-900 w-[300px] space-y-1 py-1",
            ])}
          >
            {link.children.map((child) => (
              <li key={child.href}>
                <Link href={child.href} className={"group"}>
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  //scroll to anchor
  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 250);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      console.log(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={"h-[65px]"}></div>
      <header
        className={`bg-black fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled ? "border-primary-925 shadow-lg" : "border-black shadow-none"
        }`}
      >
        <div
          className={`${!scrolled ? "py-4 px-4" : "py-2 px-2"} transition-padding duration-500 lg:px-20 flex items-center justify-between max-w-7xl mx-auto`}
        >
          <div className="flex items-center space-x-10">
            <Link
              draggable={false}
              href="/"
              onClick={() => setIsOpen(false)}
              aria-label="Link naar de homepagina"
            >
              <Logo className={`${!scrolled ? "w-5" : "w-3"} transition-all`} />
            </Link>

            <nav className="flex items-center space-x-10">
              {links.map((link) => (
                <NavLink scrolled={scrolled} link={link} key={link.href} />
              ))}
            </nav>
          </div>
          <Button
            as="link"
            variant="primary"
            href="/contact"
            className={`${!scrolled ? "" : "py-1"} transition-all hidden lg:flex`}
            endIcon={<ArrowRight className={"w-4 h-4"} />}
          >
            Contact
          </Button>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Mobiele menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 text-primary-50" />
            ) : (
              <Bars3Icon className="h-8 text-primary-50" />
            )}
          </button>
        </div>
      </header>
      <MobileMenu
        scrolled={scrolled}
        links={links}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
