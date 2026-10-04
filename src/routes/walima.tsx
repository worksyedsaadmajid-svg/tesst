import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/site";


export const Route = createFileRoute("/walima")({
  head: () => ({
    meta: [
      { title: "Walima Gowns in Pastel & Pearl — Ashrafi Bridal Studio, Karachi" },
      { name: "description", content: "Champagne, blush and powder-blue walima gowns and trails with tonal pearl work." },
      { property: "og:title", content: "Walima Gowns in Pastel & Pearl | Ashrafi Bridal Studio" },
      { property: "og:description", content: "Champagne, blush and powder-blue walima gowns and trails with tonal pearl work." },
    ],
  }),
  component: Page,
});

function Page() {
  return <CategoryPage category={getCategory("walima")} />;
}
