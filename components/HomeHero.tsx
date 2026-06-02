'use client';

import { useEffect, useRef } from 'react';
import { siteConfig } from '@/config/site';

export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seal = document.querySelector('.hero-seal');
    const wm = document.querySelector('.hero-watermark');
    if (!RM) {
      if (seal) seal.classList.add('seal-rise');
      if (wm) wm.classList.add('wm-draw');
      const v = videoRef.current;
      if (v && window.innerWidth > 860) v.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.removeAttribute('autoplay');
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-frame almanac">
        <div className="af-rule"></div>
        <svg className="af-corner tl" aria-hidden="true"><use href="#af-corner" /></svg>
        <svg className="af-corner tr" aria-hidden="true"><use href="#af-corner" /></svg>
        <svg className="af-corner bl" aria-hidden="true"><use href="#af-corner" /></svg>
        <svg className="af-corner br" aria-hidden="true"><use href="#af-corner" /></svg>
        <div className="af-orn top">
          <svg className="fleuron" viewBox="0 0 64 26" aria-hidden="true"><use href="#fleuron" /></svg>
        </div>
        <div className="af-orn bot">
          <svg className="fleuron" viewBox="0 0 64 26" aria-hidden="true"><use href="#fleuron" /></svg>
          <div className="af-stars">
            <svg aria-hidden="true"><use href="#star" /></svg>
            <svg aria-hidden="true"><use href="#star" /></svg>
            <svg aria-hidden="true"><use href="#star" /></svg>
          </div>
        </div>
        <svg className="af-sprig l" aria-hidden="true"><use href="#sprig" /></svg>
        <svg className="af-sprig r" aria-hidden="true"><use href="#sprig" /></svg>

        <div className="hero-panel">
          <div className="pa-grain"></div>
          <svg className="hero-watermark fs-sprout" viewBox="0 0 240 250" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path className="fs-grow fs-ground" pathLength={1} d="M48 201 Q84 193 120 199 Q156 205 192 197" />
              <path className="fs-grow fs-stem" pathLength={1} d="M122 200 c-9 2 -12 -9 -3 -12 c7 -2 9 6 3 9 C126 188 116 165 120 148 C121 142 120 138 120 134 C108 124 82 122 70 96 C62 80 76 66 92 76 C110 88 120 112 120 134 C124 124 146 118 166 116 C182 114 186 128 174 138 C160 150 130 150 120 138" />
              <path className="fs-grow fs-vein1" pathLength={1} strokeWidth={2.2} d="M112 128 C100 116 92 104 84 90" />
              <path className="fs-grow fs-vein2" pathLength={1} strokeWidth={2.2} d="M130 134 C144 130 156 127 168 123" />
            </g>
          </svg>
          <div className="hero-content">
            <span className="eyebrow">Grow Food. Build Community. Live Freely.</span>
            <h1>
              <span className="l1">Feed your<br />family.</span>
              <span className="l2">Without relying on the system.</span>
            </h1>
            <p className="sub">
              Learn to grow your own food, build self-sufficient systems, and connect with local
              farm co-ops — no matter where you live, from a city balcony to five suburban acres.
            </p>
            <div className="cta-row">
              <a href={siteConfig.communityUrl} className="btn btn-primary">
                <svg style={{ color: 'var(--green-deep)' }} aria-hidden="true"><use href="#mark" /></svg>
                {siteConfig.communityCtaLabel}
              </a>
              <a href="/start/" className="btn btn-secondary">
                Get the Free 30-Day Plan
              </a>
            </div>
            <div className="trust">
              <span>A growing movement</span>
              <span className="div"></span>
              <span>Backyards to acres</span>
              <span className="div"></span>
              <span>All 50 states ready</span>
            </div>
          </div>
        </div>

        <div className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="poster"
            src="/images/Image_1A_16x9.png"
            alt="Weathered hands cradling soil and a young sprout at golden hour"
          />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/Image_1A_16x9.png"
            aria-hidden="true"
          >
            <source src="/video/Video1.mp4" type="video/mp4" />
          </video>
          <div className="grade"></div>
          <div className="grain"></div>
          <div className="pollen" data-pollen="14"></div>
          <span className="plate">Plate I — Hands in the Soil</span>
        </div>

        <div className="hero-seal germ">
          <div className="hero-medallion">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/farm-emblem.png"
              alt="FarmShare USA emblem — a backyard homestead with garden, greenhouse, orchard, water tank and solar power"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
