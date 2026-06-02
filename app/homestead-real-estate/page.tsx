import type { Metadata } from 'next';
import { HomesteadInquiryForm } from '@/components/HomesteadInquiryForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Homestead Real Estate — Find, buy, and design your land',
  description:
    'FarmShare USA helps you find the right land, evaluate properties, understand zoning, design your homestead layout, and connect with vetted local agents and lenders.',
  openGraph: {
    title: 'Homestead Real Estate — FarmShare USA',
    description:
      'Find, buy, evaluate, and design the homestead that fits your life — backed by vetted local agents, lenders, and design pros.',
    images: [{ url: '/images/Image_S22.png', width: 1600, height: 900, alt: 'Aerial view of a homestead property' }],
  },
};

const SERVICES = [
  {
    title: 'Find land',
    body:
      'Translate your goals into a clear set of criteria — region, climate, water, soil, access — then surface properties that actually fit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Evaluate properties',
    body:
      'A homesteader-grade walkthrough of any property you are considering — strengths, deal-breakers, and the questions to ask before you sign.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M9 3v2h6V3" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Understand zoning',
    body:
      'Cut through county codes, ag-use rules, HOA restrictions, water rights, and the small print that decides what you can actually do on the land.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    title: 'Design small homesteads',
    body:
      'From a quarter-acre to five acres — site plan, zones, water flow, structures, sunlight, paths, perennials — built around how your family actually lives.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m12.99 6.74 1.93 3.44" />
        <path d="M19.136 12a10 10 0 0 1-14.271 0" />
        <path d="m21 21-2.16-3.84" />
        <path d="m3 21 8.02-14.26" />
        <circle cx="12" cy="5" r="2" />
      </svg>
    ),
  },
  {
    title: 'Plan gardens & livestock',
    body:
      'Beds, orchards, chickens, goats, bees — sequenced so the right systems land in the right year, not all in year one.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </svg>
    ),
  },
  {
    title: 'Connect with local agents & lenders',
    body:
      'A warm intro to a separately disclosed licensed real-estate professional, a homestead-friendly lender, and the trades that actually show up on time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const LAND_TOPICS = [
  { k: 'Water', h: 'Wells, springs, rainfall, runoff', p: 'You can fix a lot of things on a property. Water is rarely one of them.' },
  { k: 'Soil', h: 'Drainage, depth, history', p: 'A soil test tells you years of future labor up front. Get it before you sign.' },
  { k: 'Zoning', h: 'What you can actually do', p: 'Ag-use, livestock limits, building setbacks, accessory dwellings, and short-term-rental rules.' },
  { k: 'Layout', h: 'Sun, wind, slope, access', p: 'The land tells you where the house, garden, and animals belong — read it before you draw lines.' },
];

export default function HomesteadRealEstatePage() {
  return (
    <main>
      {/* ============== 1. HERO ============== */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S15.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">Homestead Real Estate</span>
              <h1>
                Find, buy, and design<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)', fontWeight: 420 }}>
                  the homestead that fits your life.
                </em>
              </h1>
              <p className="lede">
                Real estate help built for homesteaders — from the criteria you set before you tour
                a single property, to the layout you live on for the next twenty years. Backed by
                separately disclosed licensed agents and lenders in your state.
              </p>
              <div className="cta-row">
                <a href="#inquire" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  Request Homestead Support
                </a>
                <a href={siteConfig.communityUrl} className="btn btn-secondary">
                  {siteConfig.communityCtaLabel}
                </a>
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Image_S22.png"
                alt="Aerial view of a productive 1.5-acre suburban homestead lot"
              />
              <span className="plate">Plate IX — The Land</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 2. WHAT WE HELP WITH ============== */}
      <section className="band" id="what">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">What we help with</span>
            <h2 className="sec-title">Six ways we move you forward.</h2>
          </div>
          <div className="pillars pillars--six">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`pillar pillar--icon reveal${i > 0 ? ` d${Math.min(i, 3)}` : ''}`}
              >
                <div className="ic">{s.icon}</div>
                <div className="k">{`Service ${String(i + 1).padStart(2, '0')}`}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 3. WHO IT'S FOR ============== */}
      <section className="band" id="who" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Who it&apos;s for</span>
            <h2 className="sec-title">Built for the family-scale homesteader.</h2>
            <p className="lede" style={{ margin: '8px auto 0' }}>
              You don&apos;t have to be a farmer or a flipper. If you&apos;re trying to feed your
              family from the land, you&apos;re in the right place.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="body" style={{ padding: '34px 28px' }}>
                <div className="ic"><svg aria-hidden="true"><use href="#i-grow" /></svg></div>
                <div className="k">Audience 01</div>
                <h3>Small landowners (1–5 acres)</h3>
                <p>
                  You closed on the land. Now you want the layout, the build order, and the
                  honest answer to &quot;what can this property actually do?&quot;
                </p>
              </div>
            </div>
            <div className="pillar reveal d1">
              <div className="body" style={{ padding: '34px 28px' }}>
                <div className="ic"><svg aria-hidden="true"><use href="#i-systems" /></svg></div>
                <div className="k">Audience 02</div>
                <h3>Aspiring homesteaders</h3>
                <p>
                  You&apos;re looking for the right land. We give you the criteria sheet, the
                  red-flag list, and a real human to call while you&apos;re touring properties.
                </p>
              </div>
            </div>
            <div className="pillar reveal d2">
              <div className="body" style={{ padding: '34px 28px' }}>
                <div className="ic"><svg aria-hidden="true"><use href="#i-network" /></svg></div>
                <div className="k">Audience 03</div>
                <h3>Families relocating to land</h3>
                <p>
                  Moving from the city or suburbs and trying to do it once, on a real timeline,
                  without the regret of buying the wrong parcel in the wrong county.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 4. HOW IT WORKS ============== */}
      <section className="band" id="how" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 className="sec-title">Four steps.</h2>
          </div>
          <div className="timeline">
            <div className="tl-week reveal">
              <div className="wk">Step<b>01</b></div>
              <div>
                <h4>Inquire</h4>
                <p>Tell us where you are, where you want to be, and how soon. Two minutes, no calendar invite.</p>
              </div>
            </div>
            <div className="tl-week reveal d1">
              <div className="wk">Step<b>02</b></div>
              <div>
                <h4>Consult (free, 30 min)</h4>
                <p>We talk through your goals, your land or land criteria, your budget, and the realistic timeline. No pitch.</p>
              </div>
            </div>
            <div className="tl-week reveal d2">
              <div className="wk">Step<b>03</b></div>
              <div>
                <h4>Property &amp; design plan</h4>
                <p>You get a written plan — criteria for what to buy, or layout + build order for what you own — with a phased budget.</p>
              </div>
            </div>
            <div className="tl-week reveal d3">
              <div className="wk">Step<b>04</b></div>
              <div>
                <h4>Connect with vetted local pros</h4>
                <p>Warm intros to separately disclosed licensed real-estate agents, lenders, and trades who know homesteaders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 5. WHAT TO LOOK FOR IN LAND ============== */}
      <section className="band" id="land" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What to look for in land</span>
            <h2 className="sec-title">Read the property before you sign the paperwork.</h2>
            <p className="lede" style={{ marginBottom: 0 }}>
              The four things that decide whether a piece of land is a homestead or a heartbreak.
              Deeper guides on each live in <a href="/learn/">the Learn library</a>.
            </p>
          </div>
          <div className="pillars pillars--four">
            {LAND_TOPICS.map((t, i) => (
              <div
                key={t.k}
                className={`pillar pillar--icon reveal${i > 0 ? ` d${i}` : ''}`}
              >
                <div className="k">{t.k}</div>
                <h3>{t.h}</h3>
                <p>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 6. INQUIRY FORM ============== */}
      <section className="band green on-dark" id="inquire">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Request support</span>
            <h2 className="sec-title">Request Homestead Real Estate Support.</h2>
            <p className="lede">
              Tell us about your situation. We review every inquiry by hand and respond within two
              business days with concrete next steps.
            </p>
          </div>
          <div className="reveal d1" style={{ maxWidth: 760, margin: '0 auto' }}>
            <HomesteadInquiryForm />
          </div>
        </div>
      </section>

      {/* ============== 7. LICENSED-REALTOR DISCLOSURE ============== */}
      <section className="band" id="disclosure" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="legal-notice reveal" style={{ maxWidth: 880 }}>
            <strong>Licensed real-estate disclosure.</strong> FarmShare USA (operated by{' '}
            <strong>[LEGAL ENTITY NAME]</strong>) is <strong>not</strong> a licensed real estate
            brokerage. Our homestead real estate help is educational and/or facilitated through
            separately disclosed licensed real-estate professionals in the applicable jurisdiction;
            those professionals are independently responsible for their services and disclosures.
            We do not list, market, sell, or broker real property, and we do not provide legal,
            tax, or financing advice. Nothing on this page is a solicitation for real-estate
            brokerage services in any jurisdiction where such solicitation would be unlawful or
            require a license we do not hold. See the full{' '}
            <a href="/disclaimers/">Disclaimers</a> page for additional notices.
          </div>
        </div>
      </section>

      {/* ============== 8. FINAL CTA ============== */}
      <section className="final on-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S16.png" alt="" />
        <div className="grade"></div>
        <div className="final-inner wrap">
          <span className="eyebrow center reveal" style={{ color: 'var(--leaf)' }}>
            Your land is closer than you think
          </span>
          <h2 className="reveal d1">
            Build the homestead that fits your <em>life</em>.
          </h2>
          <p className="reveal d2">
            Two paths — start with the free community to learn alongside thousands of homesteaders,
            or send us your details and we&apos;ll get to work.
          </p>
          <div className="cta-row reveal d2">
            <a
              href={siteConfig.communityUrl}
              className="btn btn-primary"
              style={{ fontSize: 16, padding: '17px 32px' }}
            >
              <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
              {siteConfig.communityCtaLabel}
            </a>
            <a href="#inquire" className="btn btn-secondary">Request Homestead Support</a>
          </div>
        </div>
      </section>
    </main>
  );
}
