import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/site";
import hero from "@/assets/hero-barat.jpg";

export const Route = createFileRoute("/barat")({
  head: () => ({
    meta: [
      { title: "Barat Lehengas in Deep Maroon — Ashrafi Bridal Studio, Karachi" },
      { name: "description", content: "Deep maroon velvet barat lehengas and pishwas with antique gold zardozi, made to your measurements in Karachi." },
      { property: "og:title", content: "Barat Lehengas in Deep Maroon | Ashrafi Bridal Studio" },
      { property: "og:description", content: "Deep maroon velvet barat lehengas and pishwas with antique gold zardozi, made to your measurements in Karachi." },
    ],
  }),
  component: Page,
});

function Page() {
  return <CategoryPage category={getCategory("barat")} heroImage={hero} />;
}
