"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { LinkButton } from "./Button";
import { NAV, LINKS } from "@/lib/data";

const MOBILE_LINKS = [{ href: "/", label: "Home" }, ...NAV, { href: "/get-involved", label: "Get involved" }, { href: "/contact", label: "Contact" }];

// A floating plum pill instead of an edge-to-edge bar. It tucks away while
// the visitor reads downward and slides back the moment they scroll up. On
// desktop a single highlight glides between links under the pointer or
// keyboard focus; the current page carries a lilac dot.
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const lastY = useRef(0);

  // Hide on scroll down, reveal on scroll up. Never hidden near the top or
  // while the menu is open. rAF-throttled, passive listener.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        if (y < 120) setHidden(false);
        else if (delta > 6) setHidden(true);
        else if (delta < -6) setHidden(false);
        lastY.current = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation and lock page scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-field px-5 py-3 font-bold text-night focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header
        id="site-header"
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:px-5 sm:pt-4 ${
          hidden && !open ? "-translate-y-[130%]" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex h-[60px] max-w-[1280px] items-center gap-2 rounded-full bg-night/85 pl-2 pr-2 text-paper shadow-[0_18px_40px_-18px_rgba(31,27,46,.55),inset_0_1px_0_rgba(255,255,255,.08)] ring-1 ring-white/10 backdrop-blur-xl sm:h-16 sm:gap-4">
          <Link
            href="/"
            aria-label="Web3 Carnival home"
            className="group/logo flex shrink-0 items-center gap-3 rounded-full py-1 pl-1 pr-3 transition-colors hover:bg-white/5"
          >
            <span className="overflow-hidden rounded-[12px] ring-1 ring-white/15 transition-transform duration-300 ease-out group-active/logo:scale-95">
              <Logo size={44} />
            </span>
            <span className="barker hidden text-[0.8rem] leading-[1.05] tracking-[0.04em] xl:block">
              Web3
              <br />
              Carnival
            </span>
          </Link>

          <nav aria-label="Main" className="mx-auto hidden lg:block">
            <LayoutGroup>
              <ul className="flex items-center" onMouseLeave={() => setHovered(null)}>
                {NAV.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href} className="relative">
                      {hovered === item.href && (
                        <motion.span
                          layoutId="nav-highlight"
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-white/10"
                          transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
                        />
                      )}
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onMouseEnter={() => setHovered(item.href)}
                        onFocus={() => setHovered(item.href)}
                        onBlur={() => setHovered(null)}
                        className={`relative flex h-10 items-center rounded-full px-4 text-[0.9rem] font-semibold transition-colors duration-200 ${
                          active ? "text-field" : "text-paper/80 hover:text-paper"
                        }`}
                      >
                        {item.label}
                        {active && (
                          <span aria-hidden className="absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-field" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </LayoutGroup>
          </nav>

          <LinkButton href="/register" className="ml-auto min-h-11 text-[0.88rem] lg:ml-0">
            Get on the list
          </LinkButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative grid size-11 shrink-0 place-items-center rounded-full bg-white/10 transition-transform duration-150 ease-out active:scale-95 lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {/* Two bars that rotate into an X. */}
            <span
              aria-hidden
              className={`absolute h-[2px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              aria-hidden
              className={`absolute h-[2px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto on-field px-5 pb-8 pt-28 lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul>
                {MOBILE_LINKS.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.04 * i, ease: [0.23, 1, 0.32, 1] }}
                      className="border-b border-paper/15"
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between py-3.5 ${active ? "text-leaf" : ""}`}
                      >
                        <span className="display text-[2.4rem]">{item.label}</span>
                        {active ? (
                          <span aria-hidden className="size-2.5 rounded-full bg-leaf" />
                        ) : (
                          <ArrowRight aria-hidden className="size-5 opacity-40" strokeWidth={1.9} />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-auto grid gap-3 pt-10">
              <LinkButton href="/register" className="w-full">Get on the list</LinkButton>
              <LinkButton href={LINKS.calendly} variant="ghost-light" className="w-full">Book a call</LinkButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
