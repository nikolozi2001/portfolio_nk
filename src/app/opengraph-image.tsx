import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nika Kachibaia — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #030712 0%, #0f172a 50%, #030712 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(34, 211, 238, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(52, 211, 153, 0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            background: "linear-gradient(135deg, #22d3ee, #34d399)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          NK
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#e2e8f0",
            marginTop: 16,
            letterSpacing: "-0.01em",
          }}
        >
          Nika Kachibaia
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 24,
            color: "#22d3ee",
            marginTop: 12,
            fontFamily: "monospace",
          }}
        >
          Full Stack Developer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 18,
            color: "#94a3b8",
            marginTop: 20,
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Web Applications • GIS Systems • Data Platforms
        </div>
      </div>
    ),
    { ...size }
  );
}
