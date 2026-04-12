export function CTA() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5 hero-gradient">
      <div className="max-w-7xl mx-auto">
        <p className="label-mono mb-6">// GET IN TOUCH</p>

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
          TELL US WHAT YOUR AGENTS SHOULD DO.
        </h2>

        <p className="mt-6 text-white/50 max-w-xl leading-relaxed">
          Share a few details about your operations. We will respond within one
          business day with a free workflow audit and deployment timeline.
        </p>

        <form
          action="https://formsubmit.co/victor@omohasolutions.com"
          method="POST"
          className="mt-12 max-w-xl flex flex-col gap-6"
        >
          <div>
            <label className="label-mono block mb-2">NAME</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-card-bg border border-card-border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-colors"
            />
          </div>

          <div>
            <label className="label-mono block mb-2">EMAIL</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full bg-card-bg border border-card-border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-colors"
            />
          </div>

          <div>
            <label className="label-mono block mb-2">COMPANY</label>
            <input
              type="text"
              name="company"
              placeholder="Company name"
              className="w-full bg-card-bg border border-card-border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-colors"
            />
          </div>

          <div>
            <label className="label-mono block mb-2">WHAT SHOULD YOUR AGENTS HANDLE?</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="E.g. lead follow-up, appointment scheduling, daily reporting..."
              className="w-full bg-card-bg border border-card-border px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-cyan text-black font-semibold px-8 py-4 text-sm tracking-wider hover:bg-cyan/90 transition-all"
          >
            SUBMIT SEQUENCE
          </button>
        </form>

        <div className="mt-16 flex flex-col sm:flex-row gap-8 text-sm text-white/40">
          <div>
            <p className="font-mono text-cyan text-xs mb-1">EMAIL</p>
            <a href="mailto:victor@omohasolutions.com" className="hover:text-white transition-colors">
              victor@omohasolutions.com
            </a>
          </div>
          <div>
            <p className="font-mono text-cyan text-xs mb-1">PHONE</p>
            <a href="tel:+19194558642" className="hover:text-white transition-colors">
              (919) 455-8642
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
