'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin, Calendar, Send, X } from 'lucide-react';
import Image from 'next/image';

// Lazy load Calendly only when needed
const InlineWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.InlineWidget),
  {
    ssr: false,
    loading: () => (
      <div className="h-full flex items-center justify-center">
        <div className="text-gray-600">Loading calendar...</div>
      </div>
    ),
  }
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showCalendly, setShowCalendly] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to transform your digital presence?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're just a phone call or email away.
            Book your free consultation or request a{' '}
            <a
              href="/quote"
              className="text-gray-900 font-semibold transition-colors relative inline-block"
              style={{
                textDecoration: 'none',
                backgroundImage: 'linear-gradient(to right, #06B6D4, #06B6D4)',
                backgroundSize: '100% 3px',
                backgroundPosition: '0 100%',
                backgroundRepeat: 'no-repeat',
                paddingBottom: '2px'
              }}
            >
              personalized quote
            </a>
            {' '}today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="flex items-center mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4" style={{ backgroundColor: '#E6E4E7' }}>
                <Image
                  src="/hughavery.jpg"
                  alt="Hugh Avery"
                  width={64}
                  height={64}
                  className="object-cover scale-75 -translate-y-1.5"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Hugh Avery</h3>
                <p className="text-gray-600">Founder & Lead Developer</p>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-xl mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">New Plymouth, Taranaki</p>
                  <p className="text-sm text-gray-500">Serving New Zealand</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-xl mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:contact@southernsoftwaresolutions.tech" className="text-gray-600 hover:text-blue-600 transition-colors">
                    contact@southernsoftwaresolutions.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-xl mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+61430126624" className="hover:text-blue-600 transition-colors">AU: +61 430 126 624</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+64224993402" className="hover:text-blue-600 transition-colors">NZ: +64 22 499 3402</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="font-bold text-gray-900">Book a Free Consultation</h4>
              </div>
              <p className="text-gray-600 mb-6">
                Schedule a 30-minute discovery call to discuss your project requirements and goals.
              </p>
              <button
                onClick={() => setShowCalendly(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold cursor-pointer"
              >
                Schedule Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Have questions about our services? We'll get back to you within 24 hours. You can also check our{' '}
                <a
                  href="/faq"
                  className="text-gray-900 font-semibold transition-colors relative inline-block"
                  style={{
                    textDecoration: 'none',
                    backgroundImage: 'linear-gradient(to right, #F97316, #F97316)',
                    backgroundSize: '100% 3px',
                    backgroundPosition: '0 100%',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: '2px'
                  }}
                >
                  FAQ page
                </a>
                {' '}for instant answers to common questions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Tell us about your project, goals, and requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Calendly Widget - Only rendered when opened */}
        {showCalendly && (
          <div
            className="fixed inset-0 backdrop-blur-sm bg-white/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCalendly(false)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCalendly(false)}
                className="absolute -top-12 right-0 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              <div className="h-[700px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <InlineWidget url="https://calendly.com/hughavery101/30min" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;