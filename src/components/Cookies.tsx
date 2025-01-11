"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Cookies(props: {
  onAccept: () => void;
  onReject: () => void;
}) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieChoice = localStorage.getItem("cookieChoice");
    if (!cookieChoice) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieChoice", "accepted");
    setShowBanner(false);
    props.onAccept();
  };

  const handleReject = () => {
    localStorage.setItem("cookieChoice", "rejected");
    setShowBanner(false);
    props.onReject();
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed  bottom-0 left-0 right-0 bg-primary-925 border-t border-gray-900 p-4 md:p-6 z-[999]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">Cookies</h2>
          <p className="text-sm text-muted-foreground">
            We gebruiken cookies om uw ervaring op onze site te verbeteren. Door
            deze site te blijven gebruiken, gaat u akkoord met ons gebruik van
            cookies.
          </p>
        </div>
        <div className="flex gap-4">
          <Button onClick={handleReject} variant="text">
            Weiger
          </Button>
          <Button onClick={handleAccept}>Accepteer</Button>
        </div>
        <button
          type="button"
          className="absolute top-2 right-2 md:top-4 md:right-4"
          onClick={handleReject}
          aria-label="Close"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
