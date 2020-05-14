import React from 'react';
import Testimonial from './Testimonial';
import './style.css';

const testimonials = [
  { name: 'Alex', message: '"Delighted with this app"' },
  {
    name: 'Aerith',
    message: '"Massive upgrade to all of our social media images"',
  },
];

const Testimonials = () => {
  return (
    <div className='container'>
      <div>
        {testimonials.map((testimonial) => (
          <Testimonial details={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
