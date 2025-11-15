import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Free Website Quote Taranaki & NZ | Request a Quote',
  description: 'Get a free website quote in Taranaki & New Zealand ✓ Free software app quote ✓ Fast 24hr response ✓ No obligation ✓ Websites from $1,499.',
  keywords: [
    'get a free website quote Taranaki',
    'free website quote NZ',
    'get a free website quote New Zealand',
    'free software app quote Taranaki',
    'website quote New Plymouth',
    'free web design quote Taranaki',
    'get quote for website Taranaki',
    'free website consultation NZ',
    'website cost Taranaki',
    'how much does a website cost NZ',
    'contact web developer Taranaki',
    'book consultation web designer New Plymouth'
  ],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/quote',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    title: 'Get a Free Quote | Website, Software & Branding - Southern Software Solutions',
    description: 'Get a free quote for web design, software development, or branding in Taranaki, NZ. Fast response, no obligation.',
    url: 'https://www.southernsoftwaresolutions.tech/quote',
    siteName: 'Southern Software Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Southern Software Solutions - Contact & Quote',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Quote | Contact Taranaki Web Design Agency',
    description: 'Free quotes for web design, software development & branding in Taranaki, NZ.',
    images: ['/og-image.png'],
  },
}

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
