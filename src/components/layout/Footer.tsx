import Link from "next/link";
import { Button } from "../ui/Button";

export const CTA = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 text-center text-primary-foreground shadow-2xl md:px-16 md:py-28">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 p-40 blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 rounded-full bg-indigo-400/20 p-40 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-4xl font-display font-bold md:text-6xl">
              Ready to clear your space?
            </h2>
            <p className="mt-6 text-lg opacity-80 md:text-xl">
              Don't let your unused items sit gathering dust. List them on
              ShopLite today and find them a new home.
            </p>
            <div className="mt-10 flex flex-col gap-4 justify-center sm:flex-row">
              <Link href="/login">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get Started Now
                </Button>
              </Link>
              <Link href="/items">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10"
                >
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-[10px] text-white font-bold">
              S
            </div>
            <span className="text-lg font-display font-bold tracking-tight">
              ShopLite
            </span>
          </div>

          <p className="text-sm text-foreground/40 text-center">
            &copy; {new Date().getFullYear()} ShopLite Inc. Built for the next
            generation of e-commerce.
          </p>

          <div className="flex gap-6 text-sm font-medium text-foreground/60 transition-colors">
            <Link href="#" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
