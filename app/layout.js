import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smork - AI Project Management Tool",
  description:
    "Sample Landing page for Smork AI Project Management Tool using Next.js 16 App Router",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20 bg-[#2F9AF8] text-slate-800 `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
