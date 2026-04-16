import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jeffrey Harris | Senior Front-End Developer",
  description:
    "Senior Front-End Developer specializing in CMS, e-commerce, and modern React / Next.js web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}