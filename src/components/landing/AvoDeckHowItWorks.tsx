"use client";

import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

interface HowItWorksStep {
  icon: IconType;
  title: string;
  description: string;
}

interface AvoDeckHowItWorksProps {
  steps: HowItWorksStep[];
  autoRotateInterval?: number;
}

// Smooth rounded card path (viewBox 0 0 200 280)
const cardPath = `
  M 44 0
  L 156 0
  Q 200 0 200 44
  L 200 236
  Q 200 280 156 280
  L 44 280
  Q 0 280 0 236
  L 0 44
  Q 0 0 44 0
  Z
`;

export default function AvoDeckHowItWorks({
  steps,
  autoRotateInterval = 4000,
}: AvoDeckHowItWorksProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"prev" | "next">("next");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [steps.length, autoRotateInterval]);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
  };

  const activeStep = steps[activeIndex];
  const n = steps.length;
  const prevIndex = (activeIndex - 1 + n) % n;
  const nextIndex = (activeIndex + 1) % n;

  const slideVariants = {
    enter: (d: "prev" | "next") => ({ x: d === "next" ? 120 : -120, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: "prev" | "next") => ({ x: d === "next" ? -120 : 120, opacity: 0, scale: 0.92 }),
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Progress bars with smooth width transition */}
      <div className="flex justify-center mb-8 sm:mb-12 gap-2 sm:gap-3">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            layout
            className={`h-1.5 rounded-full ${
              index === activeIndex ? "bg-emerald-400" : "bg-zinc-700"
            }`}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            animate={{ width: index === activeIndex ? "6rem" : "3rem" }}
          />
        ))}
      </div>

      {/* Carousel: left (prev), center (active), right (next) — center slides in/out */}
      <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-8 px-2 sm:px-4 py-4 sm:py-8 overflow-x-hidden">
        {/* Left card — moves to center when clicked */}
        <motion.div
          className="group relative hidden sm:flex w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 flex-shrink-0 cursor-pointer items-center justify-center"
          onClick={() => goTo(prevIndex)}
          whileHover={{ scale: 1.03, opacity: 1 }}
          whileTap={{ scale: 0.98 }}
          initial={false}
          animate={{ opacity: 0.9, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <svg viewBox="0 0 200 280" className="w-full h-full absolute inset-0 drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="leftCardFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(52, 211, 153, 0.12)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.06)" />
              </linearGradient>
              <filter id="leftCardShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgb(0,0,0)" floodOpacity="0.3" />
              </filter>
            </defs>
            <path d={cardPath} fill="url(#leftCardFill)" stroke="rgba(113, 113, 111, 0.5)" strokeWidth="1.5" filter="url(#leftCardShadow)" />
          </svg>
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-zinc-800/80 ring-1 ring-zinc-600/50 shadow-inner">
              {(() => {
                const Icon = steps[prevIndex].icon;
                return <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400/80" />;
              })()}
            </div>
            <span className="max-w-[4rem] truncate text-center text-[10px] sm:text-xs font-medium text-zinc-500">
              {steps[prevIndex].title}
            </span>
          </div>
        </motion.div>

        {/* Center card — slides in from left or right when step changes */}
        <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-80 lg:w-72 lg:h-[22rem] flex-shrink-0 z-10 overflow-visible">
          <AnimatePresence initial={false} mode="sync" custom={direction}>
            <motion.div
              key={activeIndex}
              className="absolute inset-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <svg viewBox="0 0 200 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="centerCardFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(52, 211, 153, 0.28)" />
                    <stop offset="50%" stopColor="rgba(16, 185, 129, 0.18)" />
                    <stop offset="100%" stopColor="rgba(5, 150, 105, 0.22)" />
                  </linearGradient>
                  <linearGradient id="centerCardStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <filter id="centerCardShadow" x="-20%" y="-10%" width="140%" height="120%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgb(16, 185, 129)" floodOpacity="0.25" />
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgb(0,0,0)" floodOpacity="0.4" />
                  </filter>
                </defs>
                <path
                  d={cardPath}
                  fill="url(#centerCardFill)"
                  stroke="url(#centerCardStroke)"
                  strokeWidth="2.5"
                  filter="url(#centerCardShadow)"
                />
              </svg>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16">
                <div className="absolute inset-0 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 ring-4 ring-emerald-400/30" />
                <span className="relative text-white font-bold text-xl sm:text-2xl md:text-3xl drop-shadow-sm">
                  {activeIndex + 1}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 pt-16 sm:pt-18 md:pt-20">
                <motion.div
                  className="relative w-[75%] sm:w-[70%] min-h-[35%] rounded-2xl border border-white/20 bg-gradient-to-b from-white/95 to-zinc-100/95 p-4 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-5"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06, duration: 0.25 }}
                  style={{ boxShadow: "0 4px 24px -4px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset" }}
                >
                  <div className="flex h-full min-h-[2.5rem] flex-col items-center justify-center gap-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 sm:h-9 sm:w-9">
                      {(() => {
                        const Icon = activeStep.icon;
                        return <Icon className="h-4 w-4 text-emerald-600 sm:h-5 sm:w-5" />;
                      })()}
                    </div>
                    <h3 className="text-zinc-900 font-semibold text-xs leading-tight text-center sm:text-sm md:text-base lg:text-lg">
                      {activeStep.title}
                    </h3>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right card — moves to center when clicked */}
        <motion.div
          className="group relative hidden sm:flex w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 flex-shrink-0 cursor-pointer items-center justify-center"
          onClick={() => goTo(nextIndex)}
          whileHover={{ scale: 1.03, opacity: 1 }}
          whileTap={{ scale: 0.98 }}
          initial={false}
          animate={{ opacity: 0.9, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <svg viewBox="0 0 200 280" className="w-full h-full absolute inset-0 drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rightCardFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(52, 211, 153, 0.12)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.06)" />
              </linearGradient>
              <filter id="rightCardShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgb(0,0,0)" floodOpacity="0.3" />
              </filter>
            </defs>
            <path d={cardPath} fill="url(#rightCardFill)" stroke="rgba(113, 113, 111, 0.5)" strokeWidth="1.5" filter="url(#rightCardShadow)" />
          </svg>
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-zinc-800/80 ring-1 ring-zinc-600/50 shadow-inner">
              {(() => {
                const Icon = steps[nextIndex].icon;
                return <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400/80" />;
              })()}
            </div>
            <span className="max-w-[4rem] truncate text-center text-[10px] sm:text-xs font-medium text-zinc-500">
              {steps[nextIndex].title}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Description with smooth crossfade */}
      <div className="mt-6 sm:mt-8 text-center min-h-[4rem] flex items-center justify-center px-4 sm:px-6">
        <AnimatePresence mode="sync">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
          >
            {activeStep.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {steps.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
              index === activeIndex ? "bg-emerald-400" : "bg-zinc-600 hover:bg-zinc-500"
            }`}
            animate={{ width: index === activeIndex ? 12 : 10, height: index === activeIndex ? 12 : 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
