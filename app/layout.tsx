import type { Metadata } from "next";
import "./globals.css";

// Note: Fonts will be loaded via CDN in production for better compatibility
// Using CSS variables for fallback system fonts

export const metadata: Metadata = {
  title: "MLV Sprint 2026 | Build Your Startup in 48 Hours",
  description: "No idea needed. No experience required. Join 500+ students across Hong Kong and Ho Chi Minh City for a weekend that could change everything. January 9-11, 2026.",
  keywords: ["startup", "entrepreneurship", "students", "hackathon", "MLV", "Hong Kong", "HCMC"],
  authors: [{ name: "MLV Ignite" }],
  openGraph: {
    title: "MLV Sprint 2026 | Build Your Startup in 48 Hours",
    description: "Join 500+ students for a weekend startup challenge across 2 cities. Jan 9-11, 2026.",
    url: "https://sprint.mlvignite.com",
    siteName: "MLV Sprint",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MLV Sprint 2026 | Build Your Startup in 48 Hours",
    description: "Join 500+ students for a weekend startup challenge. Jan 9-11, 2026.",
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
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/images/logos/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logos/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logos/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logos/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/logos/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/logos/android-chrome-512x512.png" />
      </head>
      <body className="bg-black-deep text-white-ghost antialiased" style={{ fontFamily: 'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
