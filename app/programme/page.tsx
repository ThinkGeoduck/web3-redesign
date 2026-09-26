import type { Metadata } from "next";
import { PageHero, Container } from "@/components/PageHero";
import { RoleFilter } from "@/components/RoleFilter";
import { LinkButton } from "@/components/Button";
import { AWARD_CATEGORIES, LINKS, PROGRAMME, ROLES, type Role } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programme",
  description: "Seven themed Cons, Demo Night, the Web3 Carnival Awards and daily side events.",
};

export default async function ProgrammePage({ searchParams }: { searchParams: Promise<{ role?: string | string[] }> }) {
  const { role } = await searchParams;
  const initial = (Array.isArray(role) ? role : role ? [role] : []).filter((r): r is Role => ROLES.includes(r as Role));

  return (
    <>
      <PageHero
        title="The programme"
        intro="Seven themed Cons run through the week, with Demo Night, the Awards and side events around them. Tell us who you are and we will show you where to start."
      />

      <section className="bg-nebula text-paper">
        <Container className="py-20 sm:py-28">
          <RoleFilter key={initial.join(",")} initial={initial} detailed />
        </Container>
      </section>

      <section className="bg-mist">
        <Container className="py-24 sm:py-32">
          <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">Every Con</h2>
          <div className="mt-14 border-t-2 border-ink">
            {PROGRAMME.map((p) => (
              <article key={p.id} id={p.id} className="grid scroll-mt-24 gap-6 border-b border-ink/15 py-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h3 className="display text-[clamp(2rem,4vw,3.2rem)]">{p.name}</h3>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="text-lg leading-relaxed">{p.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    <li className="rounded-[2px] bg-night px-2 py-1 text-sm font-semibold text-paper">{p.kind}</li>
                    {p.topics.map((t) => (
                      <li key={t} className="rounded-[2px] bg-field/40 px-2 py-1 text-sm font-semibold text-leaf">{t}</li>
                    ))}
                  </ul>
                  <p className="label mt-5 text-slate">Suggested for {p.roles.join(" · ")}</p>
                  {p.id === "demo-night" && (
                    <div className="mt-6"><LinkButton href={LINKS.forms.superDemo} variant="secondary">Apply to demo</LinkButton></div>
                  )}
                  {p.id === "awards" && (
                    <details className="mt-6">
                      <summary className="cursor-pointer font-semibold text-leaf underline decoration-2 underline-offset-4">
                        Past award categories ({AWARD_CATEGORIES.length})
                      </summary>
                      <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                        {AWARD_CATEGORIES.map((a) => (
                          <li key={a} className="text-[0.95rem]">{a}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[6px] bg-paper-2 p-6 sm:p-8">
            <h3 className="display text-3xl">Agenda</h3>
            <p className="mt-3 max-w-[60ch] text-slate">
              The session-by-session agenda for the next edition has not been published. It will appear here, filterable by Con and by role, once the organisers announce it.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
