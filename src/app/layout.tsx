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
  metadataBase: new URL('https://southernsoftwaresolutions.tech'),
  title: {
    default: "Southern Software Solutions | Web Design & Development Christchurch",
    template: "%s | Southern Software Solutions"
  },
  description: "Professional web design and software development services in Christchurch, New Zealand. Custom websites, software applications, and ongoing maintenance for businesses across NZ & Australia.",
  keywords: ["web design Christchurch", "software development New Zealand", "custom websites NZ", "web developer Christchurch", "website design New Zealand", "software solutions", "website maintenance NZ"],
  authors: [{ name: "Hugh Avery" }],
  creator: "Hugh Avery",
  icons: {
    icon: [
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://southernsoftwaresolutions.tech',
    siteName: 'Southern Software Solutions',
    title: 'Southern Software Solutions | Web Design & Development Christchurch',
    description: 'Professional web design and software development services in Christchurch, New Zealand. Custom websites, software applications, and ongoing maintenance.',
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
    description: 'Professional web design and software development services in Christchurch, New Zealand.',
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
