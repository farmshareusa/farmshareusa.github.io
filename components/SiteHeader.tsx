export function SiteHeader() {
  return (
    <header className="site hero-mode" id="hdr">
      <div className="bar">
        <a className="lockup" href="/" aria-label="FarmShare USA home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="logo-png"
            src="/images/Logo_L1.png"
            alt="FarmShare USA"
            width="320"
            height="80"
          />
        </a>
        <nav aria-label="Primary">
          <a href="/#solution">How It Works</a>
          <a href="/co-ops/">Co-ops</a>
          <a href="/membership/">Membership</a>
          <a href="/learn/">Learn</a>
        </nav>
        <div className="hdr-cta">
          <a href="/start/" className="btn btn-primary">
            <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true">
              <use href="#mark" />
            </svg>
            Get Started Free
          </a>
          <button className="burger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
