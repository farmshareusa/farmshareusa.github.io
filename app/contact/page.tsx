import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Get in touch with FarmShare USA',
  description:
    'Questions, applications, press, partnership — drop us a note and we’ll get back to you within two business days.',
};

export default function ContactPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero bone">
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">Get in touch</span>
              <h1>One inbox.<br />
                <em style={{ fontStyle: 'italic', color: 'var(--clay)', fontWeight: 420 }}>
                  Read by real humans.
                </em>
              </h1>
              <p className="lede">
                Questions about a membership tier, a co-op application, a vendor inquiry, a press
                request, or a podcast invite — same form, same humans. We respond within two
                business days.
              </p>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S17.png" alt="" />
              <span className="plate" style={{ color: 'rgba(11,24,18,.55)' }}>Plate X — The Letter</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FORM ============== */}
      <section className="band">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Write to us</span>
            <h2 className="sec-title">Send a note.</h2>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ============== ALTERNATIVES ============== */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Faster paths</span>
            <h2 className="sec-title">Or pick the right door directly.</h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="body" style={{ padding: '34px 28px' }}>
                <div className="ic"><svg aria-hidden="true"><use href="#i-network" /></svg></div>
                <div className="k">Co-op</div>
                <h3>Apply to start a co-op</h3>
                <p>Get the Founder Toolkit — templates, legal starter packs, and the playbook for your first 10 members.</p>
                <a href="/co-ops/#apply">Co-op application →</a>
              </div>
            </div>
            <div className="pillar reveal d1">
              <div className="body" style={{ padding: '34px 28px' }}>
                <div className="ic"><svg aria-hidden="true"><use href="#i-systems" /></svg></div>
                <div className="k">Vendor</div>
                <h3>Apply to be Certified</h3>
                <p>Tools, seeds, equipment, butchers, contractors, consultants — request the vendor application kit.</p>
                <a href="/vendors/#apply">Vendor application →</a>
              </div>
            </div>
            <div className="pillar reveal d2">
              <div className="body" style={{ padding: '34px 28px' }}>
                <div className="ic"><svg aria-hidden="true"><use href="#i-grow" /></svg></div>
                <div className="k">Consulting</div>
                <h3>Book a homestead consult</h3>
                <p>Land acquisition, plot design, or farm startup — request a free 30-minute discovery call.</p>
                <a href="/homestead-design/#apply">Book a consult →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
