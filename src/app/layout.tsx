import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pershing-speed-bumps.vercel.app";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Request Speed Bumps for Pershing Road - Take Action Now",
  description: "Join your neighbors in making Pershing Road safer. Send a pre-written email to Alderwoman Ramirez requesting speed bumps to stop dangerous speeding between Kedzie and St. Louis.",
  keywords: ["Pershing Road", "speed bumps", "Chicago", "Ward 12", "traffic safety", "community organizing", "Alderwoman Ramirez"],
  authors: [{ name: "Pershing Road Residents" }],
  
  openGraph: {
    title: "Speed Bumps for Pershing Road",
    description: "Join your neighbors in making Pershing Road safer. Help us get traffic calming measures installed between Kedzie and St. Louis.",
    url: siteUrl,
    siteName: "Pershing Road Safety",
    images: [
      {
        url: `${siteUrl}/og-speed-bumps-simple.png`,
        width: 1200,
        height: 630,
        alt: "Speed bump on a residential street - Request Speed Bumps for Pershing Road",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Speed Bumps for Pershing Road",
    description: "Help make our street safer. Send an email to Alderwoman Ramirez requesting speed bumps to stop dangerous speeding.",
    images: [`${siteUrl}/twitter-speed-bumps-clean.png`],
    creator: "@ward12chicago",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
