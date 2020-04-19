import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Divider } from 'antd';
import AuthContext from '../context/auth/authContext';

const Accepted = () => {
  const authContext = useContext(AuthContext);
  const { events } = authContext;

  const columns = [
    { title: 'Event Name', dataIndex: 'name', key: 'name' },
    { title: 'Event Date', dataIndex: 'start_date', key: 'start_date' },
    {
      title: 'Action',
      key: 'action',
      dataIndex: '',
      render: (text, record) => (
        <span>
          <Button style={{ marginRight: '1%' }} type='primary'>
            Edit
          </Button>

          <Button style={{ marginRight: '1%' }}>Decline</Button>

          <Button style={{ marginRight: '1%' }} type='danger' ghost>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div
      id='container'
      style={{ padding: '3% 5%', backgroundColor: '#f7f7f7' }}
    >
      <Divider>Accepted Events List</Divider>
      {events.length === 0 ? (
        'No accepted events'
      ) : (
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.name}</p>
            ),
          }}
          dataSource={events}
        />
      )}
    </div>
  );
};

export default Accepted;
