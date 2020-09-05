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
  message,
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
    number: '${label} is not a valid number!',
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

  const {
    createCoupon,
    editCoupon,
    clearCurrent,
    current,
    couponCreationError,
  } = couponContext;
  const { getSubscriptionPlans, plans } = subscribeContext;

  // const [editable, setEditable] = useState(current);

  const [coupon, setCoupon] = useState({
    name: '',
    code: '',
    count: null,
    limit: 'expiry_date',
    offerOption: 'amount',
    plans: [],
    percentage: null,
    end_date: null,
    price: null,
  });

  useEffect(() => {
    if (current !== null) {
      getSubscriptionPlans().then(() => {
        setCoupon((prevState) => {
          return {
            ...prevState,
            name: current.name,
            code: current.code,
            count: current.count,
            limit: current.end_date ? 'expiry_date' : 'count',
            offerOption: current.price ? 'amount' : 'percentage',
            plans: current.plans,
            percentage: current.percentage,
            end_date: current.end_date,
            price: current.price,
          };
        });
      });
    } else {
      getSubscriptionPlans().then(() => {
        setCoupon({
          name: '',
          code: '',
          count: null,
          limit: 'expiry_date',
          offerOption: 'amount',
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
      if (couponCreationError) {
        message.error('Coupon creation failed');
      } else {
        message.success('Coupon created successfully');
      }
    } else {
      editCoupon(coupon);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
    setCoupon({
      name: '',
      code: '',
      count: null,
      limit: 'expiry_date',
      offerOption: 'amount',
      end_date: null,
      plans: [],
      percentage: null,
      price: null,
    });
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
          'offer-option': coupon.offerOption,
          limit: coupon.limit,
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

        <Form.Item
          name='limit'
          label='Expiry Type'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button
              value='expiry_date'
              onChange={() => {
                setCoupon({ ...coupon, limit: 'expiry_date' });
              }}
            >
              Expiry Date
            </Radio.Button>
            <Radio.Button
              value='count'
              onChange={() => {
                setCoupon({ ...coupon, limit: 'count' });
              }}
            >
              Coupons count
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        {coupon.limit === 'count' && (
          <Form.Item
            name='coupon-count'
            label='Count'
            rules={[
              {
                type: 'number',
                required: coupon.limit === 'count',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        )}

        {coupon.limit === 'expiry_date' && (
          <Form.Item
            name='end-date'
            label='Expires on'
            rules={[
              {
                required: coupon.limit === 'expiry_date',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
        )}

        <Form.Item
          name='offer-option'
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
                setCoupon({ ...coupon, offerOption: 'amount' });
              }}
            >
              Amount
            </Radio.Button>
            <Radio.Button
              value='percentage'
              onChange={() => {
                setCoupon({ ...coupon, offerOption: 'percentage' });
              }}
            >
              Percentage
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        {coupon.offerOption === 'percentage' && (
          <Form.Item
            name='percentage-value'
            label='Percentage'
            rules={[
              {
                type: 'number',
                min: 0,
                max: 100,
                required: coupon.offerOption === 'percentage',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        )}

        {coupon.offerOption === 'amount' && (
          <Form.Item
            name='amount-value'
            label='Amount'
            rules={[
              {
                type: 'number',
                required: coupon.offerOption === 'amount',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        )}

        <Form.Item
          name='coupon-plans'
          label='Applicable plans'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Checkbox.Group>
            <Row>
              {plans &&
                plans.map((plan, id) => (
                  <Col key={id}>
                    <Checkbox
                      value={plan.id}
                      style={{
                        lineHeight: '32px',
                      }}
                      key={plan.id}
                    >
                      {plan.name}
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
