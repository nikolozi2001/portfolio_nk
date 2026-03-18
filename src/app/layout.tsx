import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LocaleProvider } from "@/hooks/useLocale";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikakachibaia.vercel.app"),
  title: {
    default: "Nika Kachibaia — Full Stack Developer",
    template: "%s — Nika Kachibaia",
  },
  description:
    "I build web applications, GIS systems, and data-driven platforms — with a focus on performance, scalability, and clean code.",
  keywords: [
    "Nika Kachibaia",
    "developer",
    "portfolio",
    "full stack",
    "react",
    "next.js",
    "typescript",
    "GIS",
    "GeoStat",
    "Georgia",
  ],
  authors: [{ name: "Nika Kachibaia" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nika Kachibaia Portfolio",
    title: "Nika Kachibaia — Full Stack Developer",
    description:
      "I build web applications, GIS systems, and data-driven platforms — with a focus on performance, scalability, and clean code.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nika Kachibaia — Full Stack Developer",
    description:
      "I build web applications, GIS systems, and data-driven platforms — with a focus on performance, scalability, and clean code.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
