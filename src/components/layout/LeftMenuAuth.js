import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './nav_style.css';
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const leftItems = {
  float: 'left',
  fontWeight: '300',
  color: '#000000',
};

const rightItems = {
  float: 'right',
  fontWeight: '300',
  color: '#000000',
};

const linkItems = {
  color: '#000000',
  fontSize: '15px',
  fontWeight: '550',
  float: 'right',
};

const linkStyle = {
  color: '#000000',
  fontSize: '15px',
  fontWeight: '550',
};

const LeftMenuAuth = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  return (
    <Menu mode='horizontal'>
      <Menu.Item key='title' style={leftItems}>
        <Link to='/'>
          <strong style={{ color: '#000000' }}>SPEAKER</strong>
          <span style={{ color: '#000000' }}>ORE</span>
        </Link>
      </Menu.Item>

      <SubMenu
        title={
          <Link to={'/profile'} style={linkStyle}>
            Profile
          </Link>
        }
        style={rightItems}
      >
        <Menu.ItemGroup>
          <Menu.Item key='settings'>
            <SettingOutlined />
            Settings
          </Menu.Item>
          <Menu.Item key='logout' onClick={logout}>
            <LogoutOutlined />
            Logout
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      <Menu.Item disabled style={rightItems}>
        |
      </Menu.Item>

      <Menu.Item key='add_event' style={rightItems}>
        <Link to='/add_event' style={linkItems}>
          Add Event
        </Link>
      </Menu.Item>

      <Menu.Item key='subscribe' style={rightItems}>
        <Link to='/subscribe' style={linkItems}>
          Subscribe
        </Link>
      </Menu.Item>

      <Menu.Item key='events' style={rightItems}>
        <Link to='/events' style={linkItems}>
          Events
        </Link>
      </Menu.Item>

      <Menu.Item key='about' style={rightItems}>
        <Link to='/about' style={linkItems}>
          About
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenuAuth;
