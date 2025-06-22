import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: 'Adsdigiworld helped us scale our campaigns and reach new heights. Their team is proactive and results-driven!',
      author: 'Marketing Lead, Dream11',
      delay: '',
    },
    {
      text: 'Professional, creative, and always on time. Highly recommend for digital growth!',
      author: 'Brand Manager, Brand 2',
      delay: 'delay-100',
    },
    {
      text: 'Their influencer marketing strategies are top-notch. We saw real engagement!',
      author: 'Social Lead, Brand 3',
      delay: 'delay-200',
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id='testimonials' className='py-20 bg-white'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          What Our Clients Say
        </h2>
        <div className='relative'>
          <div className='overflow-hidden'>
            <div
              className='flex transition-transform duration-700'
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                willChange: 'transform',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className='min-w-full px-4 animate-fade-in-up'>
                  <div className='bg-gray-50 rounded-xl shadow-lg p-8 text-center'>
                    <p className='text-lg italic mb-4'>"{testimonial.text}"</p>
                    <span className='font-semibold'>
                      - {testimonial.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center mt-6 gap-2'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-blue-400' : 'bg-blue-200'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
