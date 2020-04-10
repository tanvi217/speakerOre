import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Layout } from 'antd';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import FooterSection from '../layout/FooterSection';
import ydownWave from '../../static/ydownWave.svg';

import Monthly from './Monthly';
import Quaterly from './Quaterly';
import Yearly from './Yearly';

import './style.css';
const { Content } = Layout;

const waveStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  backgroundImage: `url(${ydownWave})`,
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
        <div style={waveStyle}></div>
      </Content>
      <FooterSection />
    </Fragment>
  );
};

export default Subscribe;
