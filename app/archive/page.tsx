import type { Metadata } from "next";
import { PageHero, Container } from "@/components/PageHero";
import { EventTicket, type Tone } from "@/components/EventTicket";
import { PAST_EVENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Past stops",
  description: "Every past Web3 Carnival event, from the 2023 flagship week in Bengaluru to Dubai, Singapore and Delhi.",
};

const TONES: Tone[] = ["field", "night", "leaf", "paper"];

// Group events into stops (city + year), keeping newest first.
function groupByStop() {
  const map = new Map<string, typeof PAST_EVENTS>();
  for (const e of PAST_EVENTS) {
    const list = map.get(e.stop) ?? [];
    list.push(e);
    map.set(e.stop, list);
  }
  return [...map.entries()];
}

export default function ArchivePage() {
  const stops = groupByStop();
  return (
    <>
      <PageHero
        tone="night"
        title="Past stops"
        intro={`${PAST_EVENTS.length} events in ${stops.length} stops since December 2023. Each ticket links to its original event page where one exists.`}
      />
      <section className="bg-mist">
        <Container className="py-20 sm:py-28">
          <nav aria-label="Jump to stop" className="flex flex-wrap gap-2">
            {stops.map(([stop]) => (
              <a
                key={stop}
                href={`#${stop.replace(/\s+/g, "-").toLowerCase()}`}
                className="display rounded-full px-4 py-2 text-lg shadow-[inset_0_0_0_1.5px_rgba(10,10,15,.25)] hover:bg-night hover:text-paper"
              >
                {stop}
              </a>
            ))}
          </nav>

          <div className="mt-16 grid gap-20">
            {stops.map(([stop, events], si) => (
              <section key={stop} id={stop.replace(/\s+/g, "-").toLowerCase()} className="scroll-mt-28" aria-labelledby={`h-${si}`}>
                <div className="flex items-baseline justify-between gap-4 border-t-2 border-ink pt-5">
                  <h2 id={`h-${si}`} className="display text-[clamp(2.4rem,5vw,4.2rem)]">{stop}</h2>
                  <p className="label text-slate">
                    {events.length} {events.length === 1 ? "event" : "events"}
                  </p>
                </div>
                {stop === "Bengaluru 2023" && (
                  <p className="mt-4 max-w-[62ch] text-slate">
                    The flagship week at Palm Meadows, Bengaluru, in December 2023. The listed side events, hosted with partners, ran from 4 to 10 December.
                  </p>
                )}
                <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {events.map((e, i) => (
                    <li key={e.title}>
                      <EventTicket event={e} tone={TONES[(si + i) % TONES.length]} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="mt-16 text-sm text-slate">
            Bitcoin Pizza Day and The Signal After Dark have no public event page on the current site. The Signal After Dark is listed without a year.
          </p>
        </Container>
      </section>
    </>
  );
}
