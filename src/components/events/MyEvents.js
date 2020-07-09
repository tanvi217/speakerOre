import React, { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Badge, Divider, Popconfirm } from 'antd';
// import AuthContext from '../context/auth/authContext';
import EventContext from '../context/events/eventContext';

const MyEvents = () => {
  // eslint-disable-next-line
  // const authContext = useContext(AuthContext);
  const eventContext = useContext(EventContext);
  const { myEvents, deleteEvent, setCurrent, getMyEvents } = eventContext;

  useEffect(() => {
    getMyEvents();
  }, []);

  const columns = [
    { title: 'Event Name', dataIndex: 'name', key: 'name' },
    // { title: 'Event Date', dataIndex: 'start_date', key: 'start_date' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',

      render: (status) => (
        <span>
          {status === 'published' && <Badge status='success' text='Accepted' />}
          {status === 'declined' && <Badge status='error' text='Declined' />}
          {status === 'pending' && <Badge status='processing' text='Pending' />}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a
            href='/add_event'
            style={{ marginRight: '1%', color: '#328fce' }}
            onClick={() => {
              setCurrent(record);
            }}
          >
            Edit
          </a>
          <Divider type='vertical' />
          <Popconfirm
            title='Are you sure?'
            okText='Yes'
            cancelText='No'
            onConfirm={() => deleteEvent(record.id)}
          >
            <a>Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return myEvents.length === 0 ? (
    'No event applications.'
  ) : (
    <Table columns={columns} dataSource={myEvents} rowKey='id' />
  );
};

export default MyEvents;
