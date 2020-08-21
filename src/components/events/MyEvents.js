import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Table, Badge, Divider, Popconfirm, Spin } from 'antd';
// import AuthContext from '../context/auth/authContext';
import EventContext from '../context/events/eventContext';

const MyEvents = () => {
  // eslint-disable-next-line
  // const authContext = useContext(AuthContext);
  const eventContext = useContext(EventContext);
  const {
    isLoading,
    myEvents,
    deleteEvent,
    setCurrent,
    getMyEvents,
  } = eventContext;

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
          {status === 'APPROVED' && <Badge status='success' text='Accepted' />}
          {status === 'DECLINED' && <Badge status='error' text='Declined' />}
          {status === 'PENDING' && <Badge status='processing' text='Pending' />}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link
            to={`/edit-event/${record.id}`}
            style={{ marginRight: '1%', color: '#328fce' }}
          >
            Edit
          </Link>
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

  if (isLoading) return <Spin tip='Loading...'></Spin>;

  return myEvents.length === 0 ? (
    'No event applications.'
  ) : (
    <Table columns={columns} dataSource={myEvents} rowKey='id' />
  );
};

export default MyEvents;
