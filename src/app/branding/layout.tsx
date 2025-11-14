import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding Services Taranaki | Logo Design & Visual Identity',
  description: 'Professional branding services in Taranaki, NZ. Logo design, email signatures, business photography, and marketing collateral for New Zealand businesses.',
  keywords: ['branding Taranaki', 'logo design New Plymouth', 'business branding NZ', 'visual identity design', 'brand guidelines', 'email signature design', 'business photography Taranaki'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/branding',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    title: 'Branding Services Taranaki | Southern Software Solutions',
    description: 'Professional branding services in Taranaki. Logo design, email signatures, business photography, and marketing collateral.',
    url: 'https://www.southernsoftwaresolutions.tech/branding',
    siteName: 'Southern Software Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Southern Software Solutions - Branding Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding Services Taranaki | Logo Design & Visual Identity',
    description: 'Professional branding in Taranaki. Logo design, email signatures, business photography, and more.',
    images: ['/og-image.png'],
  },
}

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
