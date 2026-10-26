import { ImageResponse } from "next/og";

export const alt = "Nuraddinov Sarvarbek — Full-stack & AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0a0a0a",
          backgroundImage: "radial-gradient(circle at 80% 0%, rgba(34,197,94,0.18), transparent 55%)",
          color: "#e5e5e5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "#22c55e", fontWeight: 700 }}>
          SN<span style={{ color: "#fff" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 80, fontWeight: 800, color: "#fff", letterSpacing: -2 }}>Nuraddinov Sarvarbek</div>
          <div style={{ fontSize: 40, color: "#22c55e" }}>Full-stack & AI Developer</div>
          <div style={{ fontSize: 26, color: "#9ca3af" }}>TSUOS · Firdavs School · RESTA — FastAPI · Django · React · Claude · Gemini</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#6b7280" }}>
          <span>nuraddinov-uz.vercel.app</span>
          <span>github.com/nuraddinov477</span>
        </div>
      </div>
    ),
    size
  );
}
