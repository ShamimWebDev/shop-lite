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

          <div className="relative rounded-3xl bg-zinc-900 aspect-video lg:aspect-square overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-bold text-2xl uppercase tracking-widest text-center px-10">
              Premium Dashboard Visualization
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
