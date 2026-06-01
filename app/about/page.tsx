import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — The story behind FarmShare USA',
  description:
    'The mission, the moment, and the people building the operating system for modern self-sufficiency.',
};

export default function AboutPage() {
  return (
    <main>
      {/* ============== ALMANAC MASTHEAD HERO ============== */}
      <section className="page-hero cool" style={{ paddingTop: 'calc(var(--hdr) + 80px)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S16.png" alt="" />
        <div className="grade"></div>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="reveal" style={{ maxWidth: 780, margin: '0 auto' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Logo_L5.png"
              alt="FarmShare USA"
              style={{
                width: 'min(420px, 70%)',
                height: 'auto',
                margin: '0 auto 28px',
                filter: 'brightness(1.1)',
              }}
            />
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>Est. MMXXVI</span>
            <h1 style={{ marginTop: 18 }}>
              The Operating System for<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)', fontWeight: 420 }}>
                Modern Self-Sufficiency.
              </em>
            </h1>
            <p className="lede" style={{ margin: '20px auto 0' }}>
              FarmShare USA isn&apos;t a content brand. It&apos;s a movement built to move people
              from dependence on industrial food systems to self-sufficient, locally connected
              living — at the scale of a household, a neighborhood, and a nation.
            </p>
          </div>
        </div>
      </section>

      {/* ============== MISSION ============== */}
      <section className="band">
        <div className="wrap">
          <div className="sol">
            <div className="reveal">
              <span className="eyebrow">Mission</span>
              <h2 className="sec-title">Independence, not isolation.</h2>
              <p className="lede" style={{ marginBottom: 18 }}>
                We help families grow their own food, build self-sustaining systems, join local
                farm co-ops, reduce reliance on centralized food, and create resilient,
                independent lifestyles.
              </p>
              <p className="lede">
                We&apos;re not a homesteading nostalgia brand and we&apos;re not a doomsday
                channel. We are optimistic, capable, welcoming — and we believe most families are
                much closer to food sovereignty than they realize.
              </p>
            </div>
            <div className="sol-art reveal d2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S16.png" alt="Sweeping homestead landscape" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== STANDS FOR ============== */}
      <section className="band green on-dark" style={{ paddingTop: 100 }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">What we stand for</span>
            <h2 className="sec-title">Three principles. Non-negotiable.</h2>
          </div>
          <div className="pillars reveal d1">
            <div className="pillar" style={{ background: 'var(--green-deep)' }}>
              <div className="body">
                <div className="k" style={{ color: 'var(--gold)' }}>01</div>
                <h3 style={{ color: 'var(--bone)' }}>Independence</h3>
                <p style={{ color: 'color-mix(in oklab, var(--bone) 75%, transparent)' }}>
                  Not isolation. We build connection alongside self-reliance. The strongest
                  homesteads are the ones embedded in a neighborhood, not hidden from one.
                </p>
              </div>
            </div>
            <div className="pillar" style={{ background: 'var(--green-deep)' }}>
              <div className="body">
                <div className="k" style={{ color: 'var(--gold)' }}>02</div>
                <h3 style={{ color: 'var(--bone)' }}>Resilience</h3>
                <p style={{ color: 'color-mix(in oklab, var(--bone) 75%, transparent)' }}>
                  Not fear. We don&apos;t sell preparedness as panic. We sell it as competence —
                  the quiet kind that shows up when you need it.
                </p>
              </div>
            </div>
            <div className="pillar" style={{ background: 'var(--green-deep)' }}>
              <div className="body">
                <div className="k" style={{ color: 'var(--gold)' }}>03</div>
                <h3 style={{ color: 'var(--bone)' }}>Empowerment</h3>
                <p style={{ color: 'color-mix(in oklab, var(--bone) 75%, transparent)' }}>
                  Not ideology. We&apos;re not here to recruit you to a politics. We&apos;re here
                  to give you tools, a community, and a path forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== STATS ============== */}
      <section className="band" style={{ paddingTop: 90 }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Where we are</span>
            <h2 className="sec-title">By the numbers.</h2>
            <p className="lede" style={{ margin: '0 auto' }}>
              Aspirational figures from our founding cohort. Updated quarterly as the
              network grows.
            </p>
          </div>
          <div className="stat-row reveal d1">
            <div className="stat">
              <div className="n"><span data-count="42">0</span>k+</div>
              <div className="lbl">Families on the plan</div>
            </div>
            <div className="stat">
              <div className="n"><span data-count="1300">0</span>+</div>
              <div className="lbl">Co-ops in the network</div>
            </div>
            <div className="stat">
              <div className="n"><span data-count="50">0</span></div>
              <div className="lbl">States with members</div>
            </div>
            <div className="stat">
              <div className="n"><span data-count="89">0</span>%</div>
              <div className="lbl">First-crop success in 30 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOUNDERS ============== */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The people</span>
            <h2 className="sec-title">Founders &amp; advisors.</h2>
            <p className="lede">
              Placeholder slots for the founding team and clinical advisory panel — to be filled
              with real names, photos, and bios.
            </p>
          </div>
          <div className="team reveal d1">
            <div className="team-card">
              <div className="ph"><span>PHOTO · Founder</span></div>
              <div className="b">
                <h4>[ Founder Name ]</h4>
                <div className="role">Founder &amp; CEO</div>
                <p>
                  [ Short bio — background, why this work, what they grow at home. Keep it human,
                  not corporate. ]
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="ph"><span>PHOTO · Co-founder</span></div>
              <div className="b">
                <h4>[ Co-founder Name ]</h4>
                <div className="role">Co-founder · Design</div>
                <p>
                  [ Short bio — second voice, complementary expertise, the part of the movement
                  they obsess over. ]
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="ph"><span>PHOTO · Advisor</span></div>
              <div className="b">
                <h4>[ Senior Advisor ]</h4>
                <div className="role">Network &amp; Co-ops</div>
                <p>
                  [ Bio for the advisor with the deepest field experience — co-op origin stories,
                  regional expertise, the connector. ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <h3>The fastest way to know what we&apos;re about is to try it.</h3>
            <p>Free 30-Day Plan + 5-day starter series. No card, no sales call.</p>
          </div>
          <a href="/start/" className="btn btn-primary" style={{ fontSize: 16, padding: '17px 30px' }}>
            <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
            Get the Plan
          </a>
        </div>
      </section>
    </main>
  );
}
