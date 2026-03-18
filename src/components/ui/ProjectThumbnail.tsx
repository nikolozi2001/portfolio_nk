"use client";

/**
 * Generates a unique, deterministic visual thumbnail for a project
 * based on its slug (used as a seed for the pattern).
 */

interface ProjectThumbnailProps {
  title: string;
  slug: string;
  tags: string[];
  className?: string;
}

// Simple hash from string to get deterministic numbers
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

const PALETTES = [
  ["#22d3ee", "#06b6d4", "#0891b2"],   // cyan
  ["#34d399", "#10b981", "#059669"],   // emerald
  ["#a78bfa", "#8b5cf6", "#7c3aed"],   // violet
  ["#f472b6", "#ec4899", "#db2777"],   // pink
  ["#fb923c", "#f97316", "#ea580c"],   // orange
  ["#38bdf8", "#0ea5e9", "#0284c7"],   // sky
  ["#4ade80", "#22c55e", "#16a34a"],   // green
];

export function ProjectThumbnail({ title, slug, tags, className = "" }: ProjectThumbnailProps) {
  const hash = hashCode(slug);
  const palette = PALETTES[hash % PALETTES.length];
  const angle = (hash % 360);
  const shapes = (hash % 4) + 3; // 3-6 shapes

  // Generate deterministic positions for floating elements
  const elements = Array.from({ length: shapes }, (_, i) => {
    const seed = hashCode(slug + i);
    return {
      x: 10 + (seed % 80),
      y: 10 + ((seed >> 4) % 70),
      size: 20 + (seed % 40),
      opacity: 0.1 + (seed % 20) / 100,
      type: seed % 3, // 0=circle, 1=rect, 2=line
    };
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${angle}deg, ${palette[0]}15, ${palette[1]}10, ${palette[2]}08)`,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${palette[0]}20 1px, transparent 1px),
            linear-gradient(90deg, ${palette[0]}20 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating shapes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {elements.map((el, i) => {
          if (el.type === 0) {
            return (
              <circle
                key={i}
                cx={el.x}
                cy={el.y}
                r={el.size / 4}
                fill={palette[i % palette.length]}
                opacity={el.opacity}
              />
            );
          }
          if (el.type === 1) {
            return (
              <rect
                key={i}
                x={el.x}
                y={el.y}
                width={el.size / 2}
                height={el.size / 2}
                rx={2}
                fill={palette[i % palette.length]}
                opacity={el.opacity}
                transform={`rotate(${(hash + i * 45) % 360} ${el.x + el.size / 4} ${el.y + el.size / 4})`}
              />
            );
          }
          return (
            <line
              key={i}
              x1={el.x}
              y1={el.y}
              x2={el.x + el.size}
              y2={el.y + el.size / 2}
              stroke={palette[i % palette.length]}
              strokeWidth={1}
              opacity={el.opacity * 1.5}
            />
          );
        })}
      </svg>

      {/* Glow accent */}
      <div
        className="absolute rounded-full blur-[60px]"
        style={{
          width: "40%",
          height: "40%",
          top: `${20 + (hash % 30)}%`,
          left: `${20 + ((hash >> 3) % 40)}%`,
          background: palette[0],
          opacity: 0.15,
        }}
      />

      {/* Center content: title initial + tag */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span
          className="text-5xl font-bold font-mono"
          style={{ color: palette[0], opacity: 0.25 }}
        >
          {title.charAt(0)}
        </span>
        {tags[0] && (
          <span
            className="rounded-full px-3 py-0.5 text-[10px] font-mono font-medium"
            style={{
              color: palette[0],
              backgroundColor: `${palette[0]}15`,
              border: `1px solid ${palette[0]}30`,
            }}
          >
            {tags[0]}
          </span>
        )}
      </div>
    </div>
  );
}
