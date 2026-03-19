"use client";

import { useState, useEffect } from "react";

/**
 * Generates a unique, deterministic visual thumbnail for a project.
 * Tries to load a real screenshot from /projects/{slug}.png first,
 * falling back to a generated pattern.
 */

interface ProjectThumbnailProps {
  title: string;
  slug: string;
  tags: string[];
  className?: string;
}

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
  ["#22d3ee", "#06b6d4", "#0891b2"],
  ["#34d399", "#10b981", "#059669"],
  ["#a78bfa", "#8b5cf6", "#7c3aed"],
  ["#f472b6", "#ec4899", "#db2777"],
  ["#fb923c", "#f97316", "#ea580c"],
  ["#38bdf8", "#0ea5e9", "#0284c7"],
  ["#4ade80", "#22c55e", "#16a34a"],
];

function GeneratedThumbnail({ title, slug, tags }: Omit<ProjectThumbnailProps, "className">) {
  const hash = hashCode(slug);
  const palette = PALETTES[hash % PALETTES.length];
  const angle = hash % 360;
  const shapes = (hash % 4) + 3;

  const elements = Array.from({ length: shapes }, (_, i) => {
    const seed = hashCode(slug + i);
    return {
      x: 10 + (seed % 80),
      y: 10 + ((seed >> 4) % 70),
      size: 20 + (seed % 40),
      opacity: 0.1 + (seed % 20) / 100,
      type: seed % 3,
    };
  });

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${angle}deg, ${palette[0]}15, ${palette[1]}10, ${palette[2]}08)`,
        }}
      />
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
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {elements.map((el, i) => {
          if (el.type === 0) {
            return <circle key={i} cx={el.x} cy={el.y} r={el.size / 4} fill={palette[i % palette.length]} opacity={el.opacity} />;
          }
          if (el.type === 1) {
            return (
              <rect
                key={i} x={el.x} y={el.y} width={el.size / 2} height={el.size / 2} rx={2}
                fill={palette[i % palette.length]} opacity={el.opacity}
                transform={`rotate(${(hash + i * 45) % 360} ${el.x + el.size / 4} ${el.y + el.size / 4})`}
              />
            );
          }
          return (
            <line key={i} x1={el.x} y1={el.y} x2={el.x + el.size} y2={el.y + el.size / 2}
              stroke={palette[i % palette.length]} strokeWidth={1} opacity={el.opacity * 1.5}
            />
          );
        })}
      </svg>
      <div
        className="absolute rounded-full blur-[60px]"
        style={{
          width: "40%", height: "40%",
          top: `${20 + (hash % 30)}%`,
          left: `${20 + ((hash >> 3) % 40)}%`,
          background: palette[0],
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="text-5xl font-bold font-mono" style={{ color: palette[0], opacity: 0.25 }}>
          {title.charAt(0)}
        </span>
        {tags[0] && (
          <span
            className="rounded-full px-3 py-0.5 text-[10px] font-mono font-medium"
            style={{ color: palette[0], backgroundColor: `${palette[0]}15`, border: `1px solid ${palette[0]}30` }}
          >
            {tags[0]}
          </span>
        )}
      </div>
    </>
  );
}

export function ProjectThumbnail({ title, slug, tags, className = "" }: ProjectThumbnailProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const screenshotPath = `/projects/${slug}.png`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Always render generated thumbnail as background */}
      <GeneratedThumbnail title={title} slug={slug} tags={tags} />

      {/* Overlay real screenshot on top if available */}
      {!imgFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={screenshotPath}
          alt={title}
          className="dark:brightness-110 dark:contrast-105"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 10, minHeight: "100%" }}
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}
