import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Design Taranaki | Custom Web Design New Zealand',
  description: 'Professional website design services in Taranaki, NZ. Serving New Plymouth and surrounding areas. Custom, hand-coded websites from $1,499. Mobile-first design, SEO optimized, and built for performance.',
  keywords: ['website design Taranaki', 'website design New Plymouth', 'web design Taranaki', 'web design NZ', 'custom websites', 'responsive web design', 'hand-coded websites'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/website-design',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    title: 'Website Design Taranaki | Custom Web Design New Zealand',
    description: 'Professional website design services in Taranaki, NZ. Custom, hand-coded websites from $1,499. Mobile-first design, SEO optimized, and built for performance.',
    url: 'https://www.southernsoftwaresolutions.tech/website-design',
    siteName: 'Southern Software Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Southern Software Solutions - Website Design Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design Taranaki | Custom Web Design New Zealand',
    description: 'Professional website design in Taranaki. Custom, hand-coded websites from $1,499. Mobile-first, SEO optimized, built for performance.',
    images: ['/og-image.png'],
  },
}

export default function WebsiteDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
