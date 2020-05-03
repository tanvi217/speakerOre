import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Divider, Spin, Popconfirm } from 'antd';
import SubscribeContext from '../context/subscribe/subscribeContext';

const divider = {
  color: '#000000',
};

const GetPlans = () => {
  const subscribeContext = useContext(SubscribeContext);

  const {
    plans,
    isLoading,
    editSubscriptionPlan,
    deleteSubscriptionPlan,
    setCurrent,
  } = subscribeContext;

  const columns = [
    { title: 'Plan Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Action',
      key: 'action',
      dataIndex: '',
      render: (text, record) => (
        <span>
          <Button
            style={{ marginRight: '1%' }}
            type='primary'
            onClick={() => {
              setCurrent(record);
              editSubscriptionPlan(record);
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title='Are you sure?'
            okText='Yes'
            cancelText='No'
            onConfirm={() => deleteSubscriptionPlan(record.id)}
          >
            <Button style={{ marginRight: '1%' }} type='danger' ghost>
              Delete
            </Button>
          </Popconfirm>
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
        <Spin spinning={isLoading}>
          <Table
            bordered
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <p style={{ margin: 0 }}>{record.name}</p>
              ),
            }}
            dataSource={plans}
            rowKey='id'
          />
        </Spin>
      )}
    </div>
  );
};
export default GetPlans;
