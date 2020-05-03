import React, { useContext } from 'react';
import { Link } from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Badge, Divider, Popconfirm } from 'antd';
import AuthContext from '../context/auth/authContext';
import EventContext from '../context/events/eventContext';

const MyEvents = () => {
  // eslint-disable-next-line
  const authContext = useContext(AuthContext);
  const eventContext = useContext(EventContext);
  const { events, deleteEvent, setCurrent } = eventContext;

  const columns = [
    { title: 'Event Name', dataIndex: 'name', key: 'name' },
    { title: 'Event Date', dataIndex: 'start_date', key: 'start_date' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span>
          {status === 'accepted' && <Badge status='success' text='Accepted' />}
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

  return events.length === 0 ? (
    'No event applications.'
  ) : (
    <Table columns={columns} dataSource={events} rowKey='id' />
  );
};

export default MyEvents;
