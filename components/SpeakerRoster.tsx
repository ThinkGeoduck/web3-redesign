"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SpeakerCard } from "./SpeakerCard";
import { REGIONS, SPEAKERS, regionOf } from "@/lib/data";

const chip =
  "display min-h-10 shrink-0 rounded-full px-4 text-base shadow-[inset_0_0_0_1.5px_rgba(10,10,15,.25)] aria-pressed:bg-night aria-pressed:text-paper aria-pressed:shadow-none";

export function SpeakerRoster() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<string | null>(null);
  const query = useDeferredValue(q.trim().toLowerCase());

  const list = useMemo(
    () =>
      SPEAKERS.filter(
        (s) =>
          (!region || regionOf(s.location) === region) &&
          (!query || `${s.name} ${s.role} ${s.location}`.toLowerCase().includes(query)),
      ),
    [query, region],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    SPEAKERS.forEach((s) => (c[regionOf(s.location)] = (c[regionOf(s.location)] ?? 0) + 1));
    return c;
  }, []);

  return (
    <div>
      <div className="sticky top-[80px] z-10 -mx-4 flex flex-col gap-4 border-b border-ink/10 bg-paper/85 px-4 py-4 backdrop-blur-md sm:top-[88px] sm:-mx-8 sm:px-8 lg:-mx-12 lg:flex-row lg:items-center lg:px-12">
        <label className="relative block lg:w-80">
          <span className="sr-only">Search speakers</span>
          <Search aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-slate" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, company or place"
            className="h-12 w-full rounded-[3px] border-[1.5px] border-ink/30 bg-white pl-11 pr-4 text-base outline-none focus:border-night focus:shadow-[0_0_0_3px_rgba(220,211,245,.9)]"
          />
        </label>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter by region">
          <button type="button" aria-pressed={region === null} onClick={() => setRegion(null)} className={chip}>
            All {SPEAKERS.length}
          </button>
          {REGIONS.map((r) => (
            <button key={r} type="button" aria-pressed={region === r} onClick={() => setRegion(region === r ? null : r)} className={chip}>
              {r} <span className="opacity-60">{counts[r] ?? 0}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-slate" aria-live="polite">
        Showing {list.length} of {SPEAKERS.length} past speakers
      </p>

      {list.length > 0 ? (
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {list.map((s, i) => (
            <li key={s.name}>
              <SpeakerCard speaker={s} index={i} priority={i < 6} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 rounded-[6px] bg-paper-2 p-8">
          <p className="display text-3xl">No speakers match that.</p>
          <p className="mt-2 text-slate">Try a company name, or clear the region filter.</p>
          <button
            type="button"
            onClick={() => {
              setQ("");
              setRegion(null);
            }}
            className="mt-4 font-semibold text-leaf underline"
          >
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
}
