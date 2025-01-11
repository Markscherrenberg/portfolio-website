import React, {
  KeyboardEvent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { classNames } from "@/helpers";
import { Portal } from "@/components/Portal";

const sizes = {
  sm: "max-w-sm",
  lg: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export default function CustomDialog({
  open,
  children,
  setOpen,
  size,
  title,
  onClose,
}: PropsWithChildren<{
  open: boolean;
  setOpen: (open: boolean) => void;
  size?: keyof typeof sizes;
  title?: string;
  onClose?: () => void;
}>) {
  const [mouseDown, setMouseDown] = useState(false);

  async function handleKeyDown(e: KeyboardEvent) {
    // if ((e.target as Element).tagName === "INPUT") {
    // return;
    // }

    if (e.key === "Escape") {
      setOpen(false);
      setMouseDown(false);
      if (onClose) onClose();
    }
  }

  useEffect(() => {
    //@ts-ignore
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      //@ts-ignore
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  let maxSize = typeof size !== "undefined" ? sizes[size] : sizes.xl;

  const animateArr = {
    scaleY: 0.75,
    scaleX: 0.25,
    opacity: 0,
    translateY: -200,
  };

  return (
    <Portal>
      <AnimatePresence>
        {open ? (
          <motion.div
            key={`${title}-wrapper`}
            tabIndex={-1}
            aria-hidden="true"
            className={classNames([
              "bg-black/75 overflow-y-auto backdrop-blur overflow-x-hidden fixed bottom-0 top-0 left-0 right-0 z-[999] justify-center items-center",
              "transition-all",
            ])}
            onMouseDown={() => setMouseDown(true)}
            onClick={() => {
              if (mouseDown) {
                setOpen(false);
                setMouseDown(false);

                if (onClose) onClose();
              }
            }}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className={`relative px-4 w-full mx-auto mb-16 mt-10 ${maxSize}`}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <motion.div
                key={title}
                className="relative bg-primary-950 border border-primary-900 rounded-lg shadow origin-top"
                initial={animateArr}
                animate={{ scaleY: 1, scaleX: 1, opacity: 1, translateY: 0 }}
                exit={animateArr}
                transition={{ duration: 0.15 }}
              >
                <div className="flex items-center justify-between p-4 lg:p-5 rounded-t">
                  {title && (
                    <h3 className="text-lg font-semibold text-primary-50">
                      {title}
                    </h3>
                  )}

                  <button
                    type="button"
                    className="text-gray-400 transition-all bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    onClick={() => {
                      if (onClose) onClose();
                      setOpen(false);
                      setMouseDown(false);
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 lg:p-5 space-y-4">{children}</div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </Portal>
  );
}
