import { Phone, MessageCircle } from "lucide-react";
import { SHOP, whatsappLink } from "@/lib/site";

export function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4 sm:right-6 sm:bottom-6 sm:left-auto sm:justify-end sm:px-0 sm:pb-0">
      <div className="flex w-full max-w-sm gap-2 sm:w-auto">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="eyebrow flex flex-1 items-center justify-center gap-2 bg-[#141010] px-5 py-4 text-[#f2ece2] shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] transition-colors hover:bg-[#2a0910] sm:flex-none"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.4} /> WhatsApp
        </a>
        <a
          href={`tel:${SHOP.phoneDial}`}
          className="eyebrow flex flex-1 items-center justify-center gap-2 bg-[#c9a26b] px-5 py-4 text-[#141010] shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] transition-opacity hover:opacity-90 sm:flex-none"
        >
          <Phone className="h-4 w-4" strokeWidth={1.4} /> Call
        </a>
      </div>
    </div>
  );
}
