import type { Metadata } from 'next';
import { LeadCapture } from '@/components/LeadCapture';

export const metadata: Metadata = {
  title: 'Homestead Acquisition & Design — Land, layout, and the build order',
  description:
    'High-touch consulting: find the land, design the plot, plan the build. 1–5 acres made productive on a real timeline.',
};

export default function HomesteadDesignPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S15.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">Homestead Acquisition &amp; Design</span>
              <h1>
                The land is the easy part.<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)', fontWeight: 420 }}>
                  The build order isn&apos;t.
                </em>
              </h1>
              <p className="lede">
                Whether you&apos;re searching for the right 1–5 acres or you closed on it last
                month, we&apos;ll help you sequence the next three years so nothing wastes
                money, time, or sunlight.
              </p>
              <div className="cta-row">
                <a href="#engagements" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  See Engagements
                </a>
                <a href="#apply" className="btn btn-secondary">Book a Consult</a>
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S10.png" alt="Designed micro-homestead with clearly defined zones" />
              <span className="plate">Plate VIII — The Plot</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="band" id="engagements">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Three engagements</span>
            <h2 className="sec-title">Where we plug in.</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S22.png" alt="Aerial of suburban properties" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-grow" /></svg></div>
                <div className="k">Engagement 01</div>
                <h3>Acquisition Advisory</h3>
                <p>
                  Before you buy: criteria sheet, regional priorities, soil/water/zoning checklist,
                  and an on-call advisor while you tour properties.
                </p>
                <a href="#apply">Book Acquisition <span>→</span></a>
              </div>
            </div>
            <div className="pillar reveal d1">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S15.png" alt="Open land before design" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-systems" /></svg></div>
                <div className="k">Engagement 02</div>
                <h3>Plot Design</h3>
                <p>
                  Once you have the land: a full design — zones, water, energy, structures,
                  paths, perennials, and a phased build order with a real budget.
                </p>
                <a href="#apply">Book Design <span>→</span></a>
              </div>
            </div>
            <div className="pillar reveal d2">
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Image_S16.png" alt="Sweeping homestead landscape" />
              </div>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-network" /></svg></div>
                <div className="k">Engagement 03</div>
                <h3>Farm Startup</h3>
                <p>
                  For owners adding revenue: market analysis, products, channel strategy, and the
                  operational systems to scale beyond hobby.
                </p>
                <a href="#apply">Book Startup <span>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROCESS ============== */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="sec-title">Four stages.</h2>
          </div>
          <div className="timeline">
            <div className="tl-week reveal">
              <div className="wk">Stage<b>01</b></div>
              <div>
                <h4>Discovery call (free, 30 min)</h4>
                <p>We talk through your goals, your land (or land criteria), your budget, and your timeline. No commitment.</p>
              </div>
            </div>
            <div className="tl-week reveal d1">
              <div className="wk">Stage<b>02</b></div>
              <div>
                <h4>Engagement design</h4>
                <p>We propose a scope, deliverables, and price. You decide. Most engagements run 4–12 weeks.</p>
              </div>
            </div>
            <div className="tl-week reveal d2">
              <div className="wk">Stage<b>03</b></div>
              <div>
                <h4>The work</h4>
                <p>Weekly working sessions, async messaging, and (where relevant) on-site visits. You get the plan and the people behind it.</p>
              </div>
            </div>
            <div className="tl-week reveal d3">
              <div className="wk">Stage<b>04</b></div>
              <div>
                <h4>Handoff + ongoing access</h4>
                <p>You leave with a printed master plan, vendor introductions, and a year of office-hours access to keep the plan on track.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== APPLY ============== */}
      <section className="band green on-dark" id="apply">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Book the call</span>
            <h2 className="sec-title">Apply for a discovery call.</h2>
            <p className="lede">
              Drop your email — we&apos;ll send a short intake form and book a 30-minute call. No
              pressure, no slide deck.
            </p>
          </div>
          <div className="reveal d1" style={{ maxWidth: 520 }}>
            <LeadCapture
              buttonLabel="Request a Call"
              finePrint="Calls are scheduled weekly. We'll respond within 48 hours with available times."
            />
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <h3>Not ready for consulting yet?</h3>
            <p>The Steward membership includes a 90-minute design consult and the land-layout templates.</p>
          </div>
          <a href="/membership/" className="btn btn-primary" style={{ fontSize: 16, padding: '17px 30px' }}>
            See Steward Tier
          </a>
        </div>
      </section>
    </main>
  );
}
