import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <Image className="brand-logo" src="/logo-mark.png" alt="" width={36} height={36} aria-hidden="true" priority unoptimized />
          <span>OMOHA SOLUTIONS</span>
          <span style={{ color: "var(--muted)" }}>AGENT OPS</span>
        </Link>

        <div className="nav-links">
          <a href="#product-offers">OFFERS</a>
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
