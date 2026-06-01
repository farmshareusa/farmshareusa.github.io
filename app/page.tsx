import { EngravedDefs } from '@/components/EngravedDefs';
import { HomeClient } from '@/components/HomeClient';

export default function HomePage() {
  return (
    <>
      <EngravedDefs />

      {/* ===================== HEADER ===================== */}
      <header className="site hero-mode" id="hdr">
        <div className="bar">
          <a className="lockup" href="#top" aria-label="FarmShare USA home">
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
            <a href="#solution">How It Works</a>
            <a href="#coops">Co-ops</a>
            <a href="#membership">Membership</a>
            <a href="#pillars">Learn</a>
          </nav>
          <div className="hdr-cta">
            <a href="#lead" className="btn btn-primary">
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

      <main id="top">
        {/* ===================== HERO ===================== */}
        <section className="hero" data-screen-label="Hero">
          <div className="hero-frame almanac">
            <div className="af-rule"></div>
            <svg className="af-corner tl" aria-hidden="true"><use href="#af-corner" /></svg>
            <svg className="af-corner tr" aria-hidden="true"><use href="#af-corner" /></svg>
            <svg className="af-corner bl" aria-hidden="true"><use href="#af-corner" /></svg>
            <svg className="af-corner br" aria-hidden="true"><use href="#af-corner" /></svg>
            <div className="af-orn top">
              <svg className="fleuron" viewBox="0 0 64 26" aria-hidden="true"><use href="#fleuron" /></svg>
            </div>
            <div className="af-orn bot">
              <svg className="fleuron" viewBox="0 0 64 26" aria-hidden="true"><use href="#fleuron" /></svg>
              <div className="af-stars">
                <svg aria-hidden="true"><use href="#star" /></svg>
                <svg aria-hidden="true"><use href="#star" /></svg>
                <svg aria-hidden="true"><use href="#star" /></svg>
              </div>
            </div>
            <svg className="af-sprig l" aria-hidden="true"><use href="#sprig" /></svg>
            <svg className="af-sprig r" aria-hidden="true"><use href="#sprig" /></svg>

            {/* left engraved panel */}
            <div className="hero-panel">
              <div className="pa-grain"></div>
              <svg className="hero-watermark germ" viewBox="0 0 100 110" aria-hidden="true">
                <use href="#mark" />
              </svg>
              <div className="hero-content">
                <span className="eyebrow">Est. MMXXVI · The Living Almanac</span>
                <h1>
                  <span className="l1">
                    Feed your<br />family.
                  </span>
                  <span className="l2">Without relying on the system.</span>
                </h1>
                <p className="sub">
                  Learn to grow your own food, build self-sufficient systems, and connect with
                  local farm co-ops — no matter where you live, from a city balcony to five
                  suburban acres.
                </p>
                <div className="cta-row">
                  <a href="#lead" className="btn btn-primary">
                    <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true">
                      <use href="#mark" />
                    </svg>
                    Get the 30-Day Plan
                  </a>
                  <a href="#solution" className="btn btn-ghost btn-play">
                    <span>
                      <svg viewBox="0 0 9 9" fill="currentColor" aria-hidden="true">
                        <path d="M1 0.5 L8 4.5 L1 8.5 Z" />
                      </svg>
                    </span>
                    Watch How It Works
                  </a>
                </div>
                <div className="trust">
                  <span>
                    <b>42,000+</b> families
                  </span>
                  <span className="div"></span>
                  <span>
                    <b>1,300</b> co-ops
                  </span>
                  <span className="div"></span>
                  <span>
                    <b>50</b> states
                  </span>
                </div>
              </div>
            </div>

            {/* right photography + video */}
            <div className="hero-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="poster"
                src="/images/Image_1A_16x9.png"
                alt="Weathered hands cradling soil and a young sprout at golden hour"
              />
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/Image_1A_16x9.png"
                aria-hidden="true"
              >
                <source src="/video/Video1.mp4" type="video/mp4" />
              </video>
              <div className="grade"></div>
              <div className="grain"></div>
              <div className="pollen" data-pollen="14"></div>
              <span className="plate">Plate I — Hands in the Soil</span>
            </div>

            {/* germinating sprout seal on the seam */}
            <div className="hero-seal germ">
              <svg viewBox="0 0 128 128" aria-hidden="true">
                <circle cx="64" cy="64" r="62" fill="var(--green)" />
                <circle cx="64" cy="64" r="58" fill="none" stroke="var(--bone)" strokeWidth="1" opacity=".5" />
                <circle cx="64" cy="64" r="53" fill="none" stroke="var(--bone)" strokeWidth="2.4" />
                <g transform="translate(40 28) scale(.48)" style={{ color: 'var(--gold)' }}>
                  <use href="#mark" />
                </g>
                <path id="seal-arc" d="M64 64 m-41 0 a41 41 0 1 1 82 0" fill="none" />
                <text fontFamily="JetBrains Mono,monospace" fontSize="8.4" letterSpacing="3.1" fill="var(--bone)">
                  <textPath href="#seal-arc" startOffset="5%">FARMSHARE·USA·CERTIFIED</textPath>
                </text>
                <g fill="var(--gold)">
                  <use href="#star" x="52" y="86" width="9" height="9" />
                  <use href="#star" x="60" y="88" width="9" height="9" />
                  <use href="#star" x="68" y="86" width="9" height="9" />
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* ===================== PROBLEM (Act I) ===================== */}
        <section className="band green cool on-dark" id="problem" data-screen-label="Problem">
          <div className="pollen" data-pollen="0"></div>
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Act I · The Fragile System</span>
              <h2 className="sec-title">The old food system was never built for you.</h2>
              <p className="lede">
                Three companies control most of what reaches your plate. When the chain breaks, you
                feel it first — in prices, in quality, in the distance between your family and real
                food.
              </p>
            </div>
            <div className="prob-grid reveal d1">
              <div className="prob">
                <svg aria-hidden="true"><use href="#i-cost" /></svg>
                <div className="n">01</div>
                <h4>Rising costs</h4>
                <p>Grocery bills climb faster than wages, with no end in sight.</p>
              </div>
              <div className="prob">
                <svg aria-hidden="true"><use href="#i-quality" /></svg>
                <div className="n">02</div>
                <h4>Declining quality</h4>
                <p>Ultra-processed, long-haul, nutrient-poor food sold as fresh.</p>
              </div>
              <div className="prob">
                <svg aria-hidden="true"><use href="#i-supply" /></svg>
                <div className="n">03</div>
                <h4>Supply-chain risk</h4>
                <p>One disruption away from empty shelves and rationed staples.</p>
              </div>
              <div className="prob">
                <svg aria-hidden="true"><use href="#i-disconnect" /></svg>
                <div className="n">04</div>
                <h4>Disconnection</h4>
                <p>Most of us have no idea who grows our food, or how.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SOLUTION (Act II) ===================== */}
        <section className="band" id="solution" data-screen-label="Solution">
          <div className="wrap">
            <div className="section-rule reveal">
              <span className="l"></span>
              <svg aria-hidden="true"><use href="#mark" /></svg>
              <span className="l"></span>
            </div>
            <div className="sol">
              <div className="reveal">
                <span className="eyebrow">Act II · The System</span>
                <h2 className="sec-title">FarmShare gives you the whole operating system.</h2>
                <p className="lede" style={{ marginBottom: 30 }}>
                  Not another gardening blog. A complete, step-by-step path from grocery-store
                  dependence to a self-sufficient, locally connected life.
                </p>
                <div className="sol-list">
                  <div className="sol-item">
                    <span className="ix">01</span>
                    <div>
                      <h4>Step-by-step food production</h4>
                      <p>
                        From your first raised bed to a four-season harvest — sequenced so you
                        never feel lost.
                      </p>
                    </div>
                  </div>
                  <div className="sol-item">
                    <span className="ix">02</span>
                    <div>
                      <h4>Co-op access, nationwide</h4>
                      <p>
                        Find growers, providers, and neighbors near you — or start your own local
                        network.
                      </p>
                    </div>
                  </div>
                  <div className="sol-item">
                    <span className="ix">03</span>
                    <div>
                      <h4>Land optimization</h4>
                      <p>
                        Make any space productive, whether it&apos;s a balcony, a quarter-acre, or
                        five acres.
                      </p>
                    </div>
                  </div>
                  <div className="sol-item">
                    <span className="ix">04</span>
                    <div>
                      <h4>Community &amp; accountability</h4>
                      <p>A movement that keeps you going when motivation runs thin.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sol-art reveal d2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Image_4A.png"
                  alt="A family walking together through their backyard garden at sunset"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 3 PILLARS ===================== */}
        <section className="band" id="pillars" style={{ paddingTop: 0 }} data-screen-label="Pillars">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow center">The Three Pillars</span>
              <h2 className="sec-title">Independence, in three moves.</h2>
            </div>
            <div className="pillars">
              <div className="pillar reveal">
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Image_S5.png"
                    alt="Watering a thriving raised-bed vegetable garden at golden hour"
                  />
                </div>
                <div className="body">
                  <div className="ic">
                    <svg aria-hidden="true"><use href="#i-grow" /></svg>
                  </div>
                  <div className="k">Pillar 01</div>
                  <h3>Grow Your Own Food</h3>
                  <p>
                    Real food production for any space — soil, seed, water, harvest. Start where
                    you are, this season.
                  </p>
                  <a href="#lead">
                    Start growing <span>→</span>
                  </a>
                </div>
              </div>
              <div className="pillar reveal d1">
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Image_S21.png"
                    alt="A productive suburban backyard garden with raised beds"
                  />
                </div>
                <div className="body">
                  <div className="ic">
                    <svg aria-hidden="true"><use href="#i-systems" /></svg>
                  </div>
                  <div className="k">Pillar 02</div>
                  <h3>Build Independent Systems</h3>
                  <p>
                    Water, energy, protein, and preservation that keep producing — even on a normal
                    neighborhood lot.
                  </p>
                  <a href="#membership">
                    See the blueprint <span>→</span>
                  </a>
                </div>
              </div>
              <div className="pillar reveal d2">
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Image_S22.png"
                    alt="Aerial view of a suburban neighborhood with productive backyard plots"
                  />
                </div>
                <div className="body">
                  <div className="ic">
                    <svg aria-hidden="true"><use href="#i-network" /></svg>
                  </div>
                  <div className="k">Pillar 03</div>
                  <h3>Join Local Food Networks</h3>
                  <p>
                    Trade, share, and buy from a co-op network at your doorstep. Independence,
                    together.
                  </p>
                  <a href="#coops">
                    Find your co-op <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SOCIAL PROOF ===================== */}
        <section className="band" id="proof" style={{ paddingTop: 0 }} data-screen-label="Social proof">
          <div className="wrap">
            <div className="section-rule reveal">
              <span className="l"></span>
              <svg aria-hidden="true"><use href="#i-seed" /></svg>
              <span className="l"></span>
            </div>
            <div className="sec-head center reveal" style={{ marginBottom: 48 }}>
              <span className="eyebrow center">From the Field</span>
              <h2 className="sec-title">Families are already growing.</h2>
            </div>
            <div className="proof">
              <div className="quote reveal">
                <div className="mark">&ldquo;</div>
                <blockquote>
                  We went from a bare suburban lawn to feeding our family of four out of the
                  backyard in one season. The plan made it feel inevitable, not impossible.
                </blockquote>
                <div className="who">
                  <div className="av">
                    PHOTO
                    <br />
                    S__
                  </div>
                  <div>
                    <b>[ Member name ]</b>
                    <span>Quarter-acre lot · Ohio</span>
                  </div>
                </div>
              </div>
              <div className="proof-col">
                <div className="ba reveal d1">
                  <span className="lbl">Before / After</span>
                  <div className="row">
                    <div className="cell">
                      <span className="fn">Member submission</span>
                    </div>
                    <div className="cell">
                      <span className="fn">Member submission</span>
                    </div>
                  </div>
                  <span className="cap">Bare lawn → four-season garden</span>
                </div>
                <div
                  className="ba reveal d2"
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-fraunces), Fraunces, serif',
                      fontSize: 54,
                      color: 'var(--green)',
                      lineHeight: 1,
                    }}
                    data-count="89"
                  >
                    0
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--green)' }}>% of members</div>
                    <div
                      style={{
                        fontSize: 13.5,
                        color: 'color-mix(in oklab, var(--ink) 65%, transparent)',
                      }}
                    >
                      harvest their first crop within 30 days of starting the plan.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="logos-row reveal">
              <span>As featured in</span>
              <span>— [ Outlet ] —</span>
              <span>— [ Outlet ] —</span>
              <span>— [ Outlet ] —</span>
              <span>— [ Outlet ] —</span>
            </div>
          </div>
        </section>

        {/* ===================== LEAD MAGNET ===================== */}
        <section className="band" id="lead" style={{ paddingTop: 0 }} data-screen-label="Lead magnet">
          <div className="wrap">
            <div
              className="lead-wrap reveal almanac"
              style={{ boxShadow: '0 30px 70px -50px rgba(11,24,18,.7)' }}
            >
              <div className="lead-art">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Image_S8.png"
                  alt="A vintage almanac journal with planting charts and seed packets"
                />
                <div className="grade"></div>
                <div className="float">
                  <div
                    className="mono"
                    style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)' }}
                  >
                    FREE DOWNLOAD · PDF
                  </div>
                  <div className="t">
                    The 30-Day Self-Sufficient
                    <br />
                    Backyard Plan
                  </div>
                </div>
              </div>
              <div className="lead-body">
                <span className="pre">Start this week</span>
                <h3>Grow real food in 30 days — wherever you live.</h3>
                <ul>
                  <li>
                    <svg aria-hidden="true"><use href="#check" /></svg>A day-by-day planting calendar for your zone
                  </li>
                  <li>
                    <svg aria-hidden="true"><use href="#check" /></svg>The exact starter crops that won&apos;t fail
                  </li>
                  <li>
                    <svg aria-hidden="true"><use href="#check" /></svg>A layout that works on a balcony or an acre
                  </li>
                </ul>
                <form className="lead-form" id="leadForm" noValidate>
                  <input
                    type="email"
                    id="leadEmail"
                    placeholder="you@email.com"
                    aria-label="Email address"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Download Free
                  </button>
                </form>
                <div className="lead-msg" id="leadMsg" role="status"></div>
                <p className="lead-fine">
                  No spam. Unsubscribe anytime. We&apos;ll send a 5-day starter series with it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== MEMBERSHIP ===================== */}
        <section className="band green on-dark" id="membership" data-screen-label="Membership">
          <div className="wrap">
            <div className="sec-head center reveal">
              <span className="eyebrow center">Membership</span>
              <h2 className="sec-title">Go further when you&apos;re ready.</h2>
              <p className="lede" style={{ margin: '0 auto 26px' }}>
                From a free weekly almanac to full homestead design. Cancel anytime — checkout
                opens soon, join the waitlist now.
              </p>
              <div className="mem-toggle reveal" id="memToggle">
                <button className="on" data-p="mo">Monthly</button>
                <button data-p="yr">Annual · save 20%</button>
              </div>
            </div>
            <div className="mem-grid">
              <div className="tier reveal">
                <div className="nm">Free</div>
                <div className="amt">$0</div>
                <div className="desc">The weekly almanac + the co-op directory.</div>
                <a className="btn btn-secondary">Join Free</a>
              </div>
              <div className="tier reveal d1">
                <div className="nm">Grower</div>
                <div className="amt">
                  <span>$</span>
                  <b data-mo="19" data-yr="15">19</b>
                  <span>/mo</span>
                </div>
                <div className="desc">Full course library, guides, and the member forum.</div>
                <a className="btn btn-secondary">Choose Grower</a>
              </div>
              <div className="tier feat reveal d2">
                <div className="badge">Founding Member</div>
                <div className="nm">Homesteader</div>
                <div className="amt">
                  <span>$</span>
                  <b data-mo="59" data-yr="49">59</b>
                  <span>/mo</span>
                </div>
                <div className="desc">Land &amp; plot templates, live workshops, co-op toolkit.</div>
                <a className="btn btn-primary">Become Founding</a>
              </div>
              <div className="tier reveal d3">
                <div className="nm">Steward</div>
                <div className="amt">
                  <span>$</span>
                  <b data-mo="199" data-yr="159">199</b>
                  <span>/mo</span>
                </div>
                <div className="desc">1:1 homestead design and vendor introductions.</div>
                <a className="btn btn-secondary">Apply</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CO-OP MINI MAP ===================== */}
        <section className="band" id="coops" data-screen-label="Co-op network">
          <div className="wrap">
            <div className="map-wrap">
              <div className="reveal">
                <span className="eyebrow">Act III · The Network</span>
                <h2 className="sec-title">A living map of local food.</h2>
                <p className="lede" style={{ marginBottom: 26 }}>
                  Search by ZIP or state. Filter by consumer or provider. Watch your neighborhood
                  light up — then connect, trade, and build together.
                </p>
                <a href="#coops" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  Find a Co-op Near You
                </a>{' '}
                <a href="#coops" className="btn btn-ghost">
                  List your co-op →
                </a>
              </div>
              <div className="map-stage reveal d1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S22.png" alt="" />
                <svg
                  className="net"
                  viewBox="0 0 100 80"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  id="netSvg"
                ></svg>
                <div className="pollen" data-pollen="0"></div>
                <div className="coop-card" style={{ top: '30%', left: '30%' }}>
                  <div className="top">
                    <svg aria-hidden="true"><use href="#mark" /></svg>
                    <b>Cedar Creek Co-op</b>
                  </div>
                  <div className="chips">
                    <span className="chip p">Provider</span>
                    <span className="chip o">2.4 mi</span>
                  </div>
                  <p>
                    Eggs · produce · raw honey
                    <br />
                    18 members · joining open
                  </p>
                </div>
                <span
                  className="fn mono"
                  style={{
                    position: 'absolute',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    color: 'var(--bone)',
                    background: 'rgba(11,24,18,.6)',
                    padding: '4px 8px',
                    borderRadius: 3,
                  }}
                >
                  Living Map · preview
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FINAL CTA ===================== */}
        <section className="final on-dark" data-screen-label="Final CTA">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bg" src="/images/Image_3A.png" alt="" />
          <div className="grade"></div>
          <div className="pollen" data-pollen="0"></div>
          <div className="final-inner wrap">
            <span className="eyebrow center reveal" style={{ color: 'var(--gold)' }}>
              Your first season starts now
            </span>
            <h2 className="reveal d1">
              Start building your food <em>independence</em> today.
            </h2>
            <p className="reveal d2">
              Download the free 30-Day Plan, plant your first bed, and find the co-op already
              growing down the road.
            </p>
            <div className="cta-row reveal d2">
              <a
                href="#lead"
                className="btn btn-primary"
                style={{ fontSize: 16, padding: '17px 32px' }}
              >
                <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                Get Started Free
              </a>
              <a href="#membership" className="btn btn-secondary">
                See Membership
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="mega">
        <div className="wrap">
          <div className="foot-orn">
            <svg viewBox="0 0 560 40" aria-hidden="true"><use href="#divider-wide" /></svg>
          </div>
          <div className="foot-grid">
            <div className="foot-brand">
              <a className="lockup" href="#top">
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
              <a href="#solution">How It Works</a>
              <a href="#pillars">The Pillars</a>
              <a href="#membership">Membership</a>
              <a href="#coops">Co-op Network</a>
              <a href="#lead">Free Plan</a>
            </div>
            <div>
              <h5>Network</h5>
              <a href="#coops">Find a Co-op</a>
              <a href="#coops">List Your Co-op</a>
              <a href="#coops">Become a Vendor</a>
              <a href="#coops">Health Partners</a>
              <a href="#coops">Homestead Design</a>
            </div>
            <div>
              <h5>Join the Movement</h5>
              <a href="#coops">Apply to start a co-op</a>
              <a href="#coops">Apply to be a certified vendor</a>
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
              <a href="#top">Privacy</a>
              <a href="#top">Terms</a>
              <a href="#top">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <HomeClient />
    </>
  );
}
