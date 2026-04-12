const plans = [
  {
    name: "LAUNCH",
    price: "$2,000",
    period: "/mo",
    description: "One automated workflow. Perfect for a single high-impact process.",
    features: [
      "1 agent workflow (end-to-end)",
      "Connected to your existing tools",
      "Weekly performance monitoring",
      "Monthly optimization report",
      "Email & Slack support",
    ],
    cta: "START LAUNCH",
    featured: false,
  },
  {
    name: "SCALE",
    price: "$3,500",
    period: "/mo",
    description: "Three coordinated workflows. Agents that talk to each other.",
    features: [
      "3 agent workflows",
      "Cross-workflow coordination",
      "Daily performance monitoring",
      "Bi-weekly optimization sessions",
      "Priority support (4hr response)",
      "Custom agent personality & tone",
    ],
    cta: "START SCALE",
    featured: true,
  },
  {
    name: "COMMAND",
    price: "$5,000",
    period: "/mo",
    description: "Five workflows. Full operations layer. Your AI back-office.",
    features: [
      "5 agent workflows",
      "Full cross-coordination matrix",
      "Real-time monitoring & alerts",
      "Weekly optimization & strategy calls",
      "Dedicated ops engineer",
      "Custom agent personalities",
      "API integrations built to spec",
    ],
    cta: "START COMMAND",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">// PRICING</p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
          AGENT OPERATIONS, FIXED PRICE.
        </h2>

        <p className="mt-6 text-white/50 max-w-xl leading-relaxed">
          No hourly billing. No scope creep surprises. You pay a flat monthly
          retainer and we own the outcome.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card p-8 bg-card-bg flex flex-col ${
                plan.featured ? "featured glow-cyan" : ""
              }`}
            >
              {plan.featured && (
                <p className="font-mono text-cyan text-xs tracking-wider mb-4">
                  // RECOMMENDED
                </p>
              )}

              <h3 className="text-lg font-bold tracking-wider">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className="text-white/40 text-sm">{plan.period}</span>
              </div>

              <p className="mt-4 text-sm text-white/50 leading-relaxed">
                {plan.description}
              </p>

              <ul className="mt-8 flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="text-cyan mt-0.5">&#x25B8;</span>
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block text-center text-sm font-semibold tracking-wider py-4 transition-all ${
                  plan.featured
                    ? "bg-cyan text-black hover:bg-cyan/90"
                    : "border border-white/20 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
