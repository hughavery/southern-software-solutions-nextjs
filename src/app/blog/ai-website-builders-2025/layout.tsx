import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How AI Website Builders Are Changing Web Design in 2025',
  description: 'AI tools like Bolt.new and Lovable are disrupting Wix. But will websites get cheaper? An honest analysis from a Christchurch developer on AI vs human developers.',
  keywords: ['AI website builders', 'Bolt.new', 'Lovable', 'AI web design', 'web design cost 2025', 'Christchurch web developer', 'Wix alternative'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/blog/ai-website-builders-2025',
  },
  openGraph: {
    title: 'How AI Website Builders Are Changing Web Design in 2025',
    description: 'AI tools like Bolt.new are disrupting Wix. But will websites get cheaper? The honest truth from a developer.',
    url: 'https://www.southernsoftwaresolutions.tech/blog/ai-website-builders-2025',
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
