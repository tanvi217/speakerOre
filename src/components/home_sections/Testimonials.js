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
      <div className='container_inner'>
        <div>
          {testimonials.map((testimonial, i) => (
            <Testimonial details={testimonial} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
