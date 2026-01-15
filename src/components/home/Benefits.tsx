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

          <div className="relative rounded-[2.5rem] bg-zinc-900 aspect-square lg:aspect-4/5 overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1551288049-bbbda51658f7?q=80&w=2070&auto=format&fit=crop"
              alt="Premium Dashboard"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0B] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-transparent" />

            {/* Floating Card 1: Sales Growth */}
            <div className="absolute top-12 -left-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-700 group-hover:translate-x-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <span className="text-xl font-bold">↑</span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider">
                    Conversion
                  </p>
                  <p className="text-xl font-bold text-white">+24.5%</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2: User Activity */}
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-700 group-hover:-translate-x-10 shadow-2xl">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider">
                  Global Reach
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-12 rounded-full bg-primary" />
                  <div className="h-2 w-8 rounded-full bg-white/20" />
                  <div className="h-2 w-16 rounded-full bg-primary/40" />
                </div>
                <p className="text-sm font-bold text-white">142 Countries</p>
              </div>
            </div>

            {/* Bottom Stats Banner */}
            <div className="absolute bottom-10 left-10 right-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-2xl transition-all duration-500 group-hover:bottom-12 group-hover:bg-white/10">
              <div className="grid grid-cols-2 gap-8 border-white/5 divide-x">
                <div>
                  <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider">
                    Total Revenue
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">$452.8k</p>
                </div>
                <div className="pl-8">
                  <p className="text-[10px] font-medium text-white/40 uppercase tracking-wider">
                    Active Stores
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">1,240</p>
                </div>
              </div>
            </div>

            {/* Animated Glow */}
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-[100px] transition-all duration-1000 group-hover:bg-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
