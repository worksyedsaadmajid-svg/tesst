import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/site";


export const Route = createFileRoute("/party-wear")({
  head: () => ({
    meta: [
      { title: "Party Wear & Formals — Ashrafi Bridal Studio, Karachi" },
      { name: "description", content: "Sequin chiffon shirts, kurta sets and cocktail sarees for engagements, dinners and guest occasions." },
      { property: "og:title", content: "Party Wear & Formals | Ashrafi Bridal Studio" },
      { property: "og:description", content: "Sequin chiffon shirts, kurta sets and cocktail sarees for engagements, dinners and guest occasions." },
    ],
  }),
  component: Page,
});

function Page() {
  return <CategoryPage category={getCategory("party-wear")} />;
}
