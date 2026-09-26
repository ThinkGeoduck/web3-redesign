"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Countdown } from "./Countdown";
import { NEXT_EDITION } from "@/lib/data";

// The hero's call to action, printed as an oversized "Admit one" ticket.
// It leans toward the pointer on a spring (decorative, so a spring is right),
// and a riso stamp spins slowly on its corner.
export function HeroTicket() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const spring = { stiffness: 170, damping: 20, mass: 0.5 };
  const px = useSpring(0, spring);
  const py = useSpring(0, spring);
  const rotateY = useTransform(px, [-1, 1], [-9, 9]);
  const rotateX = useTransform(py, [-1, 1], [7, -7]);
  const shine = useTransform(px, [-1, 1], ["0%", "100%"]);

  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = ref.current!.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width) * 2 - 1);
    py.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }
  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div className="hero-ticket-in on-night relative [perspective:1100px]">
      <motion.div style={{ rotateX, rotateY }} className="relative -rotate-[7deg] [transform-style:preserve-3d]">
        <Link
          ref={ref}
          href="/register"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          aria-label={`Admit one: ${NEXT_EDITION.name}, ${NEXT_EDITION.city}, ${NEXT_EDITION.date}. Get on the list.`}
          className="group notched relative grid grid-cols-[1fr_auto_auto] overflow-hidden rounded-[8px] bg-paper text-night shadow-[0_50px_70px_-34px_rgba(31,27,46,.7),0_14px_24px_-14px_rgba(31,27,46,.45)] transition-transform duration-150 ease-out [--notch:calc(100%-104px)] active:scale-[0.98]"
        >
          <div className="min-w-0 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="barker text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[0.95]">Admit<br />one</p>
              <p className="text-right leading-none">
                <Countdown className="barker block text-[clamp(1.8rem,3vw,2.6rem)]" suffix={false} />
                <span className="label text-slate">days to go</span>
              </p>
            </div>

            {/* Real footage still, printed as a two-ink duotone. */}
            <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-[3px] bg-field">
              <Image
                src="/media/reel-poster.jpg"
                alt=""
                fill
                priority
                sizes="(min-width:1024px) 26vw, 80vw"
                className="object-cover object-[50%_40%] grayscale contrast-125 mix-blend-multiply"
              />
              <div aria-hidden className="absolute inset-0 bg-field mix-blend-screen opacity-35" />
            </div>

            <dl className="mt-4 grid grid-cols-[auto_1fr_auto] gap-4 border-t border-night/15 pt-3">
              {[
                ["Dates", "9–13 Dec"],
                ["City", NEXT_EDITION.city],
                ["Venue", "BIEC"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label text-slate">{k}</dt>
                  <dd className="mt-0.5 whitespace-nowrap text-sm font-bold leading-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="perf-v my-4 text-night" aria-hidden />

          <div className="flex w-[102px] flex-col items-center justify-between bg-night px-3 py-5 text-field">
            <span className="label [writing-mode:vertical-rl]">Web3 Carnival 2026</span>
            <span className="flex flex-col items-center gap-2 text-center">
              <span className="barker text-[0.8rem] leading-[1.05]">Get on<br />the list</span>
              <ArrowRight aria-hidden className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </span>
          </div>

          {/* Soft light that follows the pointer across the card stock. */}
          <motion.span
            aria-hidden
            style={{ left: shine }}
            className="pointer-events-none absolute -top-1/2 h-[200%] w-40 -translate-x-1/2 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </Link>

        <Stamp />
      </motion.div>
    </div>
  );
}

// A circular riso sticker. Constant rotation, so linear timing.
function Stamp() {
  const text = "STEP RIGHT UP · WEB3 CARNIVAL · STEP RIGHT UP · WEB3 CARNIVAL · ";
  return (
    <div aria-hidden className="stamp-press absolute -right-5 -top-9 size-24 sm:-right-10 sm:-top-14 sm:size-36">
      <svg viewBox="0 0 120 120" className="stamp-spin size-full">
        <defs>
          <path id="stamp-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="var(--color-night)" />
        <circle cx="60" cy="60" r="54" fill="none" stroke="var(--color-field)" strokeWidth="1" strokeDasharray="2 3" />
        <text className="display" fill="var(--color-field)" fontSize="10.5" letterSpacing="0.5">
          {/* textLength makes the phrase meet itself exactly round the circle. */}
          <textPath href="#stamp-circle" textLength="287" lengthAdjust="spacingAndGlyphs">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <Logo size={44} keyline className="size-10 sm:size-12" />
      </span>
    </div>
  );
}
