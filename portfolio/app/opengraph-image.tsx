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
          alignItems: "center",
          justifyContent: "center",
          padding: 56,
          backgroundColor: "#f3f7f2",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(34,197,94,0.28), transparent 45%), radial-gradient(circle at 90% 90%, rgba(125,211,252,0.35), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            borderRadius: 48,
            backgroundColor: "rgba(255,255,255,0.8)",
            boxShadow: "18px 18px 48px rgba(196,208,195,0.7)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                backgroundColor: "#86efac",
                color: "#06341a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              SN
            </div>
            <span style={{ fontSize: 26, color: "#46564d" }}>nuraddinov-uz.vercel.app</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", fontSize: 78, fontWeight: 700, letterSpacing: -2 }}>
              <span style={{ color: "#22c55e" }}>Nuraddinov</span>
              <span style={{ color: "#16261d", marginLeft: 22 }}>Sarvarbek</span>
            </div>
            <div style={{ fontSize: 38, color: "#16261d" }}>Full-stack & AI Developer</div>
            <div style={{ fontSize: 24, color: "#76857c" }}>TSUOS · Firdavs School · RESTA — FastAPI · Django · React · Claude · Gemini</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
