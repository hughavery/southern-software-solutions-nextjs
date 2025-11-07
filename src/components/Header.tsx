'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home page with hash
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/50 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Southern Software Solutions Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-white">Southern Software Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Services', id: 'services' },
              { label: 'About', id: 'about' },
              { label: 'Latest Work', id: 'projects' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium cursor-pointer"
            >
              Blog
            </Link>
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-cyan-400 text-black px-6 py-2 rounded-full hover:bg-cyan-500 transition-all duration-200 transform hover:scale-105 font-medium cursor-pointer"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 cursor-pointer text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col p-6 space-y-4">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Services', id: 'services' },
              { label: 'About', id: 'about' },
              { label: 'Latest Work', id: 'projects' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-left py-2 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-left py-2 cursor-pointer"
            >
              Blog
            </Link>
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-cyan-400 text-black px-6 py-3 rounded-full hover:bg-cyan-500 transition-all duration-200 font-medium text-center mt-4 cursor-pointer"
            >
              Get Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;