import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Fraunces } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "@/components/analytics";

// Geometric heavy sans — all headings, display, UI elements
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

// Wonky optical variable serif — italic accents only
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["WONK", "opsz"],
  display: "swap",
});

// Humanist body sans — body copy, descriptions
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Mono with character — labels, badges, mono elements
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
      className={`${syne.variable} ${fraunces.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
