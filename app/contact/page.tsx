import type { Metadata } from "next";
import { CalendarDays, Mail, Phone } from "lucide-react";
import { PageHero, Container } from "@/components/PageHero";
import { LINKS, SOCIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Web3 Carnival team by email, phone or a booked call.",
};

const ROUTES = [
  { who: "Attending", text: "Questions about tickets, access or the programme.", href: `mailto:${LINKS.email}?subject=Attending%20Web3%20Carnival`, cta: "Email the team" },
  { who: "Sponsoring", text: "Packages, visibility and side events.", href: LINKS.calendly, cta: "Book a call" },
  { who: "Speaking", text: "Talks, panels and workshops.", href: LINKS.forms.speaker, cta: "Apply to speak" },
  { who: "Press & media", text: "Coverage, interviews and accreditation.", href: LINKS.forms.media, cta: "Apply as media" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero tone="night" title="Talk to us" intro="Participant, sponsor, media or just curious: pick the route that fits and it goes to the right person." />

      <section className="bg-mist">
        <Container className="grid gap-16 py-20 sm:py-28 lg:grid-cols-12">
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {ROUTES.map((r) => (
              <li key={r.who} className="flex flex-col justify-between gap-6 rounded-[6px] bg-paper-2 p-6">
                <div>
                  <h2 className="display text-3xl">{r.who}</h2>
                  <p className="mt-2 text-slate">{r.text}</p>
                </div>
                <a
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="font-semibold text-leaf underline decoration-2 underline-offset-4"
                >
                  {r.cta}
                </a>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="display text-4xl">Direct lines</h2>
            <ul className="mt-6 grid gap-5">
              <li className="flex gap-4">
                <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-leaf" />
                <a href={`mailto:${LINKS.email}`} className="font-semibold underline">{LINKS.email}</a>
              </li>
              <li className="flex gap-4">
                <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-leaf" />
                <a href={`tel:${LINKS.phone.replace(/\s/g, "")}`} className="font-semibold underline">{LINKS.phone}</a>
              </li>
              <li className="flex gap-4">
                <CalendarDays aria-hidden className="mt-0.5 size-5 shrink-0 text-leaf" />
                <a href={LINKS.calendly} target="_blank" rel="noreferrer" className="font-semibold underline">Book a call on Calendly</a>
              </li>
            </ul>
            <h2 className="display mt-12 text-4xl">Follow</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="display inline-block rounded-full px-4 py-2 text-lg shadow-[inset_0_0_0_1.5px_rgba(10,10,15,.25)] hover:bg-night hover:text-paper"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
