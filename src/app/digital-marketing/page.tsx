'use client';

import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const DigitalMarketing = () => {

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
                <span className="text-sm font-medium text-gray-500">/04.</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Digital Marketing & SEO
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                Having a great website is just the start — you need people to find it. Our digital marketing
                services help Taranaki businesses get discovered, drive traffic, and convert visitors into
                loyal customers through strategic SEO, Google Ads, and data-driven campaigns.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <span className="text-orange-500 text-2xl md:text-3xl mr-4 flex-shrink-0">•</span>
                  <p className="text-xl md:text-2xl text-gray-800 font-bold leading-relaxed">
                    A beautiful website is wasted if no one can find it — ranking on Google is how you win customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-8 pt-16">
              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">1. Search Engine Optimization (SEO)</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  Get your website ranking on Google for keywords that matter to your business. We optimize your
                  site structure, content, and technical performance to improve visibility in search results. For
                  Taranaki businesses, local SEO ensures you appear when customers search for services in New Plymouth,
                  Stratford, or Hawera.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">2. Google Ads & Pay-Per-Click (PPC)</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  Get immediate visibility with targeted Google Ads campaigns. We create, manage, and optimize
                  ad campaigns that drive qualified traffic to your site — only paying when people click. Perfect
                  for businesses that need leads fast while building long-term SEO momentum.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">3. Google Analytics & Conversion Tracking</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  Understand exactly where your traffic comes from and what drives conversions. We set up
                  comprehensive analytics tracking so you can see which marketing efforts are working, what pages
                  perform best, and where visitors drop off — giving you actionable insights to grow your business.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">4. Content Strategy & Social Media Marketing</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  Build authority and attract customers with valuable content. From blog posts that rank on Google
                  to strategic social media presence, we help you create content that resonates with your audience,
                  drives engagement, and establishes your business as a trusted expert in your industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl">

            {/* Opening Statement */}
            <div className="mb-32">
              <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-12 leading-tight">
                Understanding<br />Digital Marketing
              </h2>
              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                Modern marketing is about being discoverable when your customers are actively searching for solutions.
              </p>
            </div>

            {/* How Search Behavior Works */}
            <div className="mb-32">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                How Search Behavior Works
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Today's customers research online before making purchasing decisions. They compare options, read reviews,
                and evaluate businesses through their digital presence. This journey often happens entirely online
                before any direct contact is made.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Understanding concepts like search intent, keyword research, and user journey mapping helps you
                position your business where potential customers are looking. When your website appears in these
                searches, you're more likely to connect with people who are genuinely interested in your services.
              </p>
            </div>

            {/* The Power of Organic Rankings */}
            <div className="mb-32">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                The Power of Organic Rankings
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Search engine optimization focuses on improving your visibility in unpaid search results. Unlike
                paid advertising, organic rankings continue generating traffic long after the initial work is done.
                Learning about on-page SEO, technical optimization, and content strategy reveals how sustainable
                this approach can be.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Concepts like domain authority, backlink profiles, and page speed optimization might seem technical,
                but they're the foundation of how search engines determine which websites deserve to rank highly.
                Understanding these principles helps you make informed decisions about your online presence.
              </p>
            </div>

            {/* Measuring What Matters */}
            <div className="mb-32">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Measuring What Matters
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Digital marketing offers something traditional marketing never could: precise measurement. Through
                analytics platforms, you can track exactly where your visitors come from, which pages they view,
                and what actions they take. Learning to interpret conversion rates, bounce rates, and user engagement
                metrics transforms marketing from guesswork into a data-driven process.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Tools like Google Analytics and Search Console provide insights into how people interact with
                your website. Understanding these metrics helps identify what's working and what needs improvement,
                allowing you to refine your strategy over time.
              </p>
            </div>

            {/* Building Long-Term Value */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Building Long-Term Value
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Effective digital marketing compounds over time. Each piece of quality content you create, every
                improvement to your site structure, and all the authority you build through backlinks contributes
                to a stronger online presence. This accumulates into a digital asset that continues delivering value.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                While paid advertising provides immediate visibility, organic search builds lasting foundations.
                Many New Zealand businesses find that combining both approaches — using paid ads for quick wins
                while investing in SEO for sustainable growth — creates the most balanced marketing strategy.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        title="Ready to grow your online presence?"
        subtitle="Let's drive real results together"
        buttonText="GET STARTED"
        buttonLink="/quote?step=1"
      />

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
