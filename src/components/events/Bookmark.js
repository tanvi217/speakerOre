import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Spin } from 'antd';
import EventContext from '../context/events/eventContext';

const Bookmark = () => {
  const eventContext = useContext(EventContext);
  const { isLoading, bookmarkedEvents, getBookmarkedEvents } = eventContext;

  useEffect(() => {
    getBookmarkedEvents();
  }, []);

  const columns = [
    {
      title: 'Event Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Link
          to={'/events/' + record.id}
          style={{ color: '#0f74a8' }}
          target='_blank'
          rel='noopener noreferrer'
        >
          {text}
        </Link>
      ),
    },
    { title: 'Event Date', dataIndex: 'start_time', key: 'start_time' },
  ];

  if (isLoading) return <Spin tip='Loading...'></Spin>;

  return bookmarkedEvents.length === 0 ? (
    'No saved events.'
  ) : (
    <div>
      <Table columns={columns} dataSource={bookmarkedEvents} rowKey='id' />
    </div>
  );
};

export default Bookmark;
