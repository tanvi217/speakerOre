import React, { Fragment } from 'react';
// import Video from '../home_sections/Video';
import Navbar from '../layout/Navbar';
import VideoSection from '../home_sections/VideoSection';
import About from '../home_sections/About';
import Stats from '../home_sections/Stats';
import Categories from '../home_sections/Categories';
import Testimonials from '../home_sections/Testimonials';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar isHome={true} />
      <VideoSection />
      <About />
      <Stats />
      <Categories />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
