export const SHOP = {
  name: "Ashrafi Bridal Studio",
  legalName: "Ashrafi Bridal Shop",
  shop: "Shop GF-26, Saima Centre, Main Tariq Road, Karachi, Pakistan",
  address: "Tariq Rd, Block 2 P.E.C.H.S., Karachi 54700",
  phoneDisplay: "0333 3128869",
  phoneDial: "+923333128869",
  whatsapp: "923333128869",
  hours: "Opens 2:00 PM",
  city: "Karachi",
  socials: {
    youtube: "https://www.youtube.com/@ashrafibridalstudio",
    facebook: "https://www.facebook.com/ASHRAFIBRIDALSTUDIO/",
    tiktok: "https://www.tiktok.com/@dresses.4.you",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Saima+Centre+Tariq+Road+Karachi",
};

export const whatsappLink = (msg = "Assalam-o-Alaikum, I'd like to ask about a bridal outfit.") =>
  `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(msg)}`;

export type Mood = {
  bg: string;
  fg: string;
  soft: string;
  accent: string;
  line: string;
};

export type Category = {
  slug: string;
  path: string;
  name: string;
  kicker: string;
  tagline: string;
  intro: string;
  mood: Mood;
  pieces: string[];
  notes: string[];
};

const mood = (bg: string, fg: string, soft: string, accent: string, line: string): Mood => ({
  bg,
  fg,
  soft,
  accent,
  line,
});

export const CATEGORIES: Category[] = [
  {
    slug: "nikah",
    path: "/nikah",
    name: "Nikah",
    kicker: "White & Black",
    tagline: "The quiet vow, dressed in light.",
    intro:
      "Ivory, pearl and jet. Nikah pieces built on restraint — tonal dabka, pearl clusters and hand-set crystal on soft chiffon, organza and velvet.",
    mood: mood("#f7f5f1", "#111111", "#6b6b6b", "#111111", "rgba(17,17,17,0.14)"),
    pieces: ["Pearl Chiffon Maxi", "Ivory Angrakha", "Jet Velvet Shirt", "Silver Dabka Sharara"],
    notes: ["Pearl & silver dabka", "Ivory, off-white, jet", "Soft chiffon & organza"],
  },
  {
    slug: "barat",
    path: "/barat",
    name: "Barat",
    kicker: "Deep Maroon",
    tagline: "The entrance everyone remembers.",
    intro:
      "Deep maroon velvet, antique gold zardozi and heavy kora-dabka. Barat lehengas and pishwas built with weight, drape and a long, ceremonial trail.",
    mood: mood("#2a0910", "#f6e7d2", "#c9a26b", "#c9a26b", "rgba(201,162,107,0.25)"),
    pieces: ["Maroon Velvet Lehenga", "Zardozi Pishwas", "Gold Kora Choli", "Trailed Dupatta"],
    notes: ["Antique gold zardozi", "Velvet & raw silk", "Heavy bridal weight"],
  },
  {
    slug: "mehndi",
    path: "/mehndi",
    name: "Mehndi",
    kicker: "Marigold & Green",
    tagline: "Colour, gota and noise.",
    intro:
      "Marigold yellow, mehndi green and orange gota patti. Playful ghararas, mirror work and lightweight festive silhouettes made to dance in.",
    mood: mood("#123024", "#f7ecc9", "#e0b544", "#e8a13a", "rgba(232,161,58,0.28)"),
    pieces: ["Gota Patti Gharara", "Mirror Work Kurta", "Marigold Frock", "Festive Dupatta Set"],
    notes: ["Gota patti & mirror", "Yellow, green, orange", "Light, movable drape"],
  },
  {
    slug: "walima",
    path: "/walima",
    name: "Walima",
    kicker: "Pastel & Pearl",
    tagline: "Softer, later, still luminous.",
    intro:
      "Powder blue, blush, sage and champagne. Walima gowns and trails with tonal thread, pearl scatter and gentle structure.",
    mood: mood("#f1eef0", "#2b2530", "#6c6270", "#9b7f8f", "rgba(43,37,48,0.14)"),
    pieces: ["Champagne Trail Gown", "Blush Pearl Maxi", "Powder Blue Saree", "Sage Angrakha"],
    notes: ["Tonal pearl scatter", "Pastel palette", "Structured trails"],
  },
  {
    slug: "party-wear",
    path: "/party-wear",
    name: "Party Wear",
    kicker: "Night Colour",
    tagline: "For the guest list, not the aisle.",
    intro:
      "Formal and semi-formal pieces for mehndi guests, engagements and dinners — sequins, chiffon and clean, modern cuts.",
    mood: mood("#171523", "#efe9f4", "#a79fb8", "#b98ec4", "rgba(185,142,196,0.25)"),
    pieces: ["Sequin Chiffon Shirt", "Emerald Kurta Set", "Cocktail Saree", "Slip Maxi"],
    notes: ["Sequin & tissue", "Semi-formal cuts", "Ready or stitched to size"],
  },
  {
    slug: "sarees",
    path: "/sarees",
    name: "Sarees",
    kicker: "Drape",
    tagline: "Six yards, held perfectly.",
    intro:
      "Chiffon, jamawar, tissue and net sarees with worked pallus and blouses cut to your measurements. Pre-draped options available on request.",
    mood: mood("#1c2b2b", "#eef3ef", "#93a8a2", "#8fbfa8", "rgba(143,191,168,0.24)"),
    pieces: ["Worked Pallu Chiffon", "Jamawar Saree", "Tissue Drape", "Net Bridal Saree"],
    notes: ["Worked pallu", "Blouse stitched to size", "Pre-drape on request"],
  },
  {
    slug: "sharara-gharara",
    path: "/sharara-gharara",
    name: "Sharara & Gharara",
    kicker: "Heritage Cut",
    tagline: "The old Lucknowi flare.",
    intro:
      "Traditional kali-cut ghararas and wide sharara panels with worked farshi borders — the silhouette Karachi keeps coming back for.",
    mood: mood("#2b1a2f", "#f4e6ef", "#b39ab2", "#d59ab0", "rgba(213,154,176,0.24)"),
    pieces: ["Kali Gharara", "Farshi Sharara", "Worked Border Set", "Short Shirt & Gharara"],
    notes: ["Kali & farshi cuts", "Worked borders", "Traditional proportions"],
  },
  {
    slug: "frocks-maxis",
    path: "/frocks-maxis",
    name: "Frocks & Maxis",
    kicker: "Volume",
    tagline: "Full skirts, long lines.",
    intro:
      "Anarkali frocks, floor-length maxis and pishwas with layered flares, cancan support and hand-worked hems.",
    mood: mood("#f3efe7", "#241d16", "#6e6155", "#a8794a", "rgba(36,29,22,0.14)"),
    pieces: ["Layered Anarkali", "Floor-Length Maxi", "Pishwas Frock", "Worked Hem Gown"],
    notes: ["Cancan volume", "Hand-worked hems", "Floor-length drop"],
  },
  {
    slug: "made-to-order",
    path: "/made-to-order",
    name: "Made to Order",
    kicker: "Atelier",
    tagline: "Designed with you, from paper up.",
    intro:
      "Bring a reference, a fabric, or only an idea. We sketch, source, embroider and fit — designer dresses made to your measurements and timeline.",
    mood: mood("#141414", "#f2ece2", "#9b9187", "#c9a26b", "rgba(201,162,107,0.24)"),
    pieces: ["Consultation", "Sketch & Fabric", "Embroidery", "Fittings"],
    notes: ["Your measurements", "Your palette", "Timeline agreed upfront"],
  },
];

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug) as Category;

export const TESTIMONIALS = [
  {
    quote:
      "They understood exactly what I wanted for my barat without me having to over-explain. The fittings were patient and the finishing was clean.",
    name: "Hira",
    context: "Barat lehenga",
  },
  {
    quote:
      "I came for a nikah outfit two weeks before the date. It was made to my measurements and delivered on time.",
    name: "Sana",
    context: "Nikah maxi",
  },
  {
    quote:
      "Bought unstitched fabric and had it stitched here. The cut sat properly on me, which is rare.",
    name: "Areeba",
    context: "Stitched to size",
  },
  {
    quote:
      "My sister and I both got our mehndi outfits made here. Two very different styles, both done well.",
    name: "Mahnoor",
    context: "Mehndi gharara",
  },
];
