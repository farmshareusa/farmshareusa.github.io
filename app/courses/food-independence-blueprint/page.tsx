import type { Metadata } from 'next';
import { LeadCapture } from '@/components/LeadCapture';

export const metadata: Metadata = {
  title: 'Food Independence Blueprint — 8-week flagship program',
  description:
    'The complete 8-week program to go from grocery-store dependence to a self-sufficient food system in 90 days. From $99.',
};

const WEEKS = [
  {
    n: '01',
    title: 'Food system reality + planning',
    body: 'Audit what your family actually eats. Map your land, light, water, and time. Build your 90-day target — realistic, not heroic.',
  },
  {
    n: '02',
    title: 'Growing basics',
    body: 'Soil that performs. Seed vs. start. Water schedule that works. The five-crop core that produces in any zone.',
  },
  {
    n: '03',
    title: 'Production systems',
    body: 'Bed sequencing, succession planting, and the harvest calendar that turns one bed into four months of food.',
  },
  {
    n: '04',
    title: 'Scaling output',
    body: 'Doubling moves: the second bed, the high tunnel, the perennial layer. What pays off in season one vs. year three.',
  },
  {
    n: '05',
    title: 'Protein systems',
    body: 'Eggs, meat birds, rabbits, and (for the right lot) milk. Suburban-friendly protein production without zoning fights.',
  },
  {
    n: '06',
    title: 'Water + sustainability',
    body: 'Rainwater catchment, drip irrigation, greywater basics, and what to do when the municipal supply blinks out.',
  },
  {
    n: '07',
    title: 'Preservation',
    body: 'Canning, fermenting, dehydrating, root-cellaring. Year-round pantry from a four-month growing season.',
  },
  {
    n: '08',
    title: 'Independence plan',
    body: 'Your 30/60/90-day roadmap. Where you go from here — co-op, course, certification, or the long quiet work of mastery.',
  },
];

const TIERS = [
  {
    nm: 'Entry',
    amt: 99,
    desc: 'Full curriculum, video + workbooks, lifetime access to the cohort archive.',
    feats: ['8-week curriculum', 'Workbooks + planting calendars', 'Cohort archive access'],
    cta: 'Start Entry',
  },
  {
    nm: 'Standard',
    amt: 199,
    desc: 'Everything in Entry plus live weekly office hours and the active member forum.',
    feats: [
      'Everything in Entry',
      'Live weekly office hours',
      'Active member forum',
      '30-Day garden planner (printable)',
    ],
    cta: 'Start Standard',
    featured: true,
    badge: 'Most chosen',
  },
  {
    nm: 'Premium',
    amt: 499,
    desc: 'Standard + 1:1 coaching from a homestead designer through your first growing season.',
    feats: [
      'Everything in Standard',
      'Three 1:1 coaching sessions',
      'Personalized plot plan',
      'Direct vendor introductions',
      'Land-layout templates',
    ],
    cta: 'Apply for Premium',
  },
];

export default function FlagshipPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S10.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">Flagship · 8 weeks · From $99</span>
              <h1>
                The Food Independence<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)', fontWeight: 420 }}>
                  Blueprint.
                </em>
              </h1>
              <p className="lede">
                A complete operating system for feeding your family from your own land —
                sequenced into eight weeks of work, eight weeks of office hours, and one 90-day
                independence plan you actually finish.
              </p>
              <div className="cta-row">
                <a href="#enroll" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  Enroll — From $99
                </a>
                <a href="#webinar" className="btn btn-secondary">Free Webinar First</a>
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S11.png" alt="Canned goods on shelves — finished harvest" />
              <span className="plate">Plate V — The Pantry</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WHO IT'S FOR ============== */}
      <section className="band" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Who this is for</span>
            <h2 className="sec-title">Not for tourists. For builders.</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="body" style={{ padding: '36px 28px' }}>
                <div className="k">Profile 01</div>
                <h3>The suburban half-acre family</h3>
                <p>
                  You have a yard, a budget, and growing kids. You want to feed them better and
                  you&apos;ve realized YouTube isn&apos;t going to get you there.
                </p>
              </div>
            </div>
            <div className="pillar reveal d1">
              <div className="body" style={{ padding: '36px 28px' }}>
                <div className="k">Profile 02</div>
                <h3>The 1–5 acre new owner</h3>
                <p>
                  You bought the land. You walked the property. Now what? The Blueprint is the
                  build order that makes the next three years coherent.
                </p>
              </div>
            </div>
            <div className="pillar reveal d2">
              <div className="body" style={{ padding: '36px 28px' }}>
                <div className="k">Profile 03</div>
                <h3>The aspiring homesteader</h3>
                <p>
                  You&apos;re still renting or planning the move. The Blueprint compresses two
                  years of trial-and-error into one focused season of action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CURRICULUM ============== */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The 8-week curriculum</span>
            <h2 className="sec-title">Eight weeks. One transformation.</h2>
          </div>
          <div className="timeline">
            {WEEKS.map((w, i) => (
              <div key={w.n} className={`tl-week reveal ${i > 3 ? `d${(i - 3) as 1 | 2 | 3}` : ''}`}>
                <div className="wk">
                  Week
                  <b>{w.n}</b>
                </div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== BONUSES ============== */}
      <section className="band green on-dark">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Included with every tier</span>
            <h2 className="sec-title">Three bonuses, no upsell.</h2>
          </div>
          <div className="pillars reveal d1">
            <div className="pillar" style={{ background: 'var(--green-deep)' }}>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-seed" /></svg></div>
                <div className="k" style={{ color: 'var(--gold)' }}>Bonus 01</div>
                <h3 style={{ color: 'var(--bone)' }}>Garden Planner</h3>
                <p style={{ color: 'color-mix(in oklab, var(--bone) 75%, transparent)' }}>
                  A printable 12-month planner with succession charts for every USDA zone.
                </p>
              </div>
            </div>
            <div className="pillar" style={{ background: 'var(--green-deep)' }}>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-grow" /></svg></div>
                <div className="k" style={{ color: 'var(--gold)' }}>Bonus 02</div>
                <h3 style={{ color: 'var(--bone)' }}>Chicken Starter Guide</h3>
                <p style={{ color: 'color-mix(in oklab, var(--bone) 75%, transparent)' }}>
                  Breed picker, coop plans, predator checklist, and a 12-month feed budget.
                </p>
              </div>
            </div>
            <div className="pillar" style={{ background: 'var(--green-deep)' }}>
              <div className="body">
                <div className="ic"><svg aria-hidden="true"><use href="#i-systems" /></svg></div>
                <div className="k" style={{ color: 'var(--gold)' }}>Bonus 03</div>
                <h3 style={{ color: 'var(--bone)' }}>Land-Layout Templates</h3>
                <p style={{ color: 'color-mix(in oklab, var(--bone) 75%, transparent)' }}>
                  Six proven layouts: quarter-acre, half-acre, 1-acre, 2-acre, 3-acre, 5-acre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PRICING ============== */}
      <section className="band" id="enroll">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Enrollment</span>
            <h2 className="sec-title">Three ways in.</h2>
          </div>
          <div className="mem-grid">
            {TIERS.map((t, i) => (
              <div key={t.nm} className={`tier reveal ${t.featured ? 'feat' : ''} d${i}`}>
                {t.badge && <div className="badge">{t.badge}</div>}
                <div className="nm">{t.nm}</div>
                <div className="amt">
                  <span>$</span>
                  <b>{t.amt}</b>
                </div>
                <div className="desc">{t.desc}</div>
                <ul className="tier-feats">
                  {t.feats.map((f) => (
                    <li key={f}>
                      <svg aria-hidden="true"><use href="#check" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a className={`btn ${t.featured ? 'btn-primary' : 'btn-secondary'}`}>{t.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WEBINAR ============== */}
      <section className="band" id="webinar" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="lead-wrap reveal almanac" style={{ boxShadow: '0 30px 70px -50px rgba(11,24,18,.7)' }}>
            <div className="lead-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S15.png" alt="Open land — the canvas" />
              <div className="grade"></div>
              <div className="float">
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)' }}>
                  FREE · 60-MIN WEBINAR
                </div>
                <div className="t">How to Build a Self-Sufficient Food System in 90 Days</div>
              </div>
            </div>
            <div className="lead-body">
              <span className="pre">Try before you buy</span>
              <h3>The full 90-day arc, in one hour.</h3>
              <ul>
                <li><svg aria-hidden="true"><use href="#check" /></svg>The five mistakes that doom first-year homesteads</li>
                <li><svg aria-hidden="true"><use href="#check" /></svg>The minimum viable food system for a suburban lot</li>
                <li><svg aria-hidden="true"><use href="#check" /></svg>A live Q&amp;A — bring your actual property questions</li>
              </ul>
              <LeadCapture buttonLabel="Save My Seat" finePrint="We'll send the recording too, in case you can't make it live." />
            </div>
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Common questions</span>
            <h2 className="sec-title">Before you enroll.</h2>
          </div>
          <div className="faq reveal d1">
            <details>
              <summary>What if I&apos;m starting from zero?</summary>
              <p>
                The curriculum assumes nothing. Week 1 starts with a soil scoop and a tape
                measure. By week 8 you have a working system.
              </p>
            </details>
            <details>
              <summary>How much time per week?</summary>
              <p>
                Plan for 3–5 hours: one video session, one workbook exercise, and field time.
                Office hours are optional but recommended.
              </p>
            </details>
            <details>
              <summary>What if I&apos;m in a rental?</summary>
              <p>
                Half the curriculum is portable (container, balcony, community plots). The
                land-design modules become your prep work for when you do buy.
              </p>
            </details>
            <details>
              <summary>Refund policy?</summary>
              <p>
                Try two weeks. If it&apos;s not for you, we refund — no form, no friction. We&apos;d
                rather you tell a friend than feel stuck.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
