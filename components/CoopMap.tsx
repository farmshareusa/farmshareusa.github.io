'use client';

import { useEffect, useRef } from 'react';

/**
 * Animated SVG co-op "Living Map" used on the homepage. Decorative preview —
 * the full interactive map lives on /co-ops.
 */
export function CoopMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const net = svgRef.current;
    if (!net || net.innerHTML.trim()) return;
    const nodes: [number, number, number][] = [
      [12, 52, 1], [24, 34, 1.3], [31, 62, 1], [42, 26, 1], [47, 50, 1.6],
      [55, 66, 1], [62, 40, 1.2], [70, 56, 1], [77, 32, 1.1], [85, 48, 1],
      [38, 74, 0.9], [66, 20, 0.9], [18, 70, 0.9],
    ];
    const links: [number, number][] = [
      [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [4, 6], [6, 7], [7, 8], [8, 9],
      [6, 8], [2, 4], [3, 11], [0, 12], [5, 10],
    ];
    const grd =
      '<defs><radialGradient id="ng" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#F0C063"/><stop offset="100%" stop-color="#D9A441" stop-opacity="0"/></radialGradient></defs>';
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
  }, []);

  return (
    <div className="map-stage reveal d1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Image_S22.png"
        alt="Aerial view of a suburban neighborhood used as the base layer for a stylized national co-op network map."
      />
      <svg
        className="net"
        viewBox="0 0 100 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        ref={svgRef}
      ></svg>
      <div className="pollen" data-pollen="0"></div>
      <div className="coop-card" style={{ top: '30%', left: '30%' }}>
        <div className="top">
          <svg aria-hidden="true"><use href="#mark" /></svg>
          <b>Cedar Creek Co-op</b>
        </div>
        <div className="chips">
          <span className="chip p">Provider</span>
          <span className="chip o">2.4 mi</span>
        </div>
        <p>
          Eggs · produce · raw honey
          <br />
          18 members · joining open
        </p>
      </div>
      <span
        className="fn mono"
        style={{
          position: 'absolute',
          right: 12,
          bottom: 12,
          fontSize: 10,
          letterSpacing: '0.12em',
          color: 'var(--bone)',
          background: 'rgba(11,24,18,.6)',
          padding: '4px 8px',
          borderRadius: 3,
        }}
      >
        Living Map · preview
      </span>
    </div>
  );
}
