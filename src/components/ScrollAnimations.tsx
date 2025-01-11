"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function ScrollIn(
  props: PropsWithChildren<{
    direction?: "left" | "right";
  }>,
) {
  const { direction = "left" } = props;
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 100%"],
    layoutEffect: true,
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [direction === "left" ? 200 : -200, 0],
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false;

  if (isMobile) {
    return (
      <motion.div
        //@ts-ignore
        ref={containerRef}
        initial={{ opacity: 0, translateX: direction === "left" ? 200 : -200 }}
        viewport={{ margin: "-50px", once: true }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {props.children}
      </motion.div>
    );
  }

  return (
    <motion.div
      //@ts-ignore
      ref={containerRef}
      style={{
        opacity: opacity,
        translateX: translateX,
        willChange: "transform, opacity",
        overflowX: "hidden",
      }}
    >
      {props.children}
    </motion.div>
  );
}
export function ScrollUp(
  props: PropsWithChildren<{
    direction?: "up" | "down";
  }>,
) {
  const { direction = "up" } = props;
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 100%"],
    layoutEffect: true,
  });

  const isMobile =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)").matches
      : false;

  const defaultValue = new MotionValue();
  defaultValue.set(1);

  const translateY = useTransform(
    isMobile ? defaultValue : scrollYProgress,
    [0, 1],
    [direction === "up" ? 200 : -200, 0],
  );
  const opacity = useTransform(
    isMobile ? defaultValue : scrollYProgress,
    [0, 1],
    [0, 1],
  );

  // const path = usePathname();
  //
  // useEffect(() => {
  //   setInterval(() => {
  //     const isScrollable =
  //       document.documentElement.scrollHeight > window.innerHeight;
  //     if (!isScrollable) {
  //       scrollYProgress.set(1);
  //     } else {
  //       scrollYProgress.set(0);
  //     }
  //   }, 50);
  // }, [path, scrollYProgress]);

  return (
    <motion.div
      //@ts-ignore
      ref={containerRef}
      style={{
        opacity: opacity,
        translateY: translateY,
        willChange: "transform, opacity",
        overflowX: "hidden",
      }}
    >
      {props.children}
    </motion.div>
  );
}

export function ScrollFadeIn(
  props: PropsWithChildren<{
    delay?: number;
    className?: string;
  }>,
) {
  const { delay = 0, className } = props;
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", `end 100%`],
    layoutEffect: true,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [100 + delay * 100, 0],
  );

  return (
    <motion.div
      className={className}
      //@ts-ignore
      ref={containerRef}
      style={{
        opacity: opacity,
        translateY: translateY,
        willChange: "transform, opacity",
      }}
    >
      {props.children}
    </motion.div>
  );
}
