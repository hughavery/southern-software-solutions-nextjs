import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Design Services Christchurch',
  description: 'Professional website design services in Christchurch, NZ. Custom, hand-coded websites from $1,499. Mobile-first design, SEO optimized, and built for performance.',
  keywords: ['website design Christchurch', 'web design NZ', 'custom websites', 'responsive web design', 'hand-coded websites'],
  alternates: {
    canonical: 'https://southernsoftwaresolutions.tech/website-design',
  },
  openGraph: {
    title: 'Website Design Services | Southern Software Solutions',
    description: 'Professional website design services in Christchurch, NZ. Custom, hand-coded websites from $1,499.',
    url: 'https://southernsoftwaresolutions.tech/website-design',
  },
}

export default function WebsiteDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
