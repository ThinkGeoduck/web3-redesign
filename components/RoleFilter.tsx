"use client";

import { useMemo, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { PROGRAMME, ROLES, type Role } from "@/lib/data";

type Match = "all" | "some" | "none" | "idle";

function matchOf(itemRoles: Role[], picked: Role[]): { state: Match; count: number } {
  if (picked.length === 0) return { state: "idle", count: 0 };
  const count = picked.filter((r) => itemRoles.includes(r)).length;
  if (count === picked.length) return { state: "all", count };
  return { state: count > 0 ? "some" : "none", count };
}

const kindLabel: Record<string, string> = {
  Con: "Con",
  Showcase: "Showcase",
  Awards: "Awards",
  "Side event": "Side events",
};

export function RoleFilter({ initial = [], limit, detailed = false }: { initial?: Role[]; limit?: number; detailed?: boolean }) {
  const [picked, setPicked] = useState<Role[]>(initial);

  const ranked = useMemo(() => {
    const withMatch = PROGRAMME.map((item, idx) => ({ item, idx, ...matchOf(item.roles, picked) }));
    return withMatch.sort((a, b) => b.count - a.count || a.idx - b.idx);
  }, [picked]);

  const shown = limit ? ranked.slice(0, limit) : ranked;
  const toggle = (r: Role) => setPicked((p) => (p.includes(r) ? p.filter((x) => x !== r) : [...p, r]));
  const allCount = ranked.filter((r) => r.state === "all").length;

  return (
    <div>
      <fieldset>
        <legend className="label mb-4 text-dim">I am a…  (pick one or more)</legend>
        <div className="flex flex-wrap items-center gap-2">
          {ROLES.map((r, i) => {
            const on = picked.includes(r);
            return (
              <span key={r} className="flex items-center gap-2">
                {i > 0 && (
                  <svg aria-hidden viewBox="0 0 10 10" className="size-2.5 text-dim">
                    <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                )}
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(r)}
                  className={`display min-h-11 rounded-full px-4 text-[1.15rem] tracking-[0.02em] transition-colors duration-200 ${
                    on
                      ? "bg-paper text-night"
                      : "text-paper shadow-[inset_0_0_0_1.5px_rgba(247,247,244,.35)] hover:shadow-[inset_0_0_0_1.5px_var(--color-paper)]"
                  }`}
                >
                  {r}
                </button>
              </span>
            );
          })}
          {picked.length > 0 && (
            <button type="button" onClick={() => setPicked([])} className="ml-2 min-h-11 px-2 text-sm text-dim underline hover:text-paper">
              Clear
            </button>
          )}
        </div>
      </fieldset>

      <p className="mt-6 text-sm text-dim" aria-live="polite">
        {picked.length === 0
          ? "Pick a role to see what fits you best."
          : `${allCount} ${allCount === 1 ? "part" : "parts"} of the programme fit ${picked.join(" × ")}.`}
      </p>

      <LayoutGroup>
        <ol className={`mt-6 grid gap-2 ${detailed ? "" : "md:grid-cols-2"}`}>
          {shown.map(({ item, state }) => (
            <motion.li
              layout
              key={item.id}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`relative grid grid-cols-[1fr_auto] items-center gap-4 rounded-[4px] px-4 py-4 transition-[background-color,color,opacity] duration-300 sm:px-5 ${
                state === "all"
                  ? "bg-field text-night"
                  : state === "some"
                    ? "bg-paper text-night"
                    : state === "none"
                      ? "bg-night-2 text-paper opacity-60"
                      : "bg-night-2 text-paper"
              }`}
            >
              <div>
                <h3 className="display text-[clamp(1.4rem,2.4vw,1.9rem)]">{item.name}</h3>
                {detailed && <p className="mt-2 max-w-[62ch] text-[0.95rem] opacity-85">{item.summary}</p>}
                {detailed && (
                  <p className="label mt-3 opacity-75">Suggested for: {item.roles.join(" · ")}</p>
                )}
              </div>
              <span className="label text-right whitespace-nowrap">
                <span className="block opacity-75">{kindLabel[item.kind]}</span>
                {state !== "idle" && (
                  <span className="mt-1 block">{state === "all" ? "Fits all" : state === "some" ? "Partial fit" : "Less relevant"}</span>
                )}
              </span>
            </motion.li>
          ))}
        </ol>
      </LayoutGroup>
      <p className="mt-4 max-w-[70ch] text-xs text-dim">Role fit is a suggestion from the redesign team, not an official track assignment.</p>
    </div>
  );
}
