import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Design Services Taranaki',
  description: 'Professional website design services in Taranaki, NZ. Serving New Plymouth and surrounding areas. Custom, hand-coded websites from $1,499. Mobile-first design, SEO optimized, and built for performance.',
  keywords: ['website design Taranaki', 'website design New Plymouth', 'web design Taranaki', 'web design NZ', 'custom websites', 'responsive web design', 'hand-coded websites'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/website-design',
  },
  openGraph: {
    title: 'Website Design Services | Southern Software Solutions',
    description: 'Professional website design services in Taranaki, NZ. Custom, hand-coded websites from $1,499.',
    url: 'https://www.southernsoftwaresolutions.tech/website-design',
  },
}

export default function WebsiteDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
