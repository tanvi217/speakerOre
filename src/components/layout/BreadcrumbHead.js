import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, CaretRightOutlined } from '@ant-design/icons';

const breadcrumb = {
  boxShadow: '0 8px 6px -6px #ececec',
};

const BreadcrumbHead = ({ heading }) => {
  var paths = [];

  for (var i = 0; i < heading.length; i++) {
    paths.push(
      <Breadcrumb.Item href={heading[i]}>{heading[i]}</Breadcrumb.Item>
    );
  }
  return (
    <div style={breadcrumb}>
      <Breadcrumb
        style={{ margin: '16px 0', padding: '10px 100px' }}
        separator={<CaretRightOutlined style={{ color: '#f5cc23' }} />}
      >
        <Breadcrumb.Item>
          <a href='/'>
            <HomeOutlined style={{ fontSize: '16px', color: '#328fce' }} />
          </a>
        </Breadcrumb.Item>

        {paths}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHead;
