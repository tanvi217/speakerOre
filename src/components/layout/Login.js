import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

import AuthContext from '../context/auth/authContext';
import logo from '../../static/logo.png';

import './style.css';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { signinFb, signinGoogle, closeModal } = authContext;

  const closeLogin = () => {
    closeModal();
  };

  return (
    <div>
      <Modal
        visible={true}
        bodyStyle={{
          textAlign: 'center',
          borderTop: '5px solid #328fce',
          padding: '12%',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#f6f5fa',
          padding: '25px',
          position: 'relative',
          margin: '0 auto',
        }}
        closable
        maskClosable={true}
        onCancel={closeLogin}
        destroyOnClose={true}
        footer={null}
        width='300px'
        centered
      >
        <div className='login-head'>
          <h3>Hello again!</h3>
          <h3>Sign in to</h3>
        </div>
        <div style={{ padding: '0 0', margin: '0 0' }}>
          <img
            src={logo}
            style={{ height: '20%', width: '100%' }}
            alt={
              <div>
                <strong style={{ color: '#328fce' }}>Speaker</strong>
                <span style={{ color: '#d39e00' }}>Ore</span>
              </div>
            }
          />
        </div>
        <br />
        <Button
          className='login-button'
          icon={
            <GoogleOutlined style={{ color: '#328fce', fontSize: '30px' }} />
          }
          onClick={signinGoogle}
        >
          Sign in with Google
        </Button>

        <Button
          className='login-button'
          icon={
            <FacebookOutlined style={{ color: '#fff', fontSize: '30px' }} />
          }
          type='primary'
          onClick={signinFb}
        >
          Sign in with Facebook
        </Button>
      </Modal>
    </div>
  );
};

export default Login;
