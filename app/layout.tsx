import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/navbar";
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "michael tseng",
  description: "Michael Tseng's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="my-10 mx-10 lg:w-1/2 lg:mx-auto">
          <Navbar />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}