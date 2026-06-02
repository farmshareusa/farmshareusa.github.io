/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Guidelines',
  description:
    'How we treat each other inside the FarmShare USA community — plain rules for respect, safety, and a useful conversation.',
};

export default function CommunityGuidelinesPage() {
  return (
    <main>
      <section className="page-hero bone">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow center">Legal · Conduct</span>
          <h1 style={{ marginTop: 10 }}>Community Guidelines</h1>
          <p className="lede" style={{ margin: '14px auto 0', maxWidth: 640 }}>
            How we treat each other inside FarmShare USA — short, plain, and enforced.
          </p>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="legal-notice">
            <strong>Starter template — not legal advice.</strong> This document is a plain-English
            starter provided for convenience. FarmShare USA should have a licensed attorney review
            and finalize these Community Guidelines before relying on them. Replace every <strong>[PLACEHOLDER]</strong>
            with the final value.
          </div>

          <div className="legal-prose">
            <p className="legal-meta">Last updated: [YYYY-MM-DD]</p>

            <p>
              The FarmShare community — local circles, forums, group chats, live streams, comment
              sections, and events run by <strong>[LEGAL ENTITY NAME]</strong> — exists to help
              people grow food, build resilient systems, and connect locally. These guidelines
              keep it useful for everyone. By participating in any FarmShare USA community space,
              you agree to follow them, along with our <a href="/terms/">Terms of Service</a>.
            </p>

            <h2>1. Be respectful</h2>
            <ul>
              <li>Treat other members the way you&apos;d want to be treated. Disagree with the idea, not the person.</li>
              <li>Assume good faith. Many of us are new to this.</li>
              <li>Keep political and ideological rants out of the community. Independence, not ideology.</li>
            </ul>

            <h2>2. No harassment, hate, or threats</h2>
            <ul>
              <li>No personal attacks, slurs, or harassment of any member.</li>
              <li>No content that targets people based on race, ethnicity, national origin, religion, sex, gender identity, sexual orientation, disability, or age.</li>
              <li>No threats of violence — to people, animals, or property.</li>
              <li>No doxxing. Do not post anyone&apos;s private personal information without consent.</li>
            </ul>

            <h2>3. No spam, no scams, no self-promo dumps</h2>
            <ul>
              <li>No unsolicited DMs selling courses, programs, supplements, or coaching to other members.</li>
              <li>No copy-pasted promo blasts. Genuine recommendations in context are fine; spam is not.</li>
              <li>No MLM recruitment, pyramid schemes, or "make money fast" pitches.</li>
              <li>No affiliate-link spam. Disclose any affiliate relationship plainly when sharing a link.</li>
            </ul>

            <h2>4. No harmful or illegal content</h2>
            <ul>
              <li>No content that is illegal where you or your audience are located.</li>
              <li>No instructions or encouragement for self-harm, dangerous misuse of food/medicine, or harm to others.</li>
              <li>No sexual content. No content involving minors that is in any way inappropriate.</li>
              <li>No content that infringes someone else&apos;s copyright, trademark, or other rights.</li>
            </ul>

            <h2>5. Safety-sensitive topics</h2>
            <p>
              Some topics — canning and food preservation, raw dairy, foraging, livestock
              slaughter, herbal medicine, well water, firearms used in homestead contexts — are
              high-stakes. When you discuss them:
            </p>
            <ul>
              <li>Be specific about your method, equipment, and source.</li>
              <li>Link to tested guidance (e.g. USDA / National Center for Home Food Preservation) when relevant.</li>
              <li>Don&apos;t give medical advice. Don&apos;t give veterinary advice. Tell people to consult a qualified professional.</li>
              <li>Follow your local laws.</li>
            </ul>

            <h2>6. Your content, your responsibility</h2>
            <p>
              You are responsible for what you post. Don&apos;t share information you don&apos;t
              have the right to share. Don&apos;t post other members&apos; private messages
              without consent. Don&apos;t pass off someone else&apos;s work as your own.
            </p>

            <h2>7. Moderation and enforcement</h2>
            <p>
              FarmShare USA reserves the right, in its sole discretion, to:
            </p>
            <ul>
              <li>Remove any post, comment, or message that violates these guidelines.</li>
              <li>Warn, mute, suspend, or permanently remove any member who repeatedly or seriously violates them.</li>
              <li>Cooperate with law enforcement when content involves illegal activity, credible threats, or imminent harm.</li>
              <li>Update these guidelines as the community grows.</li>
            </ul>
            <p>
              We try to be fair, but we will err on the side of protecting the community over
              protecting any single account. Moderation decisions are final.
            </p>

            <h2>8. Reporting</h2>
            <p>
              To report a violation, use the in-product report tool when available, or email{' '}
              <strong>[CONTACT EMAIL]</strong> with a link to the content and a short description.
            </p>

            <h2>9. Changes</h2>
            <p>
              We may update these guidelines as the community grows. Material changes will be
              announced inside the community. Continued participation after an update means you
              accept the new version.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
