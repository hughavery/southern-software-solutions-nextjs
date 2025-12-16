'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex items-center gap-4 mb-8 justify-start"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="h-1 w-16 bg-cyan-400 shrink-0"></div>
              <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-semibold">Service Locations</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ willChange: 'transform, opacity' }}
            >
              We service the whole of New Zealand!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="text-xl text-gray-700 leading-relaxed mb-6"
              style={{ willChange: 'transform, opacity' }}
            >
              Based in <strong>Taranaki</strong> (New Plymouth), we're proud to serve businesses across the entire country.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="text-lg text-gray-600 leading-relaxed"
              style={{ willChange: 'transform, opacity' }}
            >
              From Whangārei to Dunedin, Auckland to Queenstown—no matter where your business is located, we bring professional web design and software solutions directly to you. Distance is no barrier to great service.
            </motion.p>
          </div>

          {/* Map Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex-1 flex justify-center"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="relative w-full max-w-2xl">
              <Image
                src="/mapNZ.webp"
                alt="Service areas across New Zealand - from Whangarei to Dunedin"
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
