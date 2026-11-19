import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { DynamicScene as Scene } from "@/components/canvas/DynamicScene";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { OmniSearch } from "@/components/OmniSearch";
import { GlobalNavigation } from "@/components/ui/GlobalNavigation";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const siteTitle = "Atlas – Interactive 3D Solar System & Space Exploration";
const siteDescription =
  "Explore the solar system in interactive 3D with Atlas. Discover planets, moons, orbits, and celestial physics through an immersive, real-time cosmic journey.";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Atlas – Interactive Universe",
  },
  description: siteDescription,
  applicationName: "Atlas",
  authors: [{ name: "Atlas Team" }],
  keywords: [
    "Atlas",
    "solar system 3D",
    "interactive universe",
    "astronomy",
    "space exploration",
    "celestial mechanics",
    "NASA telemetry",
    "planets in 3D",
    "space science",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Atlas",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atlas – Interactive 3D Solar System & Space Exploration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@atlas",
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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Atlas",
      "description": siteDescription,
      "publisher": {
        "@id": `${siteUrl}/#organization`,
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Atlas",
      "url": siteUrl,
      "logo": `${siteUrl}/atlas_logo_transparent.png`,
      "sameAs": [
        "https://science.nasa.gov",
        "https://www.esa.int",
      ],
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#app`,
      "name": "Atlas – Interactive Universe",
      "url": siteUrl,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "description": siteDescription,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-transparent">
        <CustomCursor />
        <OmniSearch />
        <GlobalNavigation />
        <SmoothScroll>
          <Scene />
          <div className="relative z-10 min-h-full">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
