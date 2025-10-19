'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
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
        <Services />
        <About />
        <RecentProjects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
