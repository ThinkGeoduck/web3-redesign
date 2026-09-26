"use client";

import { MotionConfig } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  // Respect the visitor's reduced-motion preference everywhere.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
