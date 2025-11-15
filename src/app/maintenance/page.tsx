'use client';

import React from 'react';
import { Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Maintenance = () => {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-sky-400 to-teal-800 w-20 h-20 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Website Maintenance
              </h1>
              <p className="text-2xl text-gray-700 font-medium">
                Keep your website secure, updated, and running smoothly
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Built-In Support</h3>
                <p className="text-gray-600">
                  When we build your website, ongoing maintenance and support are included. Focus on your business while we handle the technical details.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">No Monthly Subscriptions</h3>
                <p className="text-gray-600">
                  Unlike agencies using third-party builders, our custom-coded websites have minimal ongoing costs and maximum flexibility.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Proactive Monitoring</h3>
                <p className="text-gray-600">
                  We keep your site fast, secure, and search-engine optimized with regular security monitoring and performance optimization.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees or surprise charges. You'll know exactly what's included and what you're getting.
                </p>
              </div>
            </div>

            {/* What's Included Callout */}
            <div className="bg-gradient-to-r from-sky-400 to-teal-800 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Maintenance Included With Every Build</h3>
              <p className="text-sky-50 text-lg">
                When you choose us to build your website, comprehensive maintenance and support come standard.
                We're invested in your long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Maintenance Matters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Website Maintenance Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔒</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security</h3>
              <p className="text-gray-600">Regular updates protect against vulnerabilities and cyber threats.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance</h3>
              <p className="text-gray-600">Optimization ensures fast loading times and better user experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">📈</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO</h3>
              <p className="text-gray-600">Fresh content and technical maintenance improve search rankings.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maintenance;