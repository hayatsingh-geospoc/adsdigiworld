import React from 'react';

const Navigation = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <img
              src='/assets/company logo/adsdigiworld-logo.jpeg'
              alt='Adsdigiworld Logo'
              className='h-12 w-auto rounded-lg shadow-sm'
            />
            <span className='text-xl font-bold text-gray-800'>
              Adsdigiworld
            </span>
          </div>
          <div className='hidden md:flex space-x-6'>
            <a
              href='#hero'
              className='text-gray-600 hover:text-blue-600 transition-colors'
            >
              Home
            </a>
            <a
              href='#about'
              className='text-gray-600 hover:text-blue-600 transition-colors'
            >
              About
            </a>
            <a
              href='#services'
              className='text-gray-600 hover:text-blue-600 transition-colors'
            >
              Services
            </a>
            <a
              href='#contact'
              className='text-gray-600 hover:text-blue-600 transition-colors'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
