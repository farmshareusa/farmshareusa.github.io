export function SiteFooter() {
  return (
    <footer className="mega">
      <div className="wrap">
        <div className="foot-orn">
          <svg viewBox="0 0 560 40" aria-hidden="true"><use href="#divider-wide" /></svg>
        </div>
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="lockup" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="logo-png"
                src="/images/Logo_L5.png"
                alt="FarmShare USA"
                width="320"
                height="80"
                style={{ filter: 'brightness(1.05)' }}
              />
            </a>
            <p>
              The operating system for modern self-sufficiency. Independence, not isolation.
              Resilience, not fear.
            </p>
            <div className="foot-news">
              <input
                type="email"
                placeholder="Join the almanac newsletter"
                aria-label="Newsletter email"
              />
              <button type="button">Subscribe</button>
            </div>
          </div>
          <div>
            <h5>Explore</h5>
            <a href="/#solution">How It Works</a>
            <a href="/#pillars">The Pillars</a>
            <a href="/membership/">Membership</a>
            <a href="/courses/">Courses</a>
            <a href="/learn/">Learn</a>
          </div>
          <div>
            <h5>Network</h5>
            <a href="/co-ops/">Find a Co-op</a>
            <a href="/co-ops/#apply">List Your Co-op</a>
            <a href="/vendors/">Certified Vendors</a>
            <a href="/health/">Health Partners</a>
            <a href="/homestead-design/">Homestead Design</a>
          </div>
          <div>
            <h5>Join the Movement</h5>
            <a href="/start/">Free 30-Day Plan</a>
            <a href="/community/">Community</a>
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
            <div className="foot-trust" style={{ marginTop: 16 }}>
              <svg
                style={{ width: 30, height: 33, color: 'var(--gold)' }}
                aria-hidden="true"
              >
                <use href="#mark" />
              </svg>
              <span style={{ fontSize: 13 }}>
                FarmShare USA Certified — vetted growers &amp; vendors nationwide.
              </span>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© MMXXVI FarmShare USA · The Living Almanac</span>
          <div className="foot-trust">
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
            <a href="/contact/">Privacy</a>
            <a href="/contact/">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
