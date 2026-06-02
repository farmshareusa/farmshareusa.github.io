/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimers',
  description:
    'Important disclaimers covering education, farming, food safety, real estate, affiliate links, paid memberships, and health — what FarmShare USA does and does not promise.',
};

export default function DisclaimersPage() {
  return (
    <main>
      <section className="page-hero bone">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow center">Legal</span>
          <h1 style={{ marginTop: 10 }}>Disclaimers</h1>
          <p className="lede" style={{ margin: '14px auto 0', maxWidth: 640 }}>
            What FarmShare USA does — and does not — promise. Please read the section that
            matches what you&apos;re using us for.
          </p>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="legal-notice">
            <strong>Starter template — not legal advice.</strong> This document is a plain-English
            starter provided for convenience. FarmShare USA should have a licensed attorney review
            and finalize these Disclaimers before relying on them. Replace every <strong>[PLACEHOLDER]</strong>
            with the final value.
          </div>

          <div className="legal-prose">
            <p className="legal-meta">Last updated: [YYYY-MM-DD]</p>

            <p>
              These disclaimers apply to all content, programs, and services offered by{' '}
              <strong>[LEGAL ENTITY NAME]</strong> ("FarmShare USA"). They are in addition to our{' '}
              <a href="/terms/">Terms of Service</a> and <a href="/privacy/">Privacy Policy</a>.
            </p>

            <h2>1. Educational content</h2>
            <p>
              All articles, courses, guides, videos, newsletters, live streams, and community
              discussions provided by FarmShare USA are for <strong>educational and informational
              purposes only</strong>. They are not a substitute for professional advice and do not
              create any professional relationship between you and FarmShare USA. Your situation
              is unique — apply judgment, do your own research, and consult qualified
              professionals before acting.
            </p>

            <h2>2. Farming, gardening, and livestock</h2>
            <p>
              Growing food and keeping livestock involve real-world risks: weather, pests,
              disease, predators, equipment, and regulation. Practices we describe may not be
              appropriate for your climate, soil, zoning, water rights, animal welfare laws, or
              local ordinances.
            </p>
            <ul>
              <li><strong>Follow your local regulations</strong> — including zoning, HOA rules, livestock and slaughter laws, water-use rules, and pesticide regulations.</li>
              <li><strong>Consult qualified professionals</strong> — a local extension office, master gardener, agronomist, or licensed veterinarian — before making decisions about your land, plants, or animals.</li>
              <li><strong>Veterinary care</strong>: nothing on FarmShare USA is veterinary advice. If an animal is sick or injured, contact a licensed veterinarian.</li>
            </ul>

            <h2>3. Food preparation, preservation, and canning</h2>
            <p>
              <strong>Food safety warning.</strong> Improper food handling, canning, fermentation,
              dehydrating, curing, or preservation can cause serious illness or death (including
              botulism). FarmShare USA content related to food preservation is educational only
              and is not a substitute for tested, current guidance.
            </p>
            <ul>
              <li>Follow <strong>tested recipes and current USDA / National Center for Home Food Preservation guidance</strong> for canning, pickling, fermenting, smoking, curing, and dehydrating.</li>
              <li>Use validated equipment, validated processing times, and tested pH/water-activity targets.</li>
              <li>When in doubt, throw it out. Do not consume food that smells, looks, or tastes wrong.</li>
            </ul>
            <p>
              FarmShare USA is not responsible for outcomes resulting from your food preparation
              or preservation decisions.
            </p>

            <h2>4. Real estate and land services</h2>
            <p>
              <strong>FarmShare USA is not a licensed real estate brokerage.</strong> Our
              homestead-design, land-buying, and "find your land" content is educational. We do
              not list, market, sell, or broker real property. We do not provide real-estate
              brokerage services, legal advice on transactions, title services, or financing
              advice.
            </p>
            <p>
              Where we connect you with actual real-estate transactions or services, we do so
              through <strong>separately disclosed licensed real-estate professionals</strong> in
              the applicable jurisdiction; those professionals are independently responsible for
              their services and disclosures. Nothing on this site is intended as a solicitation
              for real-estate brokerage services in any jurisdiction where such solicitation would
              be unlawful or require a license we do not hold.
            </p>

            <h2>5. Affiliate relationships (FTC disclosure)</h2>
            <p>
              <strong>Some links on this site are affiliate links.</strong> That means if you
              click a link to a product, tool, seed company, course, book, equipment vendor, or
              other partner and make a purchase, FarmShare USA may earn a commission — at no
              additional cost to you. We only recommend tools, products, and partners we believe
              in. Affiliate revenue helps fund the free education and community.
            </p>
            <p>
              This disclosure is intended to comply with the U.S. Federal Trade Commission&apos;s
              16 CFR Part 255 endorsement guidelines.
            </p>

            <h2>6. Paid memberships, courses, and programs</h2>
            <p>
              Paid offerings — including any future membership tiers, courses (such as the Food
              Independence Blueprint), workshops, events, or consulting — provide access to
              education, community, and resources. They do <strong>not guarantee</strong>:
            </p>
            <ul>
              <li>A specific yield, harvest, or income.</li>
              <li>Acceptance into a co-op or vendor program.</li>
              <li>Specific business, financial, or lifestyle outcomes.</li>
              <li>Results that match testimonials shown on the site, which reflect individual experience and are not typical.</li>
            </ul>
            <p>
              Your results depend on your effort, situation, climate, market, and many factors
              outside FarmShare USA&apos;s control. Refund and cancellation terms will be
              disclosed at checkout.
            </p>

            <h2>7. Health and wellness</h2>
            <p>
              FarmShare USA content related to nutrition, herbalism, wellness, fitness, foraging,
              or related topics — including any content under "FarmShare USA Health" — is{' '}
              <strong>not medical advice</strong>. Nothing on this site is intended to diagnose,
              treat, cure, or prevent any disease.
            </p>
            <ul>
              <li>Consult a qualified, licensed healthcare provider before changing your diet, starting a fitness program, foraging or consuming wild plants, using herbs or supplements, or making any decision that could affect your health.</li>
              <li>Statements about products, herbs, supplements, or partner offerings have not been evaluated by the FDA.</li>
              <li>If you are pregnant, nursing, immunocompromised, taking medication, or have a medical condition, talk to your provider first.</li>
            </ul>

            <h2>8. Contact</h2>
            <p>
              Questions about these disclaimers: <strong>[CONTACT EMAIL]</strong> —{' '}
              <strong>[LEGAL ENTITY NAME]</strong>, <strong>[STATE]</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
