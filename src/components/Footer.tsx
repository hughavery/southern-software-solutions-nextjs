'use client';

import React from 'react';
import { LinkedinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

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
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section - Only on homepage */}
      {pathname === '/' && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Get the latest web design tips, industry insights, and exclusive offers
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors font-semibold cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Southern Software Solutions Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">Southern Software Solutions</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creating exceptional digital experiences for businesses across
                Taranaki and New Zealand.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/southern-software-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Services', id: 'services' },
                  { label: 'About', id: 'about' },
                  { label: 'Latest Work', id: 'projects' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/website-design" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link href="/software-apps" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    Software Applications
                  </Link>
                </li>
                <li>
                  <Link href="/branding" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    Branding
                  </Link>
                </li>
                <li className="pl-4">
                  <Link href="/branding/email-signatures" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer text-sm flex items-center">
                    <span className="mr-2">↳</span> Email Signatures
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    Maintenance & Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <p className="text-gray-300">New Plymouth, Taranaki</p>
                <a href="mailto:contact@southernsoftwaresolutions.tech" className="text-gray-300 hover:text-blue-400 transition-colors block">
                  contact@southernsoftwaresolutions.tech
                </a>
                <a href="tel:+61430126624" className="text-gray-300 hover:text-blue-400 transition-colors block">
                  AU: +61 430 126 624
                </a>
                <a href="tel:+64224993402" className="text-gray-300 hover:text-blue-400 transition-colors block">
                  NZ: +64 22 499 3402
                </a>
              </div>
              <Link
                href="/quote"
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer inline-block text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Southern Software Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;