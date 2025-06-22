import React from 'react';

const Brands = () => {
  const brands = [
    {
      src: 'https://logo.clearbit.com/dream11.com',
      alt: 'Dream11 Logo',
    },
    {
      src: 'https://logo.clearbit.com/vcommission.com',
      alt: 'vCommission Logo',
    },
    {
      src: 'https://logo.clearbit.com/yepads.com',
      alt: 'Yep Ads Logo',
    },
    {
      src: 'https://logo.clearbit.com/gomobile.ai',
      alt: 'GoMobile.ai Logo',
    },
    {
      src: 'https://logo.clearbit.com/mobx.agency',
      alt: 'MobX Agency Logo',
    },
  ];

  return (
    <section id='case-studies' className='py-20 bg-white'>
      <div className='container mx-auto px-4 max-w-5xl'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Brands We've Worked With
        </h2>
        <div className='flex flex-wrap justify-center items-center gap-8'>
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className='h-16 object-contain animate-fade-in-up'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
