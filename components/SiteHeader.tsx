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
        <a className="lockup brand-lockup" href="/" aria-label="FarmShare USA home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/farmshare-logo-horizontal-light.svg"
            alt="FarmShare USA"
            width={196}
            height={60}
            className="brand-logo"
          />
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
