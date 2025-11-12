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
          answer: 'No. We hand-code every website from scratch using modern technologies like React, Next.js, and Tailwind CSS. This means no Wix, no Squarespace, no WordPress. You get complete ownership of your code, faster load times, better SEO, and no expensive monthly platform subscriptions. Plus, you are not locked into a proprietary system – you own your website completely.'
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
          answer: 'Absolutely! While we are based in Taranaki (New Plymouth), we serve clients across all of New Zealand and Australia. From Whangārei to Dunedin, Auckland to Queenstown – distance is no barrier to great service. We work remotely and can communicate via video calls, phone, and email.'
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              Got Questions?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              We have got (most of) the answers!
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here you will find responses to the most common questions about our services. You will also find handy guides and tips to help you master online advertising. Still cannot find what you need? Just{' '}
              <Link href="/#contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                reach out
              </Link>
              {' '}— we are happy to help!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">FAQs</h2>

            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-xl font-bold text-orange-500 mb-6 tracking-wide">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
