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
} from 'antd';
import CouponContext from '../context/coupon/couponContext';

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

  const { createCoupon, editCoupon, clearCurrent, current } = couponContext;

  const [coupon, setCoupon] = useState({
    name: '',
    code: '',
    count: '',
    option: 'amount',
    plans: 'monthly',
    percentage_value: '',
    amount_value: '',
  });

  useEffect(() => {
    if (current !== null) {
      setCoupon(current);
    } else {
      setCoupon({
        name: '',
        code: '',
        count: '',
        option: 'amount',
        plan: 'monthly',
        percentage_value: '',
        amount_value: '',
      });
    }
  }, [couponContext, current]);

  const {
    name,
    code,
    count,
    option,
    plan,
    percentage_value,
    amount_value,
  } = coupon;

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
          name: name,
          code: code,
          count: count,
          option: option,
          plan: plan,
          percentage_value: percentage_value,
          amount_value: amount_value,
        }}
      >
        <Form.Item
          name='name'
          label='Coupon Name'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='code'
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
          name='count'
          label='Count'
          rules={[
            {
              type: 'number',
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name='option'
          label='Option'
          rules={[
            {
              required: true,
            },
          ]}
          //   onValuesChange={() => setOption(value)}
        >
          <Radio.Group>
            <Radio.Button value='amount'>Amount</Radio.Button>
            <Radio.Button value='percentage'>Percentage</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {option === 'percentage' && (
          <Form.Item
            name='percentage_value'
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

        {option === 'amount' && (
          <Form.Item
            name='amount_value'
            label='Amount'
            //   disable={option === 'percentage'}
            rules={[
              {
                type: 'number',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        )}

        <Form.Item name='plan' label='Applicable plans'>
          <Checkbox.Group>
            <Row>
              <Col>
                <Checkbox
                  value='A'
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  Monthly
                </Checkbox>
              </Col>
              <Col>
                <Checkbox
                  value='B'
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  Quaterly
                </Checkbox>
              </Col>
              <Col>
                <Checkbox
                  value='C'
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  Yearly
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        {current ? (
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Edit Plan
            </Button>
          </Form.Item>
        ) : (
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Add Plan
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default CouponForm;
