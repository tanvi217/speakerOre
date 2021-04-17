import React, { useContext, useEffect, useState } from 'react';
import EventItem from './EventItem';
import EventContext from '../context/events/eventContext';

import InfiniteScroll from 'react-infinite-scroller';

import { Spin, Input } from 'antd';

const { Search } = Input;

const Events = () => {
  const eventContext = useContext(EventContext);

  const [text, setText] = useState('');

  const { events, isLoading, getEventsByPage, getSearchEvents } = eventContext;

  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (text === '') {
      console.log('in if');
      getEventsByPage(pageNum);
      const page = pageNum + 1;
      const curEvents = data.concat(events);
      setPageNum(page);
      setData(curEvents);
      console.log('data: ', data, curEvents, page);
      console.log('events: ', events);
    } else {
      console.log('in else');
      getSearchEvents(text);
      setText('');
      setPageNum(0);
      setData(events);
    }
    console.log('events: ', events, data);
    console.log('page no: ', pageNum);
  }, []);

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (data.length > 5) {
      console.log('loaded all events');
      setData(data);
      setLoading(false);
      return;
    }
    getEventsByPage(pageNum);
    setData(data.concat(events));
    setPageNum(pageNum + 1);
    console.log(pageNum);
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    if (text !== '') {
      getSearchEvents(text);
      setText('');
      setPageNum(0);
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

      <InfiniteScroll
        initialLoad={false}
        pageStart={pageNum}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
      >
        <div className='cards'>
          {data.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              isLoading={isLoading}
            ></EventItem>
          ))}
          {loading && hasMore && (
            <div className='demo-loading-container'>
              <Spin />
            </div>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default Events;
