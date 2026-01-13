"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { toast } from "react-hot-toast";
import {
  PlusCircle,
  Info,
  Tag,
  DollarSign,
  Package,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AddItemPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Listing your item...");

    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, category, description }),
      });

      if (res.ok) {
        toast.success("Item listed successfully!", { id: toastId });
        router.push("/items");
      } else {
        toast.error("Failed to list item.", { id: toastId });
      }
    } catch (err) {
      toast.error("Network error. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-display font-bold md:text-5xl text-white">
                List a New Item
              </h1>
              <p className="mt-4 text-foreground/60">
                Share your unique finds with the ShopLite community.
              </p>
            </div>

            <form
              onSubmit={handleAddItem}
              className="space-y-8 rounded-[2.5rem] border border-white/5 bg-white/2 p-10 shadow-2xl backdrop-blur-xl"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground/70 ml-1">
                    <Tag className="h-4 w-4" />
                    Product Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Modern Sofa"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground/70 ml-1">
                    <DollarSign className="h-4 w-4" />
                    Price ($)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="250"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition-all focus:border-primary/50 focus:bg-white/10"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground/70 ml-1">
                  <Package className="h-4 w-4" />
                  Category
                </label>
                <select
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition-all focus:border-primary/50 focus:bg-white/10 appearance-none cursor-pointer"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Decor">Decor</option>
                  <option value="Audio">Audio</option>
                  <option value="Stationery">Stationery</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground/70 ml-1">
                  <Info className="h-4 w-4" />
                  Description
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your product in detail..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition-all focus:border-primary/50 focus:bg-white/10 resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="pt-6">
                <Button
                  disabled={loading}
                  type="submit"
                  size="lg"
                  className="w-full h-16 rounded-3xl text-lg gap-3"
                >
                  {loading ? (
                    "Listing..."
                  ) : (
                    <>
                      <PlusCircle className="h-6 w-6" />
                      List Product
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
