"use client";
export const Benefits = () => {
  const benefits = [
    {
      title: "Zero Fees",
      description:
        "Unlike other platforms, we don't take a cut from your sales.",
    },
    {
      title: "Identity First",
      description:
        "Connect directly with local buyers and build your reputation.",
    },
    {
      title: "Mobile Ready",
      description:
        "Manage your listings on the go with our fully responsive UI.",
    },
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-display font-bold md:text-5xl">
              Why sellers choose ShopLite
            </h2>
            <p className="mt-6 text-lg text-foreground/60 leading-relaxed">
              We've stripped away the complexity of traditional marketplaces. No
              massive forms, no hidden fees, just a clean platform for your
              products.
            </p>

            <dl className="mt-10 space-y-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-[10px]">
                    ✓
                  </div>
                  <div>
                    <dt className="font-bold text-lg">{benefit.title}</dt>
                    <dd className="mt-1 text-foreground/60">
                      {benefit.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative rounded-3xl bg-zinc-900 aspect-video lg:aspect-square overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1551288049-bbbda51658f7?q=80&w=2070&auto=format&fit=crop"
              alt="Premium Dashboard"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

            {/* Floating Stats Card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-white/50">
                    Monthly Active Users
                  </p>
                  <p className="text-xl font-bold text-white">
                    24.8k{" "}
                    <span className="text-xs font-normal text-green-400">
                      +12%
                    </span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
