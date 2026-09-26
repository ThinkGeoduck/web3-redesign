"use client";

import { useEffect, useRef, useState } from "react";
import { NEXT_EDITION } from "@/lib/data";

function daysLeft() {
  const ms = new Date(NEXT_EDITION.startISO).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / 86_400_000));
}

// Days until the (illustrative) next edition. Rendered after mount so server
// and client never disagree about "today". The first time it scrolls into
// view it counts up from zero, like a ticket machine settling on a number;
// reduced motion shows the final value at once.
export function Countdown({ className = "", suffix = true }: { className?: string; suffix?: boolean }) {
  const [days, setDays] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = daysLeft();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const run = () => {
      if (reduce) return setDays(target);
      const start = performance.now();
      const dur = 900;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        setDays(Math.round(target * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    const refresh = setInterval(() => setDays(daysLeft()), 60_000);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearInterval(refresh);
    };
  }, []);

  return (
    <span ref={ref} className={`data tabular-nums ${className}`}>
      {days === null ? "—" : days}
      {suffix && <span className="sr-only"> days to go</span>}
    </span>
  );
}
