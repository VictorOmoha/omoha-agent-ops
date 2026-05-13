const agents = [
  {
    name: "LEAD FOLLOW-UP AGENT",
    job: "Replies to new inquiries, qualifies interest, books next steps, and prevents warm leads from disappearing.",
    outcome: "Faster response time and fewer missed opportunities.",
  },
  {
    name: "CLIENT INTAKE AGENT",
    job: "Collects details, asks missing questions, organizes context, and prepares your team before the first call.",
    outcome: "Cleaner handoffs and less repetitive questioning.",
  },
  {
    name: "PROPOSAL DRAFTING AGENT",
    job: "Turns intake notes into structured proposal drafts with scope, timeline, pricing logic, and next steps.",
    outcome: "Proposals move faster without lowering quality.",
  },
  {
    name: "SUPPORT TRIAGE AGENT",
    job: "Classifies incoming requests, drafts replies, routes issues, and escalates what needs human judgment.",
    outcome: "Less inbox chaos and clearer response ownership.",
  },
  {
    name: "RESEARCH AGENT",
    job: "Gathers market, prospect, competitor, or internal knowledge and summarizes it into usable briefings.",
    outcome: "Better preparation without hours of manual lookup.",
  },
  {
    name: "FOUNDER ASSISTANT AGENT",
    job: "Tracks recurring decisions, turns scattered notes into action items, and keeps key workflows moving.",
    outcome: "More leadership time, less operational drag.",
  },
];

export function Agents() {
  return (
    <section id="agents" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">{"// EXAMPLE AGENTS"}</p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            ONE AGENT. ONE JOB. ONE MEASURABLE OUTCOME.
          </h2>
          <p className="text-white/50 max-w-md leading-relaxed">
            We do not start with a vague chatbot. We define the role, the workflow,
            the trigger, the success metric, and the handoff rules.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div key={agent.name} className="p-7 bg-card-bg border border-card-border hover:border-cyan/60 transition-colors">
              <h3 className="text-base font-bold tracking-wide mb-4">{agent.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{agent.job}</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-mono text-cyan text-xs tracking-wider mb-2">OUTCOME</p>
                <p className="text-white/70 text-sm leading-relaxed">{agent.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
