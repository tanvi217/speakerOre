import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Button, Divider, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CheckOutlined } from '@ant-design/icons';

import './style.css';

const cardStyle = {
  // margin: '0 2%',
  boxShadow: '0 0 10px 1px #E8E9EC',
  borderRadius: '10px',
};

const priceToIndianSystem = (price) => {
  var x = price.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != '') lastThree = ',' + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  return res;
};

const PlanItem = ({ plan, isLoading }) => {
  const { id, name, duration, features, price } = plan;

  return (
    <Card loading={isLoading} bordered style={cardStyle}>
      <Skeleton loading={isLoading} active>
        <div className='card-head'>{name}</div>
        <div className='price-head'>
          <sup className='sym'>{'₹'}</sup>
          <span className='price-head'>{priceToIndianSystem(price)}</span>
        </div>
        <div className='about-section'>
          {'Per User every ' + duration + ' months'}
        </div>
        <br />
        <div className='price-head'>
          <Button size='middle' className='yellow-button' block>
            <Link to={`/subscribe/${id}`}>Get this</Link>
          </Button>
        </div>
        <Divider />
        {features && (
          <Meta
            description={features.split(',').map((el) => (
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

export default PlanItem;
