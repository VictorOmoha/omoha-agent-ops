export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "AUDIT THE WORKFLOW",
      description:
        "We inspect how leads, client requests, documents, messages, and decisions currently move through the business. The goal is to find the work that is repetitive enough for an agent and important enough to matter.",
    },
    {
      num: "02",
      title: "DESIGN THE AGENT ROLE",
      description:
        "We define the agent's job, boundaries, inputs, outputs, escalation rules, tone, and success metric. Narrow agents are easier to trust, test, and improve.",
    },
    {
      num: "03",
      title: "BUILD, TEST, DEPLOY",
      description:
        "We wire the agent to the right tools, test it against real examples, and deploy it into the workflow with a human approval path where needed.",
    },
    {
      num: "04",
      title: "MONITOR AND IMPROVE",
      description:
        "Agents are not set-and-forget. We review outputs, catch failures, tighten prompts, improve integrations, and add new workflows as the business matures.",
    },
  ];

  return (
    <section id="how" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">{"// PROCESS"}</p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
          FROM OPERATIONAL CHAOS TO REPEATABLE SYSTEMS.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-white/10 pt-8">
              <p className="font-mono text-cyan text-4xl font-bold">{step.num}</p>
              <h3 className="text-xl font-bold tracking-wide mt-6 mb-4">{step.title}</h3>
              <p className="text-white/50 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          <div>
            <p className="font-mono text-cyan text-xl font-bold">CRM</p>
            <p className="text-xs text-white/40 mt-2">Lead capture, qualification, follow-up</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-xl font-bold">Email</p>
            <p className="text-xs text-white/40 mt-2">Drafts, reminders, routing, summaries</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-xl font-bold">Docs</p>
            <p className="text-xs text-white/40 mt-2">Proposals, SOPs, reports, briefs</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-xl font-bold">Ops</p>
            <p className="text-xs text-white/40 mt-2">Handoffs, alerts, dashboards, checks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
