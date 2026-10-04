import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { getCategory } from "@/lib/site";


export const Route = createFileRoute("/mehndi")({
  head: () => ({
    meta: [
      { title: "Mehndi Outfits in Marigold & Green — Ashrafi Bridal Studio, Karachi" },
      { name: "description", content: "Gota patti ghararas, mirror work kurtas and festive mehndi outfits in marigold, green and orange." },
      { property: "og:title", content: "Mehndi Outfits in Marigold & Green | Ashrafi Bridal Studio" },
      { property: "og:description", content: "Gota patti ghararas, mirror work kurtas and festive mehndi outfits in marigold, green and orange." },
    ],
  }),
  component: Page,
});

function Page() {
  return <CategoryPage category={getCategory("mehndi")} />;
}
