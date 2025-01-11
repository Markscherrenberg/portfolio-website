"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const WebmVideo: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <video
        loop={true}
        autoPlay={true}
        muted={true}
        width="100%"
        height="auto"
        className="rounded-lg"
      >
        <source src="/images/cases/visus/booking/web.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default function AnimatedImage() {
  const [images] = useState([
    "/images/cases/visus/booking/1.png",
    "/images/cases/visus/booking/2.png",
    "/images/cases/visus/booking/3.png",
    "/images/cases/visus/booking/4.png",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [nextIndex, images.length]);

  return <WebmVideo />;
}
