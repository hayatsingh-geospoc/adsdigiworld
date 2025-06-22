import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg
          className='w-12 h-12 mb-4'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M12 8v4l3 3'></path>
          <circle cx='12' cy='12' r='10'></circle>
        </svg>
      ),
      title: 'Fast Results',
      delay: '',
    },
    {
      icon: (
        <svg
          className='w-12 h-12 mb-4'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M5 13l4 4L19 7'></path>
          <circle cx='12' cy='12' r='10'></circle>
        </svg>
      ),
      title: 'Proven Expertise',
      delay: 'delay-100',
    },
    {
      icon: (
        <svg
          className='w-12 h-12 mb-4'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M12 8v4l3 3'></path>
          <circle cx='12' cy='12' r='10'></circle>
        </svg>
      ),
      title: 'Transparent Process',
      delay: 'delay-200',
    },
  ];

  return (
    <section
      id='why-choose-us'
      className='py-20 bg-gradient-to-br from-purple-50 to-blue-100'
    >
      <div className='container mx-auto px-4 max-w-4xl'>
        <h2 className='text-3xl font-bold text-center mb-12'>Why Choose Us</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center animate-fade-in-up ${feature.delay}`}
            >
              {feature.icon}
              <span className='font-semibold text-lg'>{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
