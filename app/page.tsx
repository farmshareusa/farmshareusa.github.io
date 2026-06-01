import { HomeHero } from '@/components/HomeHero';
import { LeadCapture } from '@/components/LeadCapture';
import { MembershipTiers } from '@/components/MembershipTiers';
import { CoopMap } from '@/components/CoopMap';

export default function HomePage() {
  return (
    <main id="top">
      <HomeHero />

      {/* ===================== PROBLEM (Act I) ===================== */}
      <section className="band green cool on-dark" id="problem">
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
      <section className="band" id="solution">
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
                    <p>From your first raised bed to a four-season harvest — sequenced so you never feel lost.</p>
                  </div>
                </div>
                <div className="sol-item">
                  <span className="ix">02</span>
                  <div>
                    <h4>Co-op access, nationwide</h4>
                    <p>Find growers, providers, and neighbors near you — or start your own local network.</p>
                  </div>
                </div>
                <div className="sol-item">
                  <span className="ix">03</span>
                  <div>
                    <h4>Land optimization</h4>
                    <p>Make any space productive, whether it&apos;s a balcony, a quarter-acre, or five acres.</p>
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
              <img src="/images/Image_4A.png" alt="A family walking together through their backyard garden at sunset" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3 PILLARS ===================== */}
      <section className="band" id="pillars" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">The Three Pillars</span>
            <h2 className="sec-title">Independence, in three moves.</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S5.png" alt="Watering a thriving raised-bed vegetable garden at golden hour" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-grow" /></svg></div>
                <div className="k">Pillar 01</div>
                <h3>Grow Your Own Food</h3>
                <p>Real food production for any space — soil, seed, water, harvest. Start where you are, this season.</p>
                <a href="/start/">Start growing <span>→</span></a>
              </div>
            </div>
            <div className="pillar reveal d1">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S21.png" alt="A productive suburban backyard garden with raised beds" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-systems" /></svg></div>
                <div className="k">Pillar 02</div>
                <h3>Build Independent Systems</h3>
                <p>Water, energy, protein, and preservation that keep producing — even on a normal neighborhood lot.</p>
                <a href="/courses/food-independence-blueprint/">See the blueprint <span>→</span></a>
              </div>
            </div>
            <div className="pillar reveal d2">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S22.png" alt="Aerial view of a suburban neighborhood with productive backyard plots" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-network" /></svg></div>
                <div className="k">Pillar 03</div>
                <h3>Join Local Food Networks</h3>
                <p>Trade, share, and buy from a co-op network at your doorstep. Independence, together.</p>
                <a href="/co-ops/">Find your co-op <span>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SOCIAL PROOF ===================== */}
      <section className="band" id="proof" style={{ paddingTop: 0 }}>
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
                <div className="av">PHOTO<br />S__</div>
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
                  <div className="cell"><span className="fn">Member submission</span></div>
                  <div className="cell"><span className="fn">Member submission</span></div>
                </div>
                <span className="cap">Bare lawn → four-season garden</span>
              </div>
              <div className="ba reveal d2" style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
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
                  <div style={{ fontSize: 13.5, color: 'color-mix(in oklab, var(--ink) 65%, transparent)' }}>
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
      <section className="band" id="lead" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lead-wrap reveal almanac" style={{ boxShadow: '0 30px 70px -50px rgba(11,24,18,.7)' }}>
            <div className="lead-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S8.png" alt="A vintage almanac journal with planting charts and seed packets" />
              <div className="grade"></div>
              <div className="float">
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)' }}>
                  FREE DOWNLOAD · PDF
                </div>
                <div className="t">
                  The 30-Day Self-Sufficient<br />Backyard Plan
                </div>
              </div>
            </div>
            <div className="lead-body">
              <span className="pre">Start this week</span>
              <h3>Grow real food in 30 days — wherever you live.</h3>
              <ul>
                <li><svg aria-hidden="true"><use href="#check" /></svg>A day-by-day planting calendar for your zone</li>
                <li><svg aria-hidden="true"><use href="#check" /></svg>The exact starter crops that won&apos;t fail</li>
                <li><svg aria-hidden="true"><use href="#check" /></svg>A layout that works on a balcony or an acre</li>
              </ul>
              <LeadCapture />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MEMBERSHIP ===================== */}
      <section className="band green on-dark" id="membership">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Membership</span>
            <h2 className="sec-title">Go further when you&apos;re ready.</h2>
            <p className="lede" style={{ margin: '0 auto 26px' }}>
              From a free weekly almanac to full homestead design. Cancel anytime — checkout opens
              soon, join the waitlist now.
            </p>
          </div>
          <MembershipTiers />
        </div>
      </section>

      {/* ===================== CO-OP MINI MAP ===================== */}
      <section className="band" id="coops">
        <div className="wrap">
          <div className="map-wrap">
            <div className="reveal">
              <span className="eyebrow">Act III · The Network</span>
              <h2 className="sec-title">A living map of local food.</h2>
              <p className="lede" style={{ marginBottom: 26 }}>
                Search by ZIP or state. Filter by consumer or provider. Watch your neighborhood
                light up — then connect, trade, and build together.
              </p>
              <a href="/co-ops/" className="btn btn-primary">
                <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                Find a Co-op Near You
              </a>{' '}
              <a href="/co-ops/#apply" className="btn btn-ghost">List your co-op →</a>
            </div>
            <CoopMap />
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="final on-dark">
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
            <a href="/start/" className="btn btn-primary" style={{ fontSize: 16, padding: '17px 32px' }}>
              <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
              Get Started Free
            </a>
            <a href="/membership/" className="btn btn-secondary">See Membership</a>
          </div>
        </div>
      </section>
    </main>
  );
}
