import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';

const leftItems = {
  float: 'left',
  fontWeight: '300',
  color: '#000000',
  paddingLeft: '0px',
};

const LeftMenu = () => {
  return (
    <Menu mode='horizontal' style={{ zIndex: 200 }}>
      <Menu.Item key='title' style={leftItems}>
        <Link to='/'>
          <strong style={{ color: '#328fce' }}>SPEAKER</strong>
          <span
            style={{
              background: '-webkit-linear-gradient(#f5cc23, #f39213)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ORE
          </span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
