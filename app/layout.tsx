import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MarkitAI — Your AI-Powered Virtual Marketing Team",
  description:
    "MarkitAI connects your product data, creates campaigns, posts on your behalf, and tracks real engagement-to-sales conversion. A virtual marketing team for SMEs.",
  keywords: ["AI marketing", "SME marketing", "virtual marketing team", "marketing automation", "MarkitAI"],
  openGraph: {
    title: "MarkitAI — Your AI-Powered Virtual Marketing Team",
    description: "AI-powered virtual marketing team for SMEs. Data → campaigns → real sales.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1 bg-white text-gray-900">{children}</main>
        <Footer />
        {/* Google Analytics - replace G-XXXXXXXXXX with your ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
