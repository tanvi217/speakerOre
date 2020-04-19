import React, { useContext } from 'react';
import EventItem from './EventItem';
import EventContext from '../context/events/eventContext';

const Events = () => {
  const eventContext = useContext(EventContext);

  const { events, isLoading } = eventContext;

  if (events.length === 0) {
    return <h4>Please add events.</h4>;
  }

  return (
    <div className='cards'>
      {events.map((event) => (
        <EventItem
          key={event.id}
          event={event}
          isLoading={isLoading}
        ></EventItem>
      ))}
    </div>
  );
};
export default Events;
