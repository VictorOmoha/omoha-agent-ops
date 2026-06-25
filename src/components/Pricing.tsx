const plans = [
  {
    name: "Agent Audit",
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
    name: "First Agent Build",
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
    name: "Managed Agent Ops",
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
    <section id="pricing" className="section-tight">
      <div className="container">
        <p className="kicker">{"// ENGAGEMENT OPTIONS"}</p>
        <h2 className="display-2" style={{ marginTop: 22, maxWidth: 780 }}>
          Start with the right level of commitment.
        </h2>
        <p className="lead-sm" style={{ marginTop: 24, maxWidth: 680 }}>
          Some teams need a roadmap first. Some need their first agent. Some need a
          managed agent operations layer. We meet the business where it is.
        </p>

        <div className="card-grid grid-3" style={{ marginTop: 58 }}>
          {plans.map((plan) => (
            <article key={plan.name} className={`price-card ${plan.featured ? "featured" : ""}`}>
              {plan.featured && <p className="kicker">{"// BEST FIRST BUILD"}</p>}
              <h3 className="card-title" style={{ marginTop: plan.featured ? 18 : 0 }}>{plan.name}</h3>
              <div className="price">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>
              <p className="card-body">{plan.description}</p>
              <ul className="feature-list">
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a href="#contact" className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
