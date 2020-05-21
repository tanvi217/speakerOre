import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Layout } from 'antd';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import Footer from '../layout/Footer';
import stwave from '../../static/stwave.svg';
// import gdownWave from '../../static/gdownWave.svg';
import Background from '../../static/background.png';

import Plans from '../subscribe/plans';

import './style.css';
const { Content } = Layout;

const bg = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
  boxShadow: 'inset 5px 10px 30px #e2e2e2',
};

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
  // backgroundImage: `url(${ydownWave}), url(${gdownWave})`,
  backgroundImage: `url(${stwave})`,
};

const layoutStyle = {
  padding: '2% 3%',
};

const contentStyle = {
  padding: '1.5% 5%',
};

const Subscribe = () => {
  return (
    <Fragment>
      <Navbar
        heading={'Subscribe'}
        subheading={'Happy customers. Happy Team. Warm Fuzzies.'}
      />
      <BreadcrumbHead heading={['Subscribe']} />
      <div style={bg}>
        <Content className='site-layout' style={contentStyle}>
          <Plans />
        </Content>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Subscribe;
