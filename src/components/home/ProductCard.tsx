import Link from "next/link";
import { Button } from "../ui/Button";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  category,
  image,
}: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] transition-all hover:bg-white/[0.04]">
      <div className="aspect-square w-full overflow-hidden bg-zinc-800 relative">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium backdrop-blur-md">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="truncate font-bold text-lg">{name}</h3>
          <span className="shrink-0 font-display font-bold text-primary">
            ${price}
          </span>
        </div>
        <div className="mt-6 flex gap-3">
          <Link href={`/items/${id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              Details
            </Button>
          </Link>
          <Button size="sm" className="px-4">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};
