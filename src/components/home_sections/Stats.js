import React from 'react';

import { Card } from 'antd';

import StatCard from './StatCard';
import './style.css';

const stat_cards = [
  { id: 1, title: 'Users', number: '1000', subtitle: 'Across the globe' },
  { id: 2, title: 'Events', number: '1230', subtitle: 'Across the globe' },
  { id: 3, title: 'Countries', number: '10', subtitle: 'Across the globe' },
];

const Stats = () => {
  return (
    <div className='container'>
      <h1 className='stats_heading'>SpeakerOre Facts</h1>
      <p className='subheading'>Stay informed wherever you are.</p>
      <div className='cards'>
        {stat_cards.map((stat) => (
          <StatCard key={stat.id} details={stat}>
            {stat}
          </StatCard>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Stats;
