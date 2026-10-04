import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { motion, EASE } from "./motion";
import { CATEGORIES, SHOP, whatsappLink } from "@/lib/site";

const MAIN = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/services", label: "Services" },
  { to: "/lookbook", label: "Lookbook" },
  { to: "/visit", label: "Visit" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHomeHero = pathname === "/" && !solid;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          solid ? "bg-[#f7f5f1]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="group flex flex-col leading-none">
            <span className={`font-display text-lg tracking-[0.18em] transition-colors sm:text-xl ${overHomeHero ? "text-[#f7f5f1]" : "text-[#1a1512]"}`}>
              ASHRAFI
            </span>
            <span className={`eyebrow mt-1 transition-colors ${overHomeHero ? "text-[#f7f5f1]/65" : "text-[#8a7a68]"}`}>Bridal Studio · Karachi</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {MAIN.map((m) => (
              <Link
                key={m.to}
                to={m.to}
                className={`eyebrow transition-colors ${overHomeHero ? "text-[#f7f5f1]/75 hover:text-[#f7f5f1]" : "text-[#1a1512]/70 hover:text-[#1a1512]"}`}
                activeProps={{ className: `eyebrow ${overHomeHero ? "text-[#f7f5f1]" : "text-[#1a1512]"}` }}
                activeOptions={{ exact: m.to === "/" }}
              >
                {m.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className={`eyebrow border px-4 py-2 transition-colors ${overHomeHero ? "border-[#f7f5f1]/40 text-[#f7f5f1] hover:bg-[#f7f5f1] hover:text-[#1a1512]" : "border-[#1a1512]/30 text-[#1a1512] hover:bg-[#1a1512] hover:text-[#f7f5f1]"}`}
            >
              WhatsApp
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex items-center gap-2 lg:hidden"
          >
            <span className={`eyebrow ${overHomeHero ? "text-[#f7f5f1]" : "text-[#1a1512]"}`}>Menu</span>
            <Menu className={`h-5 w-5 ${overHomeHero ? "text-[#f7f5f1]" : "text-[#1a1512]"}`} strokeWidth={1.2} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] overflow-y-auto bg-[#141010] text-[#f2ece2]"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[#c9a26b]">Ashrafi Bridal Studio</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6" strokeWidth={1.2} />
                </button>
              </div>

              <div className="mt-12 grid gap-10 pb-24 md:grid-cols-2">
                <div>
                  <p className="eyebrow text-[#c9a26b]">Occasions</p>
                  <ul className="mt-5 space-y-1">
                    {CATEGORIES.map((c, i) => (
                      <motion.li
                        key={c.slug}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.04, duration: 0.5, ease: EASE }}
                      >
                        <Link
                          to={c.path}
                          className="font-display block border-b border-white/10 py-3 text-3xl tracking-tight transition-colors hover:text-[#c9a26b] sm:text-4xl"
                        >
                          {c.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="eyebrow text-[#c9a26b]">Studio</p>
                  <ul className="mt-5 space-y-1">
                    {MAIN.map((m, i) => (
                      <motion.li
                        key={m.to}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease: EASE }}
                      >
                        <Link
                          to={m.to}
                          className="font-display block border-b border-white/10 py-3 text-3xl tracking-tight transition-colors hover:text-[#c9a26b] sm:text-4xl"
                        >
                          {m.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10 space-y-2 text-sm text-white/70">
                    <p>{SHOP.shop}</p>
                    <p>{SHOP.hours}</p>
                    <a
                      href={`tel:${SHOP.phoneDial}`}
                      className="inline-flex items-center gap-2 text-[#c9a26b]"
                    >
                      <Phone className="h-4 w-4" strokeWidth={1.2} /> {SHOP.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
