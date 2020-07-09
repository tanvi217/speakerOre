import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import EventContext from '../context/events/eventContext';

const MyEvents = () => {
  const eventContext = useContext(EventContext);
  const { bookmarkedEvents, getBookmarkedEvents } = eventContext;

  useEffect(() => {
    getBookmarkedEvents();
  }, []);

  const columns = [
    {
      title: 'Event Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Link to={'/event/' + record.id} style={{ color: '#0f74a8' }}>
          {text}
        </Link>
      ),
    },
    { title: 'Event Date', dataIndex: 'start_time', key: 'start_time' },
  ];

  return bookmarkedEvents.length === 0 ? (
    'No saved events.'
  ) : (
    <div>
      <Table columns={columns} dataSource={bookmarkedEvents} rowKey='id' />
      <br />
    </div>
  );
};

export default MyEvents;
