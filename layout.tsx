import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next + Vercel Starter",
  description: "Zero-config starter for deploying Next.js on Vercel via GitHub",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Next + Vercel Starter",
    description: "Deploy this in minutes via GitHub → Vercel",
    url: "https://example.com",
    siteName: "Next Vercel Starter",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-50 antialiased">
        {children}
      </body>
    </html>
  );
}
