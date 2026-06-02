/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How FarmShare USA collects, uses, and protects personal information — including email captured by our forms, the 30-Day Plan opt-in, the in-chat capture, and contact form.',
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero bone">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow center">Legal</span>
          <h1 style={{ marginTop: 10 }}>Privacy Policy</h1>
          <p className="lede" style={{ margin: '14px auto 0', maxWidth: 640 }}>
            What we collect, how we use it, and how to ask us to stop. Plain-English version
            below.
          </p>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="legal-notice">
            <strong>Starter template — not legal advice.</strong> This document is a plain-English
            starter provided for convenience. FarmShare USA should have a licensed attorney review
            and finalize this Privacy Policy before relying on it. Replace every <strong>[PLACEHOLDER]</strong>
            with the final value.
          </div>

          <div className="legal-prose">
            <p className="legal-meta">Last updated: [YYYY-MM-DD]</p>

            <p>
              This Privacy Policy explains how <strong>[LEGAL ENTITY NAME]</strong> ("FarmShare USA,"
              "we," "us") collects, uses, shares, and protects information when you visit
              farmshareusa.com or use any related services (collectively, the "Services").
            </p>

            <h2>1. Information we collect</h2>
            <p>We only collect information you give us. That includes:</p>
            <ul>
              <li>
                <strong>Name and email address</strong> submitted through site forms — including
                the free 30-Day Plan opt-in, the in-chat email capture used by our Elizabeth
                assistant, newsletter signups, the contact form, and any future membership or
                application forms.
              </li>
              <li>
                <strong>Form content</strong> you type into the contact form, co-op application, or
                vendor application.
              </li>
              <li>
                <strong>Basic technical data</strong> standard to web traffic — IP address, browser
                type, device, referring URL, pages viewed — collected by our hosting provider and,
                when enabled, by analytics.
              </li>
            </ul>
            <p>
              We treat every form submission as untrusted input. We validate and sanitize what you
              send and never sell your email address.
            </p>

            <h2>2. How we use your information</h2>
            <ul>
              <li>To deliver the free resource you requested (e.g. the 30-Day Plan).</li>
              <li>To send you the FarmShare USA newsletter, community updates, and announcements you opted into.</li>
              <li>To respond to your contact-form, co-op, or vendor inquiries.</li>
              <li>To improve the Services and understand what content is useful.</li>
              <li>To comply with law and protect the Services from abuse.</li>
            </ul>

            <h2>3. Email and marketing provider</h2>
            <p>
              When you submit your email, it is delivered to our third-party email/marketing
              provider (currently <strong>[EMAIL PROVIDER NAME, e.g. ConvertKit / Beehiiv /
              Mailchimp]</strong>) for delivery of newsletters, lead magnets, and lifecycle emails.
              That provider stores your contact record on our behalf. Every marketing email
              includes a one-click unsubscribe link.
            </p>

            <h2>4. Analytics and cookies</h2>
            <p>
              When enabled, we use <strong>Google Analytics 4 (GA4)</strong> to understand
              aggregate traffic — how many people visit, which pages they read, which CTAs they
              click. GA4 uses cookies and similar technologies. We do not use third-party
              advertising cookies. You can block cookies in your browser; the site will still
              work.
            </p>

            <h2>5. How we share information</h2>
            <p>We do not sell personal information. We share it only with:</p>
            <ul>
              <li>Our email/marketing provider, hosting provider, analytics provider, and form-processing provider — strictly to operate the Services.</li>
              <li>Professional advisors (attorneys, accountants) when required.</li>
              <li>Law-enforcement or regulators when required by law.</li>
              <li>A successor entity if FarmShare USA is acquired or reorganized.</li>
            </ul>

            <h2>6. Your rights</h2>
            <ul>
              <li><strong>Access:</strong> Ask us what personal information we hold about you.</li>
              <li><strong>Correct or delete:</strong> Ask us to fix or delete your information.</li>
              <li><strong>Unsubscribe:</strong> Click "unsubscribe" in any marketing email, or email us directly.</li>
              <li><strong>State-specific rights:</strong> Depending on where you live (e.g. California, Virginia, Colorado, EU/UK), you may have additional rights under applicable law.</li>
            </ul>
            <p>To exercise any of these rights, email <strong>[CONTACT EMAIL]</strong>.</p>

            <h2>7. Children's privacy</h2>
            <p>
              The Services are not directed to children under 13. We do not knowingly collect
              personal information from children under 13. If you believe a child has provided us
              personal information, contact <strong>[CONTACT EMAIL]</strong> and we will delete it.
            </p>

            <h2>8. Security</h2>
            <p>
              We use reasonable technical and organizational safeguards to protect personal
              information, including TLS for data in transit and reputable providers for storage.
              No method of transmission or storage is 100% secure — we make no guarantee of
              absolute security.
            </p>

            <h2>9. International transfers</h2>
            <p>
              FarmShare USA is operated from the United States. If you access the Services from
              outside the U.S., understand that your information will be processed in the U.S.
            </p>

            <h2>10. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will update the "Last
              updated" date above and, for material changes, post a notice on the site.
            </p>

            <h2>11. Contact us</h2>
            <p>
              Questions about this policy or privacy requests:{' '}
              <strong>[CONTACT EMAIL]</strong> — <strong>[LEGAL ENTITY NAME]</strong>,{' '}
              <strong>[MAILING ADDRESS]</strong>, <strong>[STATE]</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
