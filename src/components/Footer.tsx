import React from 'react';
import { Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
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

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Southern Software Solutions</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creating exceptional digital experiences for businesses across 
                New Zealand and Australia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  <Linkedin className="h-6 w-6" />
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
                  { label: 'About', id: 'about' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Website Design</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Software Applications</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Branding</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">SEO Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Maintenance</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <p className="text-gray-300">Christchurch, New Zealand</p>
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
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Southern Software Solutions. All rights reserved.
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