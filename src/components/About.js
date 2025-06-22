import React from 'react';

const About = () => {
  return (
    <section id='about' className='py-20 bg-white'>
      <div className='container mx-auto px-4 max-w-5xl'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <img
            src='/assets/sections/about.jpg'
            alt='Adsdigiworld Teamwork'
            className='rounded-xl shadow-lg w-full md:w-1/2 object-cover animate-fade-in-left'
          />
          <div className='w-full md:w-1/2 animate-fade-in-right'>
            <h2 className='text-3xl font-bold mb-4'>About Adsdigiworld</h2>
            <p className='mb-4'>
              Adsdigiworld is a leading digital advertising agency, trusted by
              top brands like{' '}
              <span className='font-semibold text-blue-600'>Dream11</span>. Our
              mission is to deliver innovative, data-driven campaigns that drive
              real business growth for our clients.
            </p>
            <ul className='list-disc pl-5 space-y-2 text-gray-700'>
              <li>Expertise in multi-channel digital marketing</li>
              <li>Proven track record with global brands</li>
              <li>Results-focused, creative, and transparent</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
