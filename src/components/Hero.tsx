'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const specialties = ['Web Design', 'Digital Marketing','SEO', 'Software Apps'];

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = specialties[currentWord];
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < current.length) {
        setDisplayedText(current.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(current.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1200);
        return;
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % specialties.length);
        return;
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWord]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden pt-24"
    >
      {/* Background effects */}
      {/* Mobile stars */}
      <div
        className="absolute inset-0 bg-[url('/stars-mobile.svg')] bg-cover bg-center opacity-50 pointer-events-none md:hidden"
        aria-hidden
      />
      {/* Desktop stars */}
      <div
        className="absolute inset-0 bg-[url('/stars.svg')] bg-cover bg-center opacity-50 pointer-events-none hidden md:block"
        aria-hidden
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        aria-hidden
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Typing headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white text-[2.7rem] md:text-[5.4rem] lg:text-[7.2rem] font-extrabold mb-10 leading-tight z-10"
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="text-gray-300 block mb-4 text-[1.8rem] md:text-[3.6rem] lg:text-[4.5rem] font-semibold">
            We specialise in
          </span>
          <span className="text-cyan-400 border-b-4 border-cyan-400 inline-block whitespace-nowrap">
            {displayedText}
            <span className="inline-block ml-1 animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-gray-400 text-2xl md:text-3xl mb-12 z-10 max-w-3xl"
        >
          Innovative digital experiences that captivate and convert.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 z-10"
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.06, boxShadow: '0 8px 30px rgba(6,182,212,0.25)' }}
            whileTap={{ scale: 0.96 }}
            className="bg-cyan-400 text-black px-8 py-3 md:px-12 md:py-5 rounded-full font-semibold text-base md:text-xl uppercase tracking-wide"
          >
            Start a Project
          </motion.button>

          <Link
            href="#projects"
            className="text-white flex items-center justify-center font-semibold text-xl hover:text-cyan-400 transition-all duration-300 px-12 py-5"
          >
            View Work
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
