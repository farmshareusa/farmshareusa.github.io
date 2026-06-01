'use client';

import { useEffect } from 'react';

/**
 * Global interactions that should run on every page:
 * - sticky header scroll state
 * - scroll-reveal animations
 * - footer newsletter submit
 * - mobile burger menu
 * - pollen particles in any [data-pollen] container
 * - count-up for any [data-count] number
 */
export function SiteClient() {
  useEffect(() => {
    const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];

    // sticky header
    const hdr = document.getElementById('hdr');
    const onScroll = () => {
      if (!hdr) return;
      const y = window.scrollY;
      hdr.classList.toggle('scrolled', y > 40);
      hdr.classList.toggle('hero-mode', y < 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    // pollen
    document.querySelectorAll<HTMLElement>('[data-pollen]').forEach((box) => {
      if (RM) return;
      if (box.dataset.pollenInit === '1') return;
      box.dataset.pollenInit = '1';
      const w = box.clientWidth || 600;
      let n = parseInt(box.dataset.pollen || '0', 10);
      if (!n) n = Math.max(10, Math.round(w / 34));
      for (let i = 0; i < n; i++) {
        const s = document.createElement('span');
        const sz = 1.5 + Math.random() * 4;
        s.style.cssText =
          `left:${Math.random() * 100}%;bottom:${Math.random() * 60}%;width:${sz}px;height:${sz}px;` +
          `box-shadow:0 0 ${sz * 3}px ${sz}px rgba(240,192,99,${0.25 + Math.random() * 0.45});` +
          `animation:pollenRise ${7 + Math.random() * 8}s linear ${Math.random() * 9}s infinite;`;
        box.appendChild(s);
      }
    });

    // scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // counters
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target as HTMLElement;
          const to = parseFloat(el.dataset.count || '0');
          let s: number | null = null;
          if (RM) {
            el.textContent = String(to);
            return;
          }
          const step = (t: number) => {
            s = s || t;
            const p = Math.min((t - s) / 1300, 1);
            el.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    // footer newsletter
    const footHandlers: Array<[HTMLButtonElement, () => void]> = [];
    document.querySelectorAll<HTMLButtonElement>('.foot-news button').forEach((b) => {
      const h = () => {
        const i = b.previousElementSibling as HTMLInputElement | null;
        if (!i) return;
        const v = (i.value || '').trim();
        if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
          b.textContent = 'Subscribed ✓';
          i.value = '';
          setTimeout(() => (b.textContent = 'Subscribe'), 2400);
        } else {
          i.focus();
        }
      };
      b.addEventListener('click', h);
      footHandlers.push([b, h]);
    });
    cleanups.push(() => footHandlers.forEach(([b, h]) => b.removeEventListener('click', h)));

    // burger / mobile nav
    const burger = document.querySelector<HTMLButtonElement>('.burger');
    const nav = document.querySelector<HTMLElement>('header.site nav');
    if (burger && nav) {
      const onBurger = () => {
        const open = nav.style.display === 'flex';
        if (open) {
          nav.style.display = '';
        } else {
          Object.assign(nav.style, {
            display: 'flex',
            position: 'absolute',
            top: 'var(--hdr)',
            right: '12px',
            flexDirection: 'column',
            gap: '4px',
            background: 'var(--bone)',
            padding: '14px 18px',
            borderRadius: '6px',
            boxShadow: '0 14px 40px -18px rgba(11,24,18,.6)',
            border: '1px solid var(--line-soft)',
          });
        }
      };
      burger.addEventListener('click', onBurger);
      const linkHandlers: Array<[HTMLAnchorElement, () => void]> = [];
      nav.querySelectorAll<HTMLAnchorElement>('a').forEach((a) => {
        const h = () => {
          if (window.innerWidth <= 860) nav.style.display = '';
        };
        a.addEventListener('click', h);
        linkHandlers.push([a, h]);
      });
      cleanups.push(() => {
        burger.removeEventListener('click', onBurger);
        linkHandlers.forEach(([a, h]) => a.removeEventListener('click', h));
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
