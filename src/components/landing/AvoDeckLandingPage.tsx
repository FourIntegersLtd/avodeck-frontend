"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaBolt,
  FaStopwatch,
  FaPoundSign,
  FaCheck,
  FaChevronDown,
  FaLinkedin,
  FaInstagram,
  FaHandPointer,
  FaUsers,
  FaFileAlt,
  FaEnvelope,
  FaVideo,
  FaClock,
} from "react-icons/fa";
import { FaCalendarCheck, FaXTwitter } from "react-icons/fa6";
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

const HOW_IT_WORKS = [
  {
    icon: FaEnvelope,
    title: "Sign Up with Work Email",
    description:
      "Verify with your work email. You're ready for video practice in under a minute.",
  },
  {
    icon: FaHandPointer,
    title: "Post or Claim a Video Session",
    description:
      "Post your availability or browse and claim someone else's slot. Most sessions get claimed within minutes.",
  },
  {
    icon: FaFileAlt,
    title: "Prepare Your Case",
    description:
      "Bring your own materials from question banks, or generate an AI case in 30 seconds.",
  },
  {
    icon: FaUsers,
    title: "Practice Together on a Video Call",
    description:
      "Join a video call, practice together, and give feedback in real time.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is Avodeck?",
    a: "Avodeck helps doctors find practice partners for their clinical simulation exams. Match with like-minded peers, run structured practice sessions, and discuss management plans all in one place.",
  },
  {
    q: "How much does it cost?",
    a: "£9.99/month. Your first 2 practice sessions are free. No long-term commitment.",
  },
  {
    q: "Who can use Avodeck?",
    a: "Doctors preparing for clinical exams including RCGP SCA, PLAB 2, and other OSCE-style assessments. We verify users so you practice with genuine peers.",
  },
  {
    q: "How does matching work?",
    a: "We match you by exam type, exam date, availability, and practice preferences.",
  },
];

export default function AvoDeckLandingPage() {
  const router = useRouter();
  const [wordIndex, setWordIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            href="/exams/avodeck"
            className="flex items-center"
            aria-label="Avodeck home"
          >
            <Image
              src="/images/avodeck.png"
              alt="Avodeck"
              width={200}
              height={52}
              className="h-5 max-w-[90px] sm:h-7 sm:max-w-[120px] md:h-9 md:max-w-[155px] lg:h-10 lg:max-w-[170px] w-auto shrink-0 object-contain object-left"
            />
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-1 sm:flex md:gap-3">
              <Link
                href="#how-it-works"
                className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:text-white sm:px-3 sm:py-2 sm:text-sm"
              >
                How it works
              </Link>
              <Link
                href="#practice"
                className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:text-white sm:px-3 sm:py-2 sm:text-sm"
              >
                Practice
              </Link>
              <Link
                href="#pricing"
                className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:text-white sm:px-3 sm:py-2 sm:text-sm"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:text-white sm:px-3 sm:py-2 sm:text-sm"
              >
                FAQ
              </Link>
            </div>
            <button
              type="button"
              onClick={() => router.push("/auth/login")}
              className="rounded-full border border-zinc-600 px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            >
              Log in
            </button>
            {/* <button
              type="button"
              onClick={() => router.push("/auth/register?appType=avodeck")}
              className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              <span className="hidden xs:inline">Get started</span>
              <span className="xs:hidden">Start</span>
              <FaArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </button> */}
          </nav>
        </div>
      </header>

      {/* Hero — viewport height minus header, content centred */}
      <section className="relative grid min-h-[calc(100vh-4.5rem)] min-h-[calc(100dvh-4.5rem)] w-full place-items-center bg-zinc-950">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:gap-12 lg:py-16">
          <div className="flex-1 space-y-8 text-center lg:max-w-[55%] lg:flex-[0_0_55%] lg:text-left">
            <h1 className="text-2xl font-bold leading-tight text-white xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              <span className="block">You&apos;re one click away from</span>
              <span className="mt-1 flex flex-wrap items-baseline justify-center gap-x-1.5 gap-y-1 lg:justify-start">
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
            <p className="mx-auto max-w-xl text-base text-zinc-400 sm:text-lg lg:mx-0">
              Match with doctors preparing for the same exam without the hassle
              of finding a partner.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://docs.google.com/forms/u/0/d/e/1FAIpQLScH-iS5qrxnmeHUTqsXS5NL0QRDdTb6xETTnpiLVEecyjmkCA/viewform?usp=send_form&pli=1&authuser=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-400 sm:w-auto"
              >
                Join waitlist
                <FaArrowRight className="h-4 w-4" />
              </a>
              {/* <button
                type="button"
                onClick={() => router.push("/auth/login")}
                className="w-full rounded-full border border-zinc-600 px-6 py-3 text-base font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white sm:w-auto"
              >
                Log in
              </button> */}
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
                    <p className="font-medium text-white text-sm sm:text-base">@Sarah K · @James M.</p>
                    <p className="text-zinc-500 text-sm sm:text-base">
                      Video practice · Session booked
                    </p>
                    <p className="mt-0.5 text-zinc-500 text-sm sm:text-base">
                      RCGP SCA · 12 min stations
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-zinc-800/80 p-3">
                  <FaClock className="h-4 w-4 shrink-0 text-zinc-500" />
                  <div className="min-w-0 flex-1 text-sm sm:text-base">
                    <p className="font-medium text-zinc-300">Today, 2:00 PM</p>
                    <p className="text-zinc-500 text-sm sm:text-base">Join from dashboard</p>
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
      <section id="how-it-works" className="scroll-mt-20 bg-zinc-950 py-12 sm:py-16 md:py-20 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white">
            How it works
          </h2>
          <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-center text-base text-zinc-400 px-4">
            Four simple steps to find your practice partner and get exam-ready.
          </p>
          <div className="mt-8 sm:mt-12">
            <AvoDeckHowItWorks steps={HOW_IT_WORKS} />
          </div>
        </div>
      </section>

      {/* Practice with Colleagues */}
      <section id="practice" className="scroll-mt-20 bg-zinc-950 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Practice with Colleagues
              </h2>
              <p className="mt-4 text-base text-zinc-400 max-w-3xl mx-auto">
                Choose between instant matching or scheduled sessions. Practice
                clinical scenarios with colleagues in real-time video
                consultations.
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: FaBolt,
                    title: "Live Practice",
                    description:
                      "Get matched instantly with available colleagues and start practicing immediately.",
                  },
                  {
                    icon: FaCalendarCheck,
                    title: "Marketplace",
                    description:
                      "Post your availability or browse sessions from colleagues. Schedule at times that work for both of you.",
                  },
                  {
                    icon: FaStopwatch,
                    title: "Automatic Timing",
                    description:
                      "Built-in timer matches the exam format. Practice with realistic time constraints.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 sm:h-10 sm:w-10">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-base text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="absolute inset-0 -rotate-3 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-20 blur-3xl" />
                <div className="relative w-full overflow-hidden rounded-2xl border border-green-500 shadow-xl">
                  <Image
                    src="/images/video_call.jpg"
                    alt="Live video consultation practice with colleagues"
                    width={1200}
                    height={800}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-20 bg-zinc-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Simple pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
            Start free with 2 sessions. Upgrade when you’re ready. No long-term
            commitment.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {/* Free — 2 sessions only */}
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-8">
              <h3 className="text-lg font-semibold text-white">Free</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">£0</span>
                <span className="text-zinc-400">forever</span>
              </div>
              <p className="mt-1 text-base text-zinc-500">2 sessions only</p>
              <ul className="mt-6 space-y-3 text-zinc-300">
                {[
                  "2 practice sessions",
                  "Match with practice partners",
                  "Verified users",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FaCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => router.push("/auth/register?appType=avodeck")}
                className="mt-8 w-full rounded-full border border-zinc-600 py-3 font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-800"
              >
                Start free
              </button>
            </div>
            {/* Paid — £9.99/month */}
            <div className="rounded-2xl border border-emerald-500/50 bg-zinc-900 p-8">
              <h3 className="text-lg font-semibold text-white">Paid</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <FaPoundSign className="h-7 w-7 text-emerald-400" />
                <span className="text-3xl font-bold text-white">9.99</span>
                <span className="text-zinc-400">/month</span>
              </div>
              <p className="mt-1 text-base text-zinc-500">Unlimited sessions</p>
              <ul className="mt-6 space-y-3 text-zinc-300">
                {[
                  "Unlimited video calls with practice partners",
                  "Structured practice sessions",
                  "Video replays — watch your consultation",
                  "Debrief with colleague",
                  "Verified users",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FaCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => router.push("/auth/register?appType=avodeck")}
                className="mt-8 w-full rounded-full bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-400"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 bg-zinc-950 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            FAQs
          </h2>
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-white transition hover:bg-zinc-800/50"
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <motion.span
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="inline-flex shrink-0"
                  >
                    <FaChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key={i}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-zinc-800"
                    >
                      <div className="px-5 py-4 text-base text-zinc-400">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-zinc-950 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to find your practice partner?
          </h2>
          <p className="mt-3 text-zinc-400">
            Join Avodeck and get your first 2 sessions free.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => router.push("/auth/register?appType=avodeck")}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-400 sm:w-auto"
            >
              Create account
              <FaArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => router.push("/auth/login")}
              className="w-full rounded-full border border-zinc-600 px-6 py-3 text-base font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white sm:w-auto"
            >
              Log in
            </button>
          </div>
        </div>
      </section>

      {/* Footer — match provided design */}
      <footer className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 sm:gap-14 lg:gap-8">
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-shrink-0">
              {/* <div className="flex items-center">
                <Image
                  src="/images/avodeck.png"
                  alt="Avodeck"
                  width={160}
                  height={44}
                  className="h-9 sm:h-11 w-auto shrink-0 object-contain object-left"
                />
              </div> */}
              <a
                href="https://www.osceguide.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-1.5 px-0 py-0 text-[11px] font-medium uppercase tracking-wider text-white transition hover:opacity-80"
              >
                <span>POWERED BY</span>
                <span className="inline-flex scale-[0.5] origin-left">
                  <Logo variant="dark" />
                </span>
              </a>
              <div className="flex gap-2">
                <a
                  href="https://x.com/osceguide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded bg-white text-zinc-900 transition hover:bg-zinc-200"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="h-4 w-4" />
                </a>

                <a
                  href="https://www.linkedin.com/company/osce-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded bg-white text-zinc-900 transition hover:bg-zinc-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/osceguide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded bg-white text-zinc-900 transition hover:bg-zinc-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 xs:gap-10 sm:grid-cols-3 lg:flex lg:gap-12 lg:flex-1 lg:justify-between">
              <div className="lg:flex-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Exams
                </h4>
                <ul className="mt-3 space-y-2 text-base text-white">
                  <li>
                    <Link
                      href="/exams/sca"
                      className="transition hover:text-emerald-400"
                    >
                      SCA (UK)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/exams/avodeck"
                      className="transition hover:text-emerald-400"
                    >
                      USMLE Step 2 (USA)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/exams/plab"
                      className="transition hover:text-emerald-400"
                    >
                      PLAB 2 (UK)
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="lg:flex-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Resources
                </h4>
                <ul className="mt-3 space-y-2 text-base text-white">
                  <li>
                    <Link
                      href="/"
                      className="transition hover:text-emerald-400"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/exams/avodeck#faq"
                      className="transition hover:text-emerald-400"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="transition hover:text-emerald-400"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@fourintegers.com"
                      className="transition hover:text-emerald-400"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:flex-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Legal
                </h4>
                <ul className="mt-3 space-y-2 text-base text-white">
                  <li>
                    <Link
                      href="/compliances/privacy-policy"
                      className="transition hover:text-emerald-400"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compliances/cookies-policy"
                      className="transition hover:text-emerald-400"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compliances/terms-of-service"
                      className="transition hover:text-emerald-400"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compliances/legal-disclaimer"
                      className="transition hover:text-emerald-400"
                    >
                      Legal Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/compliances/referrals"
                      className="transition hover:text-emerald-400"
                    >
                      Referral Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 lg:pt-12">
            <p className="text-center text-base text-zinc-400 px-4">
              {new Date().getFullYear()} Four Integers Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
