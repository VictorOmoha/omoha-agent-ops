export function Problem() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">// THE PROBLEM</p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
          YOUR BUSINESS HAS MORE WORK THAN HANDS.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-card-bg border border-card-border">
            <p className="font-mono text-cyan text-sm mb-4">01</p>
            <h3 className="text-lg font-bold tracking-wide mb-3">REPETITIVE WORK DROWNS YOUR TEAM</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Lead qualification, appointment scheduling, follow-up emails, report
              generation. Your skilled people spend hours on tasks a machine could
              handle in seconds.
            </p>
          </div>

          <div className="p-8 bg-card-bg border border-card-border">
            <p className="font-mono text-cyan text-sm mb-4">02</p>
            <h3 className="text-lg font-bold tracking-wide mb-3">AI TOOLS WITHOUT STRATEGY ARE NOISE</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              You bought ChatGPT, tried Zapier, maybe even built a custom bot. None
              of it connects end-to-end. You have AI scattered across tools with no
              coordination and no accountability.
            </p>
          </div>

          <div className="p-8 bg-card-bg border border-card-border">
            <p className="font-mono text-cyan text-sm mb-4">03</p>
            <h3 className="text-lg font-bold tracking-wide mb-3">HIRING IS SLOW AND EXPENSIVE</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              A single operations hire costs $50K+ per year, takes 60 days to
              onboard, and still needs tools, training, and management. Agent
              workflows deploy in weeks and scale instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
