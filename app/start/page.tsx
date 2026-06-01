import type { Metadata } from 'next';
import { LeadCapture } from '@/components/LeadCapture';

export const metadata: Metadata = {
  title: 'The 30-Day Self-Sufficient Backyard Plan — Free',
  description:
    'A day-by-day plan to grow real food in 30 days, wherever you live — from a balcony to five suburban acres. Free download.',
};

export default function StartPage() {
  return (
    <main>
      {/* ============== LEAD-MAGNET HERO ============== */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S32.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">Free · 30-Day Plan · PDF</span>
              <h1>
                Grow real food in 30 days.<br />
                <em
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--gold-bright)',
                    fontWeight: 420,
                  }}
                >
                  Wherever you live.
                </em>
              </h1>
              <p className="lede">
                A day-by-day plan that turns soil, seed, water, and one weekend afternoon into
                your family&apos;s first real harvest. Free, instant download, no fluff.
              </p>
              <ul className="lead-body" style={{ background: 'transparent', padding: 0 }}>
                <li>
                  <svg aria-hidden="true"><use href="#check" /></svg>
                  A day-by-day planting calendar tuned to your USDA zone
                </li>
                <li>
                  <svg aria-hidden="true"><use href="#check" /></svg>
                  Six starter crops that win — even for first-time gardeners
                </li>
                <li>
                  <svg aria-hidden="true"><use href="#check" /></svg>
                  Three layouts: balcony, quarter-acre, five-acre suburban lot
                </li>
                <li>
                  <svg aria-hidden="true"><use href="#check" /></svg>
                  A weekend setup checklist (tools, soil, where to spend $42 vs. $420)
                </li>
                <li>
                  <svg aria-hidden="true"><use href="#check" /></svg>
                  A 5-day email series to walk you through the first week
                </li>
              </ul>
              <div style={{ marginTop: 26 }}>
                <LeadCapture
                  buttonLabel="Download the 30-Day Plan"
                  finePrint="No spam. Unsubscribe in one click. We'll send the PDF and the first email immediately."
                />
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S8.png" alt="Almanac journal with planting charts and seed packets" />
              <span className="plate">Plate I — The Plan</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROOF / NUMBERS ============== */}
      <section className="band" style={{ paddingBottom: 70 }}>
        <div className="wrap">
          <div className="section-rule reveal">
            <span className="l"></span>
            <svg aria-hidden="true"><use href="#i-seed" /></svg>
            <span className="l"></span>
          </div>
          <div className="sec-head center reveal">
            <span className="eyebrow center">Why this plan works</span>
            <h2 className="sec-title">Built for the first growing season, not the perfect one.</h2>
            <p className="lede" style={{ margin: '0 auto' }}>
              Most gardening guides tell you everything. This one tells you the four things that
              matter in the first 30 days — and the order to do them in.
            </p>
          </div>
          <div className="stat-row reveal d1">
            <div className="stat">
              <div className="n">
                <span data-count="89">0</span>%
              </div>
              <div className="lbl">Harvest in 30 days</div>
            </div>
            <div className="stat">
              <div className="n">
                <span data-count="42">0</span>k+
              </div>
              <div className="lbl">Families using the plan</div>
            </div>
            <div className="stat">
              <div className="n">$0</div>
              <div className="lbl">Cost, ever</div>
            </div>
            <div className="stat">
              <div className="n">
                <span data-count="5">0</span>
              </div>
              <div className="lbl">Days of email coaching</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== HOW IT WORKS ============== */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What you&apos;ll do</span>
            <h2 className="sec-title">Four weeks. Four moves.</h2>
          </div>
          <div className="timeline">
            <div className="tl-week reveal">
              <div className="wk">
                Week
                <b>01</b>
              </div>
              <div>
                <h4>Set up the bed</h4>
                <p>
                  Pick a sunny spot, build (or repurpose) one 4×8 raised bed, fill it right. By
                  Sunday you have a place to plant.
                </p>
              </div>
            </div>
            <div className="tl-week reveal d1">
              <div className="wk">
                Week
                <b>02</b>
              </div>
              <div>
                <h4>Plant the six</h4>
                <p>
                  Six high-yield, low-fail crops chosen for your zone go in the ground in the right
                  order — radishes first, slow growers last.
                </p>
              </div>
            </div>
            <div className="tl-week reveal d2">
              <div className="wk">
                Week
                <b>03</b>
              </div>
              <div>
                <h4>Water + watch</h4>
                <p>
                  A 10-minute morning routine. Catch pests early, thin the right seedlings, learn
                  what &quot;enough water&quot; actually looks like.
                </p>
              </div>
            </div>
            <div className="tl-week reveal d3">
              <div className="wk">
                Week
                <b>04</b>
              </div>
              <div>
                <h4>Harvest + plan the next 60 days</h4>
                <p>
                  Pick your first crop. Decide what doubles next month: a second bed, a chicken
                  coop, a co-op connection, or a preservation pantry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TRUST / FINAL ============== */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <h3>The PDF is free. The first season is on you.</h3>
            <p>
              No credit card, no upsell, no shipping. Drop your email and we&apos;ll send the plan
              plus a 5-day starter series.
            </p>
          </div>
          <a
            href="#top"
            className="btn btn-primary"
            style={{ fontSize: 16, padding: '17px 30px' }}
          >
            <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
            Get the 30-Day Plan
          </a>
        </div>
      </section>
    </main>
  );
}
