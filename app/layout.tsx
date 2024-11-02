import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/header";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bike - Your Ultimate Destination for Motorcycle Enthusiasts",
  description:
    "Discover a vast collection of motorcycles from iconic brands like Harley-Davidson, Ducati, Kawasaki, and more. At Bike, we cater to all riders, whether you're into high-speed sports bikes, classic cruisers, or electric motorcycles. Explore our top-notch inventory, detailed reviews, and competitive prices to find your perfect ride. Unleash the road warrior in you with Bike!",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
