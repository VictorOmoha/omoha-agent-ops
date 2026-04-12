export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "AUDIT & MAP",
      description:
        "We study your operations for one week. We identify the repetitive workflows, communication gaps, and bottlenecks that eat your team's time. Then we map which ones an AI agent can own end-to-end.",
    },
    {
      num: "02",
      title: "BUILD & DEPLOY",
      description:
        "Our team designs, builds, and deploys your agent workflows. Each one is wired to your existing tools (email, CRM, calendar, Slack, etc.) and tested against real scenarios before going live.",
    },
    {
      num: "03",
      title: "MONITOR & OPTIMIZE",
      description:
        "Agents run 24/7. We monitor performance, catch errors, and continuously optimize. Monthly reports show you exactly what your agents accomplished and where we improved them.",
    },
  ];

  return (
    <section id="how" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">// HOW IT WORKS</p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
          FROM CHAOS TO AUTONOMOUS OPERATIONS.
        </h2>

        <div className="mt-16 flex flex-col gap-16">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-32 shrink-0">
                <p className="font-mono text-cyan text-4xl font-bold">{step.num}</p>
              </div>
              <div className="max-w-xl">
                <h3 className="text-xl font-bold tracking-wide mb-4">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          <div>
            <p className="font-mono text-cyan text-xl font-bold">Email & CRM</p>
            <p className="text-xs text-white/40 mt-2">Lead capture, follow-ups, pipeline updates</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-xl font-bold">Scheduling</p>
            <p className="text-xs text-white/40 mt-2">Appointments, reminders, calendar sync</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-xl font-bold">Reporting</p>
            <p className="text-xs text-white/40 mt-2">KPI dashboards, daily digests, alerts</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-xl font-bold">Customer Comms</p>
            <p className="text-xs text-white/40 mt-2">Onboarding, check-ins, support routing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
