import type { Metadata } from "next";
import { PageHero, Container } from "@/components/PageHero";
import { SpeakerRoster } from "@/components/SpeakerRoster";
import { LinkButton } from "@/components/Button";
import { LINKS, SPEAKERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Speakers",
  description: "Past speakers at Web3 Carnival: founders, investors, researchers and builders from around the world.",
};

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        title="Past speakers"
        intro={`${SPEAKERS.length} founders, investors, researchers, lawyers and artists have taken the stage, from Bengaluru and Tokyo to Lagos and San Francisco.`}
      >
        <LinkButton href={LINKS.forms.speaker}>Apply to speak</LinkButton>
      </PageHero>
      <section className="bg-mist">
        <Container className="pb-28">
          <SpeakerRoster />
        </Container>
      </section>
      <section className="bg-nebula text-paper">
        <Container className="grid gap-8 py-20 lg:grid-cols-12 lg:items-end">
          <h2 className="display text-[clamp(2.6rem,5vw,4.4rem)] lg:col-span-7">Have something the room should hear?</h2>
          <div className="lg:col-span-5">
            <p className="text-lg text-dim">
              The Web3 Carnival team reviews every application. Tell us what you are building and what you want to talk about.
            </p>
            <div className="mt-6">
              <LinkButton href={LINKS.forms.speaker}>Apply to speak</LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
