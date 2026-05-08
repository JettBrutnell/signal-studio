import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Signal Studio — Websites and ads built to turn attention into booked enquiries",
  description:
    "Signal helps appointment-based businesses sharpen their online presence with conversion-first landing pages, websites, and static ad creative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
