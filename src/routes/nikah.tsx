import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/site";
import hero from "@/assets/hero-nikah.jpg";

export const Route = createFileRoute("/nikah")({
  head: () => ({
    meta: [
      { title: "Nikah Dresses in White & Black — Ashrafi Bridal Studio, Karachi" },
      { name: "description", content: "Ivory, pearl and jet nikah outfits with tonal dabka and hand-set crystal, stitched or made to order in Karachi." },
      { property: "og:title", content: "Nikah Dresses in White & Black | Ashrafi Bridal Studio" },
      { property: "og:description", content: "Ivory, pearl and jet nikah outfits with tonal dabka and hand-set crystal, stitched or made to order in Karachi." },
    ],
  }),
  component: Page,
});

function Page() {
  return <CategoryPage category={getCategory("nikah")} heroImage={hero} />;
}
