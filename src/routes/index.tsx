import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { CATEGORIES, SHOP, TESTIMONIALS, whatsappLink } from "@/lib/site";
import { Splash } from "@/components/site/Splash";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal, SplitWords, motion, useReducedMotion, EASE } from "@/components/site/motion";
import { COLLECTION_IMAGES } from "@/lib/collection-images";
import { ProductShowcase } from "@/components/site/ProductShowcase";
import homeHero from "@/assets/home-hero.jpg";
import detail from "@/assets/detail-embroidery.jpg";
import atelier from "@/assets/atelier.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashrafi Bridal Studio — Pakistani Bridalwear on Tariq Road, Karachi" },
      {
        name: "description",
        content:
          "Nikah, Barat, Mehndi and Walima bridalwear, sarees, ghararas and made-to-order designer dresses at Shop GF-26, Saima Centre, Tariq Road, Karachi.",
      },
      { property: "og:title", content: "Ashrafi Bridal Studio — Karachi Bridalwear" },
      {
        property: "og:description",
        content:
          "Pakistani bridalwear and women's clothing on Tariq Road, Karachi. Stitched, unstitched and made to order.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const reduce = useReducedMotion();

  return (
    <div className="bg-[#f7f5f1] text-[#1a1512]">
      <Splash />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#140f0d] px-5 pt-32 pb-16 text-[#f7f5f1] sm:px-8 sm:pb-20">
        <motion.img
          src={homeHero}
          alt="Bride wearing a deep maroon zardozi lehenga in an ornate studio"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.02 }}
          transition={{ delay: 2.35, duration: reduce ? 0.4 : 2.4, ease: EASE }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,5,0.92)_0%,rgba(8,6,5,0.67)_38%,rgba(8,6,5,0.12)_72%),linear-gradient(0deg,rgba(8,6,5,0.72)_0%,transparent_48%)]" />
        <div className="relative mx-auto w-full max-w-[1400px]">
          <div className="max-w-3xl">
            <motion.p
              className="eyebrow text-[#d5b174]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.9 }}
            >
              Bridal & Women&apos;s Clothing · Est. Tariq Road
            </motion.p>

            <h1 className="font-display mt-6 text-[15vw] leading-[0.84] tracking-tight sm:text-[9vw] lg:text-[6.8vw]">
              <SplitWords text="Dressed for" delay={2.8} />
              <br />
              <span className="italic text-[#d5b174]">
                <SplitWords text="every ceremony." delay={3.0} />
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-lg text-sm leading-relaxed text-[#f7f5f1]/72"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.3, duration: 0.9, ease: EASE }}
            >
              Ashrafi Bridal Studio is a bridalwear and women&apos;s clothing house in Karachi —
              nikah in ivory, barat in deep maroon, mehndi in marigold. Stitched, unstitched, and
              designer dresses made to order.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.9 }}
            >
              <Link
                to="/collections"
                className="eyebrow group inline-flex items-center gap-3 bg-[#f7f5f1] px-7 py-4 text-[#1a1512]"
              >
                Explore collections
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                  strokeWidth={1.3}
                />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="eyebrow border border-[#f7f5f1]/40 px-7 py-4 transition-colors hover:bg-[#f7f5f1] hover:text-[#1a1512]"
              >
                WhatsApp {SHOP.phoneDisplay}
              </a>
            </motion.div>
          </div>
          <motion.p
            className="eyebrow absolute right-0 bottom-0 hidden origin-bottom-right -rotate-90 text-[#f7f5f1]/60 lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6, duration: 1 }}
          >
            Karachi · Bridal Atelier · 2026
          </motion.p>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-[#1a1512]/12 bg-[#f2eee6] py-4">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={reduce ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 gap-12">
              {CATEGORIES.map((c) => (
                <span key={c.slug} className="eyebrow text-[#8a7a68]">
                  {c.name} · {c.kicker}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Collection previews */}
      <section className="relative px-5 py-24 sm:px-8" id="collections">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#1a1512]/12 pb-8">
              <div>
                <p className="eyebrow text-[#a8794a]">Collections</p>
                <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight tracking-tight sm:text-6xl">
                  Nine rails, nine moods — <span className="italic">each with its own room.</span>
                </h2>
              </div>
              <Link
                to="/collections"
                className="eyebrow inline-flex items-center gap-3 text-[#8a7a68] transition-colors hover:text-[#1a1512]"
              >
                View the index <ArrowRight className="h-4 w-4" strokeWidth={1.2} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.08}>
                <Link to={c.path} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e2d8]">
                    <img
                      src={COLLECTION_IMAGES[c.slug]}
                      alt={`${c.name} collection by Ashrafi Bridal Studio`}
                      width={1536}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1512]/80 via-[#1a1512]/25 to-[#1a1512]/10 transition-opacity duration-700 group-hover:opacity-90" />
                    <span className="pointer-events-none absolute inset-3 border border-[#e8cfa4]/0 transition-all duration-700 group-hover:inset-4 group-hover:border-[#e8cfa4]/60" />
                    <span className="font-display absolute top-4 left-5 text-xs tracking-[0.3em] text-[#f6e7d2]/75">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute inset-x-5 bottom-5 block">
                      <span className="eyebrow block text-[#e8cfa4]">{c.kicker}</span>
                      <span className="font-display mt-1 flex items-end justify-between gap-3 text-3xl leading-none tracking-tight text-[#faf7f2] sm:text-4xl">
                        {c.name}
                        <ArrowRight
                          className="mb-1 h-5 w-5 shrink-0 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                          strokeWidth={1.2}
                        />
                      </span>
                      <span className="mt-3 block h-px w-0 bg-[#e8cfa4] transition-all duration-700 ease-out group-hover:w-full" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <ProductShowcase />

      {/* Craft strip */}
      <section className="relative overflow-hidden bg-[#2a0910] text-[#f6e7d2]">
        <div className="grid lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="px-5 py-20 sm:px-12 lg:py-28">
              <p className="eyebrow text-[#c9a26b]">The work</p>
              <h2 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
                Zardozi, dabka, gota — done by hand, checked twice.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/65">
                Heavy bridal embroidery takes weeks, not days. We agree the timeline before we
                start, keep you updated as panels come off the frame, and fit the finished outfit on
                you before it leaves the shop.
              </p>
              <Link
                to="/services"
                className="eyebrow mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 transition-colors hover:bg-white/10"
              >
                Our services <ArrowRight className="h-4 w-4" strokeWidth={1.3} />
              </Link>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <img
              src={detail}
              alt="Close-up of gold zardozi embroidery on maroon velvet"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-full min-h-[45vh] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Atelier / made to order */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={atelier}
              alt="Tailor pinning an embroidered bridal dress on a mannequin"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-[#a8794a]">Made to order</p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
              Bring a picture. Leave with a fitting date.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#6a5c4f]">
              Designer dresses made to your measurements — sketch, fabric, embroidery and fittings
              handled in-house. Unstitched fabric and stitching-only services are available too.
            </p>
            <Link
              to="/made-to-order"
              className="eyebrow mt-10 inline-flex items-center gap-3 bg-[#1a1512] px-7 py-4 text-[#f7f5f1]"
            >
              Start a commission <ArrowRight className="h-4 w-4" strokeWidth={1.3} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Lookbook teaser */}
      <section className="bg-[#141010] px-5 py-24 text-[#f2ece2] sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-[#c9a26b]">Lookbook</p>
            <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight sm:text-6xl">
              Watch the pieces move.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {["nikah", "made-to-order", "mehndi"].map((slug, i) => (
              <Reveal key={slug} delay={i * 0.08}>
                <div className="group aspect-[4/5] overflow-hidden">
                  <img
                    src={COLLECTION_IMAGES[slug]}
                    alt={["Nikah bridalwear", "Hand embroidery in the atelier", "Mehndi occasionwear"][i]}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/lookbook"
              className="eyebrow mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 transition-colors hover:bg-white/10"
            >
              Open the lookbook <ArrowRight className="h-4 w-4" strokeWidth={1.3} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-[#a8794a]">In their words</p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
              What customers tell us.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 0.08}>
                <figure className="h-full border border-[#1a1512]/12 p-8">
                  <blockquote className="font-display text-xl leading-relaxed italic sm:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="eyebrow mt-6 text-[#8a7a68]">
                    {t.name} · {t.context}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-[#8a7a68]">
            Quotes shared by customers. We don&apos;t publish an aggregate rating.
          </p>
        </div>
      </section>

      {/* Visit */}
      <section className="border-t border-[#1a1512]/12 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-[#a8794a]">Visit</p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
              Saima Centre, Main Tariq Road.
            </h2>
            <ul className="mt-10 space-y-5 text-sm text-[#4a4038]">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#a8794a]" strokeWidth={1.2} />
                <span>
                  {SHOP.shop}
                  <br />
                  {SHOP.address}
                </span>
              </li>
              <li className="flex gap-4">
                <Clock className="h-5 w-5 shrink-0 text-[#a8794a]" strokeWidth={1.2} />
                {SHOP.hours}
              </li>
              <li className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-[#a8794a]" strokeWidth={1.2} />
                <a href={`tel:${SHOP.phoneDial}`}>{SHOP.phoneDisplay}</a>
              </li>
            </ul>
            <Link
              to="/visit"
              className="eyebrow mt-10 inline-flex items-center gap-3 border border-[#1a1512]/25 px-7 py-4 transition-colors hover:bg-[#1a1512] hover:text-[#f7f5f1]"
            >
              Directions & hours <ArrowRight className="h-4 w-4" strokeWidth={1.3} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Placeholder label="Shopfront, Saima Centre" ratio="4/3" accent="#a8794a" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
