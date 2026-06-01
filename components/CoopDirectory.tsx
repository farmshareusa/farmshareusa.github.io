'use client';

import { useMemo, useState } from 'react';
import { COOPS, STATES, COOP_TYPES, type Coop } from '@/data/coops';

const ROLE_LABEL: Record<Coop['role'], string> = {
  provider: 'Provider',
  consumer: 'Consumer',
  hybrid: 'Hybrid',
};

export function CoopDirectory() {
  const [q, setQ] = useState('');
  const [role, setRole] = useState<'all' | Coop['role']>('all');
  const [state, setState] = useState('all');
  const [type, setType] = useState('all');

  const results = useMemo(() => {
    const qx = q.trim().toLowerCase();
    return COOPS.filter((c) => {
      if (role !== 'all' && c.role !== role) return false;
      if (state !== 'all' && c.state !== state) return false;
      if (type !== 'all' && !c.type.includes(type)) return false;
      if (!qx) return true;
      return (
        c.name.toLowerCase().includes(qx) ||
        c.city.toLowerCase().includes(qx) ||
        c.state.toLowerCase().includes(qx) ||
        c.zip.includes(qx) ||
        c.desc.toLowerCase().includes(qx) ||
        c.type.some((t) => t.includes(qx))
      );
    });
  }, [q, role, state, type]);

  return (
    <div className="reveal">
      <div className="dir-toolbar">
        <input
          type="search"
          placeholder="Search by ZIP, city, name, or what you want…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search co-ops"
        />
        <select value={role} onChange={(e) => setRole(e.target.value as 'all' | Coop['role'])} aria-label="Role">
          <option value="all">Any role</option>
          <option value="provider">Provider</option>
          <option value="consumer">Consumer</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <select value={state} onChange={(e) => setState(e.target.value)} aria-label="State">
          <option value="all">All states</option>
          {STATES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Type">
          <option value="all">All types</option>
          {COOP_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <span className="count">{results.length} of {COOPS.length} co-ops</span>
      </div>

      {results.length === 0 ? (
        <div className="dir-empty">
          No matches yet — adjust your filters, or{' '}
          <a href="#apply" style={{ color: 'var(--clay)', fontWeight: 600 }}>
            start a co-op in your area →
          </a>
        </div>
      ) : (
        <div className="dir-grid">
          {results.map((c) => (
            <article key={c.id} className="dir-card">
              <div className="top">
                <svg aria-hidden="true"><use href="#mark" /></svg>
                <div>
                  <h4>{c.name}</h4>
                  <div className="loc">
                    {c.city}, {c.state} · {c.zip}
                  </div>
                </div>
              </div>
              <p>{c.desc}</p>
              <div className="meta">
                <span className={`chip ${c.role === 'provider' ? 'p' : c.role === 'consumer' ? 'c' : ''}`}>
                  {ROLE_LABEL[c.role]}
                </span>
                <span className="chip">{c.members} members</span>
                <span className="chip">{c.status === 'open' ? 'Joining open' : 'Waitlist'}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
