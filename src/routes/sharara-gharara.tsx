import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/site";


export const Route = createFileRoute("/sharara-gharara")({
  head: () => ({
    meta: [
      { title: "Sharara & Gharara — Ashrafi Bridal Studio, Karachi" },
      { name: "description", content: "Traditional kali ghararas and farshi shararas with worked borders, cut in classic proportions." },
      { property: "og:title", content: "Sharara & Gharara | Ashrafi Bridal Studio" },
      { property: "og:description", content: "Traditional kali ghararas and farshi shararas with worked borders, cut in classic proportions." },
    ],
  }),
  component: Page,
});

function Page() {
  return <CategoryPage category={getCategory("sharara-gharara")} />;
}
