import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Select, AutoComplete, Button } from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 15
    },
    sm: {
      span: 10
    }
  }
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10
  }
};

export class event_details extends Component {
  onFinish = values => {
    this.props.nextStep();
  };

  onFinishFailed = errorInfo => {
    // console.log('Failed:', errorInfo);
  };

  prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value='91'>+91</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  );
  children = [];

  render() {
    const { about, tags, phone, website, email } = this.props.values;
    const { handleChange, handleChangeTag, prevStep } = this.props;
    return (
      <Form
        {...formItemLayout}
        name='basic'
        size={'middle'}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        scrollToFirstError
        initialValues={{
          tags: tags,
          email: email,
          about: about,
          website: website,
          phone: phone
        }}
      >
        <Form.Item name='tags' label='Tags'>
          <Select
            mode='tags'
            style={{ width: '100%' }}
            tokenSeparators={[',']}
            onChange={handleChangeTag('tags')}
            placeholder='Tags'
          >
            {this.children}
          </Select>
        </Form.Item>
        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: "Please input organiser's E-mail!"
            }
          ]}
        >
          <Input onChange={handleChange('email')} placeholder='E-mail' />
        </Form.Item>
        <Form.Item
          name='phone'
          label='Phone Number'
          rules={[
            {
              required: true,
              message: 'Please input your phone number!'
            }
          ]}
        >
          <Input
            addonBefore={this.prefixSelector}
            style={{
              width: '100%'
            }}
            onChange={handleChange('phone')}
            placeholder='Phone Number'
          />
        </Form.Item>
        <Form.Item name='website' label='Website'>
          <AutoComplete placeholder='website'>
            <Input onChange={handleChange('website')} />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          name='about'
          label='About'
          rules={[
            { required: true, message: 'Please tell us about the event' }
          ]}
        >
          <Input.TextArea
            onChange={handleChange('about')}
            placeholder='About the event'
          />
        </Form.Item>
        <div className='steps-action'>
          <Form.Item {...tailLayout}>
            <Button type='default' onClick={prevStep}>
              Previous
            </Button>
            <Button
              type='primary'
              htmlType='submit'
              style={{ marginLeft: '10px' }}
            >
              Next
            </Button>
          </Form.Item>
        </div>
      </Form>
    );
  }
}

export default event_details;
