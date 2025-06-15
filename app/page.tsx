'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>

  );
}
