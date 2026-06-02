'use client';

import { useEffect } from 'react';

// This route was renamed to /homestead-real-estate/.
// Keep the path live so old links don't 404 — client-side redirect on
// load, plus a visible "moved" message and link as the static fallback.
export default function HomesteadDesignRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/homestead-real-estate/');
    }
  }, []);

  return (
    <main>
      <section className="band" style={{ paddingTop: 'calc(var(--hdr) + 60px)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow center">Page moved</span>
          <h1 style={{ marginTop: 10 }}>This page has a new home.</h1>
          <p className="lede" style={{ margin: '14px auto 28px', maxWidth: 560 }}>
            Homestead Acquisition &amp; Design is now part of our broader{' '}
            <strong>Homestead Real Estate</strong> section. If you aren&apos;t redirected in a
            second, follow the link below.
          </p>
          <a
            href="/homestead-real-estate/"
            className="btn btn-primary"
            style={{ fontSize: 16, padding: '15px 28px' }}
          >
            Go to Homestead Real Estate
          </a>
        </div>
      </section>
    </main>
  );
}
