'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const RecentProjects = () => {
  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
      {/* Mobile stars */}
      <div
        className="absolute inset-0 bg-[url('/starsSection-mobile.svg')] bg-cover bg-center opacity-50 pointer-events-none md:hidden"
        aria-hidden
      />
      {/* Desktop stars */}
      <div
        className="absolute inset-0 bg-[url('/starsSection.svg')] bg-cover bg-center opacity-50 pointer-events-none hidden md:block"
        aria-hidden
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-16 bg-cyan-400"></div>
              <span className="text-cyan-400 uppercase tracking-widest text-sm font-semibold">Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Latest Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl">
              Showcasing real solutions we've built for real businesses. Here's how we help our clients succeed online.
            </p>
          </div>

          {/* Device Mockups Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Tablet Mockup - Now on LEFT */}
            <div className="relative">
              <div className="relative shadow-2xl rounded-xl overflow-hidden mb-8">
                <Image
                  src="/jordantrains-about-tablet.webp"
                  alt="JordanTrains Website - About Page"
                  width={900}
                  height={650}
                  className="w-full h-auto"
                  priority
                  style={{ maxHeight: '650px', objectFit: 'cover' }}
                />
              </div>

              {/* Project Info */}
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-5xl md:text-6xl font-bold text-white">
                    JordanTrains
                  </h3>
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>

                <p className="text-lg text-slate-400 uppercase tracking-wider font-semibold mb-3">
                  WEBSITE
                </p>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  Lead-generation focused fitness site designed to capture clients, promote online programs, and convert visitors with a clean, modern layout.
                </p>

                <a
                  href="https://jordantrains.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-lg underline underline-offset-4 transition-colors inline-block"
                >
                  jordantrains.com
                </a>
              </div>
            </div>

            {/* Laptop Mockup - Now on RIGHT */}
            <div className="relative">
              <div className="relative shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/jordantrains-homepage-laptop.webp"
                  alt="JordanTrains Website - Homepage"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
