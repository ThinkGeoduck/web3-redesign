/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Deck } from "./Deck";
import {
  AUDIENCES,
  COMPANIES,
  FIGURES,
  LINKS,
  NEXT_EDITION,
  PARTNER_LOGOS,
  PAST_EVENTS,
  PROGRAMME,
  SPEAKERS,
  STOPS,
  regionOf,
  REGIONS,
} from "@/lib/data";
import { WORDMARK_PATH, WORDMARK_VIEWBOX } from "@/lib/wordmark";

export const metadata: Metadata = {
  title: "Company overview",
  description: "Web3 Carnival company overview deck: who we are, the format, the community, and the next edition.",
};

const CONS = PROGRAMME.filter((p) => p.kind === "Con");
const FACES = ["Lisa JY Tan", "Anish Mohammed", "Evan Luthra", "Ajeet Khurana", "Nadja Bester", "Kanishka Agiwal", "Raj Kapoor", "Vidhi Doshi", "Masayuki Tani", "Astha Yadav", "Vinit Sinha", "Kunal Kumar"]
  .map((n) => SPEAKERS.find((s) => s.name === n)!)
  .filter(Boolean);
const PAST = STOPS.filter((s) => !s.placeholder);
const regionCounts = REGIONS.map((r) => ({ r, n: SPEAKERS.filter((s) => regionOf(s.location) === r).length }));

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox={WORDMARK_VIEWBOX} className={`block fill-current ${className}`}>
      <path d={WORDMARK_PATH} fillRule="evenodd" />
    </svg>
  );
}

// Every slide shares a frame: 120px margins, a small wordmark and page
// number in the footer, and one of the site's gradient grounds.
function Slide({
  ground,
  n,
  children,
  dark = false,
}: {
  ground: string;
  n: number;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`${ground} absolute inset-0 flex flex-col px-[120px] pb-[72px] pt-[104px] ${dark ? "text-paper" : "text-ink"}`}>
      <div className="flex-1">{children}</div>
      <footer className={`flex items-center justify-between text-[18px] font-semibold ${dark ? "text-paper/70" : "text-ink/60"}`}>
        <Wordmark className="h-[34px] w-auto" />
        <span className="data">{String(n).padStart(2, "0")}</span>
      </footer>
    </section>
  );
}

const slides = [
  // 1 — Cover
  <section key="cover" className="bg-hero absolute inset-0 flex flex-col justify-between px-[120px] py-[104px] text-ink">
    <p className="barker text-[34px] tracking-[0.04em]">Company overview · 2026</p>
    <div>
      <Wordmark className="w-[1180px]" />
      <p className="barker mt-[56px] text-[40px]">A festival of Web3 events</p>
    </div>
    <p className="max-w-[900px] text-[26px] leading-snug text-ink/75">
      Founders, builders, developers, investors and creators, together for a week of themed Cons, Demo Night, awards and a side event every night.
    </p>
  </section>,

  // 2 — What we are
  <Slide key="what" ground="bg-mist" n={2}>
    <div className="grid h-full grid-cols-12 gap-[60px]">
      <h2 className="display col-span-7 text-[180px] leading-[0.84]">
        Not a conference.
        <br />
        <span className="text-leaf">A carnival.</span>
      </h2>
      <div className="col-span-5 self-end text-[30px] leading-[1.45]">
        <p>
          Most Web3 events are one stage and one lanyard. Web3 Carnival runs like a festival: a flagship week of themed Cons, with side events every day, then stops in cities across Asia and the Middle East.
        </p>
        <p className="mt-[28px] text-slate">
          Organised by Threeway Studio. Started as a week at Palm Meadows, Bengaluru, in December 2023.
        </p>
      </div>
    </div>
  </Slide>,

  // 3 — By the numbers
  <Slide key="numbers" ground="bg-nebula" n={3} dark>
    <h2 className="display text-[120px] leading-[0.9]">By the numbers</h2>
    <div className="mt-[80px] grid grid-cols-3 gap-x-[80px] gap-y-[64px]">
      {FIGURES.map((f) => (
        <div key={f.label} className="border-t-2 border-white/25 pt-[24px]">
          <p className="display data text-[140px] leading-[0.85] text-field">{f.value}</p>
          <p className="mt-[16px] text-[28px] text-paper/80">{f.label}</p>
        </div>
      ))}
    </div>
    <p className="mt-[48px] text-[20px] text-paper/60">Figures as reported by Web3 Carnival across past editions.</p>
  </Slide>,

  // 4 — The format
  <Slide key="format" ground="bg-mist" n={4}>
    <h2 className="display text-[120px] leading-[0.9]">How the carnival runs</h2>
    <div className="mt-[72px] grid grid-cols-4 gap-[32px]">
      {[
        ["Seven Cons", "Themed conference tracks, each with its own talks and panels."],
        ["Demo Night", "Startups demo to investors, incubators and accelerators in one room."],
        ["The Awards", "Categories from security and education to gaming, journalism and UX."],
        ["Side events", "Pitch battles, founder and funder nights, meetups, dinners and launches."],
      ].map(([t, d], k) => (
        <div key={t} className={`flex h-[460px] flex-col justify-between rounded-[32px] p-[40px] ${k === 0 ? "bg-night text-paper" : "bg-white/70 ring-1 ring-ink/10"}`}>
          <span aria-hidden className={`block size-[18px] rounded-full ${k === 0 ? "bg-field" : "bg-leaf"}`} />
          <div>
            <h3 className="barker text-[38px] leading-[1]">{t}</h3>
            <p className={`mt-[16px] text-[24px] leading-snug ${k === 0 ? "text-paper/75" : "text-slate"}`}>{d}</p>
          </div>
        </div>
      ))}
    </div>
  </Slide>,

  // 5 — Seven Cons
  <Slide key="cons" ground="bg-sand" n={5}>
    <div className="grid grid-cols-12 gap-[60px]">
      <h2 className="display col-span-4 text-[132px] leading-[0.86]">
        Seven Cons.
        <br />
        One carnival.
      </h2>
      <ol className="col-span-8 border-t-2 border-ink/30">
        {CONS.map((c) => (
          <li key={c.id} className="flex items-baseline justify-between gap-[40px] border-b-2 border-ink/30 py-[16px]">
            <span className="display text-[58px] leading-[1]">
              {c.name.replace(" Con", "")}
              <span className="opacity-50"> Con</span>
            </span>
            <span className="max-w-[420px] text-right text-[20px] leading-snug text-ink/70">{c.topics.join(" · ")}</span>
          </li>
        ))}
      </ol>
    </div>
  </Slide>,

  // 6 — On tour
  <Slide key="tour" ground="bg-tide" n={6}>
    <h2 className="display text-[132px] leading-[0.86]">On tour since 2023</h2>
    <p className="mt-[20px] text-[28px] text-ink/75">{PAST_EVENTS.length} events across India, the UAE and Singapore.</p>
    <div className="relative mt-[96px]">
      <div className="absolute left-0 right-0 top-[27px] h-[4px] rounded-full bg-leaf" />
      <ol className="relative grid grid-cols-6 gap-[24px]">
        {PAST.map((s) => (
          <li key={s.city + s.when}>
            <span className="block size-[58px] rounded-full border-[6px] border-leaf bg-paper" />
            <p className="data mt-[28px] text-[22px] font-semibold text-ink/70">{s.when}</p>
            <p className="display mt-[6px] text-[52px] leading-[0.9]">{s.city}</p>
            <p className="mt-[12px] text-[20px] leading-snug text-ink/70">{s.note}</p>
          </li>
        ))}
      </ol>
    </div>
  </Slide>,

  // 7 — Who comes
  <Slide key="audience" ground="bg-mist" n={7}>
    <h2 className="display text-[120px] leading-[0.9]">Eight kinds of ticket</h2>
    <div className="mt-[64px] grid grid-cols-4 gap-[24px]">
      {AUDIENCES.map((a, k) => (
        <div key={a.name} className={`h-[270px] rounded-[28px] p-[32px] ${["bg-night text-paper", "bg-field", "bg-white/75 ring-1 ring-ink/10", "bg-leaf text-paper"][k % 4]}`}>
          <h3 className="display text-[44px] leading-[0.9]">{a.name}</h3>
          <p className="mt-[16px] text-[21px] leading-snug opacity-85">{a.text}</p>
        </div>
      ))}
    </div>
  </Slide>,

  // 8 — Speakers
  <Slide key="speakers" ground="bg-mist" n={8}>
    <div className="grid grid-cols-12 gap-[60px]">
      <div className="col-span-4">
        <h2 className="display text-[132px] leading-[0.86]">{SPEAKERS.length} past speakers</h2>
        <p className="mt-[32px] text-[26px] leading-snug text-slate">Founders, investors, researchers, lawyers and artists.</p>
        <ul className="mt-[40px] space-y-[12px]">
          {regionCounts.map(({ r, n }) => (
            <li key={r} className="flex items-center gap-[16px] text-[22px]">
              <span className="w-[170px] font-semibold">{r}</span>
              <span className="h-[12px] rounded-full bg-leaf" style={{ width: `${(n / 32) * 280}px` }} />
              <span className="data font-bold">{n}</span>
            </li>
          ))}
        </ul>
      </div>
      <ul className="col-span-8 grid grid-cols-4 gap-[20px]">
        {FACES.slice(0, 8).map((s) => (
          <li key={s.name}>
            <div className="h-[300px] overflow-hidden rounded-[6px] bg-field">
              <img src={s.photo} alt={s.name} className="portrait-treatment h-full w-full object-cover object-top" />
            </div>
            <p className="display mt-[12px] text-[30px] leading-[0.9]">{s.name}</p>
            <p className="mt-[6px] line-clamp-2 text-[17px] leading-snug text-slate">{s.role}</p>
          </li>
        ))}
      </ul>
    </div>
  </Slide>,

  // 9 — In the room
  <Slide key="room" ground="bg-mist" n={9}>
    <h2 className="display text-[120px] leading-[0.9]">In the room</h2>
    <p className="mt-[36px] text-[24px] font-semibold text-slate">Speakers from</p>
    <div className="mt-[20px] grid grid-cols-7 items-center gap-[40px] rounded-[28px] bg-white/70 px-[48px] py-[40px] ring-1 ring-ink/10">
      {COMPANIES.filter((c) => c.kind === "speaker" && c.logo).map((c) => (
        <img key={c.name} src={c.logo} alt={c.name} className="logo-mark mx-auto h-[64px] w-auto max-w-[190px] object-contain" />
      ))}
    </div>
    <p className="mt-[40px] text-[24px] font-semibold text-slate">Partnered with</p>
    <div className="mt-[20px] grid grid-cols-7 items-center gap-x-[40px] gap-y-[28px] rounded-[28px] bg-white/70 px-[48px] py-[36px] ring-1 ring-ink/10">
      {PARTNER_LOGOS.slice(0, 14).map((c) => (
        <img key={c.name} src={c.logo} alt={c.name} className="logo-mark mx-auto h-[48px] w-auto max-w-[170px] object-contain" />
      ))}
    </div>
    <p className="mt-[20px] text-[17px] text-slate">Speaker employers did not sponsor Web3 Carnival. Marks belong to their owners.</p>
  </Slide>,

  // 10 — Pillar
  <Slide key="pillar" ground="bg-peach" n={10}>
    <div className="grid h-full grid-cols-12 items-end gap-[60px] pb-[40px]">
      <h2 className="display col-span-7 text-[138px] leading-[0.86]">
        Empowering women.
        <br />
        Accelerating startups.
      </h2>
      <p className="col-span-5 text-[30px] leading-[1.45]">
        Two commitments sit at the centre of Web3 Carnival: empowering women in Web3, and putting early startups in front of the mentors and investors who can move them forward.
      </p>
    </div>
  </Slide>,

  // 11 — Next edition (illustrative)
  <Slide key="next" ground="bg-hero" n={11}>
    <div className="grid grid-cols-12 gap-[60px]">
      <div className="col-span-6">
        <p className="barker text-[28px]">Next stop</p>
        <h2 className="display mt-[20px] text-[160px] leading-[0.84]">{NEXT_EDITION.name}</h2>
        <p className="mt-[40px] max-w-[720px] text-[28px] leading-snug text-ink/80">{NEXT_EDITION.note}</p>
      </div>
      <div className="col-span-6 self-center">
        <div className="-rotate-3 rounded-[16px] bg-paper p-[48px] text-ink shadow-[0_60px_90px_-40px_rgba(31,27,46,.6)]">
          <div className="flex items-start justify-between">
            <p className="barker text-[60px] leading-[0.95]">Admit<br />one</p>
            <p className="display text-[40px] leading-[1] text-leaf">Founder × Builder<br />× Investor</p>
          </div>
          <div className="mt-[40px] grid grid-cols-3 gap-[24px] border-t-2 border-ink/15 pt-[28px]">
            {[
              ["Dates", NEXT_EDITION.date],
              ["City", NEXT_EDITION.city],
              ["Venue", "BIEC"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[20px] font-semibold text-slate">{k}</p>
                <p className="barker mt-[8px] text-[30px]">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-[72px] inline-block rounded-full bg-paper/85 px-[20px] py-[10px] text-[18px] font-semibold text-ink/75">Illustrative edition for this concept, not an announcement.</p>
      </div>
    </div>
  </Slide>,

  // 12 — Get involved
  <Slide key="involved" ground="bg-peach" n={12}>
    <h2 className="display text-[132px] leading-[0.86]">Pick your door</h2>
    <div className="mt-[64px] grid grid-cols-4 gap-[28px]">
      {[
        ["Attend", "Join the list for the next edition.", "web3carnival.world/register", true],
        ["Speak", "Share what you are building.", "tally.so/r/w8ar2x", false],
        ["Partner", "Sponsor and reach the people building Web3.", "tally.so/r/nraYpv", false],
        ["Demo", "Pitch to investors and accelerators.", "tally.so/r/nP1r4b", false],
      ].map(([t, d, u, primary]) => (
        <div
          key={t as string}
          className={`flex h-[440px] flex-col justify-between rounded-[32px] p-[40px] ${primary ? "bg-night text-paper" : "bg-paper/90 ring-1 ring-ink/10"}`}
        >
          <h3 className="barker text-[58px] leading-[0.9]">{t}</h3>
          <div>
            <p className={`text-[26px] leading-snug ${primary ? "text-paper/80" : "text-slate"}`}>{d}</p>
            <p className={`data mt-[20px] text-[20px] font-bold ${primary ? "text-field" : "text-leaf"}`}>{u}</p>
          </div>
        </div>
      ))}
    </div>
  </Slide>,

  // 13 — Close
  <section key="close" className="bg-nebula absolute inset-0 flex flex-col justify-between px-[120px] py-[104px] text-paper">
    <Wordmark className="w-[520px] text-paper" />
    <h2 className="display text-[220px] leading-[0.84]">
      See you at
      <br />
      <span className="text-field">the next stop.</span>
    </h2>
    <div className="flex items-end justify-between text-[26px]">
      <div className="space-y-[6px]">
        <p className="font-semibold">{LINKS.email}</p>
        <p className="text-paper/75">calendly.com/web3carnival · web3carnival.world</p>
      </div>
      <p className="text-paper/60">Powered by Threeway Studio</p>
    </div>
  </section>,
];

export default function DeckPage() {
  return <Deck slides={slides} />;
}
