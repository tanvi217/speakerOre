import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Table, Badge } from 'antd';
import AuthContext from '../context/auth/authContext';

const MyEvents = () => {
  const authContext = useContext(AuthContext);
  const { events } = authContext;

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
    { title: 'Event Date', dataIndex: 'start_date', key: 'start_date' },
  ];

  return events.length === 0 ? (
    'No saved events.'
  ) : (
    <Table columns={columns} dataSource={events} />
  );
};

export default MyEvents;
