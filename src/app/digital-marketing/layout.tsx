import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Taranaki | Google Ads & Analytics",
  description: "Expert digital marketing, SEO, Google Ads & analytics services in Taranaki, NZ. Get found on Google, drive qualified traffic, and grow your business with data-driven marketing strategies.",
  keywords: [
    "digital marketing Taranaki",
    "SEO Taranaki",
    "SEO New Plymouth",
    "Google Ads Taranaki",
    "PPC advertising NZ",
    "Google Analytics setup",
    "social media marketing Taranaki",
    "content marketing NZ",
    "local SEO New Zealand",
    "search engine optimization Taranaki"
  ],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/digital-marketing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.southernsoftwaresolutions.tech/digital-marketing',
    siteName: 'Southern Software Solutions',
    title: 'Digital Marketing & SEO Services | Taranaki, New Zealand',
    description: 'Professional digital marketing and SEO services in Taranaki. Drive traffic, improve Google rankings, and convert visitors into customers with strategic marketing campaigns.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Southern Software Solutions - Digital Marketing & SEO',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing & SEO Services | Taranaki',
    description: 'Expert digital marketing and SEO services to help Taranaki businesses get found on Google and grow online.',
    images: ['/og-image.png'],
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
