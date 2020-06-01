import React, { useEffect } from 'react';
import {
  PhoneOutlined,
  MailOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import './style.css';

const showInfoTab = (e, option) => {
  e.preventDefault();
  var i, content, links;
  content = document.getElementsByClassName('switcher-info-content');
  for (i = 0; i < content.length; i++) {
    content[i].style.display = 'none';
  }
  links = document.getElementsByClassName('switcher-option');
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(' active', '');
  }
  document.getElementById(option).style.display = 'block';
  document.getElementById(option).style.color = '#2f1359';
  e.currentTarget.className += ' active';
};

const About = () => {
  useEffect(() => {
    document.getElementById('text').style.display = 'block';
  });

  return (
    <div className='container_bg'>
      <div className='container_inner'>
        <h1 className='stats_heading'>About SpeakerOre</h1>
        <p className='subheading'>
          Stop hopping from device to device to chase your leads. Manage all
          your event leads in one place.
        </p>
        <div className='switcher'>
          <div className='switcher-tabs'>
            <a
              className='switcher-option active'
              href='#text'
              onClick={(e) => {
                showInfoTab(e, 'text');
              }}
            >
              <MessageOutlined style={{ fontSize: '20px' }} />{' '}
              <span className='switcher-option-name'>Text</span>
            </a>
            <a
              className='switcher-option'
              href='#email'
              onClick={(e) => {
                showInfoTab(e, 'email');
              }}
            >
              <MailOutlined style={{ fontSize: '20px' }} />{' '}
              <span className='switcher-option-name'>Email</span>
            </a>
            <a
              className='switcher-option'
              href='#call'
              onClick={(e) => {
                showInfoTab(e, 'call');
              }}
            >
              <PhoneOutlined style={{ fontSize: '20px' }} />{' '}
              <span className='switcher-option-name'>Call</span>
            </a>
          </div>
          <div className='switcher-info'>
            <div id='text' className='switcher-info-content'>
              <p>Text</p>
              <p>Text</p>
              <p>Text</p>
              <p>Text</p>
              <p>Text</p>
              <p>Text</p>
            </div>
            <div id='email' className='switcher-info-content'>
              <p>Email</p>
              <p>Email</p>
              <p>Email</p>
              <p>Email</p>
              <p>Email</p>
              <p>Email</p>
            </div>
            <div id='call' className='switcher-info-content'>
              <p>Call</p>
              <p>Call</p>
              <p>Call</p>
              <p>Call</p>
              <p>Call</p>
              <p>Call</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
