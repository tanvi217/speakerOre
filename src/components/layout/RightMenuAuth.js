import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import './nav_style.css';
import {
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
  StarFilled,
  PlusOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const buttonStyle = {
  background: '-webkit-linear-gradient(#f5cc23, #f39213)',
  color: '#ffffff',
  borderColor: '#ffffff',

  // borderRadius: '12px',
};

const rightItems = {
  fontWeight: '300',
  color: '#000000',
};

const linkItems = {
  color: '#000000',
  fontSize: '15px',
  fontWeight: '550',
};

const linkStyle = {
  color: '#000000',
  fontSize: '15px',
  fontWeight: '550',
};

const RightMenuAuth = ({ mode }) => {
  const authContext = useContext(AuthContext);

  const { logout, role } = authContext;

  return (
    <Menu mode={mode} style={{ zIndex: 200 }}>
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
      <Menu.Item key='add_event' style={rightItems}>
        <Link to='/add_event' style={linkItems}>
          <span>
            <PlusOutlined />
            Add Event
          </span>
        </Link>
      </Menu.Item>

      {role === 'moderator' && (
        <Menu.Item key='dashboard' style={rightItems}>
          <Link to='/dashboard' style={linkItems}>
            Dashboard
          </Link>
        </Menu.Item>
      )}

      <Menu.Item key='subscribe' style={rightItems}>
        <Button
          icon={<StarFilled style={{ color: '#fff', fontSize: '16px' }} />}
          size='middle'
          style={buttonStyle}
          shape='round'
        >
          <Link to='/subscribe' style={linkItems}>
            Subscribe
          </Link>
        </Button>
      </Menu.Item>

      <SubMenu
        title={
          <Link to={'/profile'} style={linkStyle}>
            <UserOutlined />
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
    </Menu>
  );
};

RightMenuAuth.defaultProps = {
  mode: 'horizontal',
};

export default RightMenuAuth;
