import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import Login from './Login';
import './nav_style.css';
import AuthContext from '../context/auth/authContext';
import Background from '../../static/nav_bg0.jpg';
import { Drawer, Button, Menu } from 'antd';

import logo from '../../static/logo.png';
import LeftMenuGuest from './LeftMenuGuest';
import LeftMenuAuth from './LeftMenuAuth';

const logo_style = {
  width: '200px',
  height: '100px',
  margin: '16px 0px 16px 0',
  marginTop: '0px',
  float: 'left',
};

const mid = {
  fontWweight: '600',
  color: 'white',
  margin: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  fontSize: '2rem',
  transform: 'translate(-50%, -50%)',
};

const wimg = {
  minHeight: '180px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Background})`,
};

const nav_style = {
  border: 'none',
  color: '#ffffff',
  background: 'transparent',
  zIndex: '100',
  transition: 'background-color 1s ease 0s',
  fontSize: '15px',
  paddingLeft: '80px',
  paddingRight: '100px',
};

const bg = {
  border: 'none',
  color: '#ffffff',
  background: 'transparent',
  zIndex: '100',
  transition: 'background-color 1s ease 0s',
  fontSize: '15px',
  paddingLeft: '80px',
  paddingRight: '100px',
};

const Navbar = ({ title, isHome, heading }) => {
  const authContext = useContext(AuthContext);
  const { current, setCurrent } = useState('mail');
  const { visible, setVisible } = useState(false);

  const { isAuthenticated, auth_modal_visible, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(true);
  };

  const isSubscribed = true;

  const Links = (
    <div>
      <nav className='menuBar'>
        <div className='menuCon'>
          <div className='rightMenu'>
            {isAuthenticated ? <LeftMenuAuth /> : <LeftMenuGuest />}
            <Button className='barsMenu' type='primary' onClick={showDrawer}>
              <span className='barsBtn'></span>
            </Button>
            <Drawer
              title='Basic Drawer'
              placement='right'
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              {isAuthenticated ? <LeftMenuAuth /> : <LeftMenuGuest />}
            </Drawer>
          </div>
        </div>
      </nav>
      {!isHome && (
        <div style={wimg}>
          <h5 style={mid}>{heading}</h5>
        </div>
      )}
    </div>
  );

  return (
    <Fragment>
      {Links}
      {auth_modal_visible && <Login />}
    </Fragment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  isHome: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'SpeakerOre',
  isHome: false,
  heading: '',
};

export default Navbar;
