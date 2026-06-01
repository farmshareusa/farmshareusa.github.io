import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses — Transformation programs, not gardening videos',
  description:
    'From the flagship Food Independence Blueprint to single-system deep dives — programs that take you from idea to harvest.',
};

const COURSES = [
  {
    slug: '/courses/food-independence-blueprint/',
    cat: 'Flagship · 8 weeks',
    title: 'Food Independence Blueprint',
    desc: 'The complete program: from grocery-store dependence to a self-sufficient food system in 90 days. Includes garden, protein, water, and preservation.',
    img: '/images/Image_S10.png',
    price: 'From $99',
  },
  {
    slug: '#',
    cat: 'Foundations · 4 weeks',
    title: 'Backyard Bed Builder',
    desc: 'A weekend-by-weekend build of your first two raised beds, including soil sourcing, layout, and your first plant-out.',
    img: '/images/Image_S5.png',
    price: '$49',
  },
  {
    slug: '#',
    cat: 'Animals · 6 weeks',
    title: 'Chickens From Scratch',
    desc: 'Coop design, breed selection, predator-proofing, and a four-season feed plan for a six-bird suburban flock.',
    img: '/images/Image_S24.png',
    price: '$79',
  },
  {
    slug: '#',
    cat: 'Systems · 5 weeks',
    title: 'Rainwater & Off-Grid Water',
    desc: 'Catchment math, food-safe storage, drip irrigation, and a backup plan for when the well goes down.',
    img: '/images/Image_S26.png',
    price: '$89',
  },
  {
    slug: '#',
    cat: 'Preservation · 4 weeks',
    title: 'Pantry: The Year-Round Larder',
    desc: 'Canning, fermenting, dehydrating, root-cellaring. Build a pantry that survives a power outage and a bad season.',
    img: '/images/Image_S11.png',
    price: '$79',
  },
  {
    slug: '#',
    cat: 'Land Use · 6 weeks',
    title: 'One-to-Five Acre Master Plan',
    desc: 'A property-design course for the 1–5 acre suburban lot: zones, infrastructure, build order, and income paths.',
    img: '/images/Image_S15.png',
    price: '$149',
  },
];

export default function CoursesPage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/images/Image_S29.png" alt="" />
        <div className="grade"></div>
        <div className="wrap">
          <div className="ph-grid">
            <div className="reveal">
              <span className="eyebrow">Programs · Not videos</span>
              <h1>
                Buy transformation,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold-bright)', fontWeight: 420 }}>
                  not information.
                </em>
              </h1>
              <p className="lede">
                Every program here has the same shape: a sequenced curriculum, weekly office
                hours, and a peer cohort. You don&apos;t get more videos — you get a result.
              </p>
              <div className="cta-row">
                <a href="/courses/food-independence-blueprint/" className="btn btn-primary">
                  <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                  See the Flagship
                </a>
                <a href="#catalog" className="btn btn-secondary">Browse Catalog</a>
              </div>
            </div>
            <div className="ph-art reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Image_S10.png" alt="Designed micro-homestead with zones laid out" />
              <span className="plate">Plate IV — The Blueprint</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CATALOG ============== */}
      <section className="band" id="catalog">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The catalog</span>
            <h2 className="sec-title">Six programs. One throughline.</h2>
          </div>
          <div className="art-grid reveal d1">
            {COURSES.map((c) => (
              <article key={c.title} className="art-card">
                <div className="img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt="" />
                </div>
                <div className="body">
                  <span className="cat">{c.cat}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <a className="more" href={c.slug}>
                    {c.price} — Learn more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== MEMBER PERK ============== */}
      <section className="cta-strip">
        <div className="wrap">
          <div>
            <h3>Members get 30% off every program.</h3>
            <p>The Homesteader tier includes course access. Steward includes the flagship.</p>
          </div>
          <a href="/membership/" className="btn btn-primary" style={{ fontSize: 16, padding: '17px 30px' }}>
            See Membership
          </a>
        </div>
      </section>
    </main>
  );
}
