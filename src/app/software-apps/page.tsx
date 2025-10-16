'use client';

import React from 'react';
import { Smartphone, Check } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import SoftwareProcess from '@/components/SoftwareProcess';

const SoftwareApplications = () => {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
              <Smartphone className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Software Apps
            </h1>
            <p className="text-2xl text-gray-700 font-medium mb-8">
              Custom software applications built to grow with your business
            </p>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Built from Scratch</h3>
                <p className="text-gray-600">
                  We craft custom applications tailored to your exact needs, giving you full ownership without off-the-shelf constraints.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable & Secure</h3>
                <p className="text-gray-600">
                  Built with secure backends and modern frameworks that grow with your business demands.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Seamless Integration</h3>
                <p className="text-gray-600">
                  Connect with your existing tools and workflows. We build integrations that automate processes and boost productivity.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Features</h3>
                <p className="text-gray-600">
                  From customer portals to inventory systems and advanced AI analytics, we build software that helps you operate smarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SoftwareProcess />

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Software App?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your software application needs and turn your ideas into reality.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SoftwareApplications;