import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

import AuthContext from '../context/auth/authContext';
import logo from '../../static/logo.png';

const buttonStyle = {
  borderColor: '#0f74a8',
  boxShadow: '0 6px 6px -6px #b1b1b1',
  overflow: 'hidden',
};

const Login = () => {
  const authContext = useContext(AuthContext);
  const { signIn_fb, signIn_google, close_modal } = authContext;

  const closeModal = () => {
    close_modal();
  };

  return (
    <div>
      <Modal
        visible={true}
        bodyStyle={{
          textAlign: 'center',
          borderTop: '5% #0f74a8',
          borderRadius: '25px',
          padding: '12%',
        }}
        closable
        maskClosable={true}
        onCancel={closeModal}
        destroyOnClose={true}
        footer={null}
        width='350px'
      >
        <h2>Hello again!</h2>
        <h2>Sign in to</h2>
        <div style={{ padding: '0 0', margin: '0 0' }}>
          <img
            src={logo}
            style={{ height: '20%', width: '100%' }}
            alt={
              <div>
                <strong style={{ color: '#0f74a8' }}>Speaker</strong>
                <span style={{ color: '#d39e00' }}>Ore</span>
              </div>
            }
          />
        </div>
        <br />
        <Button
          style={buttonStyle}
          icon={<GoogleOutlined />}
          type='ghost'
          onClick={signIn_google}
          block='true'
        >
          Sign in with Google
        </Button>
        <br />
        <br />
        <Button
          style={buttonStyle}
          icon={<FacebookOutlined />}
          type='primary'
          onClick={signIn_fb}
          block='true'
        >
          Sign in with Facebook
        </Button>
      </Modal>
    </div>
  );
};

export default Login;
