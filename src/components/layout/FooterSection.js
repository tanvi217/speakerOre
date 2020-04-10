import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import Logo from '../../static/logo.png';
import './style.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  MailOutlined,
  MessageOutlined,
} from '@ant-design/icons';

import { Layout } from 'antd';

const { Footer } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { offset: 8, span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const imgStyle = {
  height: '100px',
  width: '250px',
};

const linkStyle = {
  fontFamily: 'benton-sans',
  fontWeight: 100,
  color: '#ffffff',
  margin: '20px 0 12px',
  listStyleType: 'none',
};

const linkItStyle = {
  color: '#000000',
};

const heads = {
  color: '#808080',
};

const msgStyle = {
  fontSize: '50px',
  color: '#808080',
  textAlign: 'center',
  alignItems: 'middle',
  paddingLeft: '200px',
  offset: '10',
};

const onFinish = (values) => {
  console.log(values);
};

const FooterSection = () => {
  return (
    <Footer className='footer-distributed'>
      <div className='footer-left'>
        <img src={Logo} style={imgStyle} />

        <div className='footer-icons'>
          <a href='#'>
            <FacebookOutlined style={{ color: '#808080' }} />
          </a>
          <a href='#'>
            <TwitterOutlined />
          </a>
          <a href='#'>
            <InstagramOutlined />
          </a>
          <a href='#'>
            <LinkedinOutlined />
          </a>
        </div>
      </div>

      <div className='footer-center'>
        <div style={{ float: 'left', width: '50%', paddingTop: '30px' }}>
          <h4 style={heads}>EXPLORE</h4>
          <ul style={linkStyle}>
            <li>
              <a href='/' style={linkItStyle}>
                Home
              </a>
            </li>
            <li>
              <a href='/add_event' style={linkItStyle}>
                Add Event
              </a>
            </li>
            <li>
              <a href='/events' style={linkItStyle}>
                Events
              </a>
            </li>
            <li>
              <a href='/subscribe' style={linkItStyle}>
                Subscribe
              </a>
            </li>
          </ul>
        </div>

        <div style={{ float: 'right', width: '50%', paddingTop: '30px' }}>
          <h4 style={heads}>ABOUT</h4>
          <ul style={linkStyle}>
            <li>
              <a href='/about' style={linkItStyle}>
                About Us
              </a>
            </li>
            <li>
              <a href='/help' style={linkItStyle}>
                Help & Support
              </a>
            </li>
            <li>
              <a href='/events' style={linkItStyle}>
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='footer-right'>
        <MessageOutlined style={msgStyle} />
        <br />
        <br />
        <span style={{ marginLeft: '140px' }}>
          Stay tuned for speaking updates.
        </span>
        <br />
        <br />
        <Form {...layout} name='control-hooks' onFinish={onFinish}>
          <Form.Item name='' rules={[{ required: true }]}>
            <Input placeholder='Your Email Address' />
          </Form.Item>
          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>
              I understand the{' '}
              <Link to='/' style={{ color: '#328fce' }}>
                Privacy Policy
              </Link>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type='primary' block htmlType='submit'>
              SIGN ME UP
            </Button>
          </Form.Item>
        </Form>
      </div>
      <hr />
      <h5 style={heads}>© 2020 SpeakerOre All rights reserved.</h5>
    </Footer>
  );
};

export default FooterSection;
