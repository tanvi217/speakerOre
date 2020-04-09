import React, { useContext } from 'react';
import EventItem from './EventItem';
import EventContext from '../context/events/eventContext';

const Events = () => {
  const eventContext = useContext(EventContext);

  const { events } = eventContext;

  if (events.length === 0) {
    return <h4>Please add events.</h4>;
  }

  return (
    <div style={eventStyle}>
      {events.map((event) => (
        <EventItem key={event.id} event={event}></EventItem>
      ))}
    </div>
  );
};

const eventStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 2fr)',
  gridGap: '2rem',
  align: 'center',
};

export default Events;
