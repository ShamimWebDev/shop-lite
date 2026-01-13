import Link from "next/link";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 blur-[100px] [background:radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <span className="mr-2">✨</span>
            The minimal way to sell and explore
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-display font-bold tracking-tight md:text-7xl">
            Streamline your{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Product Listing
            </span>{" "}
            experience.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-foreground/60 md:text-xl">
            ShopLite is the central hub for local sellers and curious buyers.
            List your items in seconds, explore unique finds, and connect
            instantly.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/items">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Items
              </Button>
            </Link>
            <Link href="/add-item">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Start Selling
              </Button>
            </Link>
          </div>

          <div className="mt-16 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
            <div className="h-64 sm:h-96 w-full rounded-xl bg-gradient-to-br from-zinc-900 to-black overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-display text-4xl font-bold opacity-20">
                PRODUCT SHOWCASE PREVIEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
