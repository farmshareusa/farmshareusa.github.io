'use client';

import { useMemo, useState } from 'react';
import { VENDORS, VENDOR_CATS, type Vendor } from '@/data/vendors';

export function VendorDirectory() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<'all' | Vendor['category']>('all');
  const [certifiedOnly, setCertifiedOnly] = useState(false);

  const results = useMemo(() => {
    const qx = q.trim().toLowerCase();
    return VENDORS.filter((v) => {
      if (cat !== 'all' && v.category !== cat) return false;
      if (certifiedOnly && !v.certified) return false;
      if (!qx) return true;
      return (
        v.name.toLowerCase().includes(qx) ||
        v.city.toLowerCase().includes(qx) ||
        v.state.toLowerCase().includes(qx) ||
        v.desc.toLowerCase().includes(qx)
      );
    });
  }, [q, cat, certifiedOnly]);

  return (
    <div className="reveal">
      <div className="dir-toolbar">
        <input
          type="search"
          placeholder="Search vendors…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search vendors"
        />
        <select value={cat} onChange={(e) => setCat(e.target.value as 'all' | Vendor['category'])} aria-label="Category">
          <option value="all">All categories</option>
          {VENDOR_CATS.map((c) => (
            <option key={c.key} value={c.key}>{c.label}</option>
          ))}
        </select>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5 }}>
          <input
            type="checkbox"
            checked={certifiedOnly}
            onChange={(e) => setCertifiedOnly(e.target.checked)}
          />
          Certified only
        </label>
        <span className="count">{results.length} of {VENDORS.length} vendors</span>
      </div>

      {results.length === 0 ? (
        <div className="dir-empty">No matches — try a broader filter.</div>
      ) : (
        <div className="dir-grid">
          {results.map((v) => (
            <article key={v.id} className="dir-card">
              <div className="top">
                <svg aria-hidden="true"><use href="#mark" /></svg>
                <div>
                  <h4>{v.name}</h4>
                  <div className="loc">{v.city}, {v.state}</div>
                </div>
              </div>
              <p>{v.desc}</p>
              <div className="meta">
                <span className="chip c">{VENDOR_CATS.find((c) => c.key === v.category)?.label}</span>
                {v.certified && <span className="chip p">★ Certified</span>}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
