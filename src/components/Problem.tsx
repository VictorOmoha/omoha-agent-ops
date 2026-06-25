const leaks = [
  {
    num: "01",
    title: "Warm leads cool down",
    body:
      "A prospect asks a real question, then waits while the owner is buried in calls, messages, and delivery work.",
  },
  {
    num: "02",
    title: "Context gets scattered",
    body:
      "Important details live across email, notes, forms, DMs, docs, and memory. Handoffs become guesswork.",
  },
  {
    num: "03",
    title: "The founder becomes the system",
    body:
      "When every follow-up, decision, and reminder depends on one person, growth creates chaos instead of leverage.",
  },
];

export function Problem() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="kicker">{"// THE OPERATIONAL LEAK"}</p>
            <h2 className="display-2" style={{ marginTop: 22, maxWidth: 860 }}>
              You do not need another app. You need fewer dropped balls.
            </h2>
          </div>
          <p className="lead-sm">
            Most teams do not have an AI problem. They have a follow-up problem,
            a handoff problem, a documentation problem, and a repeated-task problem.
            Focused agents are useful when they attack those leaks directly.
          </p>
        </div>

        <div className="card-grid grid-3">
          {leaks.map((item) => (
            <article key={item.num} className="panel">
              <p className="card-num">{item.num}</p>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
