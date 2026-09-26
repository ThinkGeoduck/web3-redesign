import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center on-field">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-24 sm:px-8 lg:px-12">
        <p className="display text-[clamp(6rem,22vw,16rem)] leading-[0.8] text-leaf">404</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5vw,4rem)]">This tent is empty.</h1>
        <p className="mt-4 max-w-[46ch] text-lg text-paper/90">The page you were looking for has moved or never existed.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="/">Back to the carnival</LinkButton>
          <LinkButton href="/programme" variant="ghost-light">See the programme</LinkButton>
        </div>
      </div>
    </section>
  );
}
