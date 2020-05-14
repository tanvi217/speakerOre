import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const card_style = {
  borderRadius: '5px',
  boxShadow: '0 0 10px 1px #E8E9EC',
};

const title = {
  color: '#7e7e7e',
  letterSpacing: '0.1em',
};

const stat = {
  color: 'black',
  fontSize: '250%',
  fontWeight: 'bold',
};

const subtitle = {
  color: '#5d5d5d',
  letterSpacing: '0.1em',
  fontWeight: 550,
};

const StatCard = ({ details }) => {
  return (
    <Card style={card_style}>
      <p style={title}>{details.title.toUpperCase()}</p>
      <p style={stat}>
        {details.number}
        <ArrowUpOutlined style={{ color: '#328fce' }} />
      </p>
      <p style={subtitle}>{details.subtitle.toUpperCase()}</p>
    </Card>
  );
};

export default StatCard;
