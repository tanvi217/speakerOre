import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { List, Button, Form, message } from 'antd';
import EventContext from '../context/events/eventContext';

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10,
  },
};

const Confirmation = ({ values, prevStep }) => {
  const {
    name,
    start_time,
    end_time,
    street,
    city,
    state,
    country,
    postalCode,
    about,
    categories,
    phone,
    website,
    email,
    description,
    latitude,
    longitude,
  } = values;

  const eventContext = useContext(EventContext);

  const { createEvent } = eventContext;

  const onSubmitForm = async () => {
    const formData = {
      name,
      street,
      city,
      state,
      country,
      start_time,
      end_time,
      website,
      email,
      phone,
      about,
      description,
      categories,
      latitude,
      longitude,
      postalCode,
    };
    createEvent(formData).then(() => {
      message.success('Event has been successfully submitted');
    });
    // const responseStatus = await createEvent(formData);
    // console.log(responseStatus);
    // if (responseStatus == 201) {
    //   message.success('Event has been successfully submitted');
    // } else {
    //   message.error('Error in form submission');
    // }
  };

  const data = [
    ['Event Name', name],
    ['Start Time', start_time],
    ['End Time', end_time],
    [
      'Full Address',
      street + ', ' + city + ', ' + state + '\n' + country + '\n' + postalCode,
    ],
    ['About', about],
    ['Tags', categories],
    ['Phone', phone],
    ['Website', website],
    ['Email', email],
    ['Description', description],
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
          <Button type='default' onClick={prevStep}>
            Previous
          </Button>
          <Button
            type='primary'
            onClick={onSubmitForm}
            style={{ marginLeft: '10px' }}
          >
            Done
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Confirmation;
