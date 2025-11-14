import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Development Taranaki | Custom Business Apps NZ',
  description: 'Custom software development in Taranaki ✓ Business automation ✓ Web & mobile apps ✓ Data management systems ✓ Serving New Zealand businesses.',
  keywords: ['software development NZ', 'custom software Taranaki', 'software development New Plymouth', 'business automation', 'software applications', 'web applications'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/software-apps',
  },
  openGraph: {
    title: 'Software Development Taranaki | Custom Business Apps NZ',
    description: 'Custom software application development in Taranaki, NZ. Business automation and custom solutions.',
    url: 'https://www.southernsoftwaresolutions.tech/software-apps',
  },
}

export default function SoftwareAppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
