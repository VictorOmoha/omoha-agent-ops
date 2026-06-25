import Link from "next/link";

export function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <span className="brand-mark" aria-hidden="true" />
          <span>OMOHA</span>
          <span style={{ color: "var(--muted)" }}>AGENT OPS</span>
        </Link>

        <div className="nav-links">
          <a href="#agents">AGENTS</a>
          <a href="#demo-videos">PROOF</a>
          <a href="#how">PROCESS</a>
          <a href="#pricing">PRICING</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a href="#contact" className="nav-cta">
          BOOK AUDIT
        </a>
      </div>
    </nav>
  );
}
