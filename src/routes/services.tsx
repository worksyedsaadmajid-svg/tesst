import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, Ruler, Sparkles, PackageOpen } from "lucide-react";
import { SHOP, whatsappLink } from "@/lib/site";
import { PageIntro } from "@/components/site/PageIntro";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/motion";
import atelier from "@/assets/atelier.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Stitched, Unstitched & Made to Order | Ashrafi Bridal Studio" },
      {
        name: "description",
        content:
          "Ready stitched outfits, unstitched fabric, stitching to your measurements and make-to-order designer dresses at Ashrafi Bridal Studio, Tariq Road, Karachi.",
      },
      { property: "og:title", content: "Services | Ashrafi Bridal Studio, Karachi" },
      {
        property: "og:description",
        content: "Stitched, unstitched and made-to-order bridalwear services in Karachi.",
      },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    icon: PackageOpen,
    title: "Ready & Stitched",
    body: "Finished pieces on the rail, ready to try. Minor adjustments handled in-house so the fit sits right before you take it home.",
  },
  {
    icon: Scissors,
    title: "Unstitched Fabric",
    body: "Embroidered and plain unstitched suits, dupattas and borders — take the fabric as it is, or have us stitch it for you.",
  },
  {
    icon: Ruler,
    title: "Stitching to Measure",
    body: "Bring your own fabric or ours. We take measurements, cut to your silhouette, and call you in for fittings.",
  },
  {
    icon: Sparkles,
    title: "Make-to-Order Designer",
    body: "A full commission: consultation, sketch, fabric sourcing, hand embroidery and fittings, on a timeline agreed at the start.",
  },
];

const STEPS = [
  ["01", "Talk", "Message on WhatsApp or walk in with a reference, a date and a budget."],
  ["02", "Design", "We agree silhouette, palette, fabric and embroidery weight, then sketch it."],
  ["03", "Make", "Panels go on the frame. Heavy bridal work takes weeks — you get updates."],
  ["04", "Fit", "Fittings before delivery, with final adjustments made in the shop."],
];

function Services() {
  return (
    <div className="bg-[#f7f5f1] text-[#1a1512]">
      <PageIntro label="Atelier" title="Services" bg="#f7f5f1" fg="#1a1512" />

      <section className="px-5 pt-32 pb-16 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-[#a8794a]">What we do</p>
            <h1 className="font-display mt-5 text-[13vw] leading-[0.9] tracking-tight sm:text-[7.5vw]">
              Services
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#6a5c4f]">
              Four ways to dress for the occasion — from a piece off the rail to a dress designed
              around you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-px sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <div className="h-full border border-[#1a1512]/12 p-8 sm:p-10">
                <s.icon className="h-6 w-6 text-[#a8794a]" strokeWidth={1.2} />
                <h2 className="font-display mt-6 text-3xl sm:text-4xl">{s.title}</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6a5c4f]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#2a0910] px-5 py-24 text-[#f6e7d2] sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-[#c9a26b]">How a commission runs</p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
              Four steps, no surprises.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([n, t, b], i) => (
              <Reveal key={n} delay={i * 0.08}>
                <div className="h-full border border-white/12 p-8">
                  <span className="eyebrow text-[#c9a26b]">{n}</span>
                  <h3 className="font-display mt-4 text-3xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={atelier}
              alt="Bridal dress being pinned in the studio"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Fabrics, trims and finishing.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#6a5c4f]">
              Velvet, raw silk, jamawar, organza, chiffon, tissue and net — with zardozi, kora,
              dabka, gota patti, mirror and pearl work. Linings, cancan and finishing are part of
              the price we quote, not an extra at the end.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Placeholder label="Fabric swatches" ratio="4/3" accent="#a8794a" />
              <Placeholder label="Trim & border" ratio="4/3" accent="#a8794a" />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappLink("I'd like to ask about make-to-order.")}
                target="_blank"
                rel="noreferrer"
                className="eyebrow bg-[#1a1512] px-7 py-4 text-[#f7f5f1]"
              >
                Ask about a commission
              </a>
              <Link
                to="/visit"
                className="eyebrow border border-[#1a1512]/25 px-7 py-4 transition-colors hover:bg-[#1a1512] hover:text-[#f7f5f1]"
              >
                Visit · {SHOP.hours}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
