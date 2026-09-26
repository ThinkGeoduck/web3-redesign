import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Container } from "@/components/PageHero";
import { LinkButton } from "@/components/Button";
import { LINKS, NEXT_EDITION, PROGRAMME } from "@/lib/data";

export const metadata: Metadata = {
  title: "Next edition",
  description: "What to expect at the next Web3 Carnival. Dates and venue to be announced.",
};

const FORMAT = [
  {
    title: "Main stage Cons",
    text: "Seven themed Cons, from infrastructure and ZK to NFTs and enterprise, each with its own talks and panels.",
  },
  {
    title: "Demo Night",
    text: "Startups demo to investors, incubators and accelerators. Apply through Super Demo.",
  },
  {
    title: "The Awards",
    text: "Categories across security, education, community, gaming, journalism and UX. Nominate yourself or others.",
  },
  {
    title: "Side events every day",
    text: "Pitch battles, founder and funder nights, meetups, dinners and launches, hosted with partners around the main programme.",
  },
];

export default function EventPage() {
  const cons = PROGRAMME.filter((p) => p.kind === "Con");
  return (
    <>
      <PageHero
        title="The next edition"
        intro={NEXT_EDITION.note}
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/register">Get on the list</LinkButton>
          <LinkButton href={LINKS.calendly} variant="ghost-light">Book a call with the team</LinkButton>
        </div>
      </PageHero>

      <section className="bg-nebula text-paper">
        <Container className="grid gap-px py-0 sm:grid-cols-3">
          {[
            ["Date", NEXT_EDITION.date],
            ["City", NEXT_EDITION.city],
            ["Venue", NEXT_EDITION.venue],
          ].map(([k, v]) => (
            <div key={k} className="border-b border-paper/15 py-8 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <p className="label text-dim">{k}</p>
              <p className="display mt-2 text-4xl text-field">{v}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="grid gap-14 py-24 sm:py-32 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display text-[clamp(2.8rem,5vw,4.4rem)]">What happens at the carnival</h2>
            <p className="mt-6 text-lg text-slate">
              The format below is how past editions ran. The team will confirm the programme for the next edition when it is announced.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {FORMAT.map((f, i) => (
              <li key={f.title} className={`rounded-[6px] p-6 ${i === 0 ? "on-field" : "bg-paper-2"}`}>
                <h3 className="display text-3xl">{f.title}</h3>
                <p className={`mt-3 leading-relaxed ${i === 0 ? "text-paper/90" : "text-slate"}`}>{f.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="on-field">
        <Container className="py-24">
          <h2 className="display text-[clamp(2.6rem,5vw,4.4rem)]">The seven Cons</h2>
          <ul className="mt-10 flex flex-wrap gap-3">
            {cons.map((c) => (
              <li key={c.id}>
                <Link href={`/programme#${c.id}`} className="display inline-block rounded-full px-5 py-2.5 text-xl shadow-[inset_0_0_0_1.5px_rgba(247,247,244,.5)] hover:bg-paper hover:text-leaf">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/programme" className="mt-10 inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-4">
            Find the Cons that fit you <ArrowRight aria-hidden className="size-5" />
          </Link>
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="grid gap-10 py-24 lg:grid-cols-12">
          <h2 className="display text-[clamp(2.4rem,4.4vw,3.8rem)] lg:col-span-5">Questions before you book?</h2>
          <div className="grid gap-6 lg:col-span-6 lg:col-start-7">
            <div>
              <h3 className="text-lg font-bold">How much does it cost?</h3>
              <p className="mt-1 text-slate">Ticket prices for the next edition have not been announced. Register your interest and we will send them first.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Who should attend?</h3>
              <p className="mt-1 text-slate">
                Founders, developers, investors, creators, policy makers, enterprises, students and anyone curious about Web3. <Link href="/ecosystem" className="font-semibold text-leaf underline">See who comes</Link>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Can I speak or sponsor?</h3>
              <p className="mt-1 text-slate">
                Yes. <a href={LINKS.forms.speaker} className="font-semibold text-leaf underline" target="_blank" rel="noreferrer">Apply to speak</a> or{" "}
                <a href={LINKS.forms.sponsor} className="font-semibold text-leaf underline" target="_blank" rel="noreferrer">apply to sponsor</a>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">How do I stay up to date?</h3>
              <p className="mt-1 text-slate">
                Follow <a href="https://x.com/web3carnival" className="font-semibold text-leaf underline" target="_blank" rel="noreferrer">@web3carnival</a> or join the{" "}
                <a href="https://t.me/web3carnival2023" className="font-semibold text-leaf underline" target="_blank" rel="noreferrer">Telegram group</a>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
