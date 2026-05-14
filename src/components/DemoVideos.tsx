const demos = [
  {
    title: "LEAD FOLLOW-UP AGENT",
    problem: "A warm inquiry comes in, but follow-up depends on the owner being available.",
    result: "The agent qualifies the lead, drafts the reply, updates the tracker, and points the lead toward an Agent Audit.",
    duration: "44 sec",
    src: "/demo-videos/lead-follow-up-agent-demo.mp4",
  },
  {
    title: "CLIENT INTAKE AGENT",
    problem: "A messy client request mixes website help, AI, booking issues, and follow-up gaps.",
    result: "The agent turns the vague message into clean outcomes, missing information, follow-up questions, and a task card.",
    duration: "35 sec",
    src: "/demo-videos/client-intake-agent-demo.mp4",
  },
  {
    title: "PROPOSAL DRAFTING AGENT",
    problem: "A strong sales call loses momentum because the proposal takes too long to prepare.",
    result: "The agent turns discovery notes into workflow leaks, recommended scope, pricing context, and a ready follow-up email.",
    duration: "38 sec",
    src: "/demo-videos/proposal-drafting-agent-demo.mp4",
  },
];

export function DemoVideos() {
  return (
    <section id="demo-videos" className="py-24 px-6 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">{"// PROOF OF WORK"}</p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-4xl leading-tight">
              SEE FOCUSED AGENTS IN ACTION.
            </h2>
            <p className="mt-6 text-white/50 max-w-2xl leading-relaxed">
              These short demos show the core Agent Ops pattern: find one business leak,
              assign one narrow agent, and turn messy input into an operational next step.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block border border-cyan text-cyan font-semibold px-7 py-4 text-sm tracking-wider hover:bg-cyan hover:text-black transition-all text-center"
          >
            BOOK AN AGENT AUDIT
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <article
              key={demo.title}
              className="bg-card-bg border border-card-border hover:border-cyan/60 transition-colors overflow-hidden"
            >
              <div className="relative border-b border-white/10 bg-black">
                <video
                  className="w-full aspect-video object-cover"
                  controls
                  preload="metadata"
                  playsInline
                  poster={`${demo.src}#t=0.1`}
                >
                  <source src={demo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-3 right-3 bg-black/80 border border-white/15 px-3 py-1 font-mono text-[10px] text-white/70 tracking-wider">
                  {demo.duration}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-base font-bold tracking-wide mb-5">{demo.title}</h3>

                <div>
                  <p className="font-mono text-cyan text-xs tracking-wider mb-2">BUSINESS LEAK</p>
                  <p className="text-white/55 text-sm leading-relaxed">{demo.problem}</p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-mono text-cyan text-xs tracking-wider mb-2">AGENT OUTCOME</p>
                  <p className="text-white/75 text-sm leading-relaxed">{demo.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
