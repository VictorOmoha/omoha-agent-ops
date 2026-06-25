export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Audit the workflow",
      description:
        "We inspect how leads, client requests, documents, messages, and decisions currently move through the business. The goal is to find work that is repetitive enough for an agent and important enough to matter.",
    },
    {
      num: "02",
      title: "Design the agent role",
      description:
        "We define the agent's job, boundaries, inputs, outputs, escalation rules, tone, and success metric. Narrow agents are easier to trust, test, and improve.",
    },
    {
      num: "03",
      title: "Build, test, deploy",
      description:
        "We wire the agent to the right tools, test it against real examples, and deploy it into the workflow with a human approval path where needed.",
    },
    {
      num: "04",
      title: "Monitor and improve",
      description:
        "Agents are not set-and-forget. We review outputs, catch failures, tighten prompts, improve integrations, and add new workflows as the business matures.",
    },
  ];

  return (
    <section id="how" className="section">
      <div className="container process-grid">
        <div>
          <p className="kicker">{"// PROCESS"}</p>
          <h2 className="display-2" style={{ marginTop: 22 }}>
            From operational chaos to repeatable systems.
          </h2>
          <p className="lead-sm" style={{ marginTop: 26 }}>
            The point is not to “add AI.” The point is to remove operational drag,
            clarify ownership, and give the business a workflow it can trust.
          </p>

          <div className="tool-strip">
            {[
              ["CRM", "Capture, qualify, follow up"],
              ["Email", "Drafts, routing, summaries"],
              ["Docs", "Proposals, SOPs, briefs"],
              ["Ops", "Alerts, checks, handoffs"],
            ].map(([name, body]) => (
              <div key={name} className="tool-chip">
                <strong>{name}</strong>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="process-list">
          {steps.map((step) => (
            <article key={step.num} className="process-item">
              <p className="process-num">{step.num}</p>
              <div>
                <h3 className="card-title" style={{ marginTop: 0 }}>{step.title}</h3>
                <p className="card-body">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
