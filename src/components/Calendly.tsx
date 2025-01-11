"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Button from "@/components/ui/Button";

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function CalendlyButton(props: PropsWithChildren<{}>) {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    const head = document.querySelector("head");

    // Create and append CSS link
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute(
      "href",
      "https://assets.calendly.com/assets/external/widget.css",
    );
    head?.appendChild(link);

    // Create and append script
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js",
    );

    script.onload = () => {
      setIsCalendlyLoaded(true);
    };

    head?.appendChild(script);
  }, []);

  const handleClick = () => {
    if (isCalendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/mark-rocksolid/consult",
      });
    } else {
      window.open("https://calendly.com/mark-rocksolid/consult", "_blank");
    }
  };

  return <Button onClick={handleClick}>{props.children}</Button>;
}
