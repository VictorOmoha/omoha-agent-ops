export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-cyan text-sm tracking-wider">OMOHA</span>
              <span className="text-white font-semibold tracking-wider">AGENT OPS</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Focused AI agents for messy business workflows. We build, test,
              and improve agents that reduce operational chaos.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-cyan text-xs tracking-wider mb-4">SERVICES</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#agents" className="text-white/40 hover:text-white transition-colors">
                  Example Agents
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/40 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/40 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-cyan text-xs tracking-wider mb-4">COMPANY</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="https://www.omohasolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  Omoha Solutions
                </a>
              </li>
              <li>
                <a
                  href="https://saveme.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  SaveMe
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Omoha Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            US and Nigeria &bull; Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
