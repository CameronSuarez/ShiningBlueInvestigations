"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/trooper1.jpg",
  "/trooper3.jpg",
  "/trooper4.jpg",
  "/trooper5.jpg",
  "/trooper6.jpg",
  "/trooper7.jpg",
];

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="relative h-64 w-full overflow-hidden bg-zinc-900 md:hidden">
        {slides.map((src, index) => (
          <div
            key={`mobile-${src}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Trooper slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-contain"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative hidden w-1/2 overflow-hidden bg-zinc-900 md:block">
        {slides.map((src, index) => (
          <div
            key={`desktop-${src}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Trooper slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-contain"
              sizes="50vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </>
  );
}
