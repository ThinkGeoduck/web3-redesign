import Link from "next/link";
import { Logo } from "./Logo";
import { LinkButton } from "./Button";
import { LINKS, NAV, SOCIALS } from "@/lib/data";

const MORE = [
  { href: "/get-involved", label: "Get involved" },
  { href: "/register", label: "Get on the list" },
  { href: "/contact", label: "Contact" },
];

const LEGAL = [
  { href: "https://www.web3carnival.world/terms-of-service", label: "Terms of service" },
  { href: "https://www.web3carnival.world/privacy-policy", label: "Privacy policy" },
  { href: "https://www.web3carnival.world/cancellation-and-refund-policy", label: "Cancellation & refunds" },
];

export function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-night text-paper">
      <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-paper/15 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="display text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] text-paper">
              See you at<br />
              <span className="text-field">the next stop.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/register" variant="ghost-light">Get on the list</LinkButton>
              <LinkButton href={LINKS.calendly} variant="ghost-light">Book a call</LinkButton>
            </div>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            <div>
              <h2 className="label text-dim">Carnival</h2>
              <ul className="mt-3 grid">
                {NAV.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="inline-flex min-h-11 items-center hover:text-field">{i.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label text-dim">Take part</h2>
              <ul className="mt-3 grid">
                {MORE.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="inline-flex min-h-11 items-center hover:text-field">{i.label}</Link>
                  </li>
                ))}
                <li><a href={LINKS.forms.speaker} className="inline-flex min-h-11 items-center hover:text-field" target="_blank" rel="noreferrer">Apply to speak</a></li>
                <li><a href={LINKS.forms.sponsor} className="inline-flex min-h-11 items-center hover:text-field" target="_blank" rel="noreferrer">Apply to sponsor</a></li>
              </ul>
            </div>
            <div>
              <h2 className="label text-dim">Follow</h2>
              <ul className="mt-3 grid">
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} className="inline-flex min-h-11 items-center hover:text-field" target="_blank" rel="noreferrer">{s.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-col gap-6 pt-8 text-sm text-dim md:flex-row md:items-center">
          <Logo size={40} keyline />
          <p>
            Web3 Carnival is powered by{" "}
            <a href={LINKS.threeway} className="text-paper underline" target="_blank" rel="noreferrer">Threeway Studio</a>.{" "}
            <a href={`mailto:${LINKS.email}`} className="text-paper underline">{LINKS.email}</a>
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 md:ml-auto">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center hover:text-paper" target="_blank" rel="noreferrer">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 max-w-[80ch] text-xs text-dim">
          Concept redesign for the Kalakriti competition. Content, speakers and partners are from web3carnival.world. The next edition shown here (Bengaluru, 9–13 December 2026) is illustrative for this concept, not an announcement.
        </p>
      </div>
    </footer>
  );
}
