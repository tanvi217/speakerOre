import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Login from './Login';
import './nav_style.css';
import AuthContext from '../context/auth/authContext';

import speaker from '../../static/mspeaker.png';
import about from '../../static/about.png';
import profile from '../../static/profile.png';
import dashboard from '../../static/dashboard.png';
import detail from '../../static/detail.png';
import subscribe from '../../static/subscribe.png';

import { Drawer, Button } from 'antd';

import logo from '../../static/logo.png';
import RightMenuGuest from './RightMenuGuest';
import RightMenuAuth from './RightMenuAuth';
import LeftMenu from './LeftMenu';

const logo_style = {
  width: '200px',
  height: '100px',
  margin: '16px 0px 16px 0',
  marginTop: '0px',
  float: 'left',
};

const mid = {
  fontWeight: '100',
  color: '#e2e2e2',
  margin: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  fontSize: '1.5rem',
  transform: 'translate(-50%, -50%)',
};

const sub = {
  fontWeight: '100',
  color: '#bbbbbb',
  margin: '0',
  position: 'absolute',
  fontSize: '1rem',
  top: '70%',
  left: '50%',
  // fontSize: '2rem',
  transform: 'translate(-50%, -50%)',
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

const bgHome = {
  background: 'transparent',
  zIndex: '100',
};

const Navbar = ({ title, isHome, heading, subheading }) => {
  const authContext = useContext(AuthContext);
  const [current, setCurrent] = useState('mail');
  const [visible, setVisible] = useState(false);

  const { isAuthenticated, auth_modal_visible, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  var Background = detail;

  switch (heading) {
    case 'Events':
      Background = speaker;
    case 'Subscribe':
      Background = subscribe;
    case 'About Us':
      Background = about;
    case 'Dashboard':
      Background = dashboard;
    case 'Profile':
      Background = about;

    // default:
    //   console.log(heading === 'Events');
    //   Background = profile;
  }
  // console.log(Background);

  const wimg = {
    minHeight: '180px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Background})`,
  };

  const Links = (
    <div style={isHome ? bgHome : {}}>
      <nav className='menuBar'>
        <div className='menuCon'>
          <div className='leftMenu'>
            <LeftMenu />
          </div>
          <div className='rightMenu'>
            {isAuthenticated ? <RightMenuAuth /> : <RightMenuGuest />}
          </div>
          <Button
            className='barsMenu'
            type='default'
            onClick={() => setVisible(true)}
          >
            <span className='barsBtn'></span>
          </Button>
          <Drawer
            title={
              <a href='/'>
                <strong style={{ color: '#000000' }}>SPEAKER</strong>
                <span style={{ color: '#000000' }}>ORE</span>
              </a>
            }
            placement='right'
            closable={false}
            onClose={() => setVisible(false)}
            visible={visible}
          >
            {isAuthenticated ? <RightMenuAuth /> : <RightMenuGuest />}
          </Drawer>
        </div>
      </nav>
      {!isHome && (
        <div style={wimg}>
          <span style={mid}>{heading}</span>
          <span style={sub}>{subheading}</span>
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
  subheading: '',
};

export default Navbar;
