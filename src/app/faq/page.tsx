'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqCategories = [
    {
      category: 'WEBSITE SERVICES',
      faqs: [
        {
          question: 'Do you use Wix or third-party software?',
          answer: 'While we have experience building websites on platforms like Wix, Squarespace, and WordPress, we primarily hand-code every website from scratch using modern technologies like React, Next.js, and Tailwind CSS. This approach gives you complete ownership of your code, faster load times, better SEO, and no expensive monthly platform subscriptions. You are not locked into a proprietary system – you own your website completely. That said, if you prefer a platform-based solution, we can certainly accommodate that – we are not closing that door.'
        },
        {
          question: 'How long does it take to build a website?',
          answer: 'A basic 5-page website typically takes 2-3 weeks from start to launch. More complex sites with custom features, e-commerce, or integrations can take 4-8 weeks. The timeline depends on how quickly you can provide content, feedback, and approvals. We will give you a detailed project timeline during our initial consultation.'
        },
        {
          question: 'Can I update the website myself after it is built?',
          answer: 'Yes! We can build you a content management system (CMS) or integrate with headless CMS solutions like Sanity or Contentful, making it easy for you to update text, images, and blog posts without coding knowledge. For more complex changes, we offer ongoing maintenance packages or can train you on the basics.'
        },
        {
          question: 'What is included in your website packages?',
          answer: 'Our Basic Website package ($1,499) includes up to 5 pages, responsive design, basic SEO setup, contact form, and custom domain. Our Professional Website package ($4,999) includes unlimited pages, business tool integrations, payment systems, AI chatbot, booking systems, blog functionality, e-commerce capabilities, and analytics setup. All packages include mobile optimization and professional design.',
          link: '/website-design#packages',
          linkText: 'View Package Details'
        }
      ]
    },
    {
      category: 'TECHNICAL SUPPORT',
      faqs: [
        {
          question: 'Do you provide hosting and ongoing support?',
          answer: 'Absolutely. We can set you up with modern hosting solutions like Vercel or Netlify (often free for small sites), or manage hosting for you. We also offer maintenance packages starting at $99/month that include updates, security monitoring, backups, and priority support. You can also choose to host and manage it yourself – it is your website, your choice.',
          link: '/maintenance',
          linkText: 'View Maintenance Services'
        },
        {
          question: 'Will my website work on mobile devices?',
          answer: 'Yes – every website we build is fully responsive and mobile-first. With over 60% of web traffic coming from mobile devices in New Zealand, we design for smartphones and tablets from day one. Your site will look stunning and function flawlessly on every screen size, from the smallest phone to the largest desktop monitor.'
        },
        {
          question: 'What if I need changes after the website is launched?',
          answer: 'We offer a 30-day post-launch support period for minor tweaks and bug fixes. After that, you can choose our maintenance packages or request changes on an hourly basis. We are always here to help your website evolve as your business grows.'
        },
        {
          question: 'Can you integrate my website with other tools?',
          answer: 'Yes! We regularly integrate websites with payment processors (Stripe, PayPal), booking systems (Calendly, Acuity), CRMs (HubSpot, Salesforce), email marketing (Mailchimp, ConvertKit), accounting software (Xero), and more. If you have specific tools you need to connect, let us know and we will make it happen.'
        }
      ]
    },
    {
      category: 'SEO & MARKETING',
      faqs: [
        {
          question: 'Do you help with SEO and Google rankings?',
          answer: 'Yes. Every website we build includes basic SEO setup: proper meta tags, structured data (schema markup), fast loading speeds, mobile optimization, and clean semantic HTML. For clients who want to rank competitively, we offer advanced SEO services including keyword research, content strategy, local SEO optimization for Taranaki businesses, and ongoing SEO maintenance.'
        },
        {
          question: 'Do you work with businesses outside Taranaki?',
          answer: 'Absolutely! While we are based in Taranaki (New Plymouth), we serve clients across all of New Zealand. From Whangārei to Dunedin, Auckland to Queenstown – distance is no barrier to great service. We work remotely and can communicate via video calls, phone, and email.'
        }
      ]
    },
    {
      category: 'PRICING & QUOTES',
      faqs: [
        {
          question: 'How do I get a free website quote in Taranaki or New Zealand?',
          answer: 'Getting a free website quote is simple! Contact us through our website, and we will provide you with a detailed, no-obligation quote within 24 hours. We also offer free software app quotes, free branding quotes, and free email signature quotes for businesses across Taranaki and New Zealand. Whether you need a basic website, custom software application, or complete digital marketing package, all our quotes are completely free. Just tell us what you need, and we will give you transparent pricing with no hidden costs.',
          link: '/quote',
          linkText: 'Get Your Free Quote Now'
        },
        {
          question: 'How much does a website cost in Taranaki and New Zealand?',
          answer: 'Website costs in New Zealand depend on your specific requirements. Our Basic Website package starts at $1,499 and includes a professional 5-page website with mobile-responsive design, SEO optimization, and a contact form. Our Professional Website package is $4,999 and includes unlimited pages, e-commerce, payment systems, and advanced integrations. We also offer free email signature design quotes (from $49), free software app quotes, and free branding package quotes. Get a free website quote today to see exactly what your project will cost — no obligation, completely transparent pricing.',
          link: '/website-design#packages',
          linkText: 'View All Packages & Pricing'
        },
        {
          question: 'Do you offer free consultations for website design in Taranaki?',
          answer: 'Yes! We provide completely free, no-obligation consultations for all services including website design, software development, branding, and digital marketing. Book a free consultation to discuss your project, get expert advice, and receive a free quote for your website, software app, email signatures, or any other digital service. Available for businesses in New Plymouth, Taranaki, and throughout New Zealand. You can meet us in person in Taranaki or schedule a free video consultation.',
          link: '/quote',
          linkText: 'Book Your Free Consultation'
        },
        {
          question: 'Can I get a quote for multiple services like website, branding, and email signatures?',
          answer: 'Absolutely! We offer bundled quotes that can save you money when combining services. For example, you can get a free quote for a new website plus professional email signatures, or a complete package including website design, branding, and digital marketing. Many Taranaki businesses choose our combined packages for a cohesive digital presence. Contact us for a free comprehensive quote covering all your needs — website development, software apps, email signature design, logo design, and more.',
          link: '/quote',
          linkText: 'Request Multi-Service Quote'
        }
      ]
    },
    {
      category: 'GENERAL',
      faqs: [
        {
          question: 'Can we meet in person or is everything done online?',
          answer: 'Both options are available! If you are located in Taranaki or New Plymouth, we are more than happy to meet in person over a coffee to discuss your web design project. For clients outside the region or those who prefer virtual meetings, we work seamlessly as a remote web development team over video calls, phone, and email. We have found that distance does not impact the quality of our custom website development – many of our best projects for New Zealand businesses have been completed entirely remotely with excellent results.'
        },
        {
          question: 'What are the ongoing costs of owning a website?',
          answer: 'Once we have been paid for custom website design, development, and deployment, the ongoing costs of website ownership are minimal. The main recurring expense is your domain name registration (e.g., yourcompany.co.nz or yourcompany.com), which typically costs $20-50 NZD per year for standard domains. However, premium or highly sought-after domain names can cost significantly more. We usually register domains through Namecheap for our New Zealand clients, and you can browse their pricing to get an idea of costs. Website hosting can often be free (on modern platforms like Vercel or Netlify) or very affordable. If you opt for our professional website maintenance and support packages, that would be an additional monthly cost starting at $99/month.',
          link: 'https://www.namecheap.com',
          linkText: 'Check Domain Pricing on Namecheap'
        }
      ]
    }
  ];

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category =>
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      {/* FAQ Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Got questions? We've got answers.
            </h1>
            <p className="text-xl text-gray-600 mb-16 leading-relaxed">
              Browse our most common FAQs and quick tips. Still stuck?{' '}
              <Link href="/#contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                Reach out
              </Link>
              {' '}— we're here to help.
            </p>

            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="font-heading text-xl font-bold text-orange-500 mb-6 tracking-wide">
                  {category.category}
                </h3>

                <div className="space-y-0">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div key={faqIndex} className="border-b border-gray-300">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-bold text-gray-900 uppercase pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <Minus className="h-6 w-6 text-gray-900 flex-shrink-0" />
                          ) : (
                            <Plus className="h-6 w-6 text-gray-900 flex-shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="pb-6 pr-12">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                            {faq.link && (
                              <Link
                                href={faq.link}
                                className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold"
                              >
                                {faq.linkText} →
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We are here to help. Get in touch and we will answer any questions you have.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-8 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
