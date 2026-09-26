import Image from "next/image";

// Static lilac-to-indigo gradient behind the hero. Loaded with priority since
// it is the first paint; nothing animates.
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Image
        src="/media/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* A soft lilac wash on the text side keeps the ink type readable over the violet blob. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(220,211,245,.62)_0%,rgba(220,211,245,.35)_45%,transparent_70%)]" />
    </div>
  );
}
