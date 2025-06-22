import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '/assets/services/affiliate-marketing.png',
      title: 'Affiliate Marketing',
      description:
        'Maximize ROI with our global affiliate network and performance-driven strategies.',
      delay: '',
    },
    {
      icon: '/assets/services/mobile-advertising.png',
      title: 'Mobile Advertising',
      description:
        'Engage users on mobile with targeted, high-impact ad formats and placements.',
      delay: 'delay-100',
    },
    {
      icon: '/assets/services/influencer-marketing.png',
      title: 'Influencer Marketing',
      description:
        'Leverage top influencers to amplify your brand and reach new audiences.',
      delay: 'delay-200',
    },
    {
      icon: '/assets/services/performance-campaigns.png',
      title: 'Performance Campaigns',
      description:
        'Drive measurable results with our data-driven, performance-focused campaigns.',
      delay: 'delay-300',
    },
    {
      icon: '/assets/services/programmatic-ads.png',
      title: 'Programmatic Ads',
      description:
        'Automate and optimize your ad spend with advanced programmatic solutions.',
      delay: 'delay-400',
    },
    {
      icon: '/assets/services/branding.png',
      title: 'Branding',
      description:
        'Build a memorable brand identity with our creative and strategic branding services.',
      delay: 'delay-500',
    },
  ];

  return (
    <section id='services' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <h2 className='text-3xl font-bold text-center mb-12'>Our Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-fade-in-up ${service.delay}`}
            >
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className='mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-600 text-center'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
