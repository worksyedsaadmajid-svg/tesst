import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Youtube, Facebook, Music2 } from "lucide-react";
import { CATEGORIES, SHOP, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#141010] px-5 pt-20 pb-10 text-[#e9e1d5] sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              Ashrafi Bridal Studio
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Women&apos;s clothing and Pakistani bridalwear on Tariq Road, Karachi — stitched,
              unstitched, and made to order.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="eyebrow bg-[#c9a26b] px-6 py-3 text-[#141010] transition-opacity hover:opacity-85"
              >
                WhatsApp us
              </a>
              <a
                href={`tel:${SHOP.phoneDial}`}
                className="eyebrow border border-white/25 px-6 py-3 transition-colors hover:bg-white/10"
              >
                Call {SHOP.phoneDisplay}
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[#c9a26b]">Occasions</p>
            <ul className="mt-5 space-y-2 text-sm text-white/65">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link to={c.path} className="transition-colors hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[#c9a26b]">Visit</p>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.2} />
                <span>
                  {SHOP.shop}
                  <br />
                  {SHOP.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0" strokeWidth={1.2} />
                {SHOP.hours}
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.2} />
                <a href={`tel:${SHOP.phoneDial}`}>{SHOP.phoneDisplay}</a>
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a href={SHOP.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-white/60 transition-colors hover:text-[#c9a26b]" strokeWidth={1.2} />
              </a>
              <a href={SHOP.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-white/60 transition-colors hover:text-[#c9a26b]" strokeWidth={1.2} />
              </a>
              <a href={SHOP.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
                <Music2 className="h-5 w-5 text-white/60 transition-colors hover:text-[#c9a26b]" strokeWidth={1.2} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-[0.7rem] text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Ashrafi Bridal Shop, Karachi.</p>
          <p>Imagery marked &ldquo;placeholder&rdquo; is temporary and awaiting studio photography.</p>
        </div>
      </div>
    </footer>
  );
}
