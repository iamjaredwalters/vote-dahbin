"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Vote",
      className: "text-white dark:white z-20",
    },
    {
      text: "Dahbin",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-96  z-20">
      <TypewriterEffect words={words} />
      <p className="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold text-center text-white py-8">
        for
        <span className="text-red-500"> secretary</span>
      </p>
    </div>
  );
}
