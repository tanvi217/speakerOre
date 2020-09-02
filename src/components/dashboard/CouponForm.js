import React, { useState, useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  InputNumber,
  Checkbox,
  Button,
  Radio,
  Row,
  Col,
  Divider,
  DatePicker,
} from 'antd';
import CouponContext from '../context/coupon/couponContext';
import SubscribeContext from '../context/subscribe/subscribeContext';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 15,
    },
    sm: {
      span: 10,
    },
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const divider = {
  color: '#a6a6a6',
};

const CouponForm = () => {
  const couponContext = useContext(CouponContext);
  const subscribeContext = useContext(SubscribeContext);

  const { createCoupon, editCoupon, clearCurrent, current } = couponContext;
  const { getSubscriptionPlans, plans } = subscribeContext;

  const [allPlans, setAllPlans] = useState([]);
  const [allPlanIds, setAllPlanIds] = useState([]);

  const [coupon, setCoupon] = useState({
    name: '',
    code: '',
    count: null,
    option: 'amount',
    plans: allPlans,
    percentage: null,
    end_date: null,
    price: null,
  });

  useEffect(() => {
    if (current !== null) {
      getSubscriptionPlans()
        .then(() => {
          let i = 0;
          for (i = 0; i < plans.length; i++) {
            setAllPlans([...allPlans, plans[i].name]);
            setAllPlanIds((prevArray) => [...prevArray, plans[i].id]);
          }
        })
        .then(() => {
          setCoupon(current);
        });
    } else {
      getSubscriptionPlans()
        .then(() => {
          let i = 0;
          for (i = 0; i < plans.length; i++) {
            setAllPlans((prevArray) => [...prevArray, plans[i].name]);
            setAllPlanIds((prevArray) => [...prevArray, plans[i].id]);
          }
        })
        .then(() => {
          setCoupon({
            name: '',
            code: '',
            count: null,
            option: 'amount',
            end_date: null,
            plans: [],
            percentage: null,
            price: null,
          });
        });
    }
  }, [couponContext, current]);

  const onFinish = (coupon) => {
    if (current === null) {
      createCoupon(coupon);
    } else {
      editCoupon(coupon);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div id='container' style={{ padding: '3% 15%', backgroundColor: 'white' }}>
      {current ? (
        <Divider style={divider}>Edit Discount Coupon</Divider>
      ) : (
        <Divider style={divider}>Add Discount Coupon</Divider>
      )}
      <Form
        {...formItemLayout}
        name='coupon_form'
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={{
          'coupon-name': coupon.name,
          'coupon-code': coupon.code,
          'coupon-count': coupon.count,
          'end-date': coupon.end_date,
          options: coupon.option,
          'coupon-plans': coupon.plans,
          'percentage-value': coupon.percentage,
          'amount-value': coupon.price,
        }}
      >
        <Form.Item name='coupon-name' label='Coupon Name'>
          <Input />
        </Form.Item>
        <Form.Item
          name='coupon-code'
          label='Coupon Code'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='coupon-count' label='Count'>
          <InputNumber />
        </Form.Item>
        <Form.Item name='end-date' label='Expires on'>
          <DatePicker />
        </Form.Item>

        <Form.Item
          name='options'
          label='Option'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button
              value='amount'
              onChange={() => {
                setCoupon({ ...coupon, option: 'amount' });
              }}
            >
              Amount
            </Radio.Button>
            <Radio.Button
              value='percentage'
              onChange={() => {
                setCoupon({ ...coupon, option: 'percentage' });
              }}
            >
              Percentage
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        {coupon.option === 'percentage' && (
          <Form.Item
            name='percentage-value'
            label='Percentage'
            rules={[
              {
                type: 'number',
                min: 0,
                max: 100,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        )}

        {coupon.option === 'amount' && (
          <Form.Item
            name='amount-value'
            label='Amount'
            rules={[
              {
                type: 'number',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        )}

        <Form.Item name='coupon-plans' label='Applicable plans'>
          <Checkbox.Group>
            <Row>
              {allPlans.map((plan, id) => (
                <Col key={id}>
                  <Checkbox
                    value={plan}
                    style={{
                      lineHeight: '32px',
                    }}
                    key={id}
                  >
                    {plan}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>

        {current ? (
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Edit coupon
            </Button>
          </Form.Item>
        ) : (
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Add coupon
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default CouponForm;
