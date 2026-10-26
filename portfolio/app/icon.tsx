import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          border: "1px solid rgba(34,197,94,0.4)",
          borderRadius: 8,
          color: "#22c55e",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        SN
      </div>
    ),
    size
  );
}
