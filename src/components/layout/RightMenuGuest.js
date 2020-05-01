import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import './nav_style.css';

const buttonStyle = {
  background: '#f5cc23',
  borderColor: '#ffffff',
  color: '#ffffff',
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

const RightMenuGuest = ({ mode }) => {
  const authContext = useContext(AuthContext);

  const { show_modal } = authContext;

  const showModal = () => {
    show_modal();
  };

  return (
    <Menu mode={mode} style={{ zIndex: 200 }}>
      <Menu.Item key='log_in' style={rightItems}>
        <Button
          onClick={showModal}
          type='primary'
          size='middle'
          style={buttonStyle}
          shape='round'
        >
          Login
        </Button>
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

RightMenuGuest.defaultProps = {
  mode: 'horizontal',
};

export default RightMenuGuest;
