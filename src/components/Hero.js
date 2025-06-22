import React from 'react';

const Hero = () => {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden pt-16'
    >
      <div
        className='absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover opacity-20'
        style={{ backgroundImage: "url('/assets/sections/hero.jpg')" }}
      ></div>
      <div className='relative z-10 flex flex-col items-center text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down'>
          Adsdigiworld
        </h1>
        <p className='text-lg md:text-2xl font-medium mb-6 animate-fade-in-up'>
          Empowering Brands. Driving Results.
        </p>
        <span className='inline-block px-6 py-3 bg-white/10 rounded-full border border-white/30 text-base md:text-lg font-semibold tracking-wider animate-fade-in'>
          Your Digital Advertising Partner
        </span>
      </div>
      <svg
        className='absolute bottom-0 left-0 w-full'
        height='80'
        viewBox='0 0 1440 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='#fff'
          fillOpacity='1'
          d='M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,69.3C672,64,768,96,864,117.3C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z'
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
