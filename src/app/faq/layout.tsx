import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Got questions about our web design and software development services? Find answers to common questions about custom websites, pricing, timelines, and more.',
  keywords: ['FAQ', 'web design questions', 'website development FAQ', 'Taranaki web design', 'custom website questions'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/faq',
  },
  openGraph: {
    title: 'FAQ | Southern Software Solutions',
    description: 'Got questions? We have got answers! Find information about our web design and development services.',
    url: 'https://www.southernsoftwaresolutions.tech/faq',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
