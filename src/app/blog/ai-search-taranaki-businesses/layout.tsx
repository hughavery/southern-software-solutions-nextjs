import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Taranaki Businesses Can Get Found in AI Search Results (Google AI Mode, AI Overviews, and ChatGPT)',
  description: 'Google AI search is changing how customers find Taranaki businesses. Learn how to optimize your website for Google AI Overviews, ChatGPT, and AI search engines before your competitors do.',
  keywords: [
    'AI search optimization Taranaki',
    'Google AI Overviews Taranaki',
    'ChatGPT business search',
    'AI SEO Taranaki',
    'Taranaki business AI optimization',
    'Google AI Mode local search',
    'AI search engine optimization',
    'Taranaki digital marketing AI',
    'How to get found in AI search',
    'ChatGPT local business recommendations',
    'AI search ranking Taranaki',
    'Future of SEO Taranaki',
    'New Plymouth AI search',
    'AI-optimized website Taranaki',
    'Schema markup Taranaki businesses',
    'Perplexity AI business search',
    'Google SGE Taranaki',
    'AI search strategy New Zealand'
  ],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/blog/ai-search-taranaki-businesses',
  },
  openGraph: {
    title: 'How Taranaki Businesses Can Get Found in AI Search Results',
    description: 'AI search is changing how customers find local businesses. Discover how to optimize your Taranaki business for Google AI Overviews and ChatGPT before competitors do.',
    url: 'https://www.southernsoftwaresolutions.tech/blog/ai-search-taranaki-businesses',
    type: 'article',
    publishedTime: '2025-12-21',
    authors: ['Hugh Avery'],
    tags: ['AI Search', 'SEO', 'Taranaki', 'Google AI', 'ChatGPT', 'Digital Marketing', 'Local Business'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Taranaki Businesses Can Get Found in AI Search (Google AI & ChatGPT)',
    description: 'AI search is revolutionizing how customers find local businesses. Learn how to optimize your Taranaki website for the future of search.',
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
