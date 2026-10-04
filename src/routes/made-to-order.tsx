import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/site";


export const Route = createFileRoute("/made-to-order")({
  head: () => ({
    meta: [
      { title: "Made to Order Designer Dresses — Ashrafi Bridal Studio, Karachi" },
      { name: "description", content: "Designer dresses made from sketch to fitting — your fabric, your palette, your measurements, agreed timeline." },
      { property: "og:title", content: "Made to Order Designer Dresses | Ashrafi Bridal Studio" },
      { property: "og:description", content: "Designer dresses made from sketch to fitting — your fabric, your palette, your measurements, agreed timeline." },
    ],
  }),
  component: Page,
});

function Page() {
  return <CategoryPage category={getCategory("made-to-order")} />;
}
