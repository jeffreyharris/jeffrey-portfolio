import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://jeffreyharris.me"),
  title: {
    default: "Jeffrey Harris | Senior Front-End Developer",
    template: "%s | Jeffrey Harris",
  },
  description:
    "Senior Front-End Developer specializing in WordPress, CMS development, JavaScript frameworks, responsive UI, and modern web experiences.",
  openGraph: {
    title: "Jeffrey Harris | Senior Front-End Developer",
    description:
      "Senior Front-End Developer specializing in WordPress, CMS development, JavaScript frameworks, responsive UI, and modern web experiences.",
    url: "https://jeffreyharris.me",
    siteName: "Jeffrey Harris Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeffrey Harris | Senior Front-End Developer",
    description:
      "Senior Front-End Developer specializing in WordPress, CMS development, JavaScript frameworks, responsive UI, and modern web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white">
        <GoogleAnalytics gaId="G-W034VBFD0T" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}