"use client";
import {
  forwardRef,
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { classNames } from "@/helpers";

const Scrollable = forwardRef(({ children }: PropsWithChildren<{}>, ref) => {
  const scrollRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(scrollRef);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (!scrollRef || !scrollRef.current) {
      return;
    }
    const handleScroll = () => {
      setScrollPosition(scrollRef.current.scrollLeft);
      setMaxScroll(
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth,
      );
    };

    handleScroll();

    scrollRef.current.addEventListener("scroll", handleScroll);
    return () =>
      scrollRef &&
      scrollRef.current &&
      scrollRef.current.removeEventListener("scroll", handleScroll);
  }, [scrollRef, scrollRef.current]);

  const resetScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      setScrollPosition(0);
    }
  };

  useImperativeHandle(ref, () => ({
    resetScroll,
  }));

  return (
    <div className={"relative select-none"}>
      <div
        className={classNames([
          `absolute pointer-events-none h-full left-0 w-[50px] bg-gradient-to-l from-transparent to-black/75 z-[10] duration-500 transition-all`,
          scrollPosition > 0 ? "visible opacity-100" : "invisible opacity-0",
        ])}
      />

      <div
        className={classNames([
          `absolute pointer-events-none h-full right-0 w-[50px] bg-gradient-to-r from-transparent to-black/75 z-[10] duration-500 transition-all`,
          scrollPosition < maxScroll
            ? "visible opacity-100"
            : "invisible opacity-0",
        ])}
      />

      <div
        {...events}
        ref={scrollRef}
        className="overflow-x-scroll overflow-y-hidden flex scrollbar-hide no-scrollbar"
      >
        {children}
      </div>
    </div>
  );
});

Scrollable.displayName = "Scrollable";
export default Scrollable;
