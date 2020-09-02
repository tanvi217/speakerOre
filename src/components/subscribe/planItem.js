import React, { useEffect, useState, useContext } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Divider, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CheckOutlined } from '@ant-design/icons';
import axios from 'axios';

import AuthContext from '../context/auth/authContext';

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

const PlanItem = ({ plan, isLoading }) => {
  const { name, duration, features, price } = plan;

  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const [orderId, setOrderId] = useState(null);

  const options = {
    key: 'rzp_test_9jRuiwNriCv9d4',
    amount: price,
    currency: 'INR',
    name: 'SpeakerOre',
    description: 'Subscription plan payment',
    image: 'something',
    order_id: orderId,
    prefill: {
      name: user.name,
      email: user.email,
      contact: user.phoneNumber,
    },
    handler: async function (response) {
      const {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      } = response;
      try {
        // If the payment is successful, this handler function is called
        const res = await axios.post('http://localhost:3001/api/payment', {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
        });
      } catch (e) {
        console.log(e);
      }
    },
    theme: {
      color: '#F37254',
    },
  };

  const openPayModal = () => {
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const fetchNewOrderID = async () => {
    const res = await axios.get('http://localhost:3001/api/payment');
    setOrderId(res.data.order_id);
  };

  // Get order_id
  useEffect(() => {
    fetchNewOrderID();
  }, []);

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
          <Button
            size='middle'
            style={buttonStyle}
            block
            onClick={openPayModal}
          >
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

export default PlanItem;
