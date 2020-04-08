import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './nav_style.css';

const { SubMenu } = Menu;

const rightItems = {
  float: 'right',
  color: '#0f74a8',
};

const linkItems = {
  color: '#0f74a8',
  fontSize: '15px',
};

const LeftMenuAuth = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  return (
    <Menu mode='horizontal'>
      <SubMenu
        title={
          <span className='submenu-title-wrapper'>
            <Link to={'/profile'}>Profile</Link>
          </span>
        }
        style={rightItems}
      >
        <Menu.ItemGroup>
          <Menu.Item key='settings'>Settings</Menu.Item>
          <Menu.Item key='logout' onClick={logout}>
            Logout
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

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
