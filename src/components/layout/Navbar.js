import React, { Fragment, useContext, useEffect, useState } from 'react';
import { BarsOutlined, AudioOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Login from './Login';
import './nav_style.css';
import AuthContext from '../context/auth/authContext';
import audience from '../../static/blueBackground.png';

import { Drawer, Button } from 'antd';

import RightMenuGuest from './RightMenuGuest';
import RightMenuAuth from './RightMenuAuth';
import LeftMenu from './LeftMenu';

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

const bgHome = {
  background: 'transparent',
  zIndex: '100',
};

const Navbar = ({ title, isHome, heading, subheading }) => {
  const authContext = useContext(AuthContext);
  // const [current, setCurrent] = useState('mail');
  const [visible, setVisible] = useState(false);

  const { isAuthenticated, auth_modal_visible, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  var Background = audience;

  const wimg = {
    minHeight: '180px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${Background})`,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
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
            type='link'
            onClick={() => setVisible(true)}
            icon={
              <AudioOutlined style={{ color: '#328fce', fontSize: '20px' }} />
            }
          >
            <span className='barsBtn'></span>
          </Button>
          <Drawer
            placement='right'
            closable={false}
            onClose={() => setVisible(false)}
            visible={visible}
            style={{ textAlign: 'center' }}
          >
            {isAuthenticated ? (
              <RightMenuAuth mode={'vertical'} />
            ) : (
              <RightMenuGuest mode={'vertical'} />
            )}
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
