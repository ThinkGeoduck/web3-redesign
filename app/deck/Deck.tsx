"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// A 1920×1080 stage scaled to fit the window. Arrow keys, Page Up/Down,
// Space and the on-screen buttons move between slides; the URL hash keeps
// the current slide so a refresh or a shared link lands in the same place.
// In print (and the exported PDF) every slide is its own 16:9 page.
export function Deck({ slides }: { slides: React.ReactNode[] }) {
  const [i, setI] = useState(0);
  const [scale, setScale] = useState(1);
  const stage = useRef<HTMLDivElement>(null);
  const n = slides.length;

  const go = useCallback((to: number) => {
    const next = Math.max(0, Math.min(n - 1, to));
    setI(next);
    history.replaceState(null, "", `#${next + 1}`);
  }, [n]);

  useEffect(() => {
    const fromHash = parseInt(location.hash.slice(1), 10);
    if (fromHash >= 1 && fromHash <= n) setI(fromHash - 1);
  }, [n]);

  useEffect(() => {
    const fit = () => {
      const el = stage.current;
      if (!el) return;
      setScale(Math.min(el.clientWidth / 1920, el.clientHeight / 1080));
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (stage.current) ro.observe(stage.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(i + 1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(i - 1);
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(n - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, n, go]);

  return (
    <div className="deck-root">
      {/* Screen: one slide at a time, scaled to fit. */}
      <div className="deck-screen fixed inset-0 z-[70] flex flex-col bg-[#15121f]">
        <div ref={stage} className="relative flex-1 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 h-[1080px] w-[1920px] origin-center overflow-hidden rounded-[6px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.7)]"
            style={{ transform: `translate(-50%, -50%) scale(${scale * 0.96})` }}
            aria-live="polite"
            aria-label={`Slide ${i + 1} of ${n}`}
          >
            {slides.map((s, k) => (
              <div
                key={k}
                aria-hidden={k !== i}
                className={`absolute inset-0 transition-opacity duration-300 ease-out ${k === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-14 items-center gap-4 px-5 text-[#f5f2ff]">
          <button type="button" onClick={() => go(i - 1)} disabled={i === 0} className="grid size-10 place-items-center rounded-full bg-white/10 transition active:scale-95 disabled:opacity-30">
            <ChevronLeft aria-hidden className="size-5" />
            <span className="sr-only">Previous slide</span>
          </button>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-[#dcd3f5] transition-[width] duration-300 ease-out" style={{ width: `${((i + 1) / n) * 100}%` }} />
          </div>
          <span className="data w-16 text-right text-sm">{i + 1} / {n}</span>
          <button type="button" onClick={() => go(i + 1)} disabled={i === n - 1} className="grid size-10 place-items-center rounded-full bg-white/10 transition active:scale-95 disabled:opacity-30">
            <ChevronRight aria-hidden className="size-5" />
            <span className="sr-only">Next slide</span>
          </button>
          <a href="/docs/web3-carnival-company-overview.pdf" className="hidden rounded-full bg-white/10 px-4 py-2 text-sm font-semibold sm:block">
            PDF
          </a>
        </div>
      </div>

      {/* Print: every slide on its own page. */}
      <div className="deck-print">
        {slides.map((s, k) => (
          <div key={k} className="deck-page relative h-[1080px] w-[1920px] overflow-hidden">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
