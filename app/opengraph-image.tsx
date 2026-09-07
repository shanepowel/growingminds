import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.business.name} · ${site.business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1B4A2C",
          color: "#F7F6F1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 34, color: "#A9C293", marginBottom: 8 }}>
          Helping Children
        </div>
        <div
          style={{
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: "-1px",
          }}
        >
          Learn, Grow, Succeed
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "#DCE8CE",
          }}
        >
          {site.business.tagline}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 26,
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          {`${site.business.name} · ${site.business.phone}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
