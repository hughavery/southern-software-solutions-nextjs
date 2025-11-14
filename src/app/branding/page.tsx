'use client';

import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

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
            {/* Left Column - Heading & Illustration */}
            <div>
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-500">/03.</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Branding & Visual Identity
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                Your brand is more than just a logo — it's the complete visual story of your business.
                We create cohesive brand identities that help Taranaki businesses stand out, build trust,
                and make memorable first impressions across every touchpoint.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <span className="text-orange-500 text-2xl md:text-3xl mr-4 flex-shrink-0">•</span>
                  <p className="text-xl md:text-2xl text-gray-800 font-bold leading-relaxed">
                    Strong branding builds instant trust — customers are far more likely to engage with a business that looks polished and consistent.
                  </p>
                </div>

                {/* Branding Image */}
                <div className="mt-8">
                  <Image
                    src="/branding.png"
                    alt="Branding and Visual Identity Design"
                    width={400}
                    height={400}
                    className="w-full max-w-md object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-8 pt-16">
              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">1. Logo Design & Brand Guidelines</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  We design timeless, memorable logos that capture the essence of your business. Along with your logo,
                  we create comprehensive brand guidelines covering typography, colour palettes, and usage rules —
                  ensuring your brand stays consistent across every platform and piece of marketing material.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">2. Professional Email Signatures</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  Turn every email into a branding opportunity. We design professional HTML email signatures that
                  include your logo, contact details, social links, and brand colours — giving your team a polished,
                  unified look in every inbox and reinforcing brand recognition with every message sent.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">3. Business Photography</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  When creating websites, it's great to have authentic photos of your team, workspace, products, and
                  services. We shoot high-quality images using the Nikon Z7 II — creating visual content that adds
                  personality to your website, social media, and marketing materials.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">4. Marketing Collateral Design</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  From business cards and brochures to social media graphics and presentation templates, we design
                  all the materials your business needs. Every piece is crafted to align with your brand identity,
                  ensuring a cohesive, professional look that builds credibility and trust with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branding;
