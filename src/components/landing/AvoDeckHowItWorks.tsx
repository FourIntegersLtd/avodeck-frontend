"use client";

import { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface HowItWorksStep {
  icon: IconType;
  title: string;
  description: string;
}

interface AvoDeckHowItWorksProps {
  steps: HowItWorksStep[];
  autoRotateInterval?: number;
}

export default function AvoDeckHowItWorks({
  steps,
  autoRotateInterval = 4000,
}: AvoDeckHowItWorksProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [steps.length, autoRotateInterval]);

  const activeStep = steps[activeIndex];

  // Avocado path with wavy/bumpy outline - realistic avocado shape
  const avocadoPath = `
    M 100 15
    C 95 15, 90 16, 85 18
    C 80 20, 75 23, 71 27
    C 67 31, 64 35, 61 40
    C 58 45, 56 50, 54 55
    C 52 60, 51 65, 50 70
    C 49 75, 48 80, 48 85
    C 48 90, 48 95, 49 100
    C 50 105, 51 110, 53 115
    C 55 120, 57 125, 60 130
    C 63 135, 66 140, 70 145
    C 74 150, 78 155, 83 160
    C 88 165, 93 169, 98 172
    C 103 175, 108 177, 113 178
    C 118 179, 123 179, 128 178
    C 133 177, 138 175, 143 172
    C 148 169, 152 165, 156 160
    C 160 155, 164 150, 167 145
    C 170 140, 173 135, 175 130
    C 177 125, 179 120, 181 115
    C 183 110, 184 105, 185 100
    C 186 95, 186 90, 186 85
    C 186 80, 185 75, 184 70
    C 183 65, 181 60, 179 55
    C 177 50, 174 45, 171 40
    C 168 35, 164 31, 160 27
    C 156 23, 151 20, 146 18
    C 141 16, 136 15, 131 15
    C 126 15, 121 15, 116 15
    C 111 15, 106 15, 100 15
    Z
  `;

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Progress Indicators */}
      <div className="flex justify-center mb-8 sm:mb-12 gap-2 sm:gap-3">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activeIndex
                ? "w-12 sm:w-24 bg-emerald-400"
                : "w-12 sm:w-24 bg-zinc-700"
            }`}
          />
        ))}
      </div>

      {/* Three Avocados in a Row */}
      <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-12 px-2 sm:px-4 py-4 sm:py-8 overflow-x-hidden">
        {/* Left Avocado (Inactive) - Hidden on mobile, shown on sm+ */}
        <div className="relative hidden sm:block w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 flex-shrink-0">
          <svg
            viewBox="0 0 236 193"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={avocadoPath}
              fill="#c0ddd0"
              stroke="#71716f"
              strokeWidth="5"
              transform="scale(1.15)"
            />
          </svg>
          {/* Concentric circles inside */}
          <div className="absolute inset-0 flex items-center justify-center pt-8">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[6px] border-gray-500/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[6px] border-gray-500/50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-500/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Center Avocado (Active) */}
        <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-80 lg:w-72 lg:h-[22rem] flex-shrink-0 z-10">
          <svg
            viewBox="0 0 236 193"
            className="w-full h-full drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={avocadoPath}
              fill="#c0ddd0"
              stroke="#000000"
              strokeWidth="6"
              transform="scale(1.15)"
            />
          </svg>

          {/* Step Number Badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center z-30">
            <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
              {activeIndex + 1}
            </span>
          </div>

          {/* Content inside center avocado - white speech bubble */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 pt-16 sm:pt-18 md:pt-20">
            <div className="bg-white rounded-[45%] w-[60%] sm:w-[55%] h-[40%] sm:h-[35%] flex items-center justify-center shadow-lg">
              <div className="text-center px-2 sm:px-3 py-1">
                <h3 className="text-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                  {activeStep.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Avocado (Inactive) - Hidden on mobile, shown on sm+ */}
        <div className="relative hidden sm:block w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 flex-shrink-0">
          <svg
            viewBox="0 0 236 193"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={avocadoPath}
              fill="#c0ddd0"
              stroke="#71716f"
              strokeWidth="5"
              transform="scale(1.15)"
            />
          </svg>
          {/* Concentric circles inside */}
          <div className="absolute inset-0 flex items-center justify-center pt-8">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[6px] border-gray-500/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[6px] border-gray-500/50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-500/50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description below the avocados */}
      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4 sm:px-6">
          {activeStep.description}
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-3 h-3 bg-emerald-400"
                : "w-2.5 h-2.5 bg-zinc-600 hover:bg-zinc-500"
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
