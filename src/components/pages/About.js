import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import FooterSection from '../layout/FooterSection';
import './style.css';

const About = () => {
  return (
    <Fragment>
      <Navbar heading={'About Us'} />
      <BreadcrumbHead heading={['About']} />
      <FooterSection />
    </Fragment>
  );
};

export default About;
