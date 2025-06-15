'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="antialiased text-gray-800 bg-gray-50">
      {/* Header */}
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
