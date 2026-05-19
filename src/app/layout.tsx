import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} antialiased`}>
      <body>
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
