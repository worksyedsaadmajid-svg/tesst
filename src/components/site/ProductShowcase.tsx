import { useMemo, useState } from "react";
import { Search, X, MessageCircle, Phone } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { PRODUCTS, PRODUCT_CATEGORIES, searchProducts, type Product } from "@/lib/products";
import { COLLECTION_IMAGES } from "@/lib/collection-images";
import { SHOP, whatsappLink } from "@/lib/site";
import { Reveal, motion, useReducedMotion, EASE } from "./motion";

function ProductDialog({ product, onClose }: { product: Product; onClose: () => void }) {
  const image = COLLECTION_IMAGES[product.category];
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <motion.div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-[#f7f5f1] text-[#1a1512]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.45, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-[#1a1512] text-[#f7f5f1]"
        >
          <X className="h-4 w-4" strokeWidth={1.4} />
        </button>

        <div className="grid sm:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden bg-[#e8e2d8]">
            <img
              src={image}
              alt={`${product.name} — ${product.categoryName} by Ashrafi Bridal Studio`}
              width={1536}
              height={1024}
              className="h-full w-full scale-[1.35] object-cover"
              style={{ objectPosition: product.crop }}
            />
          </div>

          <div className="p-6 sm:p-9">
            <p className="eyebrow text-[#a8794a]">
              {product.categoryName} · {product.code}
            </p>
            <h3 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">{product.name}</h3>
            <p className="font-display mt-3 text-xl text-[#1a1512]">{product.price}</p>
            <p className="mt-5 text-sm leading-relaxed text-[#6a5c4f]">{product.description}</p>

            <dl className="mt-7 space-y-3 border-t border-[#1a1512]/12 pt-6 text-sm">
              {[
                ["Occasion", product.occasion],
                ["Colour", product.colour],
                ["Fabric", product.fabric],
                ["Work", product.work],
                ["Includes", product.includes.join(", ")],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4">
                  <dt className="eyebrow w-24 shrink-0 text-[#8a7a68]">{k}</dt>
                  <dd className="text-[#4a4038]">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-xs leading-relaxed text-[#8a7a68]">
              Available stitched to your measurements or as unstitched fabric. Fittings at the shop
              before delivery.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink(
                  `Assalam-o-Alaikum, I'd like to buy the ${product.name} (${product.code}) — ${product.price}. Please share availability.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center gap-2 bg-[#1f7a4d] px-6 py-4 text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.4} /> Buy on WhatsApp
              </a>
              <a
                href={`tel:${SHOP.phoneDial}`}
                className="eyebrow inline-flex items-center gap-2 border border-[#1a1512]/25 px-6 py-4 transition-colors hover:bg-[#1a1512] hover:text-[#f7f5f1]"
              >
                <Phone className="h-4 w-4" strokeWidth={1.4} /> {SHOP.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProductShowcase() {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [active, setActive] = useState<Product | null>(null);

  const results = useMemo(() => searchProducts(query, category), [query, category]);

  return (
    <section className="px-5 py-24 sm:px-8" id="products">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow text-[#a8794a]">The rail</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight tracking-tight sm:text-6xl">
            Search the pieces — <span className="italic">tap any one for full details.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col gap-4">
            <div className="relative max-w-xl">
              <Search
                className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#8a7a68]"
                strokeWidth={1.3}
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, colour, fabric or occasion…"
                aria-label="Search pieces"
                className="w-full border border-[#1a1512]/18 bg-transparent py-4 pr-4 pl-11 text-sm outline-none transition-colors focus:border-[#a8794a]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {[{ slug: "all", name: "All pieces" }, ...PRODUCT_CATEGORIES].map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setCategory(c.slug)}
                  className={`eyebrow border px-4 py-2 transition-colors ${
                    category === c.slug
                      ? "border-[#1a1512] bg-[#1a1512] text-[#f7f5f1]"
                      : "border-[#1a1512]/18 text-[#6a5c4f] hover:border-[#1a1512]/45"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <p className="eyebrow text-[#8a7a68]">
              {results.length} of {PRODUCTS.length} pieces
            </p>
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {results.map((product, i) => (
              <motion.button
                key={product.id}
                layout
                onClick={() => setActive(product)}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.04, ease: EASE }}
                whileHover={reduce ? {} : { y: -6 }}
                className="group block text-left"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e2d8]">
                  <img
                    src={COLLECTION_IMAGES[product.category]}
                    alt={`${product.name} — ${product.categoryName}`}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full scale-[1.35] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.44]"
                    style={{ objectPosition: product.crop }}
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1512]/70 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-95" />
                  <span className="pointer-events-none absolute inset-3 border border-[#e8cfa4]/0 transition-all duration-700 group-hover:inset-4 group-hover:border-[#e8cfa4]/60" />
                  <span className="eyebrow absolute top-3 left-3 bg-[#f7f5f1] px-2 py-1 text-[#1a1512]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="eyebrow absolute inset-x-3 bottom-3 translate-y-2 text-[#f6e7d2] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View details
                  </span>
                </div>
                <p className="font-display mt-3 text-lg leading-snug">{product.name}</p>
                <p className="eyebrow mt-1 text-[#8a7a68]">
                  {product.categoryName} · {product.price}
                </p>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {results.length === 0 ? (
          <p className="mt-14 text-sm text-[#6a5c4f]">
            Nothing matches “{query}”. Message us on WhatsApp and we&apos;ll find it or make it.
          </p>
        ) : null}
      </div>

      <AnimatePresence>
        {active ? <ProductDialog product={active} onClose={() => setActive(null)} /> : null}
      </AnimatePresence>
    </section>
  );
}
