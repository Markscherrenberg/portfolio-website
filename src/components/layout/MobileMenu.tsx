"use client";
import Link from "next/link";
import { ILink } from "./Header";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  links: ILink[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrolled: boolean;
}

export default function MobileMenu({
  links,
  isOpen,
  setIsOpen,
  scrolled,
}: MobileMenuProps) {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(links[0].href);

  //Add overflow hidden to document body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.section
          key={"mobile-menu"}
          initial={{ opacity: 0, translateY: 0 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 0 }}
          transition={{ duration: 0.15 }}
          className={`bg-black fixed left-0 w-full origin-top-right bottom-0 z-50 pt-6 flex flex-col justify-between ${!scrolled ? "top-16" : "top-[40px]"}`}
        >
          <div className="space-y-2">
            {links.map((link) => (
              <div key={link.href}>
                {link.children?.length ? (
                  <>
                    <button
                      className="px-4 py-3 text-primary-50 flex justify-between items-center w-full border-b border-primary-900"
                      onClick={() =>
                        setOpenSubMenu(
                          openSubMenu === link.href ? null : link.href,
                        )
                      }
                    >
                      <span>{link.title}</span>
                      <ChevronUpIcon
                        className={`h-5 text-primary-50 ${openSubMenu === link.href ? "" : "transform rotate-180"}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openSubMenu === link.href && (
                        <motion.div
                          key={link.href}
                          className="space-y-2 overflow-hidden"
                          initial={{ opacity: 1, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 1, height: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-3 text-primary-50 block border-b border-primary-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 w-full">
            <Button
              as="link"
              href="/contact"
              block
              className="text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Button>
          </div>
        </motion.section>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
}
