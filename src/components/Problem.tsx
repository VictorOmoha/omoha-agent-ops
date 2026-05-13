const leaks = [
  {
    num: "01",
    title: "MISSED FOLLOW-UP COSTS REVENUE",
    body:
      "Warm leads cool down when replies are slow, scattered, or dependent on one busy person remembering every detail.",
  },
  {
    num: "02",
    title: "INTAKE IS TOO MANUAL",
    body:
      "Teams keep asking the same questions, copying notes between tools, and starting every client conversation from scratch.",
  },
  {
    num: "03",
    title: "FOUNDERS BECOME THE OPERATIONS SYSTEM",
    body:
      "The founder becomes the CRM, assistant, proposal writer, support desk, and reporting layer. That is overload, not leadership.",
  },
];

export function Problem() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">{"// THE LEAK"}</p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
          YOU DO NOT NEED MORE APPS. YOU NEED FEWER DROPPED BALLS.
        </h2>

        <p className="mt-6 text-white/50 max-w-2xl leading-relaxed">
          Most small teams do not have an AI problem. They have a follow-up problem,
          a handoff problem, a documentation problem, and a repeated-task problem.
          That is where focused agents become useful.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaks.map((item) => (
            <div key={item.num} className="p-8 bg-card-bg border border-card-border">
              <p className="font-mono text-cyan text-sm mb-4">{item.num}</p>
              <h3 className="text-lg font-bold tracking-wide mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
