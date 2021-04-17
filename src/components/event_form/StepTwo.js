import React, { Component } from 'react';
import 'antd/dist/antd.css';
import axiosInstance from '../utils/axiosInstance';
import { Form, Input, Select, AutoComplete, Button } from 'antd';

const { Option } = Select;

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

export class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curCategories: [],
      curCategoriesNames: [],
    };
  }

  componentDidMount() {
    axiosInstance
      .get(`/api/events/category`)
      .then((response) => {
        this.setState({ curCategories: response.data });
      })
      .then(() => {
        const children = [];
        for (let i = 0; i < this.state.curCategories.length; i++) {
          children.push(
            <Option key={this.state.curCategories[i].name}>
              {this.state.curCategories[i].name}
            </Option>
          );
        }
        this.setState({ curCategoriesNames: children });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onFinish = (values) => {
    this.props.nextStep();
  };

  onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value='91'>+91</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  );

  render() {
    const {
      about,
      categories,
      phone,
      website,
      email,
      description,
    } = this.props.values;
    const {
      handleChange,
      handleChangeTag,
      prevStep,
      curCategories,
    } = this.props;
    return (
      <Form
        {...formItemLayout}
        name='basic'
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        scrollToFirstError
        initialValues={{
          categories: categories,
          email: email,
          about: about,
          website: website,
          phone: phone,
          description: description,
        }}
      >
        <Form.Item name='categories' label='Categories'>
          <Select
            mode='tags'
            style={{ width: '100%' }}
            tokenSeparators={[',']}
            onChange={handleChangeTag('categories')}
            placeholder='Categories'
          >
            {this.state.curCategoriesNames}
          </Select>
        </Form.Item>
        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not a valid E-mail!',
            },
            {
              required: true,
              message: "Please input organiser's E-mail!",
            },
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
              message: 'Please input your phone number!',
            },
            {
              type: 'number',
              message: 'The input is not a valid number!',
              transform: (value) => {
                return Number(value) ? Number(value) : 0;
              },
            },
            {
              len: 10,
              message: 'Number must have 10 digits!',
            },
          ]}
        >
          <Input
            addonBefore={this.prefixSelector}
            onChange={handleChange('phone')}
            placeholder='Phone Number'
          />
        </Form.Item>
        <Form.Item
          name='website'
          rules={[{ type: 'url', message: 'Invalid URL' }]}
          label='Website'
        >
          <AutoComplete placeholder='website'>
            <Input onChange={handleChange('website')} />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          name='about'
          label='About'
          rules={[
            { required: true, message: 'Please tell us about the event' },
            { max: 200, message: 'Please do not exceed 200 words' },
          ]}
        >
          <Input.TextArea
            onChange={handleChange('about')}
            placeholder='About the event'
          />
        </Form.Item>
        <Form.Item name='description' label='Description'>
          <Input.TextArea
            onChange={handleChange('description')}
            placeholder='Details of the event'
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

export default StepTwo;
