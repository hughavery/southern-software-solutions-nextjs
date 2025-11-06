import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Maintenance & Support',
  description: 'Professional website maintenance and support services in Christchurch, NZ. Keep your website secure, updated, and running smoothly with our ongoing support.',
  keywords: ['website maintenance NZ', 'website support Christchurch', 'website updates', 'web hosting support', 'ongoing maintenance'],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/maintenance',
  },
  openGraph: {
    title: 'Website Maintenance & Support | Southern Software Solutions',
    description: 'Professional website maintenance and support services in Christchurch, NZ.',
    url: 'https://www.southernsoftwaresolutions.tech/maintenance',
  },
}

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
