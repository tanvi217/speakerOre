import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Layout } from 'antd';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import FooterSection from '../layout/FooterSection';
import ydownWave from '../../static/ydownWave.svg';
import gdownWave from '../../static/gdownWave.svg';

import Monthly from './Monthly';
import Quaterly from './Quaterly';
import Yearly from './Yearly';

import './style.css';
const { Content } = Layout;

const mid = {
  margin: '0',
  position: 'absolute',
  top: '90%',
  left: '20%',
  fontSize: '0.8rem',
  transform: 'translate(-50%, -50%)',
  float: 'right',
};

const graywave = {
  // top: '-10%',
  // left: '50%',
  // transform: 'translate(50%, 50%)',
  position: 'absolute',
  // marginBottom: '100px',
};

const waveStyle = {
  position: 'relative',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '250px',
  backgroundSize: 'cover',
  backgroundImage: `url(${ydownWave}), url(${gdownWave})`,
  // backgroundImage: `url(${ydownWave})`,
};

const layoutStyle = {
  padding: '35px 45px',
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

const Subscribe = () => {
  return (
    <Fragment>
      <Navbar
        heading={'Subscribe'}
        subheading={'Happy customers. Happy Team. Warm Fuzzies.'}
      />
      <BreadcrumbHead heading={['Subscribe']} />
      <Content className='site-layout' style={{ padding: '0 100px' }}>
        <Layout className='site-layout-background' style={layoutStyle}>
          <Monthly />
          <Quaterly />
          <Yearly />
        </Layout>
      </Content>
      <div style={waveStyle}>
        <hr style={mid} />
        <span style={mid}>© 2020 SpeakerOre All rights reserved.</span>
      </div>
    </Fragment>
  );
};

export default Subscribe;
