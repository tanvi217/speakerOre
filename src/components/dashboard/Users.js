import React from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Divider } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => (
      <span>
        <Button style={{ marginRight: '1%', color: '#328fce' }}>Edit</Button>

        <Button style={{ marginRight: '1%', color: '#328fce' }}>
          Make admin
        </Button>

        <Button style={{ marginRight: '1%', color: '#328fce' }}>
          Make member
        </Button>
      </span>
    ),
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    email: 'abcd@gmail.com',
  },
  {
    key: 2,
    name: 'Jim Green',
    email: 'abcde@gmail.com',
  },
  {
    key: 3,
    name: ' Jack',
    email: 'abcded@gmail.com',
  },
  {
    key: 4,
    name: 'Joe Black',
    email: 'abcdgh@gmail.com',
  },
];

const Users = () => {
  return (
    <div
      id='container'
      style={{ padding: '3% 5%', backgroundColor: '#f6f6f6' }}
    >
      <Divider>Users List</Divider>
      <Table
        bordered
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.email}</p>
          ),
        }}
        dataSource={data}
      />
    </div>
  );
};

export default Users;
