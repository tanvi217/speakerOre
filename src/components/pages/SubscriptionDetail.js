import React, {
  Fragment,
  useEffect,
  useState,
  useContext,
  useRef,
} from 'react';
import axios from 'axios';

import {
  Card,
  Button,
  Divider,
  Skeleton,
  Descriptions,
  Space,
  Input,
  message,
  Alert,
} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CheckOutlined } from '@ant-design/icons';

import Navbar from '../layout/Navbar';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import Footer from '../layout/Footer';
import SubscribeContext from '../context/subscribe/subscribeContext';
import AuthContext from '../context/auth/authContext';
import PaymentContext from '../context/payment/paymentContext';

import './style.css';

const { Search } = Input;

const priceToIndianSystem = (price) => {
  var x = price.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != '') lastThree = ',' + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  return res;
};

const SubscriptionDetail = ({ match }) => {
  useEffect(() => {
    getSubscriptionPlan(match.params.subscription_id);
  }, []);

  const subscribeContext = useContext(SubscribeContext);
  const authContext = useContext(AuthContext);
  const paymentContext = useContext(PaymentContext);

  const {
    getSubscriptionPlan,
    plan,
    isLoading,
    amount,
    couponError,
    getUpdatedPrice,
  } = subscribeContext;

  const { startPayment, paymentError } = paymentContext;

  const { user } = authContext;

  const couponCode = useRef('');

  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const openPayModal = () => {
    const rzp = new window.Razorpay({
      key: 'rzp_test_9jRuiwNriCv9d4',
      amount: amount * 100,
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
          startPayment({
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
          });
        } catch (e) {
          console.log(e);

          message.error('Payment failed');
        }
      },
      theme: {
        color: '#F37254',
      },
    });
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

  const updatePrice = async () => {
    try {
      // console.log(couponCode.current.state.value);
      const res = await getUpdatedPrice(
        match.params.subscription_id,
        couponCode.current.state.value
      );
    } catch (err) {
      setError('Invalid coupon code');
    }
  };

  // Get order_id
  useEffect(() => {
    fetchNewOrderID();
  }, []);

  return (
    <Fragment>
      <Navbar heading={'Subscription Detail'} />
      <BreadcrumbHead heading={['Subscriptions', 'Subscription Detail']} />
      <div className='subscription-detail'>
        <div className='detail-section'>
          <Card loading={isLoading} bordered className='plan-card'>
            <Skeleton loading={isLoading} active>
              {plan && (
                <div>
                  <div className='card-head'>{plan.name}</div>
                  <div className='price-head'>
                    <sup className='sym'>{'₹'}</sup>
                    <span className='price-head'>
                      {priceToIndianSystem(plan.price)}
                    </span>
                  </div>
                  <div className='about-section'>
                    {'Per User every ' + plan.duration + ' months'}
                  </div>
                  <br />
                  <Divider />
                  {plan.features && (
                    <Meta
                      description={plan.features.split(',').map((el) => (
                        <div key={el} style={{ margin: '2.5% 2.5%' }}>
                          <CheckOutlined
                            style={{ fontSize: '16px', color: '#328fce' }}
                          />
                          {el}
                          <br />
                        </div>
                      ))}
                    ></Meta>
                  )}
                </div>
              )}

              <br />
            </Skeleton>
          </Card>
        </div>

        <div className='order-section'>
          <Card loading={isLoading} bordered className='plan-card'>
            {plan && (
              <Skeleton loading={isLoading} active>
                <Space direction='vertical'>
                  <Descriptions
                    bordered
                    title='Order Summary'
                    column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                  >
                    <Descriptions.Item label='Total'>
                      {priceToIndianSystem(plan.price)}
                    </Descriptions.Item>
                    <Descriptions.Item label='Coupon Savings'>
                      {priceToIndianSystem(plan.price - amount)}
                    </Descriptions.Item>
                    <Descriptions.Item label='Order Total'>
                      {priceToIndianSystem(amount)}
                    </Descriptions.Item>
                  </Descriptions>

                  <Button
                    block
                    className='yellow-button'
                    onClick={openPayModal}
                  >
                    Proceed to checkout
                  </Button>
                  <Search
                    placeholder='Apply coupon code'
                    enterButton='APPLY'
                    size='medium'
                    ref={couponCode}
                    onSearch={updatePrice}
                    // onSearch={value => console.log(value)}
                  />
                  {(couponError || error) && (
                    <Alert message='Invalid coupon' type='error' />
                  )}
                </Space>
              </Skeleton>
            )}
          </Card>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default SubscriptionDetail;
