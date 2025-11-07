'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WebDesignMessage from '@/components/WebDesignMessage';
import Services from '@/components/Services';
import About from '@/components/About';
import ServiceAreas from '@/components/ServiceAreas';
import RecentProjects from '@/components/RecentProjects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <WebDesignMessage />
        <RecentProjects />
        <ServiceAreas />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
