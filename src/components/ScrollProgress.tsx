"use client";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const path = usePathname();

  useEffect(() => {
    const isScrollable =
      document.documentElement.scrollHeight > window.innerHeight;
    if (!isScrollable) {
      scrollYProgress.set(1);
    } else {
      scrollYProgress.set(0);
    }
  }, [path, scrollYProgress]);

  return (
    <motion.div
      key={path}
      className="fixed bottom-0 left-0 w-full h-2 bg-accent-300 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    ></motion.div>
  );
}
