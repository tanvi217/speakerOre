import React, { useEffect } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Space, Button } from 'antd';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Wave from '../../static/home_wave.svg';

const waveStyle = {
  position: 'relative',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '250px',
  backgroundSize: 'cover',
  backgroundImage: `url(${Wave})`,
  backgroundColor: '#fafafc',
};

const company = {
  color: 'black',
  fontSize: '250%',
  fontWeight: 900,
  letterSpacing: '0.01em',
  display: 'block',
};

const logo = {
  fontSize: '200%',
  //   fontWeight: '550',
};

const know_button = {
  background: '#328fce',
  borderColor: '#328fce',
  color: '#ffffff',
  borderRadius: '10px',
  //   fontWeight: 'bold',
  //   padding: '17px 27px',
  margin: '0 12px',
};

const other_button = {
  background: '#EBEDF0',
  borderColor: '#EBEDF0',
  //   color: '#4a4a4a',
  borderRadius: '10px',
  //   padding: '17px 27px',
  //   fontWeight: 'bold',
};

const gradient = {
  background: '-webkit-linear-gradient(#f39213,#f5cc23)',
  //   WebkitBackgroundClip: 'text',
  //   WebkitTextFillColor: 'transparent',
};

const VideoSection = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <div style={gradient}>
        <div className='container'>
          <div className='container_inner_video'>
            <h1 style={company}>SpeakerOre</h1>
            <h2 style={logo}>Gold mine for speakers</h2>
            <Button style={know_button} size='large'>
              Know more
            </Button>
            <Button style={other_button} size='large'>
              Subscribe now
            </Button>
          </div>
        </div>
      </div>
      <div style={waveStyle}></div>
    </div>
  );
};

export default VideoSection;
