import type { Metadata } from 'next';
import { VendorDirectory } from '@/components/VendorDirectory';
import { LeadCapture } from '@/components/LeadCapture';

export const metadata: Metadata = {
  title: 'Certified Vendors — Tools, seeds, equipment, butchers, contractors',
  description:
    'FarmShare USA Certified Vendors directory: tools, seeds, equipment, butchers, processing, contractors, and consulting — vetted for small homesteads.',
};

export default function VendorsPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S12.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">Certified Vendors</span>
              <h1>
                Vetted suppliers,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)', fontWeight: 420 }}>
                  not affiliate fluff.
                </em>
              </h1>
              <p className="lede">
                Tools that hold up. Seeds that germinate. Butchers who answer the phone.
                Contractors who&apos;ve done it before. Every vendor below has been used by our
                team or a founding member — and earned the FarmShare USA Certified seal.
              </p>
              <div className="cta-row">
                <a href="#directory" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  Browse the Directory
                </a>
                <a href="#apply" className="btn btn-secondary">Apply to be a Vendor</a>
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S12.png" alt="Tools, seeds, and watering can arranged on a workbench" />
              <span className="plate">Plate III — The Tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CERT BADGE EXPLAINER ============== */}
      <section className="band" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="section-rule reveal">
            <span className="l"></span>
            <svg aria-hidden="true"><use href="#mark" /></svg>
            <span className="l"></span>
          </div>
          <div className="sec-head center reveal">
            <span className="eyebrow center">What the seal means</span>
            <h2 className="sec-title">FarmShare USA Certified.</h2>
            <p className="lede" style={{ margin: '0 auto' }}>
              Three things every Certified vendor has proven, in writing: their product or service
              works on a real small-acreage homestead, their support is responsive, and their
              pricing is fair to actual humans — not just commercial buyers.
            </p>
          </div>
        </div>
      </section>

      {/* ============== DIRECTORY ============== */}
      <section className="band" id="directory" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal" style={{ marginBottom: 24 }}>
            <span className="eyebrow">The Directory</span>
            <h2 className="sec-title">Find what you actually need.</h2>
          </div>
          <VendorDirectory />
        </div>
      </section>

      {/* ============== APPLY ============== */}
      <section className="band green on-dark" id="apply">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Vendors</span>
            <h2 className="sec-title">Apply for the Certified seal.</h2>
            <p className="lede">
              We&apos;re selective — we&apos;d rather list 50 vendors who deliver than 5,000 who
              ship from a warehouse in another hemisphere. Drop your email and we&apos;ll send the
              vendor application kit.
            </p>
          </div>
          <div className="reveal d1" style={{ maxWidth: 520 }}>
            <LeadCapture
              buttonLabel="Send the Vendor Kit"
              finePrint="We review applications monthly. We'll be in touch."
            />
          </div>
        </div>
      </section>

      {/* ============== FINAL ============== */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <h3>The seal is for buyers, too.</h3>
            <p>Member tier? You get vendor discounts and direct introductions on Steward.</p>
          </div>
          <a href="/membership/" className="btn btn-primary" style={{ fontSize: 16, padding: '17px 30px' }}>
            See Membership
          </a>
        </div>
      </section>
    </main>
  );
}
