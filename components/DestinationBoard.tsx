"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { STOPS } from "@/lib/data";

// A depot destination blind: each stop steps in one course with a small
// overshoot, then holds. Nothing glides. It rests on the final stop (the
// next stop, marked as such) once it has run through every stop.
export function DestinationBoard({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const last = STOPS.length - 1;
  const [i, setI] = useState(last);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (reduce) return;
    setI(0);
    setStarted(true);
  }, [reduce]);

  useEffect(() => {
    if (!started || i >= last) return;
    const t = setTimeout(() => setI((n) => n + 1), i === 0 ? 700 : 650);
    return () => clearTimeout(t);
  }, [i, started, last]);

  return (
    // Fixed row height: the window shows exactly one stop at any width.
    <div className={`relative h-14 overflow-hidden sm:h-16 ${className}`}>
      <p className="sr-only">
        Past stops: {STOPS.slice(0, -1).map((s) => `${s.city} ${s.when}`).join(", ")}. Next stop: {STOPS[STOPS.length - 1].city}, {STOPS[STOPS.length - 1].when}.
      </p>
      <ul
        aria-hidden
        className="transition-transform duration-[380ms] ease-(--ease-step)"
        // The list is STOPS.length rows tall, so each step is 1/length of it.
        style={{ transform: `translateY(${(-i * 100) / STOPS.length}%)` }}
      >
        {STOPS.map((s) => (
          <li key={s.city + s.when} className="flex h-14 items-center gap-3 sm:h-16 sm:gap-4">
            <span className="display truncate text-[clamp(1.5rem,3.4vw,2.6rem)] text-field">
              {s.placeholder ? `Next: ${s.city}` : s.city}
            </span>
            <span className="label shrink-0 text-dim">{s.when}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
