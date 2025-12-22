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
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="h-1 w-16 bg-cyan-500"></div>
            <span className="text-cyan-600 uppercase tracking-widest text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're just a phone call or email away.
            Book your free consultation or request a{' '}
            <a
              href="/quote"
              className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors relative inline-block underline underline-offset-4 decoration-2"
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
                <h3 className="font-heading text-2xl font-bold text-gray-900">Hugh Avery</h3>
                <p className="text-gray-600">Founder & Lead Developer</p>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 rounded-xl mr-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">New Plymouth, Taranaki</p>
                  <p className="text-sm text-gray-500">Serving New Zealand</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 rounded-xl mr-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:contact@southernsoftwaresolutions.tech" className="text-sm md:text-base text-gray-600 hover:text-cyan-600 transition-colors break-all">
                    contact@southernsoftwaresolutions.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 rounded-xl mr-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+61430126624" className="hover:text-cyan-600 transition-colors">AU: +61 430 126 624</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+64224993402" className="hover:text-cyan-600 transition-colors">NZ: +64 22 499 3402</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-white mr-3" />
                  <h4 className="font-heading font-bold text-white">Book a Free Consultation</h4>
                </div>
                <p className="text-cyan-50 mb-6">
                  Schedule a 30-minute discovery call to discuss your project requirements and goals.
                </p>
                <button
                  onClick={() => setShowCalendly(true)}
                  className="bg-white text-cyan-600 px-6 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 font-semibold cursor-pointer shadow-lg"
                >
                  Schedule Call
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-8">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Have questions about our services? We'll get back to you within 24 hours. You can also check our{' '}
                <a
                  href="/faq"
                  className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors relative inline-block underline underline-offset-4 decoration-2"
                >
                  FAQ page
                </a>
                {' '}for instant answers to common questions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                  placeholder="Tell us about your project, goals, and requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
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