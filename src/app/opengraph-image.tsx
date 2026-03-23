import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sweepsless in Seattle — Professional House Cleaning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #faf8f5 0%, #f2ede8 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "18px",
              background: "#8a6d2f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#fff",
            }}
          >
            S
          </div>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#8a6d2f",
              margin: "0",
              lineHeight: "1.2",
            }}
          >
            Sweepsless in Seattle
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#7a7068",
              margin: "0",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Professional House Cleaning
          </p>
          <div
            style={{
              width: "200px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #e0d8d0, transparent)",
              marginTop: "8px",
            }}
          />
          <p
            style={{
              fontSize: "20px",
              color: "#7a7068",
              margin: "0",
              marginTop: "4px",
            }}
          >
            Seattle &amp; the Eastside &bull; No Contracts &bull; Vetted Teams
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
