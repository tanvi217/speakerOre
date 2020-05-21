import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { List, Button, Form } from 'antd';

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10,
  },
};

export class confirm extends Component {
  render() {
    const {
      eventName,
      start_date,
      end_date,
      start_time,
      end_time,
      street,
      city,
      state,
      country,
      postalcode,
      about,
      tags,
      phone,
      website,
      email,
    } = this.props.values;
    const data = [
      ['Event Name', eventName],
      ['Start Date', start_date],
      ['End Date', end_date],
      ['Start Time', start_time],
      ['End Time', end_time],
      [
        'Full Address',
        street +
          ', ' +
          city +
          ', ' +
          state +
          '\n' +
          country +
          '\n' +
          postalcode,
      ],
      ['About', about],
      ['Tags', tags],
      ['Phone', phone],
      ['Website', website],
      ['Email', email],
    ];
    return (
      <div id='container' style={{ padding: '0px 10px 10px 10px' }}>
        <List
          size='default'
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item[0]} description={item[1]} />
            </List.Item>
          )}
        />
        <div className='steps-action'>
          <Form.Item {...tailLayout}>
            <Button type='default' onClick={this.props.prevStep}>
              Previous
            </Button>
            <Button
              type='primary'
              onClick={this.props.submit}
              style={{ marginLeft: '10px' }}
            >
              Done
            </Button>
          </Form.Item>
        </div>
      </div>
    );
  }
}

export default confirm;
