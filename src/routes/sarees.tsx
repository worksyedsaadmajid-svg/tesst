import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/site";


export const Route = createFileRoute("/sarees")({
  head: () => ({
    meta: [
      { title: "Sarees & Drapes — Ashrafi Bridal Studio, Karachi" },
      { name: "description", content: "Chiffon, jamawar, tissue and net sarees with worked pallus and blouses stitched to your size." },
      { property: "og:title", content: "Sarees & Drapes | Ashrafi Bridal Studio" },
      { property: "og:description", content: "Chiffon, jamawar, tissue and net sarees with worked pallus and blouses stitched to your size." },
    ],
  }),
  component: Page,
});

function Page() {
  return <CategoryPage category={getCategory("sarees")} />;
}
