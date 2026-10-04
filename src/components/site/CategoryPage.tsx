import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, SHOP, whatsappLink, type Category } from "@/lib/site";
import { COLLECTION_IMAGES, PRODUCT_POSITIONS } from "@/lib/collection-images";
import { PageIntro } from "./PageIntro";
import { Placeholder } from "./Placeholder";
import { Reveal, SplitWords, motion, useReducedMotion, EASE } from "./motion";

export function CategoryPage({ category, heroImage }: { category: Category; heroImage?: string }) {
  const m = category.mood;
  const reduce = useReducedMotion();
  const others = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 4);
  const editorialImage = COLLECTION_IMAGES[category.slug];
  const leadImage = heroImage ?? editorialImage;

  return (
    <div style={{ backgroundColor: m.bg, color: m.fg }}>
      <PageIntro label={category.kicker} title={category.name} bg={m.bg} fg={m.fg} />

      {/* Hero */}
      <section className="relative min-h-[92vh] px-5 pt-32 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <motion.p
              className="eyebrow"
              style={{ color: m.accent }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {category.kicker}
            </motion.p>
            <h1 className="font-display mt-5 text-[16vw] leading-[0.88] tracking-tight sm:text-[10vw] lg:text-[8vw]">
              <SplitWords text={category.name} delay={1.25} />
            </h1>
            <motion.p
              className="font-display mt-6 max-w-md text-2xl italic sm:text-3xl"
              style={{ color: m.soft }}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.9, ease: EASE }}
            >
              {category.tagline}
            </motion.p>
            <motion.p
              className="mt-6 max-w-lg text-sm leading-relaxed"
              style={{ color: m.soft }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.9 }}
            >
              {category.intro}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <a
                href={whatsappLink(`I'm interested in ${category.name} pieces.`)}
                target="_blank"
                rel="noreferrer"
                className="eyebrow px-6 py-3"
                style={{ backgroundColor: m.accent, color: m.bg }}
              >
                Enquire on WhatsApp
              </a>
              <Link
                to="/visit"
                className="eyebrow border px-6 py-3"
                style={{ borderColor: m.line, color: m.fg }}
              >
                Visit the studio
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 1.04 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.3, duration: 1.2, ease: EASE }}
          >
            {leadImage ? (
              <img
                src={leadImage}
                alt={`${category.name} bridalwear at Ashrafi Bridal Studio, Karachi`}
                width={1280}
                height={1600}
                className="h-[62vh] w-full object-cover lg:h-[78vh]"
              />
            ) : (
              <Placeholder
                label={`${category.name} editorial`}
                ratio="4/5"
                accent={m.accent}
                className="h-[52vh] lg:h-[70vh]"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Notes strip */}
      <section className="border-y px-5 py-8 sm:px-8" style={{ borderColor: m.line }}>
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-x-12 gap-y-3">
          {category.notes.map((n, i) => (
            <Reveal key={n} delay={i * 0.08}>
              <p className="eyebrow" style={{ color: m.soft }}>
                {n}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Landscape name banner */}
      {editorialImage ? (
        <Reveal>
          <section className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
            <img
              src={editorialImage}
              alt={`${category.name} collection banner`}
              width={1536}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="eyebrow" style={{ color: m.accent }}>
                {category.kicker}
              </p>
              <h2 className="font-display mt-3 text-[13vw] leading-none tracking-tight text-white sm:text-[7vw]">
                {category.name}
              </h2>
              <span className="mt-5 block h-px w-24" style={{ backgroundColor: m.accent }} />
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Pieces */}

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow" style={{ color: m.accent }}>
              Selected pieces
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight tracking-tight sm:text-6xl">
              A working preview of the {category.name.toLowerCase()} rail.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
            {category.pieces.map((p, i) => (
              <Reveal key={p} delay={i * 0.08}>
                <div className="group">
                  {editorialImage ? (
                    <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: m.line }}>
                      <img
                        src={editorialImage}
                        alt={`${p} from the ${category.name} collection`}
                        width={1536}
                        height={1024}
                        loading="lazy"
                        className="h-full w-full scale-[1.38] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.44]"
                        style={{ objectPosition: PRODUCT_POSITIONS[i] }}
                      />
                      <span
                        className="font-display absolute top-3 left-3 flex h-8 w-8 items-center justify-center text-sm"
                        style={{ backgroundColor: m.bg, color: m.fg }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ) : (
                    <Placeholder label={p} ratio="3/4" accent={m.accent} />
                  )}
                  <div className="mt-3 flex items-start justify-between gap-2">
                    <p className="font-display text-lg">{p}</p>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 opacity-40 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.2}
                    />
                  </div>
                  <p className="eyebrow mt-1" style={{ color: m.soft }}>
                    Price on enquiry
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            {editorialImage ? (
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={editorialImage}
                  alt={`${category.name} collection showing hand-finished silhouettes`}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.025]"
                />
              </div>
            ) : (
              <Placeholder label={`${category.name} detail`} ratio="5/4" accent={m.accent} />
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow" style={{ color: m.accent }}>
              How it is made
            </p>
            <h3 className="font-display mt-4 text-3xl leading-snug sm:text-5xl">
              Stitched, unstitched, or built from scratch.
            </h3>
            <p className="mt-6 max-w-lg text-sm leading-relaxed" style={{ color: m.soft }}>
              Take the piece as it hangs, take the fabric unstitched, or sit with us and design it.
              Every made-to-order outfit is cut to your measurements with fittings before delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/made-to-order"
                className="eyebrow border px-6 py-3"
                style={{ borderColor: m.line }}
              >
                Made to order
              </Link>
              <Link
                to="/services"
                className="eyebrow border px-6 py-3"
                style={{ borderColor: m.line }}
              >
                Services
              </Link>
            </div>
            <p className="mt-8 text-sm" style={{ color: m.soft }}>
              {SHOP.shop} · {SHOP.hours}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Next categories */}
      <section className="border-t px-5 py-16 sm:px-8" style={{ borderColor: m.line }}>
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow" style={{ color: m.accent }}>
            Continue
          </p>
          <div className="mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link
                  to={c.path}
                  className="group block border py-8 pr-4 pl-5 transition-colors"
                  style={{ borderColor: m.line }}
                >
                  <span className="eyebrow" style={{ color: m.soft }}>
                    {c.kicker}
                  </span>
                  <span className="font-display mt-2 block text-3xl transition-transform duration-500 group-hover:translate-x-1">
                    {c.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
