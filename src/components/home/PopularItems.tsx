import Link from "next/link";
import { Button } from "../ui/Button";
import { ProductCard } from "./ProductCard";

export const PopularItems = () => {
  const dummyProducts = [
    {
      id: "1",
      name: "Modern Desk Lamp",
      price: "45",
      category: "Electronics",
      image: "/images/desk-lamp.png",
    },
    {
      id: "2",
      name: "Art Deco Vase",
      price: "120",
      category: "Decor",
      image: "/images/vase.png",
    },
    {
      id: "3",
      name: "Premium Headphones",
      price: "299",
      category: "Audio",
      image: "/images/headphones.png",
    },
    {
      id: "4",
      name: "Leather Journal",
      price: "35",
      category: "Stationery",
      image: "/images/journal.png",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-bold md:text-5xl">
              Explore popular finds
            </h2>
            <p className="mt-4 text-foreground/60">
              Discover unique items listed by sellers in your community. Fresh
              additions daily.
            </p>
          </div>
          <Link href="/items" className="hidden sm:block">
            <Button variant="outline">View All Gallery</Button>
          </Link>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:hidden">
          <Link href="/items" className="w-full">
            <Button variant="outline" className="w-full">
              View All Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
