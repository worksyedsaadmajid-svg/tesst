import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/site";
import { PageIntro } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/motion";
import { COLLECTION_IMAGES } from "@/lib/collection-images";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Nikah, Barat, Mehndi & More | Ashrafi Bridal Studio" },
      {
        name: "description",
        content:
          "Browse every Ashrafi Bridal Studio collection: Nikah, Barat, Mehndi, Walima, Party Wear, Sarees, Sharara & Gharara, Frocks & Maxis and Made to Order.",
      },
      { property: "og:title", content: "Collections | Ashrafi Bridal Studio, Karachi" },
      {
        property: "og:description",
        content: "Nine bridal and formalwear collections, each with its own mood.",
      },
    ],
  }),
  component: Collections,
});

function Collections() {
  return (
    <div className="bg-[#f7f5f1] text-[#1a1512]">
      <PageIntro label="Index" title="Collections" bg="#f7f5f1" fg="#1a1512" />
      <section className="px-5 pt-32 pb-16 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-[#a8794a]">The index</p>
            <h1 className="font-display mt-5 text-[14vw] leading-[0.9] tracking-tight sm:text-[8vw]">
              Collections
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#6a5c4f]">
              Every occasion has its own palette, weight and cut. Pick the ceremony and we&apos;ll
              show you the rail — available stitched, unstitched, or made to order.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.05}>
              <Link to={c.path} className="group block">
                <span className="relative block aspect-[16/10] overflow-hidden bg-[#e8e2d8]">
                  <img
                    src={COLLECTION_IMAGES[c.slug]}
                    alt={`${c.name} collection by Ashrafi Bridal Studio`}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1512]/80 via-[#1a1512]/25 to-[#1a1512]/10" />
                  <span className="pointer-events-none absolute inset-3 border border-[#e8cfa4]/0 transition-all duration-700 group-hover:inset-4 group-hover:border-[#e8cfa4]/60" />
                  <span className="font-display absolute top-4 left-5 text-xs tracking-[0.3em] text-[#f6e7d2]/75">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute inset-x-5 bottom-5 block">
                    <span className="eyebrow block text-[#e8cfa4]">{c.kicker}</span>
                    <span className="font-display mt-1 block text-3xl leading-none tracking-tight text-[#faf7f2] sm:text-4xl">
                      {c.name}
                    </span>
                    <span className="mt-3 block h-px w-0 bg-[#e8cfa4] transition-all duration-700 ease-out group-hover:w-full" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

      </section>

    </div>
  );
}
