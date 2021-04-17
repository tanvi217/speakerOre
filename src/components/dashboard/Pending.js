import React, { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Divider, Spin, Popconfirm } from 'antd';
import EventContext from '../context/events/eventContext';

const Pending = () => {
  const eventContext = useContext(EventContext);
  const {
    events,
    isLoading,
    updateEventStatus,
    getAllEventsMod,
  } = eventContext;

  useEffect(() => {
    getAllEventsMod();
  }, []);

  const columns = [
    { title: 'Event Name', dataIndex: 'name', key: 'name' },
    { title: 'Event Date', dataIndex: 'start_date', key: 'start_date' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button style={{ marginRight: '1%' }} type='primary'>
            Edit
          </Button>

          <Popconfirm
            title='Are you sure?'
            okText='Yes'
            cancelText='No'
            onConfirm={() => {
              updateEventStatus({
                id: record.id,
                status: 'APPROVED',
              });
            }}
          >
            <Button style={{ marginRight: '1%' }}>Approve</Button>
          </Popconfirm>

          <Popconfirm
            title='Are you sure?'
            okText='Yes'
            cancelText='No'
            onConfirm={() => {
              updateEventStatus({
                id: record.id,
                status: 'DECLINED',
              });
            }}
          >
            <Button style={{ marginRight: '1%' }} type='danger' ghost>
              Decline
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
      <Divider>Pending Events List</Divider>
      {events.length === 0 ? (
        'No pending events'
      ) : (
        <Spin spinning={isLoading}>
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <p style={{ margin: 0 }}>{record.name}</p>
              ),
            }}
            rowKey='id'
            dataSource={events}
          />
        </Spin>
      )}
    </div>
  );
};

export default Pending;
