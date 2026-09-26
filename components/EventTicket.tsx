import { ArrowUpRight } from "lucide-react";
import type { PastEvent } from "@/lib/data";

const tones = {
  field: "on-field",
  night: "bg-night text-paper",
  leaf: "bg-leaf text-paper",
  paper: "bg-paper text-ink shadow-[inset_0_0_0_1px_rgba(10,10,15,.14)]",
} as const;

export type Tone = keyof typeof tones;

// A past event as a ticket: body on the left, date on the tear-off stub.
export function EventTicket({ event, tone = "field" }: { event: PastEvent; tone?: Tone }) {
  const body = (
    <>
      <div className="flex min-w-0 flex-col justify-between gap-6 p-5">
        <div>
          <p className="label opacity-80">{event.stop}</p>
          <h3 className="display mt-2 text-[clamp(1.5rem,2.3vw,1.9rem)]">{event.title}</h3>
        </div>
        <p className="flex items-center gap-2 text-sm opacity-90">
          {event.venue}
          {event.venue !== event.city && <>, {event.city}</>}
          {event.href && <ArrowUpRight aria-hidden className="ml-auto size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
        </p>
      </div>
      <div className="perf-v my-3" aria-hidden />
      <div className="flex w-[86px] flex-col items-center justify-center py-4 text-center">
        <span className="display text-[2.6rem] leading-[0.8]">{event.day}</span>
        <span className="display mt-1 text-lg">{event.month}</span>
        <span className="label mt-1 opacity-80">{event.year}</span>
      </div>
    </>
  );
  const cls = `group notched grid min-h-44 grid-cols-[1fr_auto_auto] rounded-[6px] transition-transform duration-300 ease-(--ease-out-expo) ${tones[tone]}`;
  return event.href ? (
    <a href={event.href} target="_blank" rel="noreferrer" className={`${cls} hover:-translate-y-1 hover:-rotate-[0.6deg]`}>
      {body}
      <span className="sr-only"> (event page on lu.ma, opens in a new tab)</span>
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}
