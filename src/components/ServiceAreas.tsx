import React from 'react';
import Image from 'next/image';

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We service the whole of New Zealand!
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Based in <strong>Christchurch</strong> and <strong>New Plymouth</strong>, we're proud to serve businesses across the entire country.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From Whangārei to Dunedin, Auckland to Queenstown—no matter where your business is located, we bring professional web design and software solutions directly to you. Distance is no barrier to great service.
            </p>
          </div>

          {/* Map Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <Image
                src="/mapNZ.webp"
                alt="Service areas across New Zealand - from Whangarei to Dunedin"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
