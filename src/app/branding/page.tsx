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

                {/* Featured Visual CTA Card */}
                <Link href="/branding/email-signatures" className="block ml-7 mt-6">
                  <div className="border-2 border-orange-500 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-orange-50 to-white">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <span className="text-orange-600 font-bold text-sm uppercase tracking-wide">Featured Service</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="mb-3">
                        <Image
                          src="/emailSignatureExample.png"
                          alt="Professional Email Signature Example"
                          width={600}
                          height={200}
                          className="w-full h-auto rounded border border-gray-200"
                        />
                      </div>
                      <p className="text-gray-900 font-semibold text-lg group-hover:text-orange-600 transition-colors">
                        See Our Email Signature Design Portfolio & Pricing →
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        View examples, features, and how we transform every email into a branding opportunity
                      </p>
                    </div>
                  </div>
                </Link>
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

      {/* Branding Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl">

            {/* Opening Statement */}
            <div className="mb-32">
              <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-12 leading-tight">
                The Language<br />of Visual Identity
              </h2>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Where every{' '}
                <span style={{ fontWeight: 'bold' }}>
                  <span style={{ color: '#8B5CF6' }}>C</span>
                  <span style={{ color: '#7C3AED' }}>o</span>
                  <span style={{ color: '#6D28D9' }}>l</span>
                  <span style={{ color: '#5B21B6' }}>o</span>
                  <span style={{ color: '#4C1D95' }}>r</span>
                </span>
                {', '}
                <span style={{ fontFamily: '"Courier New", Courier, monospace', fontWeight: 'bold', letterSpacing: '0.1em' }}>FONT</span>
                {', and '}
                <span style={{
                  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>DESIGN</span>
                {' choice communicates something about your business before a single word is read.'}
              </p>
            </div>

            {/* Visual Perception */}
            <div className="mb-32">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                How Visual Perception Shapes Trust
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Human brains process visual information faster than text. Within milliseconds of seeing your logo,
                website, or business card, people form impressions about your professionalism, reliability, and quality.
                These snap judgments happen subconsciously, driven by design principles like balance, contrast, and harmony.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Understanding concepts like color psychology, visual hierarchy, and whitespace helps create designs
                that feel intentional rather than accidental. A well-designed brand identity doesn't just look good —
                it communicates competence and builds confidence in your business.
              </p>
            </div>

            {/* Consistency Creates Recognition */}
            <div className="mb-32">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Consistency Creates Recognition
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Brand recognition comes from repetition and consistency across touchpoints. When your logo, color palette,
                typography, and design style remain consistent — from your website to your business cards to your email
                signatures — people begin to recognize your brand instantly.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                This is where brand guidelines become valuable. Learning about concepts like logo clearspace, minimum sizes,
                approved color combinations, and typography rules ensures your brand maintains visual integrity whether
                it appears on a billboard or a mobile screen. Consistency isn't about rigidity — it's about creating
                a cohesive visual language.
              </p>
            </div>

            {/* The Psychology of Color */}
            <div className="mb-32">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                The Psychology of Color
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Different colors evoke different emotional responses. Blue often conveys trust and stability, which is
                why financial institutions favor it. Green suggests growth and health. Orange communicates energy and
                approachability. Understanding color theory and cultural associations helps make intentional choices
                that align with your brand's personality.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Beyond individual colors, concepts like color harmony, contrast ratios, and accessibility standards
                ensure your brand is both aesthetically pleasing and functional. Learning about complementary colors,
                analogous schemes, and proper contrast makes your designs more effective across different media and audiences.
              </p>
            </div>

            {/* Typography as Communication */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Typography as Communication
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Typography does more than make text readable — it sets tone. A serif font might convey tradition and
                authority, while a sans-serif feels modern and clean. Script fonts can communicate elegance or creativity.
                Understanding type classification, font pairing, and typographic hierarchy transforms text into a powerful
                design element.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Concepts like kerning, leading, and font weights might seem subtle, but they significantly impact
                how professional and polished your brand appears. Learning these fundamentals helps you make informed
                decisions about how your brand communicates visually, ensuring every design element works together
                to create a cohesive, memorable identity.
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
