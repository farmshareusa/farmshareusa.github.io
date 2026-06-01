'use client';

import { useEffect } from 'react';

export function HomeClient() {
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

    // germination motion on hero
    if (!RM) {
      const seal = document.querySelector('.hero-seal');
      const wm = document.querySelector('.hero-watermark');
      if (seal) seal.classList.add('seal-rise');
      if (wm) wm.classList.add('wm-rise');
    }

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

    // membership toggle
    const mt = document.getElementById('memToggle');
    if (mt) {
      const buttons = Array.from(mt.querySelectorAll<HTMLButtonElement>('button'));
      const handlers: Array<[HTMLButtonElement, () => void]> = [];
      buttons.forEach((b) => {
        const h = () => {
          buttons.forEach((x) => x.classList.remove('on'));
          b.classList.add('on');
          const yr = b.dataset.p === 'yr';
          document.querySelectorAll<HTMLElement>('.tier .amt b').forEach((el) => {
            el.textContent = yr ? el.dataset.yr! : el.dataset.mo!;
          });
        };
        b.addEventListener('click', h);
        handlers.push([b, h]);
      });
      cleanups.push(() => handlers.forEach(([b, h]) => b.removeEventListener('click', h)));
    }

    // lead form (local validation only — wire to provider via config/site.ts)
    const form = document.getElementById('leadForm') as HTMLFormElement | null;
    if (form) {
      const email = document.getElementById('leadEmail') as HTMLInputElement | null;
      const msg = document.getElementById('leadMsg');
      const onSubmit = (ev: Event) => {
        ev.preventDefault();
        if (!email || !msg) return;
        const v = (email.value || '').trim();
        const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
        if (!ok) {
          msg.style.color = 'var(--clay)';
          msg.textContent = 'Please enter a valid email address.';
          email.focus();
          return;
        }
        msg.style.color = 'var(--gold)';
        msg.textContent = '✓ Check your inbox — the plan is on its way.';
        email.value = '';
      };
      form.addEventListener('submit', onSubmit);
      cleanups.push(() => form.removeEventListener('submit', onSubmit));
    }

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

    // co-op living mini-map
    const net = document.getElementById('netSvg');
    if (net && !net.innerHTML.trim()) {
      const nodes: [number, number, number][] = [
        [12, 52, 1], [24, 34, 1.3], [31, 62, 1], [42, 26, 1], [47, 50, 1.6],
        [55, 66, 1], [62, 40, 1.2], [70, 56, 1], [77, 32, 1.1], [85, 48, 1],
        [38, 74, 0.9], [66, 20, 0.9], [18, 70, 0.9],
      ];
      const links: [number, number][] = [
        [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [4, 6], [6, 7], [7, 8], [8, 9],
        [6, 8], [2, 4], [3, 11], [0, 12], [5, 10],
      ];
      const grd = `<defs><radialGradient id="ng" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#F0C063"/><stop offset="100%" stop-color="#D9A441" stop-opacity="0"/></radialGradient></defs>`;
      let html = grd + '<g stroke="#D9A441" stroke-width=".3" fill="none" opacity=".55">';
      links.forEach(([a, b], i) => {
        const [x1, y1] = nodes[a];
        const [x2, y2] = nodes[b];
        html += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-dasharray="2 3" style="animation:dashFlow ${3 + (i % 4)}s linear infinite"/>`;
      });
      html += '</g>';
      nodes.forEach(([x, y, s], i) => {
        html +=
          `<g transform="translate(${x} ${y})">` +
          `<circle r="${s * 2.4}" fill="url(#ng)" opacity=".5"/>` +
          (i % 3 === 0
            ? `<circle r="1" fill="none" stroke="#F0C063" stroke-width=".4" style="animation:ringPulse ${2.6 + (i % 3)}s ease-out ${i * 0.2}s infinite"/>`
            : '') +
          `<circle r="${s * 0.9}" fill="#F0C063" style="animation:nodePulse ${2.4 + (i % 4) * 0.4}s ease-in-out ${i * 0.15}s infinite"/></g>`;
      });
      net.innerHTML = html;
    }

    // hero video: gate by reduced motion + mobile
    const heroVideo = document.querySelector<HTMLVideoElement>('.hero-photo video');
    if (heroVideo) {
      if (RM || window.innerWidth <= 860) {
        heroVideo.removeAttribute('autoplay');
        heroVideo.pause();
      } else {
        heroVideo.play().catch(() => {});
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
