import React, { Fragment } from 'react';
import Video from '../home_sections/Video';
import Navbar from '../layout/Navbar';
// import FooterSection from '../layout/FooterSection';

const Home = () => {
  return (
    <Fragment>
      <Navbar isHome={true} />
      <Video />
    </Fragment>
  );
};

export default Home;
