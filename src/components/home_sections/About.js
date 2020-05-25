import React, { useEffect } from 'react';
import {
  PhoneOutlined,
  MailOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import './style.css';

const show_tab = (e, option) => {
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
                show_tab(e, 'text');
              }}
            >
              <MessageOutlined style={{ fontSize: '20px' }} /> Text
            </a>
            <a
              className='switcher-option'
              href='#email'
              onClick={(e) => {
                show_tab(e, 'email');
              }}
            >
              <MailOutlined style={{ fontSize: '20px' }} /> Email
            </a>
            <a
              className='switcher-option'
              href='#call'
              onClick={(e) => {
                show_tab(e, 'call');
              }}
            >
              <PhoneOutlined style={{ fontSize: '20px' }} /> Call
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
