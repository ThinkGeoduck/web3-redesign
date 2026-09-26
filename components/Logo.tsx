import { LOGO_SRC } from "@/lib/data";

// The official Web3 Carnival mark, used unchanged. On navy grounds it gets a
// Ticket White keyline so the navy tile does not disappear.
export function Logo({ size = 48, keyline = false, className = "" }: { size?: number; keyline?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      width={size}
      height={size}
      alt="Web3 Carnival"
      className={`block shrink-0 ${keyline ? "outline-[1.5px] outline-paper" : ""} ${className}`}
    />
  );
}
