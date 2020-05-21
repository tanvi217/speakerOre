import React from 'react';
import { Link } from 'react-router-dom';
import { Space } from 'antd';
import Wave from '../../static/wave_footer.svg';
import './style.css';

import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
  MailOutlined,
} from '@ant-design/icons';

const text = {
  color: 'white',
};

const icon = {
  color: 'white',
  fontSize: '20px',
};

const footer = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '2.5% 0',
};

const waveStyle = {
  position: 'relative',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '280px',
  backgroundSize: 'cover',
  backgroundImage: `url(${Wave})`,
};

const sections = {
  flex: '0 0 33%',
  color: 'white',
};

const Footer = () => {
  return (
    <div>
      <div style={waveStyle}></div>
      <div style={{ backgroundColor: '#328fce' }}>
        <div className='container'>
          <div style={footer}>
            <div style={sections}>
              <div>
                <Link to='/about' style={text}>
                  About Us
                </Link>
              </div>
              <div>
                <Link to='/help' style={text}>
                  Help & Support
                </Link>
              </div>
              <div>
                <Link to='/events' style={text}>
                  FAQs
                </Link>
              </div>

              <div style={{ display: 'block' }}>
                <Space horizontally={8}>
                  <a href='#'>
                    <FacebookFilled style={icon} />
                  </a>
                  <a href='#'>
                    <TwitterCircleFilled style={icon} />
                  </a>
                  <a href='#'>
                    <InstagramFilled style={icon} />
                  </a>
                  <a href='#'>
                    <LinkedinFilled style={icon} />
                  </a>
                </Space>
              </div>
            </div>

            <div style={sections}>
              <div>
                <Link to='/' style={text}>
                  Home
                </Link>
              </div>
              <div>
                <Link to='/add_event' style={text}>
                  Add Event
                </Link>
              </div>
              <div>
                <Link to='/events' style={text}>
                  Events
                </Link>
              </div>
              <div>
                <Link to='/subscribe' style={text}>
                  Subscribe
                </Link>
              </div>
            </div>

            <div style={sections}>
              <div>
                <MailOutlined style={text} /> Customer Service:
                contact@speakerore.com
              </div>
            </div>
          </div>
          <hr style={text} />
          <h5 style={text}>© 2020 SpeakerOre All rights reserved.</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
