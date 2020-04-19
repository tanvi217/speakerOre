import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Divider } from 'antd';

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
    url: '${label} is not a valid url!',
  },
};

const divider = {
  color: '#a6a6a6',
};

const SocialMediaForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div id='container' style={{ padding: '3% 15%', backgroundColor: 'white' }}>
      <Divider style={divider}>Social Media Handles</Divider>
      <Form
        {...formItemLayout}
        name='socialMediaForm'
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={'fb'}
          label='Facebook Link'
          rules={[
            {
              type: 'url',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={'insta'}
          label='Instagram Link'
          rules={[
            {
              type: 'url',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={'linkedin'}
          label='LinkedIn Link'
          rules={[
            {
              type: 'url',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={'twitter'}
          label='Twitter Link'
          rules={[
            {
              type: 'url',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Add Link
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SocialMediaForm;
