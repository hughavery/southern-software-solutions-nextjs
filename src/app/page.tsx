'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WebDesignMessage from '@/components/WebDesignMessage';
import StructuredData from '@/components/StructuredData';

// Lazy load below-the-fold components for better performance
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="min-h-screen bg-gray-900" />
});
const RecentProjects = dynamic(() => import('@/components/RecentProjects'));
const ServiceAreas = dynamic(() => import('@/components/ServiceAreas'));
const About = dynamic(() => import('@/components/About'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <WebDesignMessage />
        <Services />
        <RecentProjects />
        <ServiceAreas />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
