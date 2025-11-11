import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Application Development',
  description: 'Custom software application development in Taranaki, NZ. Serving New Plymouth and surrounding areas. Business automation, data management systems, and custom solutions tailored to your needs.',
  keywords: ['software development NZ', 'custom software Taranaki', 'software development New Plymouth', 'business automation', 'software applications', 'web applications'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/software-apps',
  },
  openGraph: {
    title: 'Software Application Development | Southern Software Solutions',
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
