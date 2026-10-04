import { createFileRoute } from "@tanstack/react-router";
import { Youtube, Facebook, Music2, Play } from "lucide-react";
import { SHOP } from "@/lib/site";
import { PageIntro } from "@/components/site/PageIntro";
import { Placeholder } from "@/components/site/Placeholder";
import { Reveal } from "@/components/site/motion";
import detail from "@/assets/detail-embroidery.jpg";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook & Video — Ashrafi Bridal Studio, Karachi" },
      {
        name: "description",
        content:
          "Watch Ashrafi Bridal Studio bridal reels and new arrivals on YouTube, Facebook and TikTok, and browse the editorial lookbook.",
      },
      { property: "og:title", content: "Lookbook | Ashrafi Bridal Studio" },
      {
        property: "og:description",
        content: "Bridal video, reels and editorial imagery from the Karachi studio.",
      },
    ],
  }),
  component: Lookbook,
});

const CHANNELS = [
  {
    icon: Youtube,
    name: "YouTube",
    handle: "@ashrafibridalstudio",
    href: SHOP.socials.youtube,
    body: "Full-length bridal walkthroughs and new collection films.",
  },
  {
    icon: Facebook,
    name: "Facebook",
    handle: "ASHRAFIBRIDALSTUDIO",
    href: SHOP.socials.facebook,
    body: "Album updates, arrivals and customer messages.",
  },
  {
    icon: Music2,
    name: "TikTok",
    handle: "@dresses.4.you",
    href: SHOP.socials.tiktok,
    body: "Short reels — drape, movement and detail close-ups.",
  },
];

function Lookbook() {
  return (
    <div className="bg-[#141010] text-[#f2ece2]">
      <PageIntro label="Film & Stills" title="Lookbook" bg="#141010" fg="#f2ece2" />

      <section className="px-5 pt-32 pb-16 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-[#c9a26b]">Film & stills</p>
            <h1 className="font-display mt-5 text-[13vw] leading-[0.9] tracking-tight sm:text-[7.5vw]">
              Lookbook
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60">
              Bridal films, reels and detail stills. The video panel below is ready for our channel
              embeds — until studio footage is loaded in, the frames are marked as placeholders.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature video frame */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <a
              href={SHOP.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden"
            >
              <img
                src={detail}
                alt="Gold embroidery detail from a bridal film still"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-[45vh] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 sm:h-[65vh]"
              />
              <span className="absolute inset-0 bg-black/40" />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 transition-colors group-hover:bg-white/15">
                  <Play className="ml-1 h-6 w-6" strokeWidth={1.2} />
                </span>
                <span className="eyebrow text-[#c9a26b]">Watch on YouTube</span>
                <span className="font-display text-3xl sm:text-5xl">The bridal films</span>
                <span className="text-xs text-white/60">
                  Placeholder still — replace with channel embed
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Channels */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-px sm:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="block h-full border border-white/12 p-8 transition-colors hover:bg-white/5"
              >
                <c.icon className="h-6 w-6 text-[#c9a26b]" strokeWidth={1.2} />
                <h2 className="font-display mt-6 text-3xl">{c.name}</h2>
                <p className="eyebrow mt-2 text-white/50">{c.handle}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{c.body}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial grid */}
      <section className="px-5 pb-28 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="eyebrow text-[#c9a26b]">Stills</p>
            <h2 className="font-display mt-4 text-4xl sm:text-6xl">Editorial frames</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              "Barat, full length",
              "Nikah, detail",
              "Mehndi, movement",
              "Walima, trail",
              "Saree drape",
              "Gharara border",
              "Frock volume",
              "Atelier fitting",
            ].map((l, i) => (
              <Reveal key={l} delay={(i % 4) * 0.06}>
                <Placeholder label={l} ratio={i % 3 === 0 ? "3/4" : "4/5"} accent="#c9a26b" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
