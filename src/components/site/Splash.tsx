import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { motion, useReducedMotion, EASE } from "./motion";

/** Immersive one-time intro on the homepage. */
export function Splash() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), reduce ? 200 : 2600);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#141010]"
          exit={
            reduce
              ? { opacity: 0, transition: { duration: 0.3 } }
              : { clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 1, ease: EASE } }
          }
          style={{ clipPath: "inset(0% 0% 0% 0%)" }}
        >
          {!reduce && (
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 50% 55%, rgba(201,162,107,0.22), transparent 60%)",
              }}
              initial={{ opacity: 0, scale: 1.25 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.4, ease: EASE }}
            />
          )}

          <div className="relative px-6 text-center text-[#f2ece2]">
            <motion.p
              className="eyebrow text-[#c9a26b]"
              initial={{ opacity: 0, letterSpacing: "0.9em" }}
              animate={{ opacity: 1, letterSpacing: "0.42em" }}
              transition={{ duration: 1.4, ease: EASE }}
            >
              Karachi · Tariq Road
            </motion.p>

            <div className="mt-6 overflow-hidden">
              <motion.h1
                className="font-display text-[15vw] leading-[0.95] tracking-tight sm:text-[9vw]"
                initial={reduce ? { opacity: 0 } : { y: "110%" }}
                animate={reduce ? { opacity: 1 } : { y: 0 }}
                transition={{ duration: 1.3, ease: EASE, delay: 0.2 }}
              >
                ASHRAFI
              </motion.h1>
            </div>

            <motion.div
              className="mx-auto mt-5 h-px bg-[#c9a26b]"
              initial={{ width: 0 }}
              animate={{ width: "min(280px, 60vw)" }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
            />

            <motion.p
              className="mt-5 text-sm tracking-[0.3em] text-white/70 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Bridal Studio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
