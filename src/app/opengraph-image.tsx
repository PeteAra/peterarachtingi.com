import { ImageResponse } from "next/og";

export const alt = "Peter Arachtingi — Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#3b82f6",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.04em",
            marginBottom: 28,
          }}
        >
          SOFTWARE DEVELOPER
        </div>
        <div
          style={{
            display: "flex",
            color: "#fafafa",
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Peter Arachtingi
        </div>
        <div
          style={{
            display: "flex",
            color: "#a1a1aa",
            fontSize: 28,
            lineHeight: 1.4,
            maxWidth: 900,
          }}
        >
          Full stack developer building production web apps and commercial SaaS
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
