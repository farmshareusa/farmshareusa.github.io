import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="mega">
      <div className="wrap">
        <div className="foot-orn">
          <svg viewBox="0 0 560 40" aria-hidden="true"><use href="#divider-wide" /></svg>
        </div>
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="lockup brand-lockup" href="/" aria-label="FarmShare USA home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="foot-emblem"
                src="/logos/farmshare-emblem-footer.png"
                alt="FarmShare USA — Grow Food. Build Community. Live Freely."
                width={730}
                height={874}
                loading="lazy"
                decoding="async"
              />
            </a>
            <p>Grow Food. Build Community. Live Freely.</p>
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
            <a href="/homestead-real-estate/">Homestead Real Estate</a>
          </div>
          <div>
            <h5>Join the Movement</h5>
            <a href={siteConfig.communityUrl} className="foot-cta-primary">
              {siteConfig.communityCtaLabel}
            </a>
            <a href="/start/">Free 30-Day Plan</a>
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
          <span>© MMXXVI FarmShare USA · Grow Food. Build Community. Live Freely.</span>
          <div className="foot-trust">
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
            <a href="/privacy/">Privacy</a>
            <a href="/terms/">Terms</a>
            <a href="/disclaimers/">Disclaimers</a>
            <a href="/community-guidelines/">Community Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
