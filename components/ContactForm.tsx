'use client';

import { useState } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();

    if (!name || !email || !message) {
      setError('Please fill in your name, email, and a short message.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('That email address looks off — give it another try?');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="dir-empty" role="status" style={{ borderStyle: 'solid', borderColor: 'var(--gold)' }}>
        Thanks — we&apos;ve got your note. Expect a reply within two business days.
      </div>
    );
  }

  return (
    <form className="cf reveal d1" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="full">
        <label htmlFor="cf-topic">What&apos;s this about?</label>
        <select id="cf-topic" name="topic">
          <option>General question</option>
          <option>Co-op application</option>
          <option>Vendor application</option>
          <option>Homestead Design inquiry</option>
          <option>Press / media</option>
          <option>Health partner inquiry</option>
        </select>
      </div>
      <div className="full">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" required></textarea>
      </div>
      {error && (
        <div className="full" style={{ color: 'var(--clay)', fontFamily: 'JetBrains Mono, monospace', fontSize: 12.5 }}>
          {error}
        </div>
      )}
      <div className="actions">
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </div>
    </form>
  );
}
