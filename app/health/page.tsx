import type { Metadata } from 'next';
import { LeadCapture } from '@/components/LeadCapture';

export const metadata: Metadata = {
  title: 'FarmShare USA Health — Clinicians on growing your own food',
  description:
    'Vetted clinical perspectives on the measurable health benefits of homesteading: nutrient density, microbiome, mental health, and family resilience.',
};

export default function HealthPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S13.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">FarmShare USA Health</span>
              <h1>
                The medical case for<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)', fontWeight: 420 }}>
                  growing your own food.
                </em>
              </h1>
              <p className="lede">
                Clinicians, dietitians, and integrative health practitioners on what changes
                when a family starts producing real food at home — measurably, in plain
                language, with citations.
              </p>
              <div className="cta-row">
                <a href="#perspectives" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  See the Perspectives
                </a>
                <a href="#join" className="btn btn-secondary">Are you a clinician?</a>
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S13.png" alt="A home-grown meal plated by a sunlit window" />
              <span className="plate">Plate VI — Real Food</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOUR PILLARS OF HEALTH ============== */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What clinicians track</span>
            <h2 className="sec-title">Four measurable shifts.</h2>
            <p className="lede">
              These are the categories our clinical advisors say show up first when families move
              from industrial-supply to home-grown food. None of them are magic — they&apos;re what
              you&apos;d expect from better inputs, more movement, and more shared meals.
            </p>
          </div>
          <div className="prob-grid reveal d1" style={{ background: 'var(--line-soft)', border: '1px solid var(--line-soft)' }}>
            <div className="prob" style={{ background: 'var(--bone)' }}>
              <svg aria-hidden="true" style={{ color: 'var(--clay)' }}><use href="#i-grow" /></svg>
              <div className="n" style={{ color: 'var(--clay)' }}>01</div>
              <h4 style={{ color: 'var(--green)' }}>Nutrient density</h4>
              <p style={{ color: 'color-mix(in oklab, var(--ink) 72%, transparent)' }}>
                Fresh-harvested produce shows higher measurable micronutrient levels than long-haul equivalents.
              </p>
            </div>
            <div className="prob" style={{ background: 'var(--bone)' }}>
              <svg aria-hidden="true" style={{ color: 'var(--clay)' }}><use href="#i-systems" /></svg>
              <div className="n" style={{ color: 'var(--clay)' }}>02</div>
              <h4 style={{ color: 'var(--green)' }}>Microbiome diversity</h4>
              <p style={{ color: 'color-mix(in oklab, var(--ink) 72%, transparent)' }}>
                Hands in soil, fermented foods, and varied plant intake correlate with healthier gut diversity.
              </p>
            </div>
            <div className="prob" style={{ background: 'var(--bone)' }}>
              <svg aria-hidden="true" style={{ color: 'var(--clay)' }}><use href="#i-network" /></svg>
              <div className="n" style={{ color: 'var(--clay)' }}>03</div>
              <h4 style={{ color: 'var(--green)' }}>Mental health</h4>
              <p style={{ color: 'color-mix(in oklab, var(--ink) 72%, transparent)' }}>
                Outdoor work, daylight, and tangible accomplishment correlate with measurable mood improvement.
              </p>
            </div>
            <div className="prob" style={{ background: 'var(--bone)' }}>
              <svg aria-hidden="true" style={{ color: 'var(--clay)' }}><use href="#i-quality" /></svg>
              <div className="n" style={{ color: 'var(--clay)' }}>04</div>
              <h4 style={{ color: 'var(--green)' }}>Family resilience</h4>
              <p style={{ color: 'color-mix(in oklab, var(--ink) 72%, transparent)' }}>
                Shared meals, shared chores, and shared outcomes are the strongest predictors of household stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PERSPECTIVES ============== */}
      <section className="band" id="perspectives" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">From the panel</span>
            <h2 className="sec-title">Clinical perspectives.</h2>
            <p className="lede">
              Placeholder slots for our founding clinical panel. Each named perspective will
              include credentials, affiliation, and primary citations.
            </p>
          </div>
          <div className="team reveal d1">
            <div className="team-card">
              <div className="ph"><span>PHOTO · Clinician 01</span></div>
              <div className="b">
                <h4>[ Clinician Name, MD ]</h4>
                <div className="role">Integrative Medicine</div>
                <p>
                  &ldquo;The single most consistent change I see in patients who start a garden is
                  not weight or labs — it&apos;s sleep.&rdquo;
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="ph"><span>PHOTO · Clinician 02</span></div>
              <div className="b">
                <h4>[ Clinician Name, RD ]</h4>
                <div className="role">Registered Dietitian</div>
                <p>
                  &ldquo;Families who grow even 20% of their produce eat noticeably more diverse
                  vegetables overall. The exposure compounds.&rdquo;
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="ph"><span>PHOTO · Clinician 03</span></div>
              <div className="b">
                <h4>[ Clinician Name, LCSW ]</h4>
                <div className="role">Behavioral Health</div>
                <p>
                  &ldquo;Soil work, sunlight, and shared meals are the unglamorous protocol I&apos;d
                  prescribe first, every time.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== JOIN PANEL ============== */}
      <section className="band green on-dark" id="join">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">For clinicians</span>
            <h2 className="sec-title">Join the FarmShare Health panel.</h2>
            <p className="lede">
              Are you an MD, DO, ND, RD, RN, LCSW, or affiliated health professional interested in
              prescribing food independence? We&apos;re building a small founding panel for
              perspectives, citations, and member referrals.
            </p>
          </div>
          <div className="reveal d1" style={{ maxWidth: 520 }}>
            <LeadCapture
              buttonLabel="Apply to the Panel"
              finePrint="We'll respond within a week with a short application."
            />
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <h3>The fastest health intervention is in your backyard.</h3>
            <p>The 30-Day Plan is free — and a real first step.</p>
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
