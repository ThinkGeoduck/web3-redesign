import type { Metadata } from "next";
import { PageHero, Container } from "@/components/PageHero";
import { PartnerWall } from "@/components/PartnerWall";
import { CompanyMarquee } from "@/components/CompanyMarquee";
import { LinkButton } from "@/components/Button";
import { LINKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Partners",
  description: "Past sponsors, payment, ticketing, community and media partners of Web3 Carnival, and how to partner with the next edition.",
};

const WAYS = [
  { title: "Sponsor", text: "Put your brand on the main stage and in front of founders, developers and investors.", href: LINKS.forms.sponsor, cta: "Apply to sponsor" },
  { title: "Community partner", text: "Bring your community, co-host a side event and grow together.", href: LINKS.forms.community, cta: "Apply as a community" },
  { title: "Media partner", text: "Cover the carnival, interview speakers and reach the Web3 audience.", href: LINKS.forms.media, cta: "Apply as media" },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Partners"
        intro="Sponsors, communities and media from across Web3 have helped build the carnival. Here are the partners of past editions, and how to join the next one."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href={LINKS.forms.sponsor}>Become a sponsor</LinkButton>
          <LinkButton href={LINKS.calendly} variant="ghost-light">Book a call</LinkButton>
        </div>
      </PageHero>

      <section className="bg-nebula text-paper">
        <Container className="grid gap-4 py-20 md:grid-cols-3">
          {WAYS.map((w, i) => (
            <div key={w.title} className={`flex flex-col justify-between gap-8 rounded-[6px] p-6 ${i === 0 ? "bg-field text-night" : "bg-night-2"}`}>
              <div>
                <h2 className="display text-4xl">{w.title}</h2>
                <p className="mt-3 leading-relaxed opacity-85">{w.text}</p>
              </div>
              <LinkButton href={w.href} variant={i === 0 ? "secondary" : "ghost-light"} className="w-full">{w.cta}</LinkButton>
            </div>
          ))}
        </Container>
      </section>

      <CompanyMarquee />

      <section className="bg-mist">
        <Container className="py-24 sm:py-32">
          <h2 className="display mb-12 text-[clamp(2.8rem,6vw,5rem)]">Past partners</h2>
          <PartnerWall />
          <p className="mt-12 max-w-[70ch] text-sm text-slate">
            Logos are shown as they appear on web3carnival.world. Past VC partners and supporters appear on the official site as unlabelled logos, so they are not listed here until the organisers confirm their names.
          </p>
        </Container>
      </section>
    </>
  );
}
