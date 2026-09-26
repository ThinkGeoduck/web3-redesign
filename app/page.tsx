import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/Button";
import { RoleFilter } from "@/components/RoleFilter";
import { PartnerWall } from "@/components/PartnerWall";
import { VideoReel } from "@/components/VideoReel";
import { Hero } from "@/components/Hero";
import { CompanyMarquee } from "@/components/CompanyMarquee";
import { Countdown } from "@/components/Countdown";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/PageHero";
import {
  HEADLINERS,
  INVOLVEMENT,
  LINKS,
  NEXT_EDITION,
  PARTNER_GROUPS,
  PAST_EVENTS,
  PROGRAMME,
  ROLES,
  SPEAKERS,
  STOPS,
} from "@/lib/data";

const CONS = PROGRAMME.filter((p) => p.kind === "Con");
const headliners = HEADLINERS.map((n) => SPEAKERS.find((s) => s.name === n)!).filter(Boolean);
const supporting = SPEAKERS.filter((s) => !HEADLINERS.includes(s.name)).slice(0, 24);
const pastStops = STOPS.filter((s) => !s.placeholder).reverse();
const [attend, ...doors] = INVOLVEMENT.slice(0, 4);

// Text links get a 44px hit area without changing their visual size.
const textLink = "inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-2 underline-offset-4";

export default function Home() {
  return (
    <>
      <Hero />

      <CompanyMarquee />

      {/* ---------------- What it is + reel ---------------- */}
      <section className="bg-mist">
        <Container className="grid gap-12 pb-16 pt-24 sm:pb-20 sm:pt-32 lg:grid-cols-12">
          <h2 className="display text-[clamp(3rem,7vw,6rem)] lg:col-span-6">
            Not a conference.<br />
            <span className="riso text-leaf">A carnival.</span>
          </h2>
          <div className="grid content-start gap-6 text-lg leading-relaxed lg:col-span-5 lg:col-start-8">
            <p>
              Most Web3 events are one stage and one lanyard. Web3 Carnival runs like a festival: a flagship week of themed Cons, with side events every day, then stops in cities across Asia and the Middle East.
            </p>
            <p className="text-slate">
              It started as a week at Palm Meadows, Bengaluru, in December 2023. Since then it has travelled to Dubai, Singapore and Delhi, and back across India: {PAST_EVENTS.length} events and {SPEAKERS.length} speakers so far.
            </p>
          </div>
        </Container>
        <Container className="pb-24 sm:pb-32">
          <VideoReel
            src="/media/reel.mp4"
            poster="/media/reel-poster.jpg"
            label="Footage from past Web3 Carnival editions: crowds, stages, demos and side events"
          />
        </Container>
      </section>

      {/* ---------------- Next edition ---------------- */}
      <section className="bg-nebula text-paper">
        <Container className="grid items-center gap-12 py-24 sm:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">{NEXT_EDITION.name}</h2>
            <p className="mt-6 max-w-[42ch] text-lg text-dim">{NEXT_EDITION.note}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/register">Get on the list</LinkButton>
              <LinkButton href="/event" variant="ghost-light">What to expect</LinkButton>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="notched grid grid-cols-[1fr_auto_auto] rounded-[6px] bg-paper text-ink shadow-[0_30px_50px_-28px_rgba(0,0,0,.8)] [--notch:calc(100%-96px)] sm:-rotate-2 sm:[--notch:calc(100%-120px)]">
              <div className="min-w-0 p-5 sm:p-8">
                <p className="display text-[clamp(2.2rem,5vw,3.6rem)]">Admit one</p>
                <p className="display mt-2 text-lg text-leaf sm:text-xl">{ROLES.join(" × ")}</p>
                <dl className="mt-6 grid gap-3 border-t border-ink/15 pt-5 sm:mt-8 sm:grid-cols-3 sm:gap-4">
                  {[
                    ["Date", NEXT_EDITION.date],
                    ["City", NEXT_EDITION.city],
                    ["Venue", NEXT_EDITION.venue],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-baseline gap-3 sm:block">
                      <dt className="label w-12 text-slate sm:w-auto">{k}</dt>
                      <dd className="text-sm font-semibold sm:mt-1">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="perf-v my-4" aria-hidden />
              <div className="flex w-[94px] flex-col items-center justify-center gap-3 p-3 text-center sm:w-[118px] sm:p-4">
                <Countdown className="barker text-[2.2rem] leading-[0.9] text-leaf sm:text-[2.8rem]" suffix={false} />
                <span className="label text-slate">days to go</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- The Cons ---------------- */}
      <section className="on-tint bg-sand">
        <Container className="py-24 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">Seven Cons.<br />One carnival.</h2>
              <p className="mt-4 max-w-[48ch] text-lg">A Con is a themed conference track with its own talks and panels. Go deep on one, or wander between all seven.</p>
            </div>
            <Link href="/programme" className={`group ${textLink}`}>
              See the programme <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ol className="mt-14 border-t-2 border-paper/40">
            {CONS.map((c, i) => (
              <Reveal as="li" key={c.id} delay={0.04 * i} className="border-b-2 border-paper/40">
                <Link href={`/programme#${c.id}`} className="group grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <span className="display text-[clamp(1.9rem,4.4vw,3.6rem)] transition-colors group-hover:text-leaf sm:col-span-7">
                    {c.name.replace(" Con", "")}
                    <span className="opacity-55"> Con</span>
                  </span>
                  <span className="sm:col-span-5">{c.summary}</span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------------- Intersection ---------------- */}
      <section className="bg-nebula text-paper">
        <Container className="grid gap-12 py-24 sm:py-32 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display text-[clamp(2.8rem,5.4vw,4.6rem)]">Where do you fit?</h2>
            <p className="mt-6 max-w-[36ch] text-lg text-dim">
              Founders, builders, developers, investors and creators all come for different reasons. Pick yours and the programme sorts itself around you.
            </p>
            <Link href="/ecosystem" className={`mt-4 text-paper ${textLink}`}>
              Who else comes <ArrowRight aria-hidden className="size-5" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <RoleFilter limit={6} />
          </div>
        </Container>
      </section>

      {/* ---------------- Lineup ---------------- */}
      <section className="bg-mist">
        <Container className="py-24 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">Past lineup</h2>
            <Link href="/speakers" className={`group text-leaf ${textLink}`}>
              All {SPEAKERS.length} speakers <ArrowRight aria-hidden className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {headliners.map((s, i) => (
              <Reveal as="li" key={s.name} delay={0.05 * i}>
                <figure className="group">
                  <div className={`relative aspect-[4/5] overflow-hidden rounded-[2px] ${"bg-field"}`}>
                    <Image
                      src={s.photo}
                      alt=""
                      fill
                      sizes="(min-width:1024px) 16vw, (min-width:640px) 30vw, 45vw"
                      className="portrait-treatment object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <p className="display text-[clamp(1.4rem,2vw,1.8rem)] leading-[0.9]">{s.name}</p>
                    <p className="mt-1.5 text-sm text-slate">{s.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>

          <p className="mt-14 border-t-2 border-ink pt-6 leading-[1.15]" aria-label="More past speakers">
            {supporting.map((s, i) => (
              <span key={s.name} className={`display mr-[0.4em] inline-block ${i < 8 ? "text-[clamp(1.5rem,3vw,2.4rem)]" : "text-[clamp(1.1rem,2vw,1.6rem)] text-slate"}`}>
                {s.name}
              </span>
            ))}
            <Link href="/speakers" className="display inline-flex min-h-11 items-center text-[clamp(1.1rem,2vw,1.6rem)] text-leaf underline decoration-2 underline-offset-4">
              & many more
            </Link>
          </p>
        </Container>
      </section>

      {/* ---------------- Past stops: tour dates ---------------- */}
      <section className="on-tint bg-tide">
        <Container className="grid gap-12 py-24 sm:py-32 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">On tour since 2023</h2>
            <p className="mt-6 max-w-[34ch] text-lg text-dim">Every stop so far, newest first. Next up: back to Bengaluru, where it started.</p>
            <Link href="/archive" className={`mt-4 text-paper ${textLink}`}>
              Every past event <ArrowRight aria-hidden className="size-5" />
            </Link>
          </div>
          <ol className="relative border-t-2 border-paper/25 pl-5 sm:pl-7 lg:col-span-8">
            <span aria-hidden className="tour-line absolute bottom-0 left-0 top-0 w-[3px] rounded-full bg-leaf" />
            <li className="border-b-2 border-paper/25">
              <Link href="/register" className="group grid grid-cols-[5.5rem_1fr_auto] items-baseline gap-4 py-5 sm:grid-cols-[7rem_1fr_auto]">
                <span className="display text-xl text-field">Dec 2026</span>
                <span>
                  <span className="display block text-[clamp(1.8rem,4vw,3rem)] text-field">{NEXT_EDITION.city}</span>
                  <span className="mt-1 block text-sm text-dim">Next stop · {NEXT_EDITION.date}, {NEXT_EDITION.venueLong}</span>
                </span>
                <span className="label hidden text-dim group-hover:text-paper sm:block">Join the list</span>
              </Link>
            </li>
            {pastStops.map((s) => (
              <li key={s.city + s.when} className="border-b-2 border-paper/25">
                <Link href={`/archive#${s.anchor}`} className="group grid grid-cols-[5.5rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[7rem_1fr_auto]">
                  <span className="display text-xl text-dim">{s.when}</span>
                  <span>
                    <span className="display block text-[clamp(1.8rem,4vw,3rem)] transition-colors group-hover:text-field">{s.city}</span>
                    <span className="mt-1 block text-sm text-dim">{s.note}</span>
                  </span>
                  <ArrowRight aria-hidden className="hidden size-6 text-dim transition-transform group-hover:translate-x-1 group-hover:text-paper sm:block" />
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------------- Partners ---------------- */}
      <section className="bg-mist">
        <Container className="py-24 sm:py-32">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">Past partners</h2>
            <LinkButton href={LINKS.forms.sponsor} variant="secondary">Become a sponsor</LinkButton>
          </div>
          <PartnerWall groups={[PARTNER_GROUPS[0], PARTNER_GROUPS[1]]} />
          <Link href="/partners" className={`mt-8 text-leaf ${textLink}`}>
            Community partners, media partners and more <ArrowRight aria-hidden className="size-5" />
          </Link>
        </Container>
      </section>

      {/* ---------------- Get involved ---------------- */}
      <section className="on-tint bg-peach">
        <Container className="py-28 sm:py-36">
          <Reveal>
            <h2 className="display text-[clamp(3rem,8vw,7rem)]">Pick your door</h2>
            <p className="mt-4 max-w-[46ch] text-lg">Four ways into the carnival. Each one goes straight to its form, one click away.</p>
          </Reveal>
          <ul className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-3 lg:gap-5">
            {/* Attend: the big door. Double frame: a tinted tray around an ink core. */}
            <Reveal as="li" className="lg:col-span-7 lg:row-span-3">
              <div className="h-full rounded-[2rem] bg-[rgba(31,27,46,.06)] p-1.5 ring-1 ring-[rgba(31,27,46,.08)]">
                <div className="on-night relative flex h-full flex-col justify-between gap-12 overflow-hidden rounded-[calc(2rem-0.375rem)] bg-night p-7 text-paper shadow-[inset_0_1px_0_rgba(255,255,255,.08)] sm:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="barker text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.9]">{attend.title}</h3>
                      <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-dim">{attend.text}</p>
                    </div>
                    <p className="shrink-0 text-right">
                      <Countdown className="barker block text-[clamp(3rem,6vw,5rem)] leading-[0.85] text-field" suffix={false} />
                      <span className="label text-dim">days to go</span>
                    </p>
                  </div>
                  <div>
                    <div className="perf-h mb-6 text-paper" aria-hidden />
                    <dl className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                      {[
                        ["Dates", NEXT_EDITION.date],
                        ["City", NEXT_EDITION.city],
                        ["Venue", NEXT_EDITION.venue],
                      ].map(([k, v]) => (
                        <div key={k} className="flex items-baseline justify-between gap-4 sm:block">
                          <dt className="label text-dim">{k}</dt>
                          <dd className="barker mt-1.5 text-[clamp(0.9rem,1.4vw,1.15rem)]">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <LinkButton href={attend.href} className="mt-8 w-full sm:w-auto">{attend.cta}</LinkButton>
                  </div>
                </div>
              </div>
            </Reveal>

            {doors.map((d, i) => (
              <Reveal as="li" key={d.id} delay={0.08 * (i + 1)} className="lg:col-span-5">
                <a
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/door block h-full rounded-[2rem] bg-[rgba(31,27,46,.06)] p-1.5 ring-1 ring-[rgba(31,27,46,.08)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.99] [@media(hover:hover)]:hover:-translate-y-1"
                >
                  <div className="on-night flex h-full items-center justify-between gap-6 rounded-[calc(2rem-0.375rem)] bg-paper p-6 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,.7),0_18px_40px_-28px_rgba(31,27,46,.35)] transition-shadow duration-500 sm:p-7 [@media(hover:hover)]:group-hover/door:shadow-[inset_0_1px_0_rgba(255,255,255,.7),0_30px_50px_-26px_rgba(31,27,46,.45)]">
                    <div>
                      <h3 className="barker text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[0.95]">{d.title}</h3>
                      <p className="mt-2 max-w-[36ch] text-[0.95rem] leading-relaxed text-slate">{d.text}</p>
                    </div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-night text-paper transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] [@media(hover:hover)]:group-hover/door:-translate-y-0.5 [@media(hover:hover)]:group-hover/door:translate-x-0.5 [@media(hover:hover)]:group-hover/door:scale-110">
                      <ArrowUpRight aria-hidden className="size-5" strokeWidth={1.9} />
                    </span>
                  </div>
                  <span className="sr-only"> ({d.cta}, opens in a new tab)</span>
                </a>
              </Reveal>
            ))}
          </ul>
          <Link href="/get-involved" className={`mt-10 ${textLink}`}>
            Media, community, volunteers and affiliates <ArrowRight aria-hidden className="size-5" />
          </Link>
        </Container>
      </section>
    </>
  );
}
