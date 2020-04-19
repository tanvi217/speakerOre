import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';

const leftItems = {
  float: 'left',
  fontWeight: '300',
  color: '#000000',
};

const LeftMenu = () => {
  return (
    <Menu mode='horizontal' style={{ zIndex: 200 }}>
      <Menu.Item key='title' style={leftItems}>
        <Link to='/'>
          <strong style={{ color: '#000000' }}>SPEAKER</strong>
          <span style={{ color: '#000000' }}>ORE</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
