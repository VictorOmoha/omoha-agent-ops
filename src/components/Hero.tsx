export function Hero() {
  return (
    <section className="hero-gradient relative pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">// AI AGENT OPERATIONS &bull; INFRASTRUCTURE AS A SERVICE</p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-4xl">
          WE SET UP, RUN, AND OPTIMIZE AI AGENTS FOR YOUR BUSINESS.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
          Stop duct-taping AI tools together. We deploy autonomous agent workflows
          that handle your operations 24/7, from lead capture to customer follow-up
          to internal reporting. Built, monitored, and maintained by our team.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="inline-block bg-cyan text-black font-semibold px-8 py-4 text-sm tracking-wider hover:bg-cyan/90 transition-all text-center"
          >
            VIEW PLANS
          </a>
          <a
            href="#how"
            className="inline-block border border-white/20 text-white font-medium px-8 py-4 text-sm tracking-wider hover:bg-white/5 transition-all text-center"
          >
            HOW IT WORKS
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg border-t border-white/10 pt-8">
          <div>
            <p className="font-mono text-cyan text-2xl font-bold">24/7</p>
            <p className="text-xs text-white/40 mt-1 tracking-wider">AGENT UPTIME</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-2xl font-bold">3wk</p>
            <p className="text-xs text-white/40 mt-1 tracking-wider">TO FIRST DEPLOY</p>
          </div>
          <div>
            <p className="font-mono text-cyan text-2xl font-bold">0</p>
            <p className="text-xs text-white/40 mt-1 tracking-wider">HIRES NEEDED</p>
          </div>
        </div>
      </div>
    </section>
  );
}
