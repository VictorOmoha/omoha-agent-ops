export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="kicker">{"// AI AGENTS FOR BUSINESS OPERATIONS"}</p>

          <h1 className="display-1" style={{ marginTop: 24 }}>
            Agents that turn messy workflows into owned systems.
          </h1>

          <p className="lead">
            Omoha Solutions designs, builds, and manages focused AI agents for lead
            follow-up, client intake, proposal drafting, support triage, research,
            and repetitive admin work. One agent. One job. Clear human control.
          </p>

          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">
              BOOK AN AGENT AUDIT
            </a>
            <a href="#demo-videos" className="btn btn-ghost">
              WATCH DEMOS
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>1 job</strong>
              <span>PER AGENT</span>
            </div>
            <div className="hero-stat">
              <strong>7-14d</strong>
              <span>FIRST BUILD WINDOW</span>
            </div>
            <div className="hero-stat">
              <strong>Human</strong>
              <span>APPROVAL WHERE IT MATTERS</span>
            </div>
          </div>
        </div>

        <div className="agent-console" aria-label="Agent workflow visualization">
          <div className="console-top">
            <span className="console-dot" />
            <span className="console-dot" />
            <span className="console-dot" />
            <span className="console-name">agent-loop.sh</span>
          </div>
          <div className="agent-loop">
            <div className="loop-card">
              <div className="loop-head">
                <span className="loop-title">Inbound signal</span>
                <span className="loop-status">CAPTURED</span>
              </div>
              <p className="loop-body">
                New inquiry arrives from email, site form, CRM, or inbox. The agent
                extracts context, source, urgency, and missing details.
              </p>
              <div className="signal-bar"><span style={{ width: "42%" }} /></div>
            </div>

            <div className="loop-card">
              <div className="loop-head">
                <span className="loop-title">Decision draft</span>
                <span className="loop-status">READY</span>
              </div>
              <p className="loop-body">
                Agent scores fit, prepares a reply, updates the tracker, and flags
                the next action for approval instead of acting blindly.
              </p>
              <div className="signal-bar"><span style={{ width: "74%" }} /></div>
            </div>

            <div className="loop-card">
              <div className="loop-head">
                <span className="loop-title">Human handoff</span>
                <span className="loop-status">CONTROLLED</span>
              </div>
              <p className="loop-body">
                Your team sees what happened, why it happened, and what should be
                sent, scheduled, escalated, or improved next.
              </p>
              <div className="signal-bar"><span style={{ width: "91%" }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
