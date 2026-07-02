import Image from "next/image";

const offers = [
  {
    name: "Follow-Up Agent",
    label: "LEAD RECOVERY SYSTEM",
    gif: "/demo-gifs/follow-up-agent-guided-demo.gif",
    alt: "Follow-Up Agent guided demo showing lead pipeline, approval queue, and agent decisions",
    promise: "Stop serious inquiries from dying because follow-up depends on memory, mood, or spare time.",
    buyer: "Best for contractors, clinics, real estate teams, consultants, agencies, churches, and service businesses.",
    bullets: [
      "Captures inquiries from forms, inboxes, SMS, or CRM",
      "Scores urgency and drafts first-touch replies",
      "Keeps the owner in approval mode before automation",
      "Schedules follow-up and flags human handoff moments",
    ],
    price: "$1,000 setup · $500/mo",
    note: "Fixed price. Cancel anytime. Founding-client rate for the first 5 businesses.",
    cta: "PILOT A FOLLOW-UP AGENT",
  },
  {
    name: "Runbook",
    label: "QUOTE OPS SYSTEM",
    gif: "/demo-gifs/runbook-walkthrough-hd.gif",
    alt: "Runbook walkthrough showing inquiry to draft quote workflow with pricing rules and approval gates",
    promise: "Turn messy customer requests into safe, reviewed draft quotes without letting AI invent prices or send blindly.",
    buyer: "Best for distributors, suppliers, manufacturers, procurement-heavy teams, and repeatable quoting workflows.",
    bullets: [
      "Extracts requirements from messy inbound requests",
      "Matches catalog/SKU context while pricing stays in code",
      "Flags risky terms, weak matches, and unknown recipients",
      "Routes every side effect through human approval and audit",
    ],
    price: "$5,000 pilot · $1,000/mo support",
    note: "Fixed-scope 30-day pilot: one quote workflow, one pricing rule set.",
    cta: "SCOPE A QUOTE RUNBOOK",
  },
];

export function ProductOffers() {
  return (
    <section id="product-offers" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">{"// PRODUCTIZED AI WORKFLOWS"}</p>
            <h2 className="display-2" style={{ marginTop: 22, maxWidth: 820 }}>
              Two focused systems. One operating principle: controlled automation.
            </h2>
          </div>
          <p className="lead-sm">
            The model drafts. Rules and context constrain the workflow. The gate protects the business. A human approves before it matters.
          </p>
        </div>

        <div className="offer-grid">
          {offers.map((offer) => (
            <article key={offer.name} className="offer-card">
              <div className="offer-media">
                <Image
                  src={offer.gif}
                  alt={offer.alt}
                  width={1386}
                  height={810}
                  unoptimized
                />
                <span>{offer.label}</span>
              </div>
              <div className="offer-body">
                <p className="mini-label">{offer.label}</p>
                <h3>{offer.name}</h3>
                <p className="offer-promise">{offer.promise}</p>
                <p className="offer-buyer">{offer.buyer}</p>
                <ul className="feature-list compact">
                  {offer.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="offer-price">{offer.price}</div>
                <p className="offer-buyer">{offer.note}</p>
                <a href="#contact" className="btn btn-primary">{offer.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
