import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
  title: {
    default: "Nika Kachibaia — Full Stack Developer",
    template: "%s — Nika Kachibaia",
  },
  description:
    "I build exceptional digital experiences that are fast, accessible, and visually compelling.",
  keywords: [
    "developer",
    "portfolio",
    "full stack",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Nika Kachibaia" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nika Kachibaia Portfolio",
    title: "Nika Kachibaia — Full Stack Developer",
    description:
      "I build exceptional digital experiences that are fast, accessible, and visually compelling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nika Kachibaia — Full Stack Developer",
    description:
      "I build exceptional digital experiences that are fast, accessible, and visually compelling.",
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
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
