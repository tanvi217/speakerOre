import React from 'react';

const title = {
  color: '#7e7e7e',
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
