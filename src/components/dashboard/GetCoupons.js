import React, { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import {
  Table,
  Button,
  Divider,
  Spin,
  Popconfirm,
  Descriptions,
  Switch,
} from 'antd';
import CouponContext from '../context/coupon/couponContext';

const divider = {
  color: '#000000',
};

const priceToIndianSystem = (price) => {
  var x = price.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != '') lastThree = ',' + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  return res;
};

const GetCoupons = () => {
  const couponContext = useContext(CouponContext);

  useEffect(() => {
    getCoupons();
  }, []);

  const onChange = (id) => {
    toggleCouponVisibility(id);
  };

  const {
    coupons,
    getCoupons,
    isLoading,
    deleteCoupon,
    setCurrent,
    toggleCouponVisibility,
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
    {
      title: 'Enabled',
      key: 'enabled',
      dataIndex: '',
      render: (text, record) => (
        <Switch
          defaultChecked={!record.disable}
          onChange={() => onChange(record.id)}
        />
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
                  {record.name && (
                    <Descriptions.Item label='Coupon name'>
                      {record.name.toString()}
                    </Descriptions.Item>
                  )}
                  {record.description && (
                    <Descriptions.Item label='Coupon description'>
                      {record.description.toString()}
                    </Descriptions.Item>
                  )}
                  {record.end_date && (
                    <Descriptions.Item label='Expires on'>
                      {record.end_date.toString()}
                    </Descriptions.Item>
                  )}
                  {record.count && (
                    <Descriptions.Item label='Coupon Count'>
                      {record.count}
                    </Descriptions.Item>
                  )}
                  {record.price && (
                    <Descriptions.Item label='Discount Amount'>
                      Rs {priceToIndianSystem(record.price)}
                    </Descriptions.Item>
                  )}
                  {record.percentage && (
                    <Descriptions.Item label='Discount Percentage'>
                      {record.percentage}%
                    </Descriptions.Item>
                  )}
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
