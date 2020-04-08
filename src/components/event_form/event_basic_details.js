import React, { Component, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, DatePicker, Input, Button } from 'antd';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

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

export class event_basic_details extends Component {
  state = {
    coordinates: {
      lat: null,
      long: null,
    },
    address: '',
  };

  onFinish = (values) => {
    this.props.nextStep();
  };

  onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };

  handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    this.setState({
      address: value,
    });
    this.setState({
      coordinates: latLng,
    });
  };

  render() {
    const {
      eventName,
      start_date_moment,
      end_date_moment,
      street,
      city,
      state,
      country,
      postalcode,
    } = this.props.values;
    const { handleChange, handleChangeDate } = this.props;
    return (
      <Form
        {...formItemLayout}
        name='basic'
        size={'middle'}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        scrollToFirstError
        initialValues={{
          eventName: eventName,
          start_date_moment: start_date_moment,
          end_date_moment: end_date_moment,
          street: street,
          city: city,
          state: state,
          country: country,
          postalcode: postalcode,
        }}
      >
        <Form.Item
          name='eventName'
          label={'Event Name'}
          rules={[
            {
              required: true,
              message: 'Please fill in event name',
            },
          ]}
        >
          <Input
            onChange={handleChange('eventName')}
            placeholder='Event Name'
          />
        </Form.Item>

        <Form.Item
          name='start_date_moment'
          label='Start Date'
          rules={[
            {
              required: true,
              message: 'Please fill in event date',
            },
          ]}
        >
          <DatePicker
            style={{ width: '345px' }}
            size='small'
            onChange={handleChangeDate('start_date')}
            placeholder='Start date'
          />
        </Form.Item>
        <Form.Item name='end_date_moment' label='End Date'>
          <DatePicker
            style={{ width: '345px' }}
            size='small'
            onChange={handleChangeDate('end_date')}
            placeholder='End date'
          />
        </Form.Item>
        <Form.Item
          name='street'
          label={'Street'}
          rules={[
            {
              required: true,
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
            },
          ]}
        >
          <Input onChange={handleChange('country')} placeholder='Country' />
        </Form.Item>
        <Form.Item
          name='postalcode'
          label={'Postal code'}
          rules={[
            {
              required: true,
              message: 'Postal code is required',
            },
          ]}
        >
          <Input
            onChange={handleChange('postalcode')}
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
  }
}

export default event_basic_details;
