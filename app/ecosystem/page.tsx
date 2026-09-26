import type { Metadata } from "next";
import { PageHero, Container } from "@/components/PageHero";
import { LinkButton } from "@/components/Button";
import { AUDIENCES, FIGURES, LINKS, SPEAKERS, regionOf, REGIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Who comes to Web3 Carnival: startups, developers, investors, enterprises, policy makers, academia and the wider Web3 community.",
};

export default function EcosystemPage() {
  const regionCounts = REGIONS.map((r) => ({ r, n: SPEAKERS.filter((s) => regionOf(s.location) === r).length }));
  const max = Math.max(...regionCounts.map((x) => x.n));

  return (
    <>
      <PageHero
        title="Who comes"
        intro="A carnival only works when everyone turns up. Web3 Carnival brings together the people who build, fund, regulate, teach and use Web3, plus the people who are just getting curious."
      />

      <section className="bg-mist">
        <Container className="py-24 sm:py-32">
          <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">Eight kinds of ticket</h2>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((a, i) => (
              <li
                key={a.name}
                className={`notched grid grid-rows-[1fr_auto] rounded-[6px] [--notch:32px] ${
                  ["on-field", "bg-night text-paper", "bg-leaf text-paper", "bg-paper-2 text-ink"][i % 4]
                }`}
              >
                <div className="p-6">
                  <h3 className="display text-3xl">{a.name}</h3>
                  <p className="mt-3 leading-relaxed opacity-90">{a.text}</p>
                </div>
                <p className="label px-6 pb-5 opacity-70">Admit one</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-nebula text-paper">
        <Container className="grid gap-14 py-24 sm:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-[clamp(2.8rem,5vw,4.4rem)]">By the numbers</h2>
            <p className="mt-6 max-w-[40ch] text-dim">
              These are the figures Web3 Carnival reports across its past editions. They have not been independently verified.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:col-span-7 sm:grid-cols-3">
            {FIGURES.map((f) => (
              <div key={f.label} className="border-t border-paper/20 pt-4">
                <dt className="label text-dim">{f.label}</dt>
                <dd className="display data mt-2 text-[clamp(2.6rem,5vw,4rem)] text-field">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="grid gap-14 py-24 sm:py-32 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-[clamp(2.6rem,5vw,4.2rem)]">Where the speakers flew in from</h2>
            <p className="mt-6 text-slate">Counted from the {SPEAKERS.length} past speakers listed on the official site.</p>
          </div>
          <ul className="grid content-start gap-4 lg:col-span-7">
            {regionCounts.map(({ r, n }) => (
              <li key={r} className="grid grid-cols-[9rem_1fr_2.5rem] items-center gap-4">
                <span className="display text-xl">{r}</span>
                <span className="h-3 rounded-[2px] bg-paper-2">
                  <span className="block h-full rounded-[2px] bg-leaf" style={{ width: `${(n / max) * 100}%` }} />
                </span>
                <span className="data text-right font-bold">{n}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-field text-night">
        <Container className="grid gap-10 py-24 sm:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(2.8rem,6vw,5.4rem)]">Empowering women. Accelerating startups.</h2>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed">
              Two commitments sit at the centre of Web3 Carnival: empowering women in Web3, and fuelling startups by putting them in front of the mentors and investors who can move them forward.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <LinkButton href={LINKS.forms.superDemo} variant="secondary">Apply to demo</LinkButton>
            <LinkButton href={LINKS.forms.speaker} variant="ghost">Apply to speak</LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
