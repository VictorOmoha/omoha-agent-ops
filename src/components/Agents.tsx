const agents = [
  {
    name: "Lead Follow-Up Agent",
    job: "Replies to new inquiries, qualifies interest, books next steps, and prevents warm leads from disappearing.",
    outcome: "Faster response time and fewer missed opportunities.",
  },
  {
    name: "Client Intake Agent",
    job: "Collects details, asks missing questions, organizes context, and prepares your team before the first call.",
    outcome: "Cleaner handoffs and less repetitive questioning.",
  },
  {
    name: "Proposal Drafting Agent",
    job: "Turns intake notes into structured proposal drafts with scope, timeline, pricing logic, and next steps.",
    outcome: "Proposals move faster without lowering quality.",
  },
  {
    name: "Support Triage Agent",
    job: "Classifies incoming requests, drafts replies, routes issues, and escalates what needs human judgment.",
    outcome: "Less inbox chaos and clearer response ownership.",
  },
  {
    name: "Research Agent",
    job: "Gathers market, prospect, competitor, or internal knowledge and summarizes it into usable briefings.",
    outcome: "Better preparation without hours of manual lookup.",
  },
  {
    name: "Founder Assistant Agent",
    job: "Tracks recurring decisions, turns scattered notes into action items, and keeps key workflows moving.",
    outcome: "More leadership time, less operational drag.",
  },
];

export function Agents() {
  return (
    <section id="agents" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">{"// EXAMPLE AGENTS"}</p>
            <h2 className="display-2" style={{ marginTop: 22, maxWidth: 760 }}>
              One agent. One job. One measurable outcome.
            </h2>
          </div>
          <p className="lead-sm">
            We do not start with a vague chatbot. We define the role, trigger,
            context, success metric, approval path, and handoff rules before build.
          </p>
        </div>

        <div className="card-grid grid-3">
          {agents.map((agent, index) => (
            <article key={agent.name} className="agent-card">
              <p className="card-num">0{index + 1}</p>
              <h3 style={{ marginTop: 18 }}>{agent.name}</h3>
              <p className="card-body">{agent.job}</p>
              <div className="agent-outcome">
                <p className="kicker">OUTCOME</p>
                <p>{agent.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
