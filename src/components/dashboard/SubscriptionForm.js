import React, { useState, useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Divider } from 'antd';
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

const SubscriptionForm = () => {
  const subscribeContext = useContext(SubscribeContext);

  const {
    createSubscriptionPlan,
    editSubscriptionPlan,
    clearCurrent,
    current,
  } = subscribeContext;

  const [plan, setPlan] = useState({
    name: '',
    about: '',
    duration: '',
    features: '',
    price: '',
  });

  useEffect(() => {
    if (current !== null) {
      setPlan(current);
      console.log(plan);
    } else {
      setPlan({
        name: '',
        about: '',
        duration: null,
        features: null,
        price: '',
      });
    }
  }, [subscribeContext, current]);

  const { name, about, duration, features, price } = plan;

  console.log(plan);

  const onSubmit = (plan) => {
    if (current === null) {
      createSubscriptionPlan(plan);
    } else {
      editSubscriptionPlan(plan);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div id='container' style={{ padding: '3% 15%', backgroundColor: 'white' }}>
      {current ? (
        <Divider style={divider}>Edit Subscription Plan</Divider>
      ) : (
        <Divider style={divider}>Add Subscription Plan</Divider>
      )}
      <Form
        {...formItemLayout}
        name='subscriptionForm'
        onFinish={onSubmit}
        validateMessages={validateMessages}
        scrollToFirstError
        initialValues={{
          name: name,
          about: about,
          duration: duration,
          features: features,
          price: price,
        }}
      >
        <Form.Item
          name='name'
          label='Subscription Plan Name'
          rules={[
            {
              required: true,
            },
          ]}
          value={name}
        >
          <Input />
        </Form.Item>

        <Form.Item name={'about'} value={about} label='About'>
          <Input />
        </Form.Item>

        <Form.Item
          name='duration'
          label='Duration'
          rules={[
            {
              required: true,
            },
          ]}
          value={duration}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name='features'
          label='Features'
          rules={[
            {
              required: true,
            },
          ]}
          extra='Seperate bullet points by comma'
          value={features}
        >
          <Input.TextArea autoSize />
        </Form.Item>

        <Form.Item
          name='price'
          label='Price'
          rules={[
            {
              required: true,
            },
          ]}
          value={price}
        >
          <InputNumber />
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

export default SubscriptionForm;
