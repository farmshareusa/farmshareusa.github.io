import type { Metadata } from 'next';
import { LearnGrid } from '@/components/LearnGrid';
import { LeadCapture } from '@/components/LeadCapture';

export const metadata: Metadata = {
  title: 'Learn — The FarmShare USA Almanac',
  description:
    'Articles, guides, and field notes from the FarmShare USA almanac — organized by what you’re trying to do, not when we posted it.',
};

export default function LearnPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero bone">
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">The Almanac</span>
              <h1>
                A field library<br />
                <em style={{ fontStyle: 'italic', color: 'var(--clay)', fontWeight: 420 }}>
                  organized by intent.
                </em>
              </h1>
              <p className="lede">
                Not a blog. A growing reference indexed by what you&apos;re actually trying to do
                — start the first bed, design five acres, raise a flock, build a co-op, or work
                through the long quiet questions about how this changes your life.
              </p>
              <div className="cta-row">
                <a href="#topics" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  Browse Topics
                </a>
                <a href="/start/" className="btn btn-secondary">Get the 30-Day Plan</a>
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S29.png" alt="Working in the garden at bright midday" />
              <span className="plate" style={{ color: 'rgba(11,24,18,.55)' }}>Plate IX — The Almanac</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== GRID ============== */}
      <section className="band" id="topics">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Topic clusters</span>
            <h2 className="sec-title">What are you working on?</h2>
          </div>
          <LearnGrid />
        </div>
      </section>

      {/* ============== NEWSLETTER CTA ============== */}
      <section className="band green on-dark" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">The Weekly Almanac</span>
            <h2 className="sec-title">One short letter, every Sunday.</h2>
            <p className="lede" style={{ margin: '0 auto 24px' }}>
              Field notes, the week&apos;s best articles, and a single recommended next step.
              Average read time: three minutes.
            </p>
          </div>
          <div className="reveal d1" style={{ maxWidth: 520, margin: '0 auto' }}>
            <LeadCapture
              buttonLabel="Subscribe Free"
              finePrint="No spam, no ads. Unsubscribe in one click."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
