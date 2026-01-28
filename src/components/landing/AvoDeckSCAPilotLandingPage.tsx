"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaHandPointer,
  FaVideo,
} from "react-icons/fa";
import { FaBolt, FaCalendarCheck } from "react-icons/fa6";
import AvoDeckHowItWorks from "./AvoDeckHowItWorks";
import Logo from "../ui/Logo";

const CHANGING_PHRASES = [
  { prefix: "the ", word: "right" },
  { prefix: "a ", word: "committed" },
  { prefix: "an ", word: "instant" },
  { prefix: "a ", word: "like-minded" },
  { prefix: "an ", word: "exam-ready" },
  { prefix: "a ", word: "supportive" },
  { prefix: "a ", word: "consistent" },
  { prefix: "a ", word: "vetted" },
];

const HOW_IT_WORKS_STEPS = [
  {
    icon: FaEnvelope,
    title: "Verify with your NHS email",
    description: "Quick sign-up. GP trainees only. You're in.",
  },
  {
    icon: FaHandPointer,
    title: "Choose: Instant Match or Marketplace",
    description: "Get paired instantly or post availability and schedule a session.",
  },
  {
    icon: FaVideo,
    title: "Practise together on a video call",
    description:
      "Bring your own materials. Join a live video call, share your screen, and practise together.",
  },
];

const LIVE_SESSION_OPTIONS = [
  {
    icon: FaBolt,
    title: "Instant Match",
    description:
      "Check if anyone's available right now. Get matched instantly and jump into a practice session.",
  },
  {
    icon: FaCalendarCheck,
    title: "Marketplace",
    description:
      "Post your availability or claim a slot. Schedule a 30-minute practice session with another GP trainee.",
  },
];

const BETTER_THAN_WHATSAPP = [
  "Less back-and-forth. Post a slot, claim one, or get an instant match.",
  "Live video calls. Structured timing—clear start and end.",
  "People actually show up. Slots are committed, not lost in the chat.",
];

const PILOT_NOTE =
  "Your feedback shapes what we build next.";

const WAITLIST_FORM_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScH-iS5qrxnmeHUTqsXS5NL0QRDdTb6xETTnpiLVEecyjmkCA/viewform?usp=send_form&pli=1&authuser=0";

export default function AvoDeckSCAPilotLandingPage() {
  const router = useRouter();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setWordIndex((i) => (i + 1) % CHANGING_PHRASES.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center"
            aria-label="AvoDeck home"
          >
            <Image
              src="/images/avodeck.png"
              alt="AvoDeck"
              width={200}
              height={52}
              className="h-5 max-w-[90px] w-auto shrink-0 object-contain object-left sm:h-7 sm:max-w-[120px] md:h-9 md:max-w-[155px] lg:h-10 lg:max-w-[170px]"
            />
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <Link
              href="#how-it-works"
              className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:text-white sm:px-3 sm:py-2 sm:text-sm"
            >
              How it works
            </Link>
            <button
              type="button"
              onClick={() => router.push("/auth/login")}
              className="rounded-full border border-zinc-600 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
            >
              Log in
            </button>
          </nav>
        </div>
      </header>

      {/* Hero — viewport height minus header, content centred (from original) */}
      <section className="relative grid min-h-[calc(100vh-4.5rem)] min-h-[calc(100dvh-4.5rem)] w-full place-items-center bg-zinc-950">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:gap-12 lg:py-16">
          <div className="flex-1 space-y-8 text-left lg:max-w-[55%] lg:flex-[0_0_55%]">
            <h1 className="text-2xl font-bold leading-tight text-white xs:text-2xl sm:text-xl lg:text-4xl xl:text-5xl">
              <span className="block">You&apos;re one click away from</span>
              <span className="mt-1 flex flex-wrap items-baseline justify-start gap-x-1.5 gap-y-1">
                <span>finding</span>
                <span className="relative inline-flex w-fit max-w-full justify-center overflow-hidden rounded-lg bg-emerald-400 px-2 py-1 xs:px-3 xs:py-1.5 align-baseline whitespace-nowrap">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={
                        CHANGING_PHRASES[wordIndex].prefix +
                        CHANGING_PHRASES[wordIndex].word
                      }
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="inline-block whitespace-nowrap text-zinc-900"
                    >
                      {CHANGING_PHRASES[wordIndex].prefix}
                      {CHANGING_PHRASES[wordIndex].word}
                    </motion.span>
                  </AnimatePresence>
                </span>{" "}
                <span className="whitespace-nowrap">practice partner</span>
              </span>
            </h1>
            <p className="max-w-xl text-base text-zinc-400">
              Practise for free with GP trainees preparing for the RCGP SCA exam in
              live video sessions.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-start">
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-400 sm:w-auto"
              >
                Join the SCA Pilot
                <FaArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="w-full lg:max-w-[45%] lg:flex-[0_0_45%]">
            <div className="overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-900/80 shadow-2xl">
              <div className="flex items-center justify-between border-b border-zinc-700/60 bg-zinc-800/80 px-4 py-3">
                <span className="flex items-center gap-2 text-base font-medium text-zinc-300">
                  <FaVideo className="h-4 w-4 text-emerald-400/80" />
                  Upcoming video session
                </span>
              </div>
              <div className="space-y-5 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2.5 shrink-0">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-zinc-900 ring-2 ring-zinc-800">
                      <Image
                        src="/images/female-hero.jpg"
                        alt="Sarah K"
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-zinc-900 ring-2 ring-zinc-800">
                      <Image
                        src="/images/male-hero.jpg"
                        alt="James M"
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white text-sm sm:text-base">
                      @Sarah K · @James M.
                    </p>
                    <p className="text-zinc-500 text-sm sm:text-base">
                       Session booked
                    </p>
                    <p className="mt-0.5 text-zinc-500 text-sm sm:text-base">
                      RCGP SCA exam
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-zinc-800/80 p-3">
                  <FaClock className="h-4 w-4 shrink-0 text-zinc-500" />
                  <div className="min-w-0 flex-1 text-sm sm:text-base">
                    <p className="font-medium text-zinc-300">Today, 2:00 PM</p>
                    <p className="text-zinc-500 text-sm sm:text-base">
                      Join from dashboard
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-1 text-sm sm:text-base font-medium text-emerald-400">
                    Starts in 2 hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-zinc-950 py-12 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
            How it works
          </h2>
          <p className="mx-auto mt-2 max-w-2xl px-4 text-center text-base text-zinc-400 sm:mt-3">
            Three steps to get into a live video session.
          </p>
          <div className="mt-8 sm:mt-12">
            <AvoDeckHowItWorks steps={HOW_IT_WORKS_STEPS} />
          </div>
        </div>
      </section>

      {/* Live sessions: Instant Match or Marketplace */}
      <section className="bg-zinc-950 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-white sm:text-2xl">
            Live video sessions: your choice
          </h2>
          <p className="mt-2 text-center text-base text-zinc-400">
            Either grab a slot from the marketplace or get matched instantly if
            someone&apos;s free now. Free during the pilot.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {LIVE_SESSION_OPTIONS.map((option) => (
              <div
                key={option.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <option.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {option.title}
                </h3>
                <p className="mt-2 text-base text-zinc-400">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why better than WhatsApp */}
      <section className="bg-zinc-950 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-white sm:text-2xl">
            Why not just use WhatsApp?
          </h2>
          <p className="mt-2 text-center text-base text-zinc-400">
            Less chaos. More structure. Practice sessions that actually happen.
          </p>
          <ul className="mt-8 space-y-4">
            {BETTER_THAN_WHATSAPP.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-base text-zinc-300"
              >
                <FaCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pilot framing */}
      <section className="bg-zinc-950 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-white sm:text-2xl">
            Pilot
          </h2>
          <p className="mt-3 text-center text-base text-zinc-400">
            We&apos;re running a limited pilot for GP trainees sitting the
            March/April 2026 SCA exams. {PILOT_NOTE}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-zinc-950 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Ready to practise?
          </h2>
          <p className="mt-2 text-base text-zinc-400">
            Free—limited places.
          </p>
          <div className="mt-6">
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-400"
            >
              Join the SCA Pilot
              <FaArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer — single line: powered by + copyright */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-base text-zinc-500">
            <a
              href="https://www.osceguide.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium uppercase tracking-wider text-zinc-500 transition hover:text-zinc-400"
            >
              <span>POWERED BY</span>
              <span className="inline-flex scale-[0.6] origin-left">
                <Logo variant="dark" />
              </span>
            </a>
            <span className="text-zinc-600" aria-hidden>
              ·
            </span>
            <span className="uppercase">2026 Four Integers Ltd. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
