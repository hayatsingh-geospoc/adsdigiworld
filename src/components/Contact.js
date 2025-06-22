import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form validation and submission logic here
  };

  return (
    <section id='contact' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 max-w-3xl'>
        <h2 className='text-3xl font-bold text-center mb-8'>Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className='bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in-up'
        >
          <div className='flex flex-col md:flex-row gap-6'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              className='flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all'
              required
            />
          </div>
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={formData.subject}
            onChange={handleChange}
            className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all'
            required
          />
          <textarea
            name='message'
            placeholder='Message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all'
            required
          ></textarea>
          <button
            type='submit'
            className='w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'
          >
            Send Message
          </button>
        </form>
        <div className='mt-10 w-full h-64 rounded-xl overflow-hidden shadow-lg animate-fade-in-up'>
          <iframe
            className='w-full h-full'
            frameBorder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
            src='https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed'
            title='Mumbai Location Map'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
