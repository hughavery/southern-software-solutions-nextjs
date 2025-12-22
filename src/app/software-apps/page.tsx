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
            {/* Left Column - Heading */}
            <div>
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-500">/02.</span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Custom Software & App Development
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                We design and build software that <span className="text-cyan-600 font-semibold">solves real business problems</span>. Whether it's a web platform, internal tool, or mobile app, our solutions are built to improve <span className="text-cyan-600 font-semibold">efficiency</span>, reduce manual work, and <span className="text-cyan-600 font-semibold">scale</span> as your business grows.
              </p>

              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  A great app should <span className="text-cyan-600">simplify processes</span>, not complicate them.
                </p>
              </div>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-8 pt-16">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">1. Mobile App Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  We design and develop fast, intuitive mobile apps that perform flawlessly on <span className="text-cyan-600 font-semibold">iOS and Android</span>.
                  From concept to launch, our apps combine beautiful design with strong functionality — keeping
                  your users engaged and your business connected on the go.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">2. Web Application Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bring your business online with powerful, secure, and responsive web apps. Whether it's a
                  dashboard, booking system, or full SaaS platform, we build <span className="text-cyan-600 font-semibold">scalable applications</span> that automate
                  processes, deliver real-time data, and elevate user experience.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">3. Backend Systems</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data should work for you. We build <span className="text-cyan-600 font-semibold">reliable back-end systems</span> that connect, manage, and
                  secure your data — ensuring your app runs smoothly and performs under pressure. From analytics
                  to cloud storage, we make your information easily accessible and actionable.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">4. API Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  We connect your systems so they work together seamlessly. Whether it's linking to third-party
                  software, payment gateways, or CRMs, our integrations <span className="text-cyan-600 font-semibold">streamline operations</span>, reduce manual tasks,
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
