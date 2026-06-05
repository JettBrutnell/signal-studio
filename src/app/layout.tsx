import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Fraunces } from "next/font/google";
import { Outfit } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "@/components/analytics";

// Irregular grotesque — all headings, display, wordmark
// Deliberately uneven proportions give it a handcrafted, designed feel
const bricolage = Bricolage_Grotesque({
  variable: "--font-syne",   // reuses existing CSS var — no downstream changes needed
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

// Wonky optical variable serif — italic accent words only
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["WONK", "opsz"],
  display: "swap",
});

// Clean geometric body sans
const outfit = Outfit({
  variable: "--font-jakarta",  // reuses existing CSS var
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Mono with character — labels, badges
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clear Motive — Conversion-focused creative for ads, landing pages, and campaign launches",
  description:
    "Clear Motive is a creative agency that helps businesses and media buyers turn offers, campaigns, and ideas into polished creative built for clarity, speed, and conversion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${fraunces.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
