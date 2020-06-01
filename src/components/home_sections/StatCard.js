import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const StatCard = ({ details }) => {
  return (
    <Card className='card-style'>
      <p className='title'>{details.title.toUpperCase()}</p>
      <p className='stat'>
        {details.number}
        <ArrowUpOutlined style={{ color: '#328fce' }} />
      </p>
      <p className='subtitle'>{details.subtitle.toUpperCase()}</p>
    </Card>
  );
};

export default StatCard;
