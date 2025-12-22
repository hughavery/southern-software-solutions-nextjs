'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Dean Brown',
      role: 'Founder, Triage Plus',
      content: 'Hugh made a strong contribution to the backend systems on a large project, helping improve reliability and performance. He worked seamlessly with the wider team and provided valuable technical support throughout.',
      avatar: '/deanbrown.webp',
      rating: 5
    },
    {
      name: 'Jordan Stirling',
      role: 'Personal Trainer, Flex Fitness Christchurch',
      content: 'I wanted to attract more clients to my online personal training business. The website they developed for my brand, Jordan Trains, not only helped me gain new clients but also added a polished, professional touch to my brand.',
      avatar: '/jordanstirling.jpg',
      rating: 5
    },
    {
      name: 'James Oliver',
      role: 'Club President, Gisborne',
      content: 'We reached out from Gisborne and Hugh delivered an outstanding logo for our cricket club. Professional work and great communication throughout the process.',
      avatar: '/defaultavatar.jpeg',
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-80" />

      {/* Geometric Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="h-1 w-16 bg-cyan-400"></div>
            <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-semibold">Client Reviews</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What It's Like to Work With Us
          </h2>
          <p className="font-body text-xl text-slate-600 max-w-2xl mx-auto">
            Here's what our clients around New Zealand had to say after partnering with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Avatar & Info */}
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />

                  {/* Large Quote Icon */}
                  <div className="absolute top-8 left-8 opacity-20">
                    <Quote className="w-16 h-16 text-white" />
                  </div>

                  {/* Avatar */}
                  <div className="relative z-10 mb-6">
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Image
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-heading text-2xl font-bold text-white mb-2 relative z-10">
                    {currentTestimonial.name}
                  </h3>
                  <p className="font-body text-cyan-100 font-medium mb-4 relative z-10">
                    {currentTestimonial.role}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 relative z-10">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                </div>

                {/* Right Side - Testimonial Content */}
                <div className="p-12 flex flex-col justify-center">
                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mb-6" />

                  {/* Quote */}
                  <blockquote className="relative">
                    <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                      "{currentTestimonial.content}"
                    </p>
                  </blockquote>

                  {/* Dots Navigation */}
                  <div className="flex gap-2 mt-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentIndex
                            ? 'bg-cyan-500 w-8 h-2'
                            : 'bg-gray-300 hover:bg-cyan-400 w-2 h-2'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-cyan-50 p-4 rounded-full shadow-xl transition-all hover:scale-110 border border-gray-200 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-cyan-600" />
            </button>

            <button
              onClick={goToNext}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-cyan-50 p-4 rounded-full shadow-xl transition-all hover:scale-110 border border-gray-200 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-cyan-600" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 transition-all duration-500 rounded-full"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
