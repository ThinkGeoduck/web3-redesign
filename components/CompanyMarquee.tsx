import { COMPANIES, PARTNER_LOGOS } from "@/lib/data";

type Item = { name: string; logo: string };

function Row({ label, items, reverse = false, tall = false }: { label: string; items: Item[]; reverse?: boolean; tall?: boolean }) {
  // Rendered twice so the loop can translate by exactly -50%.
  const loop = [...items, ...items];
  return (
    <div className="grid items-center gap-3 md:grid-cols-[11rem_1fr]">
      <p className="label px-4 text-slate sm:px-8 md:pl-12 md:pr-0">{label}</p>
      <div className="marquee-mask overflow-hidden">
        <ul
          className={`marquee-track flex w-max items-center ${reverse ? "marquee-reverse" : ""}`}
          style={{ animationDuration: `${items.length * 4.2}s` }}
        >
          {loop.map((c, i) => (
            <li key={`${c.name}-${i}`} className={`flex shrink-0 items-center justify-center px-7 sm:px-10 ${tall ? "h-20" : "h-16"} ${i >= items.length ? "marquee-dup" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.logo}
                alt={i < items.length ? c.name : ""}
                loading="lazy"
                decoding="async"
                className={`logo-mark w-auto max-w-[180px] object-contain ${tall ? "h-10 sm:h-12" : "h-8 sm:h-10"}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Two logo rows drifting in opposite directions. Row one: the best-known
// companies past speakers work for. Row two: actual partners of past editions.
// Logos are monochrome until hovered, and rows pause on hover.
export function CompanyMarquee() {
  const employers = COMPANIES.filter((c) => c.kind === "speaker" && c.logo) as Item[];
  const partners = [
    ...COMPANIES.filter((c) => c.name === "TON"),
    ...PARTNER_LOGOS,
  ] as Item[];

  return (
    <section aria-labelledby="companies-title" className="border-b border-ink/10 bg-mist py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <h2 id="companies-title" className="display text-[clamp(1.8rem,3vw,2.6rem)]">
          In the room
        </h2>
      </div>
      <div className="group mt-8 grid gap-4">
        <Row label="Speakers from" items={employers} tall />
        <Row label="Partnered with" items={partners} reverse />
      </div>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <details className="mt-8">
          <summary className="cursor-pointer text-sm font-semibold text-leaf underline decoration-2 underline-offset-4">
            How each company is connected
          </summary>
          <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {[...COMPANIES, ...PARTNER_LOGOS.filter((p) => !COMPANIES.some((c) => c.name === p.name))].map((c) => (
              <li key={c.name} className="border-t border-ink/10 pt-3">
                <p className="font-bold">{c.name}</p>
                <p className="text-sm text-slate">{c.relation}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-[80ch] text-xs text-slate">
            &ldquo;Speakers from&rdquo; shows the current employers of past speakers as listed on web3carnival.world. Those companies did not sponsor Web3 Carnival and do not endorse it. &ldquo;Partnered with&rdquo; shows actual sponsors and partners of past editions. Company marks are the property of their owners.
          </p>
        </details>
      </div>
    </section>
  );
}
