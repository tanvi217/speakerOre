import React, { useContext, useEffect, useState } from 'react';
import EventItem from './EventItem';
import EventContext from '../context/events/eventContext';

import { Spin, Input } from 'antd';

const { Search } = Input;

const Events = () => {
  const eventContext = useContext(EventContext);

  const [text, setText] = useState('');

  const { events, isLoading, getEvents, getSearchEvents } = eventContext;

  useEffect(() => {
    if (text === '') {
      getEvents();
    } else {
      getSearchEvents(text);
      setText('');
    }
    console.log(events);
  }, []);

  const onSubmit = (e) => {
    // e.preventDefault();
    if (text !== '') {
      getSearchEvents(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  if (isLoading) return <Spin tip='Loading...'></Spin>;

  if (events.length === 0) {
    return <h4>No events to show.</h4>;
  }

  return (
    <div>
      <Search
        size='default'
        placeholder='Search'
        onSearch={onSubmit}
        onChange={onChange}
        style={{ boxShadow: '0 0 10px 1px #E8E9EC', borderRadius: '12px' }}
        loading={isLoading}
      />
      <br />
      <br />
      <div className='cards'>
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            isLoading={isLoading}
          ></EventItem>
        ))}
      </div>
    </div>
  );
};
export default Events;
