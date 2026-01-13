export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description:
        "Sign up or log in to access your personal seller dashboard.",
    },
    {
      number: "02",
      title: "List Your Item",
      description:
        "Fill in the details and high-quality images of what you're selling.",
    },
    {
      number: "03",
      title: "Go Live",
      description:
        "Your item is immediately visible to the public for anyone to explore.",
    },
  ];

  return (
    <section className="bg-accent/50 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-display font-bold md:text-5xl">
            How ShopLite works
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/60">
            A simple three-step process to get your products in front of the
            right audience.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <span className="text-5xl font-display font-black text-primary/10 lg:text-6xl">
                {step.number}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 text-foreground/60">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="absolute top-12 left-1/2 hidden h-px w-full bg-gradient-to-r from-primary/20 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
