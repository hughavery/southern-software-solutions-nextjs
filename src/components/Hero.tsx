'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Play, Shield, Smartphone, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const desktopPhrases = ['Convert','Boost Sales','Win Hearts and Clicks'];
  const mobilePhrases = ['Convert','Boost Sales'];
  const phrases = isMobile ? mobilePhrases : desktopPhrases;

  const router = useRouter();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setFade(true); // Fade-in new phrase
      }, 500); // Duration of fade-out
    }, 3000); // Total time per phrase
    return () => clearInterval(interval);
  }, [phrases.length]);

  // Reset phrase index when switching between mobile/desktop to avoid out-of-bounds
  useEffect(() => {
    if (currentPhrase >= phrases.length) {
      setCurrentPhrase(0);
    }
  }, [phrases.length, currentPhrase]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWebsiteProcess = () => {
    router.push('/website-design#website-process');
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-20 animate-bounce-color"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-30 animate-bounce-color-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full opacity-10 animate-bounce-color-slow"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="bg-blue-600 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Christchurch • Serving New Zealand & Australia 
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
            We Design Websites That{' '}
            <span
              className={`bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent inline-block transform transition-all duration-500 ${
                fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              {phrases[currentPhrase]}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Transform your digital presence with stunning, high-converting websites and web applications. 
            We blend creativity with strategy to deliver exceptional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center font-semibold text-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={scrollToWebsiteProcess}
              className="group text-gray-700 px-8 py-4 rounded-full border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg flex items-center backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              See How We Work
            </button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 border border-blue-100/50 shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stronger Brand</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Designs that make your business memorable and build trust with customers.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 border border-blue-100/50 shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile-First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Optimized for all devices to maximize reach and user experience.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 border border-blue-100/50 shadow-lg hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Built to Last</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Websites that are fast, scalable, and easy to maintain long-term.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
