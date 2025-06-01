import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Request Speed Bumps for Pershing Road - Community Safety Campaign";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 68,
              fontWeight: 800,
              margin: "0 0 25px 0",
              lineHeight: 1.1,
              textShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            Request Speed Bumps
            <br />
            for Pershing Road
          </h1>
          <p
            style={{
              fontSize: 32,
              fontWeight: 500,
              margin: "0 0 35px 0",
              opacity: 0.95,
            }}
          >
            Join Your Neighbors in Making Our Street Safer
          </p>
          <div
            style={{
              fontSize: 26,
              background: "white",
              color: "#1e40af",
              padding: "18px 36px",
              borderRadius: 12,
              fontWeight: 600,
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            }}
          >
            Take Action Now
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 35,
            fontSize: 22,
            opacity: 0.9,
          }}
        >
          Ward 12 • Chicago • Between Kedzie & St. Louis
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}