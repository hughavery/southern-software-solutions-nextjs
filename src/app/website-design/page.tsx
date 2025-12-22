'use client';

import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const WebsiteDesign = () => {

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
                <span className="text-sm font-medium text-gray-500">/01.</span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Custom Website Design
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Transform your vision into a digital reality with our bespoke web design solutions.
                Our Taranaki website designers don't just create pretty pages – we craft <span className="text-cyan-600 font-semibold">strategic
                digital experiences</span> that guide visitors toward <span className="text-cyan-600 font-semibold">conversion</span>.
              </p>

              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  Your website is your <span className="text-cyan-600">first impression</span> — most people will check you online before they ever call, visit, or buy.
                </p>
              </div>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-8 pt-16">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">1. Tailored to Your Business Goals</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't do cookie-cutter templates. Every design decision starts with understanding your objectives
                  and audience. From layout to colour palette, we craft responsive web design solutions that align with
                  your business strategy, ensuring your site doesn't just look great — it <span className="text-cyan-600 font-semibold">drives real results</span> and sets
                  you apart from competitors.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">2. Seamless Brand Connection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your website should feel unmistakably you. We blend your brand's personality, colours, and tone into
                  every corner of your site. Whether you already have strong visuals or need help developing them, we'll
                  ensure your online presence looks and feels cohesive across every platform.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">3. Designed for Action, Not Just Looks</h3>
                <p className="text-gray-600 leading-relaxed">
                  A beautiful website means nothing if visitors leave confused. We design clear, intuitive pathways that
                  guide users exactly where you want them to go — whether that's making a purchase, booking a call, or
                  signing up. Every element has a purpose: to <span className="text-cyan-600 font-semibold">reduce friction, boost engagement, and drive conversions</span>
                  for your business.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">4. Built for Every Screen</h3>
                <p className="text-gray-600 leading-relaxed">
                  With around <span className="text-cyan-600 font-semibold">64% of website traffic</span> in New Zealand coming from mobile devices, your site needs to look stunning on any
                  device. We build <span className="text-cyan-600 font-semibold">fully responsive designs</span> that adapt gracefully from desktop to smartphone — fast,
                  intuitive, and perfectly optimised for every screen size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center md:text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-left md:text-center">
                Where Design Meets Performance.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left md:text-center">
                We do not just build websites that look good — we build them to perform at the highest level.
                Our sites are tested and perfected using <strong>Google PageSpeed Insights</strong>, a global benchmark for website performance.
              </p>
            </div>

            {/* Performance Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Screenshot */}
              <div className="order-1 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
                  <Image
                    src="/pageSpeedInsight.png"
                    alt="PageSpeed Insights Perfect Score - 100 Performance, 95 Accessibility, 96 Best Practices, 100 SEO"
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Explanation */}
              <div className="order-2 lg:order-2 space-y-6">
                <div>
                  <div className="flex items-start mb-3">
                    <ChevronRight className="h-5 w-5 text-cyan-500 mr-2 mt-1 shrink-0" />
                    <h3 className="font-heading text-xl font-semibold text-gray-900">Perfect 100/100 Performance Score</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-7">
                    Our website achieves a flawless performance score—something only <strong>1% of websites</strong> manage
                    to accomplish. Fast load times mean visitors stay longer, engage more, and convert better.
                  </p>
                </div>

                <div>
                  <div className="flex items-start mb-3">
                    <ChevronRight className="h-5 w-5 text-cyan-500 mr-2 mt-1 shrink-0" />
                    <h3 className="font-heading text-xl font-semibold text-gray-900">Perfect 100/100 SEO Score</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-7">
                    Achieving a <strong>perfect 100/100 SEO score</strong> means your website is fully optimized for search engines—proper structure,
                    fast loading, mobile-friendly design, and clean code. This isn't just a number; it directly translates to
                    <strong> higher search rankings, more organic traffic, and better visibility</strong> when potential customers are looking for your services.
                  </p>
                </div>

                <div>
                  <div className="flex items-start mb-3">
                    <ChevronRight className="h-5 w-5 text-cyan-500 mr-2 mt-1 shrink-0" />
                    <h3 className="font-heading text-xl font-semibold text-gray-900">How We Compare</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-7">
                    The average New Zealand small business website scores between <strong>60–80</strong> on performance.
                    Many struggle with slow load times, bloated code, and poor mobile experience. Our sites consistently
                    hit <strong>95–100</strong>, putting you miles ahead of the competition.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                  <p className="text-gray-800 font-semibold mb-2">The Bottom Line:</p>
                  <p className="text-gray-700">
                    When you work with us, you're not just getting a website—you're getting a <strong>performance-optimized,
                    conversion-focused digital asset</strong> that works as hard as you do.
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-3">Don't believe us? Check it yourself:</p>
                  <a
                    href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.southernsoftwaresolutions.tech%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    Test Our Site on PageSpeed Insights
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's bring your vision to life"
        subtitle="Request your free proposal now"
        buttonText="LET'S BEGIN"
        buttonLink="/quote?step=1"
      />

      <Footer />
    </div>
  );
};

export default WebsiteDesign;