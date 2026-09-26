import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "ghost-light";

const styles: Record<Variant, string> = {
  primary: "bg-field text-night shadow-[0_1px_0_rgba(31,27,46,.18),0_10px_24px_-14px_rgba(31,27,46,.55)]",
  secondary: "bg-night text-paper",
  ghost: "text-ink shadow-[inset_0_0_0_1.5px_var(--color-ink)]",
  "ghost-light": "text-paper shadow-[inset_0_0_0_1.5px_var(--color-paper)]",
};

// Pill button with the arrow nested in its own circle ("button in button").
// Press scales the whole pill; hover nudges only the inner circle, so the
// label never moves under the reader's eye.
export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = /^https?:|^mailto:|^tel:/.test(href);
  const Icon = external && !href.startsWith("mailto") && !href.startsWith("tel") ? ArrowUpRight : ArrowRight;
  const cls = `group/btn inline-flex min-h-12 items-center justify-between gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-[0.95rem] font-bold [font-stretch:105%] transition-transform duration-150 ease-out active:scale-[0.97] ${styles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="grid size-9 shrink-0 place-items-center rounded-full bg-[color-mix(in_oklab,currentColor_14%,transparent)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] [@media(hover:hover)]:group-hover/btn:-translate-y-px [@media(hover:hover)]:group-hover/btn:translate-x-0.5 [@media(hover:hover)]:group-hover/btn:scale-105"
      >
        <Icon className="size-[17px]" strokeWidth={1.9} />
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
        {href.startsWith("http") && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
