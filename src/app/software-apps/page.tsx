'use client';

import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const SoftwareApplications = () => {

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
                <span className="text-sm font-medium text-gray-500">/02.</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Custom Software & App Development
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                We design and build software that solves real business problems. Whether it's a web platform, internal tool, or mobile app, our solutions are built to improve efficiency, reduce manual work, and scale as your business grows.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <span className="text-cyan-500 text-2xl md:text-3xl mr-4 shrink-0">•</span>
                  <p className="text-xl md:text-2xl text-gray-800 font-bold leading-relaxed">
                    A great app should simplify processes, not complicate them.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-8 pt-16">
              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-cyan-500 mr-2 mt-1 shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">1. Mobile App Development</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  We design and develop fast, intuitive mobile apps that perform flawlessly on iOS and Android.
                  From concept to launch, our apps combine beautiful design with strong functionality — keeping
                  your users engaged and your business connected on the go.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-cyan-500 mr-2 mt-1 shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">2. Web Application Development</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  Bring your business online with powerful, secure, and responsive web apps. Whether it is a
                  dashboard, booking system, or full SaaS platform, we build scalable applications that automate
                  processes, deliver real-time data, and elevate user experience.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-cyan-500 mr-2 mt-1 shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">3. Backend Systems</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  Your data should work for you. We build reliable back-end systems that connect, manage, and
                  secure your data — ensuring your app runs smoothly and performs under pressure. From analytics
                  to cloud storage, we make your information easily accessible and actionable.
                </p>
              </div>

              <div>
                <div className="flex items-start mb-3">
                  <ChevronRight className="h-5 w-5 text-cyan-500 mr-2 mt-1 shrink-0" />
                  <h3 className="text-xl font-semibold text-gray-900">4. API Integration</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  We connect your systems so they work together seamlessly. Whether it is linking to third-party
                  software, payment gateways, or CRMs, our integrations streamline operations, reduce manual tasks,
                  and keep your business data in sync.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build your custom software?"
        subtitle="Request your free proposal now"
        buttonText="GET STARTED"
        buttonLink="/quote?step=1"
      />

      <Footer />
    </div>
  );
};

export default SoftwareApplications;
