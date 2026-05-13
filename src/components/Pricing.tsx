const plans = [
  {
    name: "AGENT AUDIT",
    price: "$500",
    period: "one-time",
    description: "A focused workflow review for teams that know they need automation but need the right starting point.",
    features: [
      "45-minute workflow call",
      "3-5 agent opportunities identified",
      "Risk and readiness notes",
      "Implementation roadmap",
      "Credit applied if you build with us",
    ],
    cta: "BOOK AUDIT",
    featured: false,
  },
  {
    name: "FIRST AGENT BUILD",
    price: "from $2,500",
    period: "project",
    description: "One focused AI agent built for a specific workflow, tested against real examples, and deployed with clear handoff rules.",
    features: [
      "1 narrow agent role",
      "Workflow design and prompt system",
      "Tool or inbox integration where needed",
      "Testing against real scenarios",
      "Launch documentation and handoff",
    ],
    cta: "BUILD FIRST AGENT",
    featured: true,
  },
  {
    name: "MANAGED AGENT OPS",
    price: "$2,000+",
    period: "/mo",
    description: "Ongoing agent operations for businesses ready to automate multiple workflows and keep improving them monthly.",
    features: [
      "1-5 managed agent workflows",
      "Monitoring and performance reviews",
      "Prompt and workflow optimization",
      "New automation improvements monthly",
      "Priority support and reporting",
    ],
    cta: "START RETAINER",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">{"// ENGAGEMENT OPTIONS"}</p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
          START WITH THE RIGHT LEVEL OF COMMITMENT.
        </h2>

        <p className="mt-6 text-white/50 max-w-2xl leading-relaxed">
          Some teams need a roadmap first. Some need their first agent. Some need a
          managed agent operations layer. We can meet the business where it is.
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
                  {"// BEST FIRST BUILD"}
                </p>
              )}

              <h3 className="text-lg font-bold tracking-wider">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-2 flex-wrap">
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
