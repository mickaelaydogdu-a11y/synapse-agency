import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "#0a55e6",
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
        N
      </div>
    ),
    { width: 192, height: 192 }
  );
}
