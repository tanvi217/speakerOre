import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Divider } from 'antd';
import SubscribeContext from '../context/subscribe/subscribeContext';

const divider = {
  color: '#000000',
};

const GetPlans = () => {
  const subscribeContext = useContext(SubscribeContext);

  const { plans, isLoading } = subscribeContext;

  const columns = [
    { title: 'Plan Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Action',
      key: 'action',
      dataIndex: '',
      render: (text, record) => (
        <span>
          <Button style={{ marginRight: '1%' }} type='primary'>
            Edit
          </Button>

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
      <Divider style={divider}>Existing Plans</Divider>

      {plans.length === 0 ? (
        'No subscription plans. Please create one.'
      ) : (
        <Table
          bordered
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.name}</p>
            ),
          }}
          dataSource={plans}
        />
      )}
    </div>
  );
};
export default GetPlans;
