'use client';

import React, { useEffect, useState } from 'react';
import { Check, ChevronRight, Mail, ArrowLeft, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EmailSignatures = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const features = [
    'Professional HTML email signature design',
    'Mobile-responsive layout',
    'Clickable social media icons',
    'Company logo integration',
    'Contact details and links',
    'Brand color consistency',
    'Cross-platform compatibility (Gmail, Outlook, Apple Mail)',
    'Easy installation guide included'
  ];

  const faqs = [
    {
      question: 'How much does a professional email signature cost?',
      answer: 'Our email signature design service starts from just $150 for a single signature template. Team packages (multiple signatures with consistent branding) are available from $350. Contact us for a custom quote for your Taranaki business.'
    },
    {
      question: 'Will my email signature work on mobile devices?',
      answer: 'Yes! All our email signatures are fully responsive and optimized for mobile viewing. With over 60% of emails opened on mobile devices in New Zealand, mobile optimization is essential.'
    },
    {
      question: 'Can you create signatures for my entire team?',
      answer: 'Absolutely! We create signature templates that maintain brand consistency while allowing individual details (name, role, phone) to be customized for each team member. Perfect for businesses across Taranaki and New Zealand.'
    },
    {
      question: 'What email platforms do your signatures work with?',
      answer: 'Our signatures are tested and compatible with Gmail, Google Workspace, Microsoft Outlook (desktop, web, and Office 365), Apple Mail, and most other major email clients used by New Zealand businesses.'
    },
    {
      question: 'How long does it take to design an email signature?',
      answer: 'Typical turnaround is 3-5 business days from receiving your branding materials and content. Rush service is available if you need your signatures sooner for your Taranaki or New Zealand business.'
    },
    {
      question: 'Can I update my signature later?',
      answer: 'Yes! We provide the HTML code so you can make minor text changes yourself. For design changes (new colors, layout, social icons), we offer update services at discounted rates for existing clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb Navigation */}
      <section className="pt-28 pb-4 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/branding"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Branding Services
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-8 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-sm font-medium text-gray-500">/03.2</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Email Signature Design | Taranaki
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
                Transform every email into a branding opportunity. We design professional HTML email signatures
                for businesses across Taranaki and New Zealand — helping you make a polished impression in every inbox.
              </p>
            </div>

            {/* Showcase Image */}
            <div className="mb-16 flex justify-center">
              <div className="w-full md:w-3/5 lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
                  <Image
                    src="/emailSignatureExample.png"
                    alt="Professional email signature example for Taranaki business"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-gray-600 mt-4 italic">
                  Example of a professional email signature for our company
                </p>
              </div>
            </div>

            {/* What's Included Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included in Your Email Signature</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We create custom HTML email signatures that work seamlessly across all major email platforms —
                  Gmail, Outlook, Apple Mail, and more. Every signature is designed to match your brand identity
                  and optimized for both desktop and mobile viewing.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Email Signatures Matter</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Think about how many emails your team sends each day. Every single one is a chance to reinforce
                  your brand, drive website traffic, and look more professional. Without a proper email signature,
                  you're missing hundreds of branding opportunities every month.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-gray-800 font-semibold mb-2">Did You Know?</p>
                  <p className="text-gray-700">
                    The average business employee sends 40 emails per day. That's <strong>200+ branding impressions per week</strong> from
                    just one person — completely wasted without a professional email signature.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Email Signature Design FAQs
              </h2>

              <div className="max-w-5xl mx-auto">
                <div className="space-y-0">
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div key={index} className="border-b border-gray-300">
                        <button
                          onClick={() => toggleFAQ(index)}
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
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmailSignatures;
