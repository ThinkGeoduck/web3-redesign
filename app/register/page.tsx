import type { Metadata } from "next";
import { Container } from "@/components/PageHero";
import { RegisterFlow } from "@/components/RegisterFlow";

export const metadata: Metadata = {
  title: "Get on the list",
  description: "Register your interest in the next Web3 Carnival and get told first when tickets open.",
};

export default function RegisterPage() {
  return (
    <>
      <section className="on-field bg-hero">
        <Container className="pb-12 pt-32 sm:pb-16 sm:pt-40">
          <h1 className="display text-[clamp(3.4rem,10vw,8rem)]">Get on the list</h1>
          <p className="mt-6 max-w-[52ch] text-lg text-paper/90">
            Tickets for the next edition are not on sale yet. Three quick steps and you will be first to know when they are.
          </p>
        </Container>
      </section>
      <section className="overflow-x-clip bg-mist">
        <Container className="py-16 sm:py-24">
          <RegisterFlow />
        </Container>
      </section>
    </>
  );
}
