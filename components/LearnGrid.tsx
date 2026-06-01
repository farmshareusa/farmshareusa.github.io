'use client';

import { useMemo, useState } from 'react';
import { ARTICLES, CLUSTERS, type ClusterKey } from '@/data/learn';

export function LearnGrid() {
  const [active, setActive] = useState<'all' | ClusterKey>('all');

  const results = useMemo(
    () => (active === 'all' ? ARTICLES : ARTICLES.filter((a) => a.cluster === active)),
    [active]
  );

  return (
    <>
      <div className="cluster-nav reveal">
        <button className={active === 'all' ? 'on' : ''} onClick={() => setActive('all')}>
          All
        </button>
        {CLUSTERS.map((c) => (
          <button
            key={c.key}
            className={active === c.key ? 'on' : ''}
            onClick={() => setActive(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="art-grid reveal d1">
        {results.map((a) => (
          <article key={a.title} className="art-card">
            <div className="img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.img} alt="" />
            </div>
            <div className="body">
              <span className="cat">{CLUSTERS.find((c) => c.key === a.cluster)?.label}</span>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <a className="more" href={a.slug}>Read article →</a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
