"use client";
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivers",
      role: "Digital Artist",
      text: "ShopLite changed how I sell my prints. The minimal design is exactly what I was looking for.",
    },
    {
      name: "Sarah Chen",
      role: "Antique Collector",
      text: "The speed of listing is incredible. I can get 10 items up in minutes. High recommended!",
    },
    {
      name: "Jordan Lee",
      role: "Tech Enthusiast",
      text: "Clean, fast, and secure. Browsing the gallery is such a smooth experience compared to competitors.",
    },
  ];

  return (
    <section className="py-24 bg-accent/30 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold md:text-5xl">
            Word on the street
          </h2>
          <p className="mt-4 text-foreground/60">
            Join thousands of happy users already using ShopLite.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/5 bg-white/3 p-8 shadow-sm"
            >
              <p className="text-lg italic text-foreground/80 lowercase first-letter:uppercase">
                "{t.text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20" />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-foreground/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
