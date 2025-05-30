import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
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

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"], // Pick the weights you need
});

export const metadata: Metadata = {
  title: "aRVhee Bakes | Filipino Bakery in London",
  description:
    "Bringing authentic Filipino flavors to London. Fresh ube pandesal, ensaymada, mamon, and more.",
  openGraph: {
    title: "aRVhee Bakes | Filipino Bakery in London",
    description:
      "Bringing authentic Filipino flavors to London. Fresh ube pandesal, ensaymada, mamon, and more.",
    url: "https://arvhee-site.vercel.app/", // <-- Change to the deployed domain
    siteName: "aRVhee Bakes",
    images: [
      {
        url: "/arvhee-hero.png", // This should be a public image path
        width: 1200,
        height: 630,
        alt: "aRVhee Bakes Bakery in London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "aRVhee Bakes | Filipino Bakery in London",
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
        className={`${geistSans.className} ${geistMono.className}  ${nunito.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
