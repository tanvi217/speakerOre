import React, { Fragment } from 'react';
// import Video from '../home_sections/Video';
import Navbar from '../layout/Navbar';
import VideoSection from '../home_sections/VideoSection';
import Stats from '../home_sections/Stats';
import Categories from '../home_sections/Categories';
import Testimonials from '../home_sections/Testimonials';
// import FooterSection from '../layout/FooterSection';

const Home = () => {
  return (
    <Fragment>
      <Navbar isHome={true} />
      <VideoSection />
      <Stats />
      <Categories />
      <Testimonials />
    </Fragment>
  );
};

export default Home;
