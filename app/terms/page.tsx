/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The rules for using farmshareusa.com, the FarmShare community, and any related services — plain-English starter template.',
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero bone">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow center">Legal</span>
          <h1 style={{ marginTop: 10 }}>Terms of Service</h1>
          <p className="lede" style={{ margin: '14px auto 0', maxWidth: 640 }}>
            By using the Services, you agree to these terms. Plain-English starter below.
          </p>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="legal-notice">
            <strong>Starter template — not legal advice.</strong> This document is a plain-English
            starter provided for convenience. FarmShare USA should have a licensed attorney review
            and finalize these Terms before relying on them. Replace every <strong>[PLACEHOLDER]</strong>
            with the final value.
          </div>

          <div className="legal-prose">
            <p className="legal-meta">Last updated: [YYYY-MM-DD]</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your use of farmshareusa.com and any related
              services, content, communities, courses, and resources (collectively, the
              "Services"), provided by <strong>[LEGAL ENTITY NAME]</strong> ("FarmShare USA,"
              "we," "us"). By using the Services, you agree to these Terms. If you do not agree,
              do not use the Services.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old (or the age of majority in your jurisdiction) to
              create an account, purchase a membership, or submit applications. By using the
              Services, you represent that you meet this requirement.
            </p>

            <h2>3. Accounts and memberships</h2>
            <p>
              Some features (community membership tiers, course access, applications) may require
              an account. You agree to provide accurate information, keep your credentials
              secure, and accept responsibility for activity on your account. We may suspend or
              terminate accounts that violate these Terms or any community guidelines.
            </p>

            <h2>4. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Services to break the law, infringe rights, or harm others.</li>
              <li>Scrape, copy, or republish FarmShare USA content without permission.</li>
              <li>Upload malware, attempt to break authentication, or interfere with the Services.</li>
              <li>Harass, threaten, or impersonate other users.</li>
              <li>Use the Services to send spam or unsolicited commercial messages.</li>
            </ul>
            <p>
              Conduct inside community spaces is also governed by our{' '}
              <a href="/community-guidelines/">Community Guidelines</a>.
            </p>

            <h2>5. Intellectual property</h2>
            <p>
              All FarmShare USA content — text, graphics, logos, marks, photographs, videos,
              courses, downloads, the "FarmShare USA Certified" seal, and underlying software — is
              owned by us or our licensors and is protected by copyright, trademark, and other
              laws. We grant you a personal, non-exclusive, non-transferable license to access and
              use the Services for personal, non-commercial use. Members may use members-only
              materials only as long as their membership is active.
            </p>
            <p>
              You retain ownership of content you submit (e.g. forum posts) and grant us a
              worldwide, royalty-free license to host, display, and distribute it within the
              Services.
            </p>

            <h2>6. Payments, memberships, and cancellations</h2>
            <p>
              Free resources are free. Paid memberships, courses, events, and consulting are
              offered separately. <strong>Checkout is not yet open</strong> on this site; any
              future paid offerings will be processed by a separately disclosed payment provider
              (e.g. Stripe or a membership platform). Pricing, billing intervals, refund windows,
              and cancellation terms will be disclosed at checkout and incorporated into these
              Terms by reference.
            </p>

            <h2>7. Third-party links and services</h2>
            <p>
              The Services may link to third-party websites, products, or providers. We do not
              control those third parties and are not responsible for their content, policies, or
              practices. Your use of any third-party service is at your own risk and subject to
              that third party&apos;s terms.
            </p>

            <h2>8. Disclaimers of warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY
              KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL
              BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY OUTCOME (HARVEST, FINANCIAL,
              HEALTH, OR OTHERWISE) WILL BE ACHIEVED. SEE OUR{' '}
              <a href="/disclaimers/">Disclaimers</a> page for category-specific notices.
            </p>

            <h2>9. Limitation of liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FARMSHARE USA AND ITS AFFILIATES,
              CONTRACTORS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES, DATA,
              GOODWILL, OR PRODUCTION, ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICES. OUR
              TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES WILL NOT EXCEED THE GREATER
              OF (A) THE AMOUNT YOU PAID US IN THE TWELVE MONTHS BEFORE THE CLAIM AROSE, OR (B)
              ONE HUNDRED U.S. DOLLARS ($100).
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold FarmShare USA harmless from any claim, demand, loss,
              or expense (including reasonable attorneys&apos; fees) arising out of your use of
              the Services, your violation of these Terms, or your violation of any rights of a
              third party.
            </p>

            <h2>11. Governing law and disputes</h2>
            <p>
              These Terms are governed by the laws of the State of <strong>[STATE]</strong>,
              without regard to its conflict-of-laws principles. Any dispute will be brought
              exclusively in the state or federal courts located in <strong>[COUNTY/CITY,
              STATE]</strong>, and you consent to that jurisdiction.
            </p>

            <h2>12. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. The "Last updated" date above will
              change. For material changes we will post a notice on the site. Your continued use
              of the Services after an update constitutes acceptance.
            </p>

            <h2>13. Contact</h2>
            <p>
              Questions about these Terms: <strong>[CONTACT EMAIL]</strong> —{' '}
              <strong>[LEGAL ENTITY NAME]</strong>, <strong>[MAILING ADDRESS]</strong>,{' '}
              <strong>[STATE]</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
