import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Loader from './components/Loader';
import Backdrop from './components/Backdrop';
import LedgerScene from './components/LedgerScene';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Industries from './components/Industries';
import Stats from './components/Stats';
import Process from './components/Process';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 450);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="relative grain">
      <Loader />
      <Backdrop />
      <LedgerScene />
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald via-emerald-light to-gold" />
      <Navbar />
      <main className="relative z-[2]">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChoose />
        <Industries />
        <Stats />
        <Process />
        <Insights />
        <Testimonials />
        <FAQ />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
