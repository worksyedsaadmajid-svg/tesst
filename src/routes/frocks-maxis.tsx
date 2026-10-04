import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/site";


export const Route = createFileRoute("/frocks-maxis")({
  head: () => ({
    meta: [
      { title: "Frocks & Maxis — Ashrafi Bridal Studio, Karachi" },
      { name: "description", content: "Layered anarkali frocks, floor-length maxis and pishwas with cancan volume and hand-worked hems." },
      { property: "og:title", content: "Frocks & Maxis | Ashrafi Bridal Studio" },
      { property: "og:description", content: "Layered anarkali frocks, floor-length maxis and pishwas with cancan volume and hand-worked hems." },
    ],
  }),
  component: Page,
});

function Page() {
  return <CategoryPage category={getCategory("frocks-maxis")} />;
}
