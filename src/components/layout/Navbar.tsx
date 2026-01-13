"use client";

import Link from "next/link";
import { Button } from "../ui/Button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">
            S
          </div>
          <span className="text-xl font-display font-bold tracking-tight">
            ShopLite
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/items"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Explore
          </Link>
          <Link
            href="/#benefits"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Benefits
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Features
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/add-item">
            <Button size="sm">Sell Item</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
