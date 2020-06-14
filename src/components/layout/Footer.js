import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

import { Layout, Space } from 'antd';

const icon = {
  color: '#2f1359',
  fontSize: '25px',
  border: '1.2px solid #cecece',
  padding: '8px 8px',
  borderRadius: '4px',
  margin: '0 5px',
};

const { Footer } = Layout;

const FooterSection = () => {
  return (
    <div className='footer-container'>
      <div className='footer-inner'>
        <div className='footer-links'>
          <p>FAQ</p>
          <p>ABOUT US</p>
          <p>EVENTS</p>
          <p>SUBSCRIBE</p>
        </div>
        <div className='footer-icons'>
          <Space horizontally={16}>
            <a href='#'>
              <FacebookOutlined style={icon} />
            </a>
            <a href='#'>
              <TwitterOutlined style={icon} />
            </a>
            <a href='#'>
              <InstagramOutlined style={icon} />
            </a>
            <a href='#'>
              <LinkedinOutlined style={icon} />
            </a>
          </Space>
        </div>
        <div className='footer-links'>
          <p>COPYRIGHT SpeakerOre 2020</p>
          <p>TERMS & CONDITIONS | PRIVACY | LEGAL NOTICE</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
