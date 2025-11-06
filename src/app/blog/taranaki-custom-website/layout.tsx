import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How a Custom Website Can Help Your Taranaki Business Beat the Competition and Win More Local Customers',
  description: 'Taranaki businesses have a golden opportunity to dominate local search results. Learn how a custom website can help you beat competitors and win more customers in New Plymouth, Stratford, and Hawera.',
  keywords: [
    'Taranaki small business website',
    'Improve local business online Taranaki',
    'Web design services for Taranaki businesses',
    'How to get more customers online Taranaki',
    'Best website for Taranaki business',
    'Grow my business online Taranaki',
    'Local business digital marketing Taranaki',
    'Beat competitors online Taranaki',
    'Taranaki small business SEO',
    'Custom website benefits for Taranaki businesses',
    'New Plymouth web design',
    'Stratford business website',
    'Hawera web development',
    'Taranaki SEO services'
  ],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/blog/taranaki-custom-website',
  },
  openGraph: {
    title: 'How a Custom Website Can Help Your Taranaki Business Beat the Competition',
    description: 'Taranaki businesses can still dominate local Google search results—but the window is closing. Learn why your business needs a custom website now.',
    url: 'https://www.southernsoftwaresolutions.tech/blog/taranaki-custom-website',
    type: 'article',
    publishedTime: '2025-11-06',
    authors: ['Hugh Avery'],
    tags: ['Taranaki', 'Web Design', 'Local SEO', 'Small Business', 'Digital Marketing'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How a Custom Website Can Help Your Taranaki Business Beat the Competition',
    description: 'Taranaki businesses can still dominate local Google search results—but the window is closing. Learn why now is the time.',
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
