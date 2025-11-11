import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Web Design & Development Insights',
  description: 'Expert insights on web design, development trends, and growing your business online. From a Taranaki-based developer.',
  keywords: ['web design blog', 'web development tips', 'Taranaki web developer', 'New Plymouth web developer', 'AI website builders', 'business website advice'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/blog',
  },
  openGraph: {
    title: 'Blog | Southern Software Solutions',
    description: 'Expert insights on web design, development trends, and growing your business online.',
    url: 'https://www.southernsoftwaresolutions.tech/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
