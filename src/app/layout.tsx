import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.southernsoftwaresolutions.tech'),
  title: {
    default: "Southern Software Solutions | Web Design & Development Taranaki",
    template: "%s | Southern Software Solutions"
  },
  description: "Professional web design and software development services in Taranaki, New Zealand. Serving New Plymouth, Stratford, and Hawera with custom websites, software applications, and ongoing maintenance for businesses across NZ & Australia.",
  keywords: ["web design Taranaki", "web design New Plymouth", "software development Taranaki", "custom websites NZ", "web developer Taranaki", "web developer New Plymouth", "website design New Zealand", "software solutions", "website maintenance NZ"],
  authors: [{ name: "Hugh Avery" }],
  creator: "Hugh Avery",
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.southernsoftwaresolutions.tech',
    siteName: 'Southern Software Solutions',
    title: 'Southern Software Solutions | Web Design & Development Taranaki',
    description: 'Professional web design and software development services in Taranaki, New Zealand. Serving New Plymouth and surrounding areas with custom websites, software applications, and ongoing maintenance.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Southern Software Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Southern Software Solutions | Web Design & Development',
    description: 'Professional web design and software development services in Taranaki, New Zealand.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
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
        {children}
      </body>
    </html>
  );
}
