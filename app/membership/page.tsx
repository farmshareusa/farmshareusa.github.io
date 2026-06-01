import type { Metadata } from 'next';
import { MembershipTiers } from '@/components/MembershipTiers';

export const metadata: Metadata = {
  title: 'Membership — Go further when you’re ready',
  description:
    'From a free weekly almanac to full homestead design. Free → Grower → Homesteader → Steward. Cancel anytime.',
};

export default function MembershipPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S9.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">Membership · Founding Cohort Open</span>
              <h1>The movement, not just a newsletter.</h1>
              <p className="lede">
                One membership that grows with you — from your first windowsill of herbs to a
                five-acre homestead with a working co-op. Cancel anytime; founding rates locked
                forever.
              </p>
              <div className="cta-row">
                <a href="#tiers" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  See the Tiers
                </a>
                <a href="/start/" className="btn btn-secondary">Try Free First</a>
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S23.png" alt="A modern couple surveying their suburban garden plot" />
              <span className="plate">Plate II — The Movement</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TIERS ============== */}
      <section className="band" id="tiers">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Choose your tier</span>
            <h2 className="sec-title">Four steps. One movement.</h2>
            <p className="lede" style={{ margin: '0 auto 26px' }}>
              Every paid tier locks in <b>Founding Member</b> pricing forever. Checkout opens soon —
              join the waitlist and the rate is yours.
            </p>
          </div>
          <MembershipTiers withFeatures />
        </div>
      </section>

      {/* ============== FEATURE MATRIX ============== */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Feature comparison</span>
            <h2 className="sec-title">What&apos;s in every tier.</h2>
          </div>
          <div className="compare-wrap">
            <table className="compare reveal d1">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free</th>
                  <th>Grower</th>
                  <th className="feat">Homesteader</th>
                  <th>Steward</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Weekly almanac newsletter</td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                </tr>
                <tr>
                  <td>Co-op directory access</td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                </tr>
                <tr>
                  <td>Full course library</td>
                  <td className="no"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                </tr>
                <tr>
                  <td>Member forum + groups</td>
                  <td className="no"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                </tr>
                <tr>
                  <td>Land + plot design templates</td>
                  <td className="no"></td>
                  <td className="no"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                </tr>
                <tr>
                  <td>Live monthly workshops</td>
                  <td className="no"></td>
                  <td className="no"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                </tr>
                <tr>
                  <td>Co-op founder toolkit</td>
                  <td className="no"></td>
                  <td className="no"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                </tr>
                <tr>
                  <td>30% off all programs</td>
                  <td className="no"></td>
                  <td className="no"></td>
                  <td className="ok"></td>
                  <td className="ok"></td>
                </tr>
                <tr>
                  <td>1:1 homestead consultation</td>
                  <td className="no"></td>
                  <td className="no"></td>
                  <td className="no"></td>
                  <td className="ok"></td>
                </tr>
                <tr>
                  <td>Direct vendor introductions</td>
                  <td className="no"></td>
                  <td className="no"></td>
                  <td className="no"></td>
                  <td className="ok"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center">Questions</span>
            <h2 className="sec-title">Honest answers.</h2>
          </div>
          <div className="faq reveal d1">
            <details>
              <summary>Is there a free option, really?</summary>
              <p>
                Yes. The Free tier is the weekly almanac, the co-op directory, and the 30-Day Plan
                — forever, no card required. Paid tiers exist when you&apos;re ready to do more.
              </p>
            </details>
            <details>
              <summary>What does &ldquo;Founding Member pricing locked forever&rdquo; mean?</summary>
              <p>
                The price you join at is the price you keep — even when rates go up for new members.
                If you join Homesteader at $59/month today, that&apos;s your rate as long as your
                membership stays active.
              </p>
            </details>
            <details>
              <summary>Can I cancel anytime?</summary>
              <p>
                Yes. One click, no &ldquo;are you sure&rdquo; loops. If you cancel and rejoin later,
                you&apos;ll pay the then-current rate.
              </p>
            </details>
            <details>
              <summary>I&apos;m an apartment dweller — is this worth it for me?</summary>
              <p>
                The Free and Grower tiers are built for you. The 30-Day Plan has a balcony layout,
                courses cover container gardening, and the co-op directory connects you to growers
                near you for what you can&apos;t grow yourself.
              </p>
            </details>
            <details>
              <summary>When does checkout actually open?</summary>
              <p>
                We&apos;re finalizing the platform in the coming months. Join the waitlist on any
                paid tier and you&apos;ll be among the first invited at the locked founding rate.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <h3>Not ready? Start with the free plan.</h3>
            <p>The 30-Day Plan and a 5-day email series — free, forever.</p>
          </div>
          <a href="/start/" className="btn btn-primary" style={{ fontSize: 16, padding: '17px 30px' }}>
            <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
            Get the Free Plan
          </a>
        </div>
      </section>
    </main>
  );
}
