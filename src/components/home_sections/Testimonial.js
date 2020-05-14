import React from 'react';
import { StarFilled } from '@ant-design/icons';

const name = {
  color: '#7e7e7e',
  letterSpacing: '0.1em',
  fontWeight: 550,
};

const message = {
  fontSize: '250%',
};

const stars = {
  fontSize: '150%',
  color: '#328fce',
};

const Testimonial = ({ details }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={message}>{details.message}</p>
      <span>
        {' '}
        <StarFilled style={stars} />
        <StarFilled style={stars} />
        <StarFilled style={stars} />
        <StarFilled style={stars} />
        <StarFilled style={stars} />{' '}
      </span>
      <p style={name}>{details.name}</p>
    </div>
  );
};

export default Testimonial;
