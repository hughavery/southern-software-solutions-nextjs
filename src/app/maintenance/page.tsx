'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Maintenance = () => {

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
                <span className="text-sm font-medium text-gray-500">/03.</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Website Maintenance & Support
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Keep your website <span className="text-cyan-600 font-semibold">secure, updated, and running smoothly</span>. When we build your website, ongoing maintenance and support are included — so you can focus on your business while we handle the technical details.
              </p>

              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  Your website is a <span className="text-cyan-600">living digital asset</span> — it needs care to stay fast, secure, and effective.
                </p>
              </div>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-8 pt-16">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Security & Updates</h3>
                <p className="text-gray-600 leading-relaxed">
                  We proactively monitor your site for vulnerabilities and apply <span className="text-cyan-600 font-semibold">security patches</span> to protect against threats.
                  Regular updates ensure your website stays compatible with the latest browsers and technologies.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Performance Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Keep your site running at <span className="text-cyan-600 font-semibold">peak performance</span> with regular speed tests, code optimization, and
                  image compression. Fast sites rank better on Google and keep visitors engaged.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Content Updates & Changes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Need to update text, images, or add new pages? We handle content changes quickly, ensuring your
                  website stays <span className="text-cyan-600 font-semibold">current and relevant</span> to your audience without you needing technical skills.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Backup & Recovery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data is protected with <span className="text-cyan-600 font-semibold">regular backups</span> and disaster recovery plans. If something goes
                  wrong, we can restore your site quickly to minimize downtime and keep your business running.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <CTASection
        title="Keep your website running smoothly"
        subtitle="Request your free proposal now"
        buttonText="GET STARTED"
        buttonLink="/quote?step=1"
      />

      <Footer />
    </div>
  );
};

export default Maintenance;