import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Atlas | Interactive Universe",
  description: "An Interactive Knowledge Experience",
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
