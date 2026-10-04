import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, MessageCircle, Youtube, Facebook, Music2 } from "lucide-react";
import { SHOP, whatsappLink } from "@/lib/site";
import { PageIntro } from "@/components/site/PageIntro";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit & Contact — Saima Centre, Tariq Road, Karachi | Ashrafi Bridal Studio" },
      {
        name: "description",
        content:
          "Ashrafi Bridal Studio, Shop GF-26, Saima Centre, Main Tariq Road, Karachi. Opens 2 PM. Call or WhatsApp 0333 3128869 for appointments and directions.",
      },
      { property: "og:title", content: "Visit Ashrafi Bridal Studio, Tariq Road Karachi" },
      {
        property: "og:description",
        content: "Directions, hours and contact for the Tariq Road bridal studio.",
      },
    ],
  }),
  component: Visit,
});

const DIRECTIONS = [
  [
    "By car",
    "Head for Main Tariq Road and park at or near Saima Centre. The studio is on the ground floor, Shop GF-26.",
  ],
  [
    "By rickshaw or ride-hailing",
    "Ask for Saima Centre, Tariq Road, Block 2 P.E.C.H.S. Drivers know the building by name.",
  ],
  [
    "Landmarks",
    "Saima Centre sits on the main Tariq Road shopping stretch in Block 2 P.E.C.H.S., Karachi 54700.",
  ],
];

function Visit() {
  return (
    <div className="bg-[#f7f5f1] text-[#1a1512]">
      <PageIntro label="Tariq Road" title="Visit" bg="#f7f5f1" fg="#1a1512" />

      <section className="px-5 pt-32 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-[#a8794a]">Come see the fabric</p>
            <h1 className="font-display mt-5 text-[13vw] leading-[0.9] tracking-tight sm:text-[7.5vw]">
              Visit us
            </h1>
            <ul className="mt-10 space-y-6 text-sm text-[#4a4038]">
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
                <span>
                  {SHOP.hours}
                  <br />
                  <span className="text-[#8a7a68]">
                    Please call before travelling to confirm we&apos;re open.
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-[#a8794a]" strokeWidth={1.2} />
                <a href={`tel:${SHOP.phoneDial}`}>{SHOP.phoneDisplay}</a>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappLink("I'd like to visit the studio — is today okay?")}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center gap-2 bg-[#1a1512] px-7 py-4 text-[#f7f5f1]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.3} /> WhatsApp
              </a>
              <a
                href={`tel:${SHOP.phoneDial}`}
                className="eyebrow inline-flex items-center gap-2 bg-[#a8794a] px-7 py-4 text-[#f7f5f1]"
              >
                <Phone className="h-4 w-4" strokeWidth={1.3} /> Call now
              </a>
              <a
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="eyebrow border border-[#1a1512]/25 px-7 py-4 transition-colors hover:bg-[#1a1512] hover:text-[#f7f5f1]"
              >
                Open in Maps
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Placeholder label="Saima Centre shopfront" ratio="4/5" accent="#a8794a" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#1a1512]/12 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-[#a8794a]">Getting here</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl">Directions</h2>
          </Reveal>
          <div className="mt-12 grid gap-px sm:grid-cols-3">
            {DIRECTIONS.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="h-full border border-[#1a1512]/12 p-8">
                  <h3 className="font-display text-2xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6a5c4f]">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-[#a8794a]">Follow</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl">Our channels</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { icon: Youtube, label: "YouTube", href: SHOP.socials.youtube },
              { icon: Facebook, label: "Facebook", href: SHOP.socials.facebook },
              { icon: Music2, label: "TikTok", href: SHOP.socials.tiktok },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center gap-3 border border-[#1a1512]/25 px-7 py-4 transition-colors hover:bg-[#1a1512] hover:text-[#f7f5f1]"
              >
                <s.icon className="h-4 w-4" strokeWidth={1.3} /> {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
