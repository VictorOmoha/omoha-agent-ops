const plans = [
  {
    name: "Follow-Up Agent Pilot",
    price: "$1,000",
    period: "setup",
    description: "A lead recovery system for service businesses that need faster response, owner approval, and consistent follow-up.",
    features: [
      "Lead capture workflow",
      "AI-drafted replies in approval mode",
      "Follow-up reminders and owner handoff",
      "$500/mo support after setup",
      "Fixed price. Cancel anytime. Founding-client rate for the first 5 businesses.",
      "Best first offer for local service teams",
    ],
    cta: "PILOT FOLLOW-UP",
    featured: false,
  },
  {
    name: "Runbook Quote Ops",
    price: "$5,000",
    period: "pilot",
    description: "A controlled quoting workflow for teams that turn messy inbound requests into reviewed draft quotes.",
    features: [
      "Fixed-scope 30-day pilot: one quote workflow, one pricing rule set",
      "Intake-to-draft quote workflow",
      "Catalog/SKU and pricing rule mapping",
      "Risk flags, approval gates, and audit trail",
      "Simulated or controlled send path",
      "$1,000/mo support after pilot",
      "Best for distributors and quote-heavy teams",
    ],
    cta: "SCOPE RUNBOOK",
    featured: true,
  },
  {
    name: "Agent Ops Core",
    price: "$2,000",
    period: "/mo",
    description: "Ongoing agent operations for businesses ready to automate multiple workflows and keep improving them monthly.",
    features: [
      "Up to 2 managed agent workflows",
      "Monitoring and performance reviews",
      "Prompt and workflow optimization",
      "New automation improvements monthly",
      "3-month minimum, monthly after",
    ],
    cta: "START RETAINER",
    featured: false,
  },
  {
    name: "Agent Ops Scale",
    price: "$3,500",
    period: "/mo",
    description: "Ongoing agent operations for businesses ready to automate multiple workflows and keep improving them monthly.",
    features: [
      "Up to 5 managed agent workflows",
      "Monitoring and performance reviews",
      "Prompt and workflow optimization",
      "New automation improvements monthly",
      "Priority support and reporting",
      "3-month minimum, monthly after",
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
          Start with the system that matches the leak.
        </h2>
        <p className="lead-sm" style={{ marginTop: 24, maxWidth: 680 }}>
          Follow-Up Agent is for missed lead response. Runbook is for quote-control workflows. Managed Agent Ops is for teams ready to keep improving multiple workflows monthly.
        </p>

        <div className="card-grid grid-2" style={{ marginTop: 58 }}>
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
