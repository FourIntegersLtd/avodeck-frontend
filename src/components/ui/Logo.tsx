"use client";

import { baloo2 } from "@/lib/fonts";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`flex items-center ${className} space-x-2 px-2 cursor-pointer transition-opacity`}
      id="logo"
    >
      <span
        className={`text-2xl font-bold ${
          variant === "light" ? "text-blue-600" : "text-white"
        }`}
      >
        OSCE
      </span>
      <div className="flex items-center">
        <div className="bg-blue-600 text-white">
          <span className={`px-2 text-2xl font-bold ${baloo2.className}`}>
            Guide
          </span>
        </div>
        <div className="h-8 w-8 bg-blue-600 clip-arrow-right"></div>
      </div>
    </div>
  );
}
