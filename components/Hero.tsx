import { HeroTicket } from "./HeroTicket";
import { HeroBackdrop } from "./HeroBackdrop";
import { DestinationBoard } from "./DestinationBoard";
import { LinkButton } from "./Button";
import { Container } from "./PageHero";
import { NEXT_EDITION } from "@/lib/data";
import { WORDMARK_PATH, WORDMARK_VIEWBOX } from "@/lib/wordmark";

// First viewport. A static gradient backdrop, the official wordmark as crisp
// single-ink vector type, and one short, CSS-only entrance (transform and
// opacity only). No canvas and no scroll listeners.
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col on-field">
      <HeroBackdrop />
      <Container className="grid w-full flex-1 items-center gap-12 pb-12 pt-24 sm:pt-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="hero-in barker text-[clamp(1rem,1.6vw,1.35rem)] tracking-[0.04em]" style={{ ["--d" as string]: "0ms" }}>
            Step right up
          </p>

          <h1 className="hero-in mt-5" style={{ ["--d" as string]: "60ms" }}>
            <span className="sr-only">Web3 Carnival</span>
            <svg
              aria-hidden
              viewBox={WORDMARK_VIEWBOX}
              className="block h-auto w-full max-w-[64rem] fill-current"
              shapeRendering="geometricPrecision"
            >
              <path d={WORDMARK_PATH} fillRule="evenodd" />
            </svg>
          </h1>

          <p
            className="hero-in barker mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[clamp(0.95rem,1.5vw,1.25rem)]"
            style={{ ["--d" as string]: "140ms" }}
          >
            <span>{NEXT_EDITION.city}</span>
            <span aria-hidden className="size-1.5 rounded-full bg-current" />
            <span>9–13 December 2026</span>
            <span aria-hidden className="size-1.5 rounded-full bg-current" />
            <span>BIEC</span>
          </p>

          <p className="hero-in mt-4 max-w-[40ch] text-lg leading-relaxed sm:text-xl" style={{ ["--d" as string]: "200ms" }}>
            A festival of Web3 events: seven themed Cons, Demo Night, awards and a side event every night.
          </p>

          <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ ["--d" as string]: "260ms" }}>
            <LinkButton href="/register">Get on the list</LinkButton>
            <LinkButton href="/programme" variant="ghost-light">Explore the programme</LinkButton>
          </div>
        </div>

        <div className="mx-auto mt-6 w-full max-w-[420px] pr-8 sm:pr-10 lg:col-span-5 lg:mt-0 lg:max-w-none lg:pl-4">
          <HeroTicket />
        </div>
      </Container>

      <div className="relative on-night bg-night">
        <Container className="flex items-center gap-4 py-3 sm:gap-8 sm:py-4">
          <span className="label hidden shrink-0 text-dim sm:block">Destination</span>
          <DestinationBoard className="min-w-0 flex-1" />
          <span className="label hidden shrink-0 text-dim md:block">{NEXT_EDITION.venueLong}</span>
        </Container>
      </div>
    </section>
  );
}
