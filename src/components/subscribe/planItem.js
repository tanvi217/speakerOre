import React from 'react';
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
const priceHead = {
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
  boxShadow: '0 0 10px 1px #E8E9EC',
  borderRadius: '10px',
};
const buttonStyle = {
  background: '#f5cc23',
  borderColor: '#ffffff',
  color: '#ffffff',
};

const planItem = ({ plan, isLoading }) => {
  const { name, duration, features, price } = plan;

  return (
    <Card loading={isLoading} bordered style={cardStyle}>
      <Skeleton loading={isLoading} active>
        <div style={cardHead}>{name}</div>
        <div style={priceHead}>
          <sup style={sym}>{'₹'}</sup>
          <span style={priceHead}>{price}</span>
        </div>
        <div style={aboutStyle}>{'Per User every ' + duration}</div>
        <br />
        <div style={priceHead}>
          <Button size='middle' style={buttonStyle} block>
            Get this
          </Button>
        </div>
        <Divider />
        {features && (
          <Meta
            description={features.map((el) => (
              <div key={el} style={{ margin: '2.5% 2.5%' }}>
                <CheckOutlined style={{ fontSize: '16px', color: '#328fce' }} />
                {el}
                <br />
              </div>
            ))}
          ></Meta>
        )}

        <br />
      </Skeleton>
    </Card>
  );
};

export default planItem;
