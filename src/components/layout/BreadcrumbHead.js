import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, CaretRightOutlined } from '@ant-design/icons';

const breadcrumb = {
  boxShadow: '0 8px 6px -6px #e2e2e2',
};

const BreadcrumbHead = ({ heading }) => {
  var paths = [];

  for (var i = 0; i < heading.length; i++) {
    paths.push(
      <Breadcrumb.Item
        href={heading[i]}
        key={i}
        style={{ fontSize: '1rem', fontWeight: '500', color: '#808080' }}
      >
        {heading[i]}
      </Breadcrumb.Item>
    );
  }
  return (
    <div style={breadcrumb}>
      <Breadcrumb
        style={{ padding: '1.1% 5%' }}
        separator={<CaretRightOutlined style={{ color: '#f5cc23' }} />}
      >
        <Breadcrumb.Item>
          <a href='/'>
            <HomeOutlined style={{ color: '#328fce', fontSize: '1rem' }} />
          </a>
        </Breadcrumb.Item>

        {paths}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHead;
