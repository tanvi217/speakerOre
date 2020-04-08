import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

import AuthContext from '../context/auth/authContext';
import logo from '../../static/logo.png';

const buttonStyle = {
  width: '220px',
  borderColor: '#0f74a8',
  boxShadow: '0 6px 6px -6px #b1b1b1',
};

const Login = () => {
  const authContext = useContext(AuthContext);
  const {
    signIn_fb,
    signIn_google,
    close_modal,
    auth_modal_show,
  } = authContext;

  const closeModal = () => {
    close_modal();
  };

  return (
    <div>
      <Modal
        visible={true}
        style={{ borderRadius: '25px', borderTopColor: '#d39e00' }}
        bodyStyle={{
          textAlign: 'center',
          borderTop: '#d39e00',
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
            style={{ height: '190px', width: '300px' }}
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
          shape='rounded'
          size='large'
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
          shape='omitted'
          size='large'
          block='true'
        >
          Sign in with Facebook
        </Button>
      </Modal>
    </div>
  );
};

export default Login;
