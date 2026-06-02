import type { Metadata } from 'next';
import { LeadCapture } from '@/components/LeadCapture';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'The Free Community — The Heart of FarmShare USA',
  description:
    'The free FarmShare community is the heart of the movement. Get weekly posts, intro education, basic guides, public live streams, and the people who keep you going — at no cost.',
};

export default function CommunityPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S14.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">The Free Community</span>
              <h1>
                The heart of<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)', fontWeight: 420 }}>
                  FarmShare USA.
                </em>
              </h1>
              <p className="lede">
                Homesteading is hard alone. The free FarmShare community is the back-channel that
                keeps you moving — weekly posts, intro education, basic guides, public live streams,
                and the people who actually get it. Free, forever.
              </p>
              <div className="cta-row">
                <a href={siteConfig.communityUrl} className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  {siteConfig.communityCtaLabel}
                </a>
                <a href="/start/" className="btn btn-secondary">Get the Free 30-Day Plan</a>
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S27.png" alt="A suburban family harvesting together" />
              <span className="plate">Plate VII — Together</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WHAT'S INSIDE ============== */}
      <section className="band" id="what">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Inside the movement</span>
            <h2 className="sec-title">What you actually get.</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S14.png" alt="Group workshop" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-network" /></svg></div>
                <div className="k">Layer 01</div>
                <h3>Local Circles</h3>
                <p>
                  Small regional groups by ZIP. Real names, real geography. The people you&apos;ll
                  trade eggs with, share tools with, and call when the freezer dies.
                </p>
              </div>
            </div>
            <div className="pillar reveal d1">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S30.png" alt="Soft morning beginner sprouts" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-grow" /></svg></div>
                <div className="k">Layer 02</div>
                <h3>Monthly Workshops</h3>
                <p>
                  Live sessions: seed-starting, succession planting, predator-proofing, canning,
                  cover crops, water systems. Recorded for the rest of us.
                </p>
              </div>
            </div>
            <div className="pillar reveal d2">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S7.png" alt="Produce hand-off between neighbors" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-systems" /></svg></div>
                <div className="k">Layer 03</div>
                <h3>The Member Forum</h3>
                <p>
                  Searchable, threaded, not algorithmic. Ask a question on Tuesday, get five
                  thoughtful answers by Thursday. No engagement-bait, no rage-bait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WHAT YOU GET FREE ============== */}
      <section className="band" id="free" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">What you get free</span>
            <h2 className="sec-title">Free, forever — the front door to the movement.</h2>
          </div>
          <ul className="free-list reveal d1">
            <li><span className="tick" aria-hidden="true">✓</span> Access to the FarmShare community</li>
            <li><span className="tick" aria-hidden="true">✓</span> Weekly community posts</li>
            <li><span className="tick" aria-hidden="true">✓</span> Intro homesteading education</li>
            <li><span className="tick" aria-hidden="true">✓</span> Basic how-to guides</li>
            <li><span className="tick" aria-hidden="true">✓</span> Public live streams</li>
            <li><span className="tick" aria-hidden="true">✓</span> Events &amp; announcements</li>
          </ul>
          <div className="reveal d2" style={{ textAlign: 'center', marginTop: 28 }}>
            <a href={siteConfig.communityUrl} className="btn btn-primary">
              <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
              {siteConfig.communityCtaLabel}
            </a>
          </div>
        </div>
      </section>

      {/* ============== FREE vs. PAID ============== */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Free vs. paid</span>
            <h2 className="sec-title">What every tier unlocks.</h2>
          </div>
          <div className="compare-wrap">
            <table className="compare reveal d1">
              <thead>
                <tr>
                  <th>Community feature</th>
                  <th>Free</th>
                  <th className="feat">Grower+</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Read-only forum access</td><td className="ok"></td><td className="ok"></td></tr>
                <tr><td>Weekly almanac newsletter</td><td className="ok"></td><td className="ok"></td></tr>
                <tr><td>Co-op directory</td><td className="ok"></td><td className="ok"></td></tr>
                <tr><td>Post + reply in forum</td><td className="no"></td><td className="ok"></td></tr>
                <tr><td>Local Circle membership</td><td className="no"></td><td className="ok"></td></tr>
                <tr><td>Live monthly workshops</td><td className="no"></td><td className="ok"></td></tr>
                <tr><td>Founding-cohort group chat</td><td className="no"></td><td className="ok"></td></tr>
                <tr><td>Workshop recordings + library</td><td className="no"></td><td className="ok"></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============== JOIN ============== */}
      <section className="band green on-dark">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Join</span>
            <h2 className="sec-title">Find your circle.</h2>
            <p className="lede" style={{ margin: '0 auto 24px' }}>
              Drop your email — we&apos;ll match you to the nearest active circle and send you the
              next workshop invitation.
            </p>
          </div>
          <div className="reveal d1" style={{ maxWidth: 520, margin: '0 auto' }}>
            <LeadCapture
              buttonLabel="Find My Circle"
              finePrint="We'll never share your information. One email, one match."
            />
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <h3>Or jump straight to the work.</h3>
            <p>Membership unlocks the forum, the circles, and the workshops.</p>
          </div>
          <a href="/membership/" className="btn btn-primary" style={{ fontSize: 16, padding: '17px 30px' }}>
            See Membership
          </a>
        </div>
      </section>
    </main>
  );
}
