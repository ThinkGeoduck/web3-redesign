import Image from "next/image";
import { PARTNER_GROUPS } from "@/lib/data";

export function PartnerWall({ groups = PARTNER_GROUPS }: { groups?: typeof PARTNER_GROUPS }) {
  return (
    <div className="grid gap-14">
      {groups.map((g) => (
        <section key={g.title} aria-labelledby={`pg-${g.title}`}>
          <h3 id={`pg-${g.title}`} className="display text-2xl">{g.title}</h3>
          <ul className="mt-5 grid grid-cols-2 border-l border-t border-ink/12 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
            {g.partners.map((p) => (
              <li key={p.name} className="border-b border-r border-ink/12 bg-paper">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-28 flex-col items-center justify-center gap-2 px-5 transition-colors hover:bg-white"
                >
                  <span className="relative block h-12 w-full">
                    <Image
                      src={p.logo}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-contain grayscale transition duration-300 group-hover:grayscale-0"
                    />
                  </span>
                  <span className="text-[0.72rem] font-semibold text-slate">{p.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
