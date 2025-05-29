import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "./_navbar/Navbar";
import Footer from "./_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArVhee Bakes | Filipino Bakery in London",
  description:
    "Bringing authentic Filipino flavors to London. Fresh ube pandesal, ensaymada, mamon, and more.",
  openGraph: {
    title: "ArVhee Bakes | Filipino Bakery in London",
    description:
      "Bringing authentic Filipino flavors to London. Fresh ube pandesal, ensaymada, mamon, and more.",
    url: "https://arvhee-site.vercel.app/", // <-- Change to the deployed domain
    siteName: "ArVhee Bakes",
    images: [
      {
        url: "/arvhee-hero.png", // This should be a public image path
        width: 1200,
        height: 630,
        alt: "ArVhee Bakes Bakery in London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArVhee Bakes | Filipino Bakery in London",
    description:
      "Bringing authentic Filipino flavors to London. Fresh ube pandesal, ensaymada, mamon, and more.",
    images: ["/arvhee-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
