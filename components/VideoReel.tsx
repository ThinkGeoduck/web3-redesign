"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

// Footage from past editions (the official site's hero reel, re-encoded).
// Plays muted only while on screen; never autoplays for reduced-motion users;
// always has a visible pause control.
export function VideoReel({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const userPausedRef = useRef(userPaused);
  userPausedRef.current = userPaused;

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) setUserPaused(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (v.preload !== "auto") v.preload = "auto";
          if (!reduce && !userPausedRef.current) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().catch(() => {});
    } else {
      setUserPaused(true);
      v.pause();
    }
  }

  return (
    <figure className="relative">
      <div className="relative aspect-video overflow-hidden rounded-[4px] bg-night sm:aspect-[21/9]">
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={toggle}
          className="absolute bottom-4 left-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-night/80 px-4 text-sm font-semibold text-paper backdrop-blur-sm transition hover:bg-night"
        >
          {playing ? <Pause aria-hidden className="size-4" /> : <Play aria-hidden className="size-4" />}
          {playing ? "Pause footage" : "Play footage"}
        </button>
      </div>
      <figcaption className="label mt-3 text-slate">Footage from past editions, from web3carnival.world</figcaption>
    </figure>
  );
}
