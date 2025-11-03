import type { Metadata } from "next";
import "./globals.css";

// Note: Fonts will be loaded via CDN in production for better compatibility
// Using CSS variables for fallback system fonts

export const metadata: Metadata = {
  title: "MLV Sprint 2025 | Build Your Startup in 48 Hours",
  description: "No idea needed. No experience required. Join 500+ students across Hong Kong, Singapore, and Ho Chi Minh City for a weekend that could change everything. January 9-11, 2025.",
  keywords: ["startup", "entrepreneurship", "students", "hackathon", "MLV", "Hong Kong", "Singapore", "HCMC"],
  authors: [{ name: "MLV Ignite" }],
  openGraph: {
    title: "MLV Sprint 2025 | Build Your Startup in 48 Hours",
    description: "Join 500+ students for a weekend startup challenge across 3 cities. Jan 9-11, 2025.",
    url: "https://sprint.mlvignite.com",
    siteName: "MLV Sprint",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLV Sprint 2025 | Build Your Startup in 48 Hours",
    description: "Join 500+ students for a weekend startup challenge. Jan 9-11, 2025.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black-deep text-white-ghost antialiased" style={{ fontFamily: 'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
