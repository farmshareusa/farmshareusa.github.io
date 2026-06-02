export function SiteHeader() {
  return (
    <header className="site hero-mode" id="hdr">
      <span className="hdr-frame" aria-hidden="true">
        <svg className="hdr-corner tl" viewBox="0 0 86 86"><use href="#af-corner" /></svg>
        <svg className="hdr-corner tr" viewBox="0 0 86 86"><use href="#af-corner" /></svg>
        <svg className="hdr-corner bl" viewBox="0 0 86 86"><use href="#af-corner" /></svg>
        <svg className="hdr-corner br" viewBox="0 0 86 86"><use href="#af-corner" /></svg>
        <span className="hdr-outline" />
      </span>
      <div className="bar">
        <a className="lockup" href="/" aria-label="FarmShare USA home">
          <svg className="mk" viewBox="0 0 48 58" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M24 34 L24 16" />
              <path d="M24 17 C16 11 6 13 4 3 C15 1 23 8 24 16" />
              <path d="M24 16 C25 8 33 1 44 3 C42 13 32 11 24 17" />
              <ellipse cx="19.6" cy="38" rx="6" ry="7.2" />
              <ellipse cx="28.4" cy="38" rx="6" ry="7.2" />
              <path d="M24 45 C20 49 16 49 13 53 M24 45 L24 56 M24 45 C28 49 32 49 35 53" strokeWidth="1" />
            </g>
          </svg>
          <span className="wordmark">
            <span className="nm">FarmShare</span>
            <span className="usa"><i></i>U·S·A<i></i></span>
          </span>
        </a>
        <nav aria-label="Primary">
          <a href="/#solution">How It Works</a>
          <a href="/co-ops/">Co-ops</a>
          <a href="/membership/">Membership</a>
          <a href="/learn/">Learn</a>
        </nav>
        <div className="hdr-cta">
          <a href="/start/" className="btn btn-primary">Get Started Free</a>
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
