import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MentorBul - Başarıya Giden Yolda Mentorun Yanında",
  description: "Mentor Bul, mentor arama platformudur.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <div className=" border-b border-gray-200 shadow-sm">
          <Header />
        </div>
        {children}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-10 xl:px-12 my-20 lg:my-30">
          <Footer />
        </div>
      </body>
    </html>
  );
}
