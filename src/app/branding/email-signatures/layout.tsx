import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Signature Design Taranaki & NZ',
  description: 'Professional email signature design for Taranaki and New Zealand businesses. Custom HTML signatures for Gmail, Outlook, and Apple Mail. Get your professional signature package from $49.',
  keywords: [
    'email signature design Taranaki',
    'email signature design New Plymouth',
    'professional email signature NZ',
    'HTML email signature New Zealand',
    'business email signature Taranaki',
    'email signature template NZ',
    'Gmail signature design',
    'Outlook signature design',
    'custom email signature New Zealand'
  ],
  alternates: {
    canonical: 'https://www.southernsoftwaresolutions.tech/branding/email-signatures',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    title: 'Email Signature Design Taranaki & NZ',
    description: 'Custom HTML email signatures for New Zealand businesses. Mobile-responsive, brand-consistent, compatible with all major email platforms. From $49.',
    url: 'https://www.southernsoftwaresolutions.tech/branding/email-signatures',
    siteName: 'Southern Software Solutions',
    images: [
      {
        url: '/emailSignatureExample.png',
        width: 1200,
        height: 800,
        alt: 'Professional Email Signature Example - Southern Software Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Signature Design Taranaki | Professional HTML Signatures',
    description: 'Custom email signatures for NZ businesses. Mobile-responsive, brand-consistent. From $49.',
    images: ['/emailSignatureExample.png'],
  },
}

export default function EmailSignaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
