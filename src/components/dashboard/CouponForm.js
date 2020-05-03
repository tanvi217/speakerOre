import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Button,
  Checkbox,
  Row,
  Col,
} from 'antd';

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

const CouponForm = () => {
  const [option, setOption] = useState('percentage');
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div id='container' style={{ padding: '3% 15%', backgroundColor: 'white' }}>
      <Form
        {...formItemLayout}
        name='coupon_form'
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name='coupon_name'
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
          name='coupon_code'
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
          name='coupon_count'
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

        <Form.Item name='plans' label='Applicable plans'>
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

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Add Coupon
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CouponForm;
