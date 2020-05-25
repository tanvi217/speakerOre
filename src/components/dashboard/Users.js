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
        Edit
        <Divider type='vertical' />
        Make admin
        <Divider type='vertical' />
        Make member
      </span>
    ),
  },
];

const data = [
  {
    id: 1,
    name: 'John Brown',
    email: 'abcd@gmail.com',
  },
  {
    id: 2,
    name: 'Jim Green',
    email: 'abcde@gmail.com',
  },
  {
    id: 3,
    name: ' Jack',
    email: 'abcded@gmail.com',
  },
  {
    id: 4,
    name: 'Joe Black',
    email: 'abcdgh@gmail.com',
  },
];

const Users = () => {
  return (
    <div
      id='container'
      style={{ padding: '1% 5%', backgroundColor: '#f6f6f6' }}
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
        rowKey='id'
      />
    </div>
  );
};

export default Users;
