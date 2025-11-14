import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Southern Software Solutions',
  description:'Transform your online presence with expert web design insights. Learn development best practices, AI implementation, and growth strategies from a Taranaki developer.',
  keywords: ['web design blog', 'web development tips', 'Taranaki web developer', 'New Plymouth web developer', 'AI website builders', 'business website advice'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/blog',
  },
  openGraph: {
    title: 'Blog | Southern Software Solutions',
    description: 'Transform your online presence with expert web design insights. Learn development best practices, AI implementation, and growth strategies from a Taranaki developer.',
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
