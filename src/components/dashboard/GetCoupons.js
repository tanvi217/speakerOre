import React, { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Divider, Spin, Popconfirm, Descriptions } from 'antd';
import CouponContext from '../context/coupon/couponContext';

const divider = {
  color: '#000000',
};

const GetCoupons = () => {
  const couponContext = useContext(CouponContext);

  useEffect(() => {
    getCoupons();
  }, []);

  const {
    coupons,
    getCoupons,
    isLoading,
    deleteCoupon,
    setCurrent,
  } = couponContext;

  const columns = [
    { title: 'Coupon Code', dataIndex: 'code', key: 'code' },
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
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title='Are you sure?'
            okText='Yes'
            cancelText='No'
            onConfirm={() => deleteCoupon(record.id)}
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
      <Divider style={divider}>Existing Coupons</Divider>

      <Spin spinning={isLoading}>
        {coupons.length === 0 ? (
          'No discount coupons plans. Please create one.'
        ) : (
          <Table
            bordered
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <Descriptions title={record.code}>
                  <Descriptions.Item label='Expires on'>
                    {record.end_date.toString()}
                  </Descriptions.Item>
                  <Descriptions.Item label='Coupon Count'>
                    {record.count}
                  </Descriptions.Item>
                  <Descriptions.Item label='Mode'>
                    {record.price} || {record.percentage}
                  </Descriptions.Item>
                </Descriptions>
              ),
            }}
            dataSource={coupons}
            rowKey='id'
          />
        )}
      </Spin>
    </div>
  );
};
export default GetCoupons;
