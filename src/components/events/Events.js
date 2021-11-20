import React, { useContext, useEffect, useState } from 'react';
import EventItem from './EventItem';
import EventContext from '../context/events/eventContext';
import EventsFilterContext from '../context/eventsFilter/eventsFilterContext';

import InfiniteScroll from 'react-infinite-scroller';

import { Spin, Input } from 'antd';

const { Search } = Input;

const Events = () => {
  const eventContext = useContext(EventContext);
  const eventsFilterContext = useContext(EventsFilterContext);

  const [text, setText] = useState('');

  const { events, isLoading, getEventsByPage, getSearchEvents } = eventContext;
  const { filteredEvents } = eventsFilterContext;

  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (pageNum === 0) {
      if (text === '') {
        getEventsByPage(pageNum).then(() => {
          setPageNum(1);
          setData(events);
        });
      } else {
        getSearchEvents(pageNum, text).then(() => {
          setPageNum(1);
          setData(events);
        });
      }
    } else if (text !== '') {
      getSearchEvents(pageNum, text).then(() => {
        setPageNum(1);
        setData(events);
      });
    }
  }, [text]);

  useEffect(() => {
    if (filteredEvents !== '') {
      setData(filteredEvents);
      setPageNum(1);
    }
  }, [filteredEvents]);

  const handleInfiniteOnLoad = () => {
    if (pageNum !== 0) {
      setLoading(true);
      if (text === '') {
        (async function anyNameFunction() {
          await getEventsByPage(pageNum);

          if (events.length < 20) {
            setData((data) => data.concat(events));
            setLoading(false);
            setHasMore(false);
            return;
          }

          setPageNum((pageNum) => pageNum + 1);
          setData((data) => data.concat(events));
          setLoading(false);
        })();
      } else {
        (async function anyNameFunction() {
          await getSearchEvents(pageNum, text);
          console.log('in search');
          if (events.length < 20) {
            setData((data) => data.concat(events));
            setLoading(false);
            setHasMore(false);
            return;
          }

          setPageNum((pageNum) => pageNum + 1);
          setData((data) => data.concat(events));
          setLoading(false);
        })();
      }
    } else {
      return;
    }
  };

  const onSubmit = (e) => {
    if (text !== '') {
      setText(text);
      setPageNum(0);
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  if (events.length === 0 && data.length === 0) {
    if (text === '') {
      return <h4>No events to show.</h4>;
    } else {
      return <h4>No events with given search criteria.</h4>;
    }
  }

  return (
    <div>
      <Search
        size='default'
        placeholder='Search'
        onSearch={onSubmit}
        onChange={onChange}
        style={{ boxShadow: '0 0 10px 1px #E8E9EC', borderRadius: '12px' }}
      />
      <br />
      <br />

      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={true}
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
