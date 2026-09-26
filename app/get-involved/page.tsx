import type { Metadata } from "next";
import { PageHero, Container } from "@/components/PageHero";
import { LinkButton } from "@/components/Button";
import { INVOLVEMENT, LINKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Get involved",
  description: "Attend, speak, sponsor, demo, cover, volunteer or join as a community partner at Web3 Carnival.",
};

export default function GetInvolvedPage() {
  const [attend, ...rest] = INVOLVEMENT;
  return (
    <>
      <PageHero
        title="Pick your door"
        intro="There are eight ways into the carnival. Each one goes straight to its application, so you never need more than one click."
      />

      <section className="bg-mist">
        <Container className="py-20 sm:py-28">
          <div className="notched grid rounded-[6px] bg-field text-night md:grid-cols-[1fr_auto_auto] [--notch:calc(100%-292px)]">
            <div className="p-8 sm:p-10">
              <h2 className="display text-[clamp(3rem,7vw,5.5rem)]">{attend.title}</h2>
              <p className="mt-4 max-w-[48ch] text-lg">{attend.text}</p>
            </div>
            <div className="perf-v my-6 hidden md:block" aria-hidden />
            <div className="flex items-center p-6 md:w-[290px] md:justify-center">
              <LinkButton href={attend.href} variant="secondary" className="w-full">{attend.cta}</LinkButton>
            </div>
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((d, i) => (
              <li
                key={d.id}
                id={d.id}
                className={`flex scroll-mt-28 flex-col justify-between gap-8 rounded-[6px] p-6 ${
                  i % 3 === 0 ? "on-field" : i % 3 === 1 ? "bg-night text-paper" : "bg-paper-2 text-ink"
                }`}
              >
                <div>
                  <h2 className="display text-4xl">{d.title}</h2>
                  <p className="mt-3 leading-relaxed opacity-90">{d.text}</p>
                </div>
                <LinkButton href={d.href} variant={i % 3 === 2 ? "ghost" : "ghost-light"} className="w-full">
                  {d.cta}
                </LinkButton>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-slate">
            Not sure which door is yours?{" "}
            <a href={LINKS.calendly} className="font-semibold text-leaf underline" target="_blank" rel="noreferrer">
              Book a call with the team
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
