// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMC Rotaract Club | Chitwan Medical College",
  description:
    "Official website of the Rotaract Club at Chitwan Medical College. Explore our projects, meet our team, and join our mission to empower youth and serve communities.",
  keywords: [
    "Rotaract",
    "CMC Rotaract",
    "Chitwan Medical College",
    "Youth Leadership",
    "Community Service",
    "Nepal Rotaract",
  ],
  authors: [{ name: "CMC Rotaract Team" }],
  openGraph: {
    title: "CMC Rotaract Club",
    description:
      "Empowering youth through leadership and community service. Join the Rotaract movement at Chitwan Medical College.",
    url: "https://cmcrotaract.yourdomain.com", // replace with your real domain
    siteName: "CMC Rotaract Club",
    images: [
      {
        url: "/og-image.png", // optional, create this image in /public
        width: 1200,
        height: 630,
        alt: "CMC Rotaract",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-gray-900 text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}