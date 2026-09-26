"use client";

import { motion } from "framer-motion";

// Soft entrance as content scrolls in: a short rise and fade. Runs once.
// The same initial state renders on server and client (no hydration
// mismatch); the site-wide MotionConfig reducedMotion="user" drops the rise
// for visitors who prefer reduced motion and keeps only the fade.
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </Tag>
  );
}
