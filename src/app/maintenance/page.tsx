'use client';

import React from 'react';
import { Wrench, Check } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';

const Maintenance = () => {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sky-400 to-teal-800 w-20 h-20 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
              <Wrench className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Website Maintenance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Keep your website secure, updated, and running smoothly with our maintenance packages.
              Focus on your business while we take care of your digital presence. Unlike agencies that
              use third-party builders requiring expensive monthly subscriptions, our custom-coded websites
              have minimal ongoing costs and maximum flexibility for updates. We provide proactive
              maintenance that keeps your site fast, secure, and search-engine optimized. Our comprehensive
              approach includes security monitoring, performance optimization, content updates, and
              technical support, ensuring your website continues to deliver results while you focus on
              what matters most - growing your business. With transparent pricing and no hidden fees,
              you'll know exactly what you're getting.
            </p>
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

    </div>
  );
};

export default Maintenance;