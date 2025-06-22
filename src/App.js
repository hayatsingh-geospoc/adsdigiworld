import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Brands from './components/Brands';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll/fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[class*="animate-fade-in"]').forEach((el) => {
      el.classList.add(
        'opacity-0',
        'translate-y-8',
        'transition-all',
        'duration-700'
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='bg-white text-gray-900 font-sans'>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Brands />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
