import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Descriptions } from 'antd';
import EventContext from '../context/events/eventContext';

const Archives = () => {
  const eventContext = useContext(EventContext);
  const { archives } = eventContext;

  const columns = [
    { title: 'Event Name', dataIndex: 'name', key: 'name' },
    { title: 'Event Date', dataIndex: 'start_date', key: 'start_date' },
    { title: 'Event Location', dataIndex: 'city', key: 'city' },
    {
      title: 'Category',
      dataIndex: 'categories',
      key: 'categories',
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            return (
              <Tag color={'#f5cc23'} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
  ];

  return archives.length === 0 ? (
    'No archived events.'
  ) : (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <Descriptions title={record.name}>
            <Descriptions.Item label='Email'>{record.email}</Descriptions.Item>
            <Descriptions.Item label='Phone'>{record.phone}</Descriptions.Item>
            <Descriptions.Item label='Address'>
              {record.city + ', ' + record.country}
            </Descriptions.Item>
            <Descriptions.Item label='About'>{record.about}</Descriptions.Item>
            <Descriptions.Item label='Description'>
              {record.description}
            </Descriptions.Item>
          </Descriptions>
        ),
      }}
      dataSource={archives}
      rowKey='id'
    />
  );
};

export default Archives;
