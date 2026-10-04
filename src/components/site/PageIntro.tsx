import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion, useReducedMotion, EASE } from "./motion";

/**
 * A short curtain-wipe intro played on every main page.
 * Respects prefers-reduced-motion by skipping straight through.
 */
export function PageIntro({
  label,
  title,
  bg = "#141414",
  fg = "#f2ece2",
}: {
  label: string;
  title: string;
  bg?: string;
  fg?: string;
}) {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduce ? 120 : 1150);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="page-intro"
          className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center"
          style={{ backgroundColor: bg, color: fg }}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={
            reduce
              ? { opacity: 0, transition: { duration: 0.25 } }
              : { clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 0.8, ease: EASE } }
          }
        >
          <div className="text-center">
            <motion.p
              className="text-[0.6rem] tracking-[0.5em] uppercase opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.5 }}
            >
              {label}
            </motion.p>
            <motion.p
              className="font-display mt-3 text-4xl tracking-tight sm:text-6xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            >
              {title}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
