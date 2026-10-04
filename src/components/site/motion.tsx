import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0.3 : 0.9, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SplitWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "105%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0.3 : 0.95,
              delay: reduce ? 0 : delay + i * 0.07,
              ease: EASE,
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export { motion, useReducedMotion };
