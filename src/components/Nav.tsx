import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-cyan text-sm tracking-wider">OMOHA</span>
          <span className="text-white font-semibold tracking-wider">AGENT OPS</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how" className="text-sm text-white/60 hover:text-white transition-colors tracking-wide">
            HOW IT WORKS
          </a>
          <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors tracking-wide">
            PRICING
          </a>
          <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors tracking-wide">
            CONTACT
          </a>
        </div>

        <a
          href="#contact"
          className="text-sm font-medium tracking-wider border border-white/20 px-5 py-2 hover:bg-white hover:text-black transition-all"
        >
          START OPERATIONS
        </a>
      </div>
    </nav>
  );
}
