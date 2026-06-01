'use client';

import { useState } from 'react';

type Tier = {
  name: string;
  monthly: number;
  annual: number;
  desc: string;
  cta: string;
  featured?: boolean;
  badge?: string;
  features?: string[];
};

const DEFAULT_TIERS: Tier[] = [
  {
    name: 'Free',
    monthly: 0,
    annual: 0,
    desc: 'The weekly almanac + the co-op directory.',
    cta: 'Join Free',
    features: [
      'Weekly almanac newsletter',
      'Co-op directory access',
      'Free 30-Day Plan',
      'Community read-only',
    ],
  },
  {
    name: 'Grower',
    monthly: 19,
    annual: 15,
    desc: 'Full course library, guides, and the member forum.',
    cta: 'Choose Grower',
    features: [
      'Everything in Free',
      'Full course library',
      'Member forum + groups',
      'Seasonal planting playbooks',
      'Weekly office hours',
    ],
  },
  {
    name: 'Homesteader',
    monthly: 59,
    annual: 49,
    desc: 'Land & plot templates, live workshops, co-op toolkit.',
    cta: 'Become Founding',
    featured: true,
    badge: 'Founding Member',
    features: [
      'Everything in Grower',
      'Land + plot design templates',
      'Live workshops monthly',
      'Co-op founder toolkit',
      'Certified Member badge',
      '30% off all programs',
    ],
  },
  {
    name: 'Steward',
    monthly: 199,
    annual: 159,
    desc: '1:1 homestead design and vendor introductions.',
    cta: 'Apply',
    features: [
      'Everything in Homesteader',
      '1:1 homestead consult (90 min)',
      'Personalized plot blueprint',
      'Direct vendor introductions',
      'Quarterly group retreats',
    ],
  },
];

export function MembershipTiers({ tiers = DEFAULT_TIERS, withFeatures = false }: { tiers?: Tier[]; withFeatures?: boolean }) {
  const [yr, setYr] = useState(false);

  return (
    <>
      <div className="mem-toggle reveal" style={{ marginBottom: 30 }}>
        <button className={yr ? '' : 'on'} onClick={() => setYr(false)} type="button">
          Monthly
        </button>
        <button className={yr ? 'on' : ''} onClick={() => setYr(true)} type="button">
          Annual · save 20%
        </button>
      </div>
      <div className="mem-grid">
        {tiers.map((t, i) => {
          const price = yr ? t.annual : t.monthly;
          return (
            <div key={t.name} className={`tier reveal ${t.featured ? 'feat' : ''} d${i}`}>
              {t.badge && <div className="badge">{t.badge}</div>}
              <div className="nm">{t.name}</div>
              <div className="amt">
                {price === 0 ? (
                  <>$0</>
                ) : (
                  <>
                    <span>$</span>
                    <b>{price}</b>
                    <span>/mo</span>
                  </>
                )}
              </div>
              <div className="desc">{t.desc}</div>
              {withFeatures && t.features && (
                <ul className="tier-feats">
                  {t.features.map((f) => (
                    <li key={f}>
                      <svg aria-hidden="true">
                        <use href="#check" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              <a className={`btn ${t.featured ? 'btn-primary' : 'btn-secondary'}`}>{t.cta}</a>
            </div>
          );
        })}
      </div>
    </>
  );
}
