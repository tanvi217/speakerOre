import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Divider } from 'antd';

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
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div id='container' style={{ padding: '3% 15%', backgroundColor: 'white' }}>
      <Divider style={divider}>Add Subscription Plan</Divider>
      <Form
        {...formItemLayout}
        name='subscriptionForm'
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={'name'}
          label='Subscription Plan Name'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={'about'} label='About'>
          <Input />
        </Form.Item>

        <Form.Item
          name={'duration'}
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
          label='Description'
          rules={[
            {
              required: true,
            },
          ]}
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
