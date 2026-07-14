import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LANDWOLF — Robinhood Chain",
  description:
    "Half man, half wolf. All party. The alpha of Boy's Club on Robinhood Chain.",
  metadataBase: new URL("https://landwolf-rh.vercel.app"),
  openGraph: {
    title: "LANDWOLF — Robinhood Chain",
    description:
      "Half man, half wolf. All party. The alpha of Boy's Club on Robinhood Chain.",
    images: ["/img/photo_6244586014496199191_y.jpg"],
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
        <link rel="icon" href="/img/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
