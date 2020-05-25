import React from 'react';

const title = {
  color: '#5d5d5d',
  letterSpacing: '0.01em',
  fontSize: '75%',
  textAlign: 'center',
};

const icon = {
  textAlign: 'center',
};

const CategoryCard = ({ details }) => {
  return (
    <div>
      <p style={icon}>{details.icon}</p>
      <p style={title}>{details.title.toUpperCase()}</p>
    </div>
  );
};

export default CategoryCard;
