'use client';

import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Image from 'next/image';

const Branding = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left Column - Heading */}
            <div>
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-500">/05.</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Branding & Visual Identity
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Your brand is more than just a logo — it's the <span className="text-cyan-600 font-semibold">complete visual story</span> of your business.
                We create cohesive brand identities that help Taranaki businesses <span className="text-cyan-600 font-semibold">stand out</span>, build trust,
                and make <span className="text-cyan-600 font-semibold">memorable first impressions</span> across every touchpoint.
              </p>

              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  Strong branding builds <span className="text-cyan-600">instant trust</span> — customers are far more likely to engage with a business that looks polished and consistent.
                </p>
              </div>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-8 pt-16">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Logo Design & Brand Guidelines</h3>
                <p className="text-gray-600 leading-relaxed">
                  We design <span className="text-cyan-600 font-semibold">timeless, memorable logos</span> that capture the essence of your business. Along with your logo,
                  we create comprehensive brand guidelines covering typography, colour palettes, and usage rules —
                  ensuring your brand stays consistent across every platform and piece of marketing material.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Professional Email Signatures</h3>
                <p className="text-gray-600 leading-relaxed">
                  Turn every email into a branding opportunity. We design professional HTML email signatures that
                  include your logo, contact details, social links, and brand colours — giving your team a <span className="text-cyan-600 font-semibold">polished,
                  unified look</span> in every inbox and reinforcing brand recognition with every message sent.{' '}
                  <Link href="/branding/email-signatures" className="text-cyan-600 hover:text-cyan-700 font-semibold underline">
                    Learn more
                  </Link>
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Business Photography</h3>
                <p className="text-gray-600 leading-relaxed">
                  Authentic photos of your team, workspace, products, and services make your brand feel real.
                  We shoot <span className="text-cyan-600 font-semibold">high-quality images</span> using the Nikon Z7 II — creating visual content that adds
                  personality to your website, social media, and marketing materials.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Marketing Collateral Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  From business cards and brochures to social media graphics and presentation templates, we design
                  all the materials your business needs. Every piece is crafted to align with your brand identity,
                  ensuring a <span className="text-cyan-600 font-semibold">cohesive, professional look</span> that builds credibility and trust with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why consistent branding matters
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Consider two businesses offering the same service. One has a clean logo on their van, professional business cards,
              and branded invoices that match their website. The other has inconsistent materials with different logos and fonts
              across touchpoints. Which one feels more established and trustworthy?
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Visual consistency signals reliability and professionalism before any conversation happens. When potential
              customers see cohesive branding, they feel more confident working with you.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Your reputation spreads by word of mouth, but first impressions happen visually — on your website,
              signage, or business materials. A cohesive brand identity ensures those impressions work in your favour.
            </p>

            <div className="bg-white rounded-lg p-8 border-l-4 border-cyan-500 ml-8">
              <p className="text-lg text-gray-800 leading-relaxed">
                A professional visual identity helps you stand out, communicate value, and build trust with customers.
                When every touchpoint reinforces the same professional image, your business becomes more memorable and credible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build your brand?"
        subtitle="Request your free proposal now"
        buttonText="GET STARTED"
        buttonLink="/quote?step=1"
      />

      <Footer />
    </div>
  );
};

export default Branding;
