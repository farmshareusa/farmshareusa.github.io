'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  alt: string;
};

export function ZoomImage({ src, alt }: Props) {
  const [active, setActive] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActive(false);
        btnRef.current?.blur();
      }
    };
    const onDocPointer = (e: PointerEvent) => {
      if (
        e.pointerType !== 'mouse' &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setActive(false);
      }
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDocPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDocPointer);
    };
  }, [active]);

  return (
    <button
      ref={btnRef}
      type="button"
      className={`zoom-btn${active ? ' is-active' : ''}`}
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') setActive(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') setActive(false);
      }}
      onPointerUp={(e) => {
        if (e.pointerType !== 'mouse') setActive((a) => !a);
      }}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      aria-label={alt}
      aria-pressed={active}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </button>
  );
}
