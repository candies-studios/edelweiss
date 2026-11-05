/**
 * Hero visual: a topographic contour field — the terrain where the edelweiss grows,
 * drawn as fine survey lines. Generated deterministically (no images, no randomness),
 * so it is crisp at any size and costs almost nothing to load.
 */
function contour(cx: number, cy: number, r: number, k: number) {
  const pts: string[] = [];
  const steps = 96;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const wobble =
      1 + 0.12 * Math.sin(3 * t + k * 0.35) + 0.07 * Math.sin(5 * t - k * 0.22) + 0.04 * Math.cos(7 * t + k * 0.5);
    const x = cx + Math.cos(t) * r * wobble * 1.25;
    const y = cy + Math.sin(t) * r * wobble * 0.82;
    pts.push(`${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join("") + "Z";
}

export function ContourField() {
  const peaks = [
    { cx: 470, cy: 250, rings: 16, gap: 17 },
    { cx: 760, cy: 470, rings: 9, gap: 15 },
  ];
  return (
    <svg viewBox="0 0 900 640" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="cf-glow" cx="52%" cy="40%" r="55%">
          <stop offset="0" stopColor="#1A56A6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0A2240" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cf-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.25" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="cf-mask">
          <rect width="900" height="640" fill="url(#cf-fade)" />
        </mask>
      </defs>
      <rect width="900" height="640" fill="url(#cf-glow)" />
      <g mask="url(#cf-mask)" fill="none" className="origin-center motion-safe:animate-[drift_40s_ease-in-out_infinite_alternate]">
        {peaks.map((p, pi) =>
          Array.from({ length: p.rings }, (_, i) => {
            const r = 14 + i * p.gap;
            const major = i % 4 === 3;
            return (
              <path
                key={`${pi}-${i}`}
                d={contour(p.cx, p.cy, r, i + pi * 7)}
                stroke={major ? "#9CC3EE" : "#C5CDD8"}
                strokeOpacity={major ? 0.55 : 0.22}
                strokeWidth={major ? 1.1 : 0.7}
              />
            );
          }),
        )}
        {/* summit marker */}
        <circle cx="470" cy="250" r="3.5" fill="#9CC3EE" />
        <circle cx="470" cy="250" r="11" stroke="#9CC3EE" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}
