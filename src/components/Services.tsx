import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      icon: '/design.png',
      title: 'Website Design',
      description: 'Custom, hand-coded websites built with modern technologies. Fast, responsive, and optimised for search engines.',
      link: '/website-design'
    },
    {
      icon: '/software.png',
      title: 'Software Applications',
      description: 'Powerful web and mobile applications tailored to your business needs with seamless integrations.',
      link: '/software-apps'
    },
    {
      icon: '/branding.png',
      title: 'Branding',
      description: 'Professional branding services including logo design, email signatures, and business photography to elevate your brand identity.',
      link: '/branding'
    },
    {
      icon: '/digitalMarketing.png',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing services including SEO, Google Analytics, Google Ads, social media marketing, and more to grow your online presence.',
      link: '/digital-marketing'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="max-w-lg">
            <div className="mb-8">
              <p className="text-cyan-400 text-sm font-semibold tracking-wider mb-6">
                OUR SERVICES
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                WHAT WE <span className="text-cyan-400">DO?</span>
              </h2>
              <div className="w-32 h-1 bg-cyan-400 mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed">
                We specialise in creating exceptional digital experiences for businesses across
                Taranaki and New Zealand. From custom website design to powerful software applications,
                we build solutions that drive real results for your business.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our team combines technical expertise with strategic thinking to deliver projects
                that not only look great but also achieve your business goals. Whether you need
                a brand new website or ongoing support, we are here to help you succeed online.
              </p>
            </div>
          </div>

          {/* Right Column - Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 border border-gray-700/50 group cursor-pointer relative"
              >
                {/* Number indicator */}
                <div className="absolute top-6 right-6 text-gray-600 text-sm font-medium">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="mb-6 mt-4">
                  <div className="w-20 h-20 mb-6 relative">
                    {/* Rotating neon border */}
                    <div className="absolute inset-0 rounded-lg animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-cyan-300/50 to-transparent blur-sm group-hover:blur-lg"></div>
                    </div>
                    {/* Additional glow layer on hover */}
                    <div className="absolute inset-0 rounded-lg animate-spin-slow opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-300 via-transparent to-transparent blur-md"></div>
                    </div>
                    {/* Static glow */}
                    <div className="absolute inset-0 rounded-lg bg-cyan-400/10 group-hover:bg-cyan-400/30 transition-all duration-300"></div>
                    {/* Icon */}
                    <div className="relative z-10">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
