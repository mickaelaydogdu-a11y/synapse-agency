import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #0ea5e9 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          color: "white",
          fontWeight: 700,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        S
      </div>
    ),
    { width: 192, height: 192 }
  );
}
