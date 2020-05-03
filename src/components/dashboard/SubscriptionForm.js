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

  useEffect(() => {
    if (current !== null) {
      setPlan(plan);
    } else {
      setPlan({
        name: '',
        about: '',
        duration: '',
        description: '',
        price: '',
      });
    }
  }, [subscribeContext, current]);

  const [plan, setPlan] = useState({
    name: '',
    about: '',
    duration: '',
    description: '',
    price: '',
  });

  const { name, about, duration, description, price } = plan;

  const onSubmit = (plan) => {
    if (current === null) {
      console.log(plan);
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
      >
        <Form.Item
          name={'name'}
          value={name}
          label='Subscription Plan Name'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={'about'} value={about} label='About'>
          <Input />
        </Form.Item>

        <Form.Item
          name={'duration'}
          value={duration}
          label='Duration'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={'description'}
          value={description}
          label='Description'
          rules={[
            {
              required: true,
            },
          ]}
          extra='Seperate bullet points by comma'
        >
          <Input.TextArea autoSize />
        </Form.Item>

        <Form.Item
          name='price'
          value={price}
          label='Price'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Add Plan
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SubscriptionForm;
