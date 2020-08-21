import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, DatePicker, Input, Button } from 'antd';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import moment from 'moment';

const { RangePicker } = DatePicker;

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

const dateFormat = 'YYYY/MM/DD HH:mm';

const StepOne = (props) => {
  // console.log(props);
  const [coordinates, setCoordinates] = useState({
    coordinates: {
      latitude: null,
      longitude: null,
    },
    address: '',
  });

  const disabledDate = (current) => {
    return current && current < moment().endOf('day');
  };

  const onFinish = (values) => {
    nextStep();
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoordinates({
      address: value,
    });
    setCoordinates({
      coordinates: latLng,
    });
  };

  const {
    name,
    start_time,
    end_time,
    street,
    city,
    state,
    country,
    postalCode,
  } = props.values;

  const { handleChange, handleChangeTime, onSelectTime, nextStep } = props;

  return (
    <Form
      {...formItemLayout}
      name='basic'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      scrollToFirstError
      initialValues={{
        name: name,
        time: [moment(start_time, dateFormat), moment(end_time, dateFormat)],
        street: street,
        city: city,
        state: state,
        country: country,
        postalCode: postalCode,
      }}
    >
      <Form.Item
        name='name'
        label={'Event Name'}
        rules={[
          {
            required: true,
            message: 'Please fill in event name',
          },
        ]}
      >
        <Input
          onChange={handleChange('name')}
          placeholder='Event Name'
          name='name'
        />
      </Form.Item>

      <Form.Item
        label='Time'
        style={{ marginBottom: 0 }}
        name='time'
        rules={[
          {
            required: true,
            message: 'Please fill in time',
          },
        ]}
      >
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format='YYYY-MM-DD HH:mm'
          onChange={handleChangeTime}
          onOk={onSelectTime}
          format={dateFormat}
        />
      </Form.Item>

      <Form.Item
        name='street'
        label={'Street'}
        rules={[
          {
            required: true,
            message: 'Please fill in the street',
          },
        ]}
      >
        <Input
          id='street'
          onChange={handleChange('street')}
          placeholder='street'
        />
      </Form.Item>
      <Form.Item
        name='city'
        label={'City'}
        rules={[
          {
            required: true,
            message: 'Please fill in the city',
          },
        ]}
      >
        <Input onChange={handleChange('city')} placeholder='City' />
      </Form.Item>
      <Form.Item
        name='state'
        label={'State'}
        rules={[
          {
            required: true,
            message: 'Please fill in the state',
          },
        ]}
      >
        <Input onChange={handleChange('state')} placeholder='State' />
      </Form.Item>
      <Form.Item
        name='country'
        label={'Country'}
        rules={[
          {
            required: true,
            message: 'Please fill in the country',
          },
        ]}
      >
        <Input onChange={handleChange('country')} placeholder='Country' />
      </Form.Item>
      <Form.Item
        name='postalCode'
        label={'Postal code'}
        rules={[
          {
            required: true,
            message: 'Please fill in the postal code',
          },
        ]}
      >
        <Input
          onChange={handleChange('postalCode')}
          placeholder='Postal code'
        />
      </Form.Item>
      <div className='steps-action'>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Next
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default StepOne;
