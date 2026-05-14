export function Hero() {
  return (
    <section className="hero-gradient relative pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">{"// AI AGENTS FOR BUSINESS OPERATIONS"}</p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-5xl">
          FOCUSED AI AGENTS FOR MESSY BUSINESS WORKFLOWS.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
          Omoha Solutions builds and manages AI agents that handle lead follow-up,
          client intake, proposal drafting, support triage, research, and repetitive
          admin work without adding more software clutter.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-block bg-cyan text-black font-semibold px-8 py-4 text-sm tracking-wider hover:bg-cyan/90 transition-all text-center"
          >
            BOOK AN AGENT AUDIT
          </a>
          <a
            href="#demo-videos"
            className="inline-block border border-white/20 text-white font-medium px-8 py-4 text-sm tracking-wider hover:bg-white/5 transition-all text-center"
          >
            WATCH DEMO VIDEOS
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl border-t border-white/10 pt-8">
          <div>
            <p className="font-mono text-cyan text-2xl font-bold">1 job</p>
            <p className="text-xs text-white/40 mt-1 tracking-wider">PER AGENT</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-2xl font-bold">7-14d</p>
            <p className="text-xs text-white/40 mt-1 tracking-wider">FIRST BUILD WINDOW</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-2xl font-bold">Managed</p>
            <p className="text-xs text-white/40 mt-1 tracking-wider">BUILD, TEST, IMPROVE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
