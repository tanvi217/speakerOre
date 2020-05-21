import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import Footer from '../layout/Footer';
import './style.css';

const About = () => {
  return (
    <Fragment>
      <Navbar heading={'About Us'} />
      <BreadcrumbHead heading={['About']} />
      <Footer />
    </Fragment>
  );
};

export default About;
