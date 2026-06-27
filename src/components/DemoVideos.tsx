import Image from "next/image";

const demos = [
  {
    title: "Lead Follow-Up Agent",
    problem: "A warm inquiry comes in, but follow-up depends on the owner being available.",
    result: "The guide shows how the agent scores the lead, drafts the reply, updates the timeline, and stops before human approval is needed.",
    duration: "Interactive guide",
    type: "guide",
    src: "/demo-guides/follow-up-agent-guide.html",
    preview: "/demo-guides/follow-up-agent-preview.webp",
  },
  {
    title: "Client Intake Agent",
    problem: "A messy client request mixes website help, AI, booking issues, and follow-up gaps.",
    result: "The agent turns the vague message into clean outcomes, missing information, follow-up questions, and a task card.",
    duration: "35 sec",
    type: "video",
    src: "/demo-videos/client-intake-agent-demo.mp4",
  },
  {
    title: "Proposal Drafting Agent",
    problem: "A strong sales call loses momentum because the proposal takes too long to prepare.",
    result: "The agent turns discovery notes into workflow leaks, recommended scope, pricing context, and a ready follow-up email.",
    duration: "38 sec",
    type: "video",
    src: "/demo-videos/proposal-drafting-agent-demo.mp4",
  },
];

export function DemoVideos() {
  return (
    <section id="demo-videos" className="section-tight">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">{"// PROOF OF WORK"}</p>
            <h2 className="display-2" style={{ marginTop: 22, maxWidth: 760 }}>
              See focused agents in action.
            </h2>
          </div>
          <div>
            <p className="lead-sm">
              These demos show the core Agent Ops pattern: find one business leak,
              assign one narrow agent, and turn messy input into an operational next step.
            </p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <a href="#contact" className="btn btn-ghost">
                BOOK AN AGENT AUDIT
              </a>
            </div>
          </div>
        </div>

        <div className="card-grid grid-3">
          {demos.map((demo) => (
            <article key={demo.title} className="video-card">
              <div className="video-frame">
                {demo.type === "guide" ? (
                  <a href={demo.src} target="_blank" rel="noopener noreferrer" aria-label="Open Lead Follow-Up Agent guide">
                    <Image
                      src={demo.preview!}
                      alt="Lead Follow-Up Agent guided demo preview"
                      width={1200}
                      height={675}
                      className="guide-preview"
                      unoptimized
                    />
                  </a>
                ) : (
                  <video controls preload="metadata" playsInline poster={`${demo.src}#t=0.1`}>
                    <source src={demo.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="video-duration">{demo.duration}</div>
              </div>

              <div className="video-body">
                <h3>{demo.title}</h3>
                <div style={{ marginTop: 22 }}>
                  <p className="mini-label">BUSINESS LEAK</p>
                  <p className="card-body">{demo.problem}</p>
                </div>
                <div style={{ marginTop: 24, paddingTop: 22, borderTop: "1px solid var(--border)" }}>
                  <p className="mini-label">AGENT OUTCOME</p>
                  <p className="card-body" style={{ color: "var(--fg)" }}>{demo.result}</p>
                </div>
                {demo.type === "guide" && (
                  <a href={demo.src} target="_blank" rel="noopener noreferrer" className="demo-link">
                    OPEN FULL GUIDE
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
