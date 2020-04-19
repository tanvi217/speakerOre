import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Button, Divider, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CheckOutlined } from '@ant-design/icons';

const cardHead = {
  fontWeight: 550,
  fontSize: '1.2rem',
  //   color: '#f5cc23',
  textAlign: 'center',
};
const sym = { fontSize: '1rem', textAlign: 'center' };
const amountHead = {
  fontWeight: 500,
  fontSize: '1.75rem',
  textAlign: 'center',
};
const aboutStyle = {
  color: '#a6a6a6',
  fontSize: '0.7rem',
  textAlign: 'center',
};
const cardStyle = {
  // margin: '0 2%',
  borderRadius: '10px',
};
const buttonStyle = {
  background: '#f5cc23',
  borderColor: '#ffffff',
  color: '#ffffff',
};

const detailStyle = { background: '#ececec' };

const planItem = ({ plan, isLoading }) => {
  const { name, duration, about, description, amount } = plan;

  return (
    <Card loading={isLoading} bordered style={cardStyle}>
      <Skeleton loading={isLoading} active>
        <div style={cardHead}>{name}</div>
        <div style={amountHead}>
          <sup style={sym}>{'₹'}</sup>
          <span style={amountHead}>{amount}</span>
        </div>
        <div style={aboutStyle}>{'Per User every ' + duration}</div>
        <br />
        <div style={aboutStyle}>{about}</div>
        <br />
        <div style={amountHead}>
          <Button size='middle' style={buttonStyle} block>
            Get this
          </Button>
        </div>

        <Divider />

        <Meta
          description={description.map((el) => (
            <div key={el} style={{ margin: '2.5% 2.5%' }}>
              <CheckOutlined style={{ fontSize: '16px', color: '#328fce' }} />
              {'  '}
              {el}
              <br />
            </div>
          ))}
        ></Meta>
        <br />
      </Skeleton>
    </Card>
  );
};

export default planItem;
