// Every inner page opens on a full colour field with the title set as a poster.
export function PageHero({
  title,
  intro,
  tone = "field",
  children,
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "field" | "night";
  children?: React.ReactNode;
}) {
  return (
    <section className={`relative ${tone === "field" ? "on-field bg-hero" : "bg-nebula text-paper"}`}>
      <div className="page-in mx-auto max-w-[1440px] px-4 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
        <h1 className="display max-w-[14ch] text-[clamp(3.4rem,10vw,8.5rem)]">{title}</h1>
        {intro && <div className="mt-8 max-w-[58ch] text-lg leading-relaxed text-paper/90 sm:text-xl">{intro}</div>}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}
