'use client';

import React, { useEffect } from 'react';
import { Monitor, Check } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import WebsiteProcess from '@/components/WebsiteProcess';

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

  const packages = [
    {
      name: 'Basic Website',
      price: '$1,499',
      description: 'A simple, fully responsive website with essential features for small businesses and startups.',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'Custom Domain'
      ]
    },
    {
      name: 'Professional Website ',
      price: '$4,999',
      description: 'Includes everything in the Basic Website plus advanced features for growing businesses',
      features: [
        'Unlimited pages',
        'Business tool integrations',
        'Payment systems integration',
        'AI chatbot integration',
        'Calendar booking systems',
        'Blog functionality',
        'E-commerce capabilities',
        'Analytics setup',
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Monitor className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Website Design
              </h1>
              <p className="text-2xl text-gray-700 font-medium">
                Custom, responsive websites that look stunning and perform flawlessly across all devices
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hand-Coded from Scratch</h3>
                <p className="text-gray-600">
                  No Wix, no Squarespace. We build every website with clean, custom code for complete flexibility and control.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lower Ongoing Costs</h3>
                <p className="text-gray-600">
                  Custom code means no expensive monthly platform subscriptions. You own your website completely.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Built for Performance</h3>
                <p className="text-gray-600">
                  Hand-coded websites load faster and rank better in search engines than template-based solutions.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile-First Design</h3>
                <p className="text-gray-600">
                  Modern development practices ensure your site looks perfect and functions flawlessly on every device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WebsiteProcess />

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Package
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`flex-1 max-w-sm bg-white rounded-2xl p-8 shadow-lg transition-shadow hover:shadow-2xl flex flex-col relative ${
                  index === 1 ? 'border-2 border-blue-500' : ''
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                    Recommended
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{pkg.name}</h3>
                <p className="text-gray-600 mb-4 text-left">{pkg.description}</p>

                <ul className="flex-1 flex flex-col justify-between mb-8 space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {/* Pad shorter lists to equalize card height */}
                  {Array.from({ length: Math.max(...packages.map(p => p.features.length)) - pkg.features.length }).map((_, i) => (
                    <li key={`pad-${i}`} className="flex items-center invisible">
                      <Check className="h-5 w-5 mr-3" />
                      <span>Placeholder</span>
                    </li>
                  ))}
                </ul>

                {/* Price with "From" above and price centered */}
                <div className="text-center">
                  <div className="text-gray-500 text-lg">From</div>
                  <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch today to find the package that's the best fit for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-8 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesign;