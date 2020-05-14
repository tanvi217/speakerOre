import React from 'react';
import {
  MobileFilled,
  MedicineBoxFilled,
  ExperimentFilled,
  CarFilled,
  MoneyCollectFilled,
} from '@ant-design/icons';
import CategoryCard from './CategoryCard';
import './style.css';

const icons = {
  fontSize: '300%',
  color: '#328fce',
  background: '-webkit-linear-gradient(#f5cc23, #f39213)',
  webkitBackgroundClip: 'text',
  webkitTextFillColor: 'transparent',
};

const category_icons = [
  { title: 'Health & fitness', icon: <MedicineBoxFilled style={icons} /> },
  { title: 'Technology', icon: <MobileFilled style={icons} /> },
  { title: 'Science', icon: <ExperimentFilled style={icons} /> },
  { title: 'Travel', icon: <CarFilled style={icons} /> },
  { title: 'Savings', icon: <MoneyCollectFilled style={icons} /> },
];

const Categories = () => {
  return (
    <div className='container'>
      <h1 className='stats_heading'>Which categories interest you?</h1>
      <p className='subheading'>
        Discover events for you and get great recommendations when you select
        your interests.
      </p>
      <div className='icon-category'>
        {category_icons.map((category) => (
          <CategoryCard details={category} />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Categories;
