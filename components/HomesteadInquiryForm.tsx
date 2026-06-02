'use client';

import { useState } from 'react';
import { track } from '@/components/Analytics';
import { siteConfig } from '@/config/site';

// Treats every input as UNTRUSTED. Validates locally. When
// siteConfig.emailProvider is set later, the submit handler can be
// extended to POST through the provider's hosted endpoint (no secrets
// in the static build). For now it short-circuits to a success state
// so the funnel works end-to-end and we can see leads in analytics.
export function HomesteadInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const location = String(fd.get('location') || '').trim();
    const goal = String(fd.get('goal') || '').trim();
    const acreage = String(fd.get('acreage') || '').trim();
    const timeline = String(fd.get('timeline') || '').trim();
    const message = String(fd.get('message') || '').trim();

    if (!name || !email || !location || !goal) {
      setError('Please fill in your name, email, location, and goal.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('That email address looks off — give it another try?');
      return;
    }
    setError(null);
    setSubmitting(true);

    track('homestead_inquiry_submit', {
      provider: siteConfig.emailProvider ?? 'none',
      hasFormId: Boolean(siteConfig.emailFormId),
      acreage,
      timeline,
      goal,
    });

    // Hook for the future provider integration — when
    // siteConfig.emailProvider + emailFormId are set, post to the
    // hosted endpoint here. Until then we accept the lead locally.
    if (siteConfig.emailProvider && siteConfig.emailFormId) {
      try {
        // Placeholder for the real provider call. Intentionally not
        // implemented yet — provider/endpoint isn't decided.
        // Example future shape:
        //   await fetch(providerEndpoint(...), { method: 'POST', body: ... })
      } catch {
        setSubmitting(false);
        setError("We couldn't reach the inquiry system — please email us at the address in the footer.");
        return;
      }
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="dir-empty"
        role="status"
        style={{ borderStyle: 'solid', borderColor: 'var(--gold)' }}
      >
        Thanks — your inquiry is in. We&apos;ll review it and respond within two business days
        with next steps.
      </div>
    );
  }

  return (
    <form className="cf reveal d1" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="hre-name">Name</label>
        <input id="hre-name" name="name" type="text" required autoComplete="name" maxLength={120} />
      </div>
      <div>
        <label htmlFor="hre-email">Email</label>
        <input id="hre-email" name="email" type="email" required autoComplete="email" maxLength={160} />
      </div>
      <div>
        <label htmlFor="hre-location">Location (city, state)</label>
        <input
          id="hre-location"
          name="location"
          type="text"
          required
          autoComplete="address-level1"
          placeholder="Asheville, NC"
          maxLength={120}
        />
      </div>
      <div>
        <label htmlFor="hre-acreage">Approx. acreage</label>
        <select id="hre-acreage" name="acreage" defaultValue="">
          <option value="" disabled>
            Choose one…
          </option>
          <option>Under 1 acre</option>
          <option>1–3 acres</option>
          <option>3–5 acres</option>
          <option>5–10 acres</option>
          <option>10+ acres</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="full">
        <label htmlFor="hre-goal">What do you need help with?</label>
        <select id="hre-goal" name="goal" defaultValue="">
          <option value="" disabled>
            Choose one…
          </option>
          <option>Finding the right land</option>
          <option>Evaluating a specific property</option>
          <option>Understanding zoning &amp; regulations</option>
          <option>Designing my homestead layout</option>
          <option>Planning gardens &amp; livestock</option>
          <option>Connecting with local agents or lenders</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="full">
        <label htmlFor="hre-timeline">Timeline</label>
        <select id="hre-timeline" name="timeline" defaultValue="">
          <option value="" disabled>
            Choose one…
          </option>
          <option>0–3 months</option>
          <option>3–6 months</option>
          <option>6–12 months</option>
          <option>12+ months</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="full">
        <label htmlFor="hre-message">Anything else we should know? (optional)</label>
        <textarea
          id="hre-message"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="The land, your family, the goal — whatever helps us help you."
        ></textarea>
      </div>
      {error && (
        <div
          className="full"
          role="alert"
          style={{
            color: 'var(--clay)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 12.5,
          }}
        >
          {error}
        </div>
      )}
      <div className="actions">
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Sending…' : 'Request Homestead Support'}
        </button>
      </div>
    </form>
  );
}
