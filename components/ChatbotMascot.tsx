'use client';

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import Image from 'next/image';
import qaData from '@/data/chatbot-qa.json';
import type { ChatbotQA, ChatbotQAItem } from '@/data/chatbot-qa.types';
import { findAnswer } from '@/lib/chatMatch';
import { track } from '@/components/Analytics';
import { isValidEmail, submitLead } from '@/lib/leadSubmit';

const QA = qaData as ChatbotQA;

const TYPING_DELAY_MS = 600;
const LEAD_NUDGE_AFTER = 3; // user-message count

const PLAN_INTENT_RE = /\b(start|begin|first[- ]?step|30[- ]?day|free[- ]?plan|get[- ]?started|backyard plan)\b/i;

interface BotMessage {
  id: string;
  role: 'bot';
  text: string;
  cta?: { label: string; href: string; eventId?: string };
  showLead?: boolean;
  suggestions?: ChatbotQAItem[];
}

interface UserMessage {
  id: string;
  role: 'user';
  text: string;
}

type ChatMessage = BotMessage | UserMessage;

const QUICK_REPLIES: { label: string; query: string }[] = [
  { label: 'How do I get started?', query: 'how do I get started' },
  { label: 'Send me the free 30-Day Plan', query: '__lead__' },
  { label: 'How does membership work?', query: 'how does membership work' },
  { label: 'Show me the courses', query: 'show me the courses' },
  { label: 'Find a co-op near me', query: 'find a co-op near me' },
  { label: 'How do I contact you?', query: 'how do I contact you' },
];

function categoryCTA(item: ChatbotQAItem): { label: string; href: string; eventId: string } | null {
  const cat = item.category.toLowerCase();
  if (cat.includes('membership')) {
    return { label: 'See membership →', href: '/membership/', eventId: 'membership' };
  }
  if (cat.includes('course')) {
    return {
      label: 'Explore the Blueprint →',
      href: '/courses/food-independence-blueprint/',
      eventId: 'course_blueprint',
    };
  }
  if (cat.includes('co-op')) {
    return { label: 'Find a co-op →', href: '/co-ops/', eventId: 'coops' };
  }
  return null;
}

function makeId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function isPlanIntent(query: string, matched: ChatbotQAItem | null): boolean {
  if (matched && matched.category.toLowerCase().includes('getting started')) return true;
  return PLAN_INTENT_RE.test(query);
}

function Decoration({ kind = 'fleuron' }: { kind?: 'fleuron' | 'sprig' }) {
  return (
    <span className="chatbot-divider" aria-hidden="true">
      <svg viewBox={kind === 'fleuron' ? '0 0 64 26' : '0 0 34 200'}>
        <use href={`#${kind}`} />
      </svg>
    </span>
  );
}

export function ChatbotMascot() {
  const headingId = useId();
  const subId = useId();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userTurnCount, setUserTurnCount] = useState(0);
  const leadShownRef = useRef(false);
  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const transcriptRef = useRef<HTMLDivElement | null>(null);
  const reducedMotionRef = useRef(false);

  // Mount + read reduced-motion preference (SSR-safe)
  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;
    if (typeof window.matchMedia === 'function') {
      reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }, []);

  // Scroll-reveal: launcher + callout stay hidden while the hero (top ~60%
  // of the first screen) is in view. Fade in once the visitor scrolls past
  // that threshold; fade out again if they scroll back to the very top.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const check = () => {
      const threshold = window.innerHeight * 0.6;
      setRevealed(window.scrollY > threshold);
    };
    check(); // handle page loads that are already scrolled
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  // Auto-scroll transcript on new messages / typing changes
  useEffect(() => {
    const el = transcriptRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  // Focus the input when the panel opens; restore focus to the launcher on close
  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  const openPanel = useCallback(() => {
    setIsOpen(true);
    track('chatbot_open');
    setMessages((prev) => {
      if (prev.length > 0) return prev;
      return [
        {
          id: makeId('m'),
          role: 'bot',
          text:
            "Hi, I'm Elizabeth — your FarmShare USA guide. Ask me anything about growing food, joining a co-op, or the free 30-Day Plan. I'll point you the right way.",
        },
      ];
    });
  }, []);

  const closePanel = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  }, []);

  const appendMessages = useCallback((toAdd: ChatMessage[]) => {
    setMessages((prev) => [...prev, ...toAdd]);
  }, []);

  const respondTo = useCallback(
    (rawQuery: string) => {
      const query = rawQuery.trim();
      if (!query) return;

      const userMsg: UserMessage = { id: makeId('u'), role: 'user', text: query };
      appendMessages([userMsg]);

      const respond = () => {
        const { best, suggestions } = findAnswer(query, QA.qa);
        const planIntent = isPlanIntent(query, best);
        const shouldNudgeLead =
          !leadShownRef.current &&
          (planIntent ||
            // gentle nudge after N turns when not yet shown
            userTurnCount + 1 >= LEAD_NUDGE_AFTER);

        if (best) {
          const cta = categoryCTA(best);
          const bot: BotMessage = {
            id: makeId('b'),
            role: 'bot',
            text: best.answer,
            cta:
              cta
                ? cta
                : best.link
                ? { label: 'Learn more →', href: best.link, eventId: `qa_${best.id}` }
                : undefined,
            showLead: shouldNudgeLead,
          };
          if (shouldNudgeLead) leadShownRef.current = true;
          appendMessages([bot]);
          track('chatbot_question', { matched: best.id, category: best.category });
        } else {
          const bot: BotMessage = {
            id: makeId('b'),
            role: 'bot',
            text: QA.meta.fallback,
            cta: { label: 'Contact us →', href: QA.meta.fallbackLink, eventId: 'fallback_contact' },
            suggestions: suggestions.length > 0 ? suggestions : undefined,
            showLead: shouldNudgeLead,
          };
          if (shouldNudgeLead) leadShownRef.current = true;
          appendMessages([bot]);
          track('chatbot_question', { matched: 'fallback' });
        }
        setIsTyping(false);
      };

      const reduced = reducedMotionRef.current;
      if (reduced) {
        respond();
      } else {
        setIsTyping(true);
        window.setTimeout(respond, TYPING_DELAY_MS);
      }

      setUserTurnCount((n) => n + 1);
    },
    [appendMessages, userTurnCount],
  );

  const triggerLeadCard = useCallback(() => {
    if (leadShownRef.current) return;
    leadShownRef.current = true;
    appendMessages([
      {
        id: makeId('b'),
        role: 'bot',
        text:
          "Happy to send you the free 30-Day Self-Sufficient Backyard Plan — drop your email and I'll get it on its way.",
        showLead: true,
      },
    ]);
  }, [appendMessages]);

  const handleChip = useCallback(
    (query: string) => {
      if (query === '__lead__') {
        appendMessages([{ id: makeId('u'), role: 'user', text: 'Send me the free 30-Day Plan' }]);
        setUserTurnCount((n) => n + 1);
        triggerLeadCard();
        return;
      }
      respondTo(query);
    },
    [appendMessages, respondTo, triggerLeadCard],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const v = inputValue.trim();
      if (!v) return;
      setInputValue('');
      respondTo(v);
    },
    [inputValue, respondTo],
  );

  // Focus trap inside panel + Esc to close
  const handlePanelKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        closePanel();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [closePanel],
  );

  const headerLabel = useMemo(() => 'Ask Elizabeth', []);

  if (!mounted) return null;

  return (
    <div className={`chatbot-root ${revealed ? 'is-revealed' : 'is-hidden'}`} aria-live="off">
      {/* CALL-OUT — persistent invite to click Elizabeth */}
      {!isOpen && (
        <button
          type="button"
          className="chatbot-callout"
          aria-label="Open chat with Elizabeth"
          onClick={openPanel}
        >
          Ask me anything!
        </button>
      )}

      {/* LAUNCHER — Elizabeth IS the button (no circle) */}
      <button
        ref={launcherRef}
        type="button"
        className={`chatbot-launcher${isOpen ? ' is-open' : ''}`}
        aria-label="Open chat with Elizabeth"
        aria-expanded={isOpen}
        aria-controls={headingId}
        onClick={() => (isOpen ? closePanel() : openPanel())}
      >
        <span className="chatbot-launcher-glow" aria-hidden="true" />
        <span className="chatbot-launcher-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/mascot-elizabeth-launcher.png" alt="" />
        </span>
      </button>

      {/* PANEL */}
      {isOpen && (
        <div
          ref={panelRef}
          className="chatbot-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
          aria-describedby={subId}
          onKeyDown={handlePanelKeyDown}
        >
          <header className="chatbot-panel-header">
            <span className="chatbot-panel-avatar" aria-hidden="true">
              <Image
                src="/images/mascot-elizabeth-avatar.png"
                alt=""
                width={64}
                height={64}
              />
            </span>
            <span className="chatbot-panel-titles">
              <span id={headingId} className="chatbot-panel-title">
                {headerLabel}
              </span>
              <span id={subId} className="chatbot-panel-sub">
                Your FarmShare USA guide
              </span>
            </span>
            <button
              type="button"
              className="chatbot-panel-close"
              aria-label="Close chat"
              onClick={closePanel}
            >
              ×
            </button>
          </header>

          <div
            ref={transcriptRef}
            className="chatbot-transcript"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.length <= 1 && (
              <div className="chatbot-portrait" aria-hidden="true">
                <Image
                  src="/images/mascot-elizabeth-full.png"
                  alt=""
                  width={400}
                  height={450}
                  priority={false}
                />
              </div>
            )}
            {messages.map((m, idx) => (
              <ChatBubble key={m.id} msg={m} prev={messages[idx - 1]} onChip={handleChip} />
            ))}
            {isTyping && (
              <div className="chatbot-msg is-bot chatbot-typing" aria-label="Elizabeth is typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            {messages.length <= 1 && !isTyping && (
              <div className="chatbot-chips-wrap">
                <Decoration kind="fleuron" />
                <p className="chatbot-chips-label">Try one of these:</p>
                <div className="chatbot-chips" role="list">
                  {QUICK_REPLIES.map((c) => (
                    <button
                      key={c.label}
                      type="button"
                      className="chatbot-chip"
                      role="listitem"
                      onClick={() => handleChip(c.query)}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <label htmlFor="chatbot-input" className="visually-hidden">
              Ask Elizabeth a question
            </label>
            <input
              ref={inputRef}
              id="chatbot-input"
              className="chatbot-input"
              type="text"
              placeholder="Ask Elizabeth a question…"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoComplete="off"
              maxLength={240}
            />
            <button
              type="submit"
              className="chatbot-send"
              aria-label="Send message"
              disabled={!inputValue.trim()}
            >
              <svg viewBox="0 0 100 110" aria-hidden="true">
                <use href="#mark" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function ChatBubble({
  msg,
  prev,
  onChip,
}: {
  msg: ChatMessage;
  prev: ChatMessage | undefined;
  onChip: (query: string) => void;
}) {
  if (msg.role === 'user') {
    return <div className="chatbot-msg is-user">{msg.text}</div>;
  }

  const showDivider = !prev || prev.role !== 'bot';

  return (
    <>
      {showDivider && <Decoration kind="fleuron" />}
      <div className="chatbot-msg is-bot">{msg.text}</div>
      {msg.cta && (
        <a
          className="chatbot-cta"
          href={msg.cta.href}
          onClick={() => track('chatbot_cta_click', { id: msg.cta?.eventId, href: msg.cta?.href })}
        >
          {msg.cta.label}
        </a>
      )}
      {msg.suggestions && msg.suggestions.length > 0 && (
        <div className="chatbot-suggest">
          <p className="chatbot-suggest-label">Did you mean…</p>
          <div className="chatbot-chips" role="list">
            {msg.suggestions.map((s) => (
              <button
                key={s.id}
                type="button"
                className="chatbot-chip is-suggest"
                role="listitem"
                onClick={() => onChip(s.question)}
              >
                {s.question}
              </button>
            ))}
          </div>
        </div>
      )}
      {msg.showLead && <InlineLead />}
    </>
  );
}

function InlineLead() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    const v = email.trim();
    if (!isValidEmail(v)) {
      setStatus({ ok: false, message: 'Please enter a valid email address.' });
      return;
    }
    setSubmitting(true);
    const result = await submitLead(v, 'chatbot_30day');
    setStatus(result);
    if (result.ok) {
      setEmail('');
      track('chatbot_lead_submit', { source: 'chatbot_30day' });
    }
    setSubmitting(false);
  };

  return (
    <div className="chatbot-inline-lead">
      <p className="chatbot-inline-lead-title">Free 30-Day Self-Sufficient Backyard Plan</p>
      <p className="chatbot-inline-lead-sub">
        Drop your email and I&apos;ll send it over — plus a short 5-day starter series.
      </p>
      <form onSubmit={submit} noValidate>
        <input
          type="email"
          aria-label="Email address"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={submitting || status?.ok === true}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitting || status?.ok === true}
        >
          {status?.ok ? 'Sent ✓' : 'Send it'}
        </button>
      </form>
      {status && (
        <p
          className="chatbot-inline-lead-msg"
          role="status"
          style={{ color: status.ok ? 'var(--gold)' : 'var(--clay)' }}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
