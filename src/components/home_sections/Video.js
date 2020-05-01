import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import media from '../../static/helping.mp4';
import logo from '../../static/logo.png';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import './style.css';

const button_style = {
  fontFamily: 'sans-serif, Raleway',
  borderColor: '#f5cc23',
  WebkitTransition: 'all .4s',
  transition: 'all .4s',
  color: '#f5cc23',
};

const Video = () => {
  return (
    <Fragment>
      <div className='video_wrapper'>
        <ReactPlayer
          playsinline
          url={media}
          poster={logo}
          playing
          loop={true}
          muted
          width='100%'
          height='100%'
        />
      </div>

      <div className='home_overlay'>
        <div className='home_content'>
          <div className='home_content_inner'>
            <div className='home_heading1'>
              <h1 className='home_heading1'>
                Speaker<span style={{ color: '#f5cc23' }}>Ore</span>
              </h1>
              <br />
              <h5>Gold mine for speakers</h5>
            </div>
            <div>
              <Button
                shape='round'
                size='large'
                type='ghost'
                style={button_style}
              >
                Know more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Video;
