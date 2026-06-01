'use client';

import { useState } from 'react';
import { track } from '@/components/Analytics';

type Variant = 'inline' | 'card';

export function LeadCapture({
  variant = 'card',
  buttonLabel = 'Download Free',
  placeholder = 'you@email.com',
  finePrint = "No spam. Unsubscribe anytime. We'll send a 5-day starter series with it.",
  source = 'lead_magnet',
}: {
  variant?: Variant;
  buttonLabel?: string;
  placeholder?: string;
  finePrint?: string;
  source?: string;
}) {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      setMsg({ text: 'Please enter a valid email address.', ok: false });
      return;
    }
    track('lead_magnet_submit', { source });
    setMsg({ text: '✓ Check your inbox — the plan is on its way.', ok: true });
    setEmail('');
  };

  return (
    <>
      <form
        className="lead-form"
        onSubmit={submit}
        noValidate
        style={variant === 'inline' ? { maxWidth: 520 } : undefined}
      >
        <input
          type="email"
          placeholder={placeholder}
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          {buttonLabel}
        </button>
      </form>
      <div
        className="lead-msg"
        role="status"
        style={msg ? { color: msg.ok ? 'var(--gold)' : 'var(--clay)' } : undefined}
      >
        {msg?.text}
      </div>
      {finePrint && <p className="lead-fine">{finePrint}</p>}
    </>
  );
}
