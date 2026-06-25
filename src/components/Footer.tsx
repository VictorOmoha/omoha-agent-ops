export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">OMOHA AGENT OPS</div>
            <p style={{ marginTop: 18, maxWidth: 380 }}>
              Focused AI agents for messy business workflows. We build, test,
              and improve agents that reduce operational chaos for small teams.
            </p>
          </div>

          <div>
            <div className="footer-title">SERVICES</div>
            <div className="footer-links">
              <a href="#agents">Example Agents</a>
              <a href="#demo-videos">Demo Videos</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <div className="footer-title">COMPANY</div>
            <div className="footer-links">
              <a href="https://omohasolutions.com" target="_blank" rel="noopener noreferrer">
                Omoha Solutions
              </a>
              <a href="https://saveme.space" target="_blank" rel="noopener noreferrer">
                SaveMe
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} OMOHA SOLUTIONS</span>
          <span>US AND NIGERIA // WORLDWIDE</span>
        </div>
      </div>
    </footer>
  );
}
