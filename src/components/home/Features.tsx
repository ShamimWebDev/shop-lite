"use client";
export const Features = () => {
  const features = [
    {
      title: "Rapid Listing",
      description:
        "Post your items in under a minute with our streamlined submission process.",
      icon: "⚡",
    },
    {
      title: "Secure Auth",
      description:
        "Keep your listings safe with our secure, cookie-based authentication system.",
      icon: "🔒",
    },
    {
      title: "Public Gallery",
      description:
        "Anyone can browse your items without needing to create an account first.",
      icon: "🌍",
    },
    {
      title: "Detail Focused",
      description:
        "High-quality detail pages that make your products shine and attract buyers.",
      icon: "💎",
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-display font-bold md:text-5xl">
            {" "}
            Built for speed and simplicity{" "}
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/60">
            Everything you need to manage your personal marketplace without the
            unnecessary bloat of large e-commerce sites.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-white/5 bg-white/2 transition-all hover:bg-white/5 hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
