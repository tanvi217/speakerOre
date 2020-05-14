import React, { Fragment } from 'react';
// import Video from '../home_sections/Video';
import Navbar from '../layout/Navbar';
import Stats from '../home_sections/Stats';
import Categories from '../home_sections/Categories';
// import FooterSection from '../layout/FooterSection';

const Home = () => {
  return (
    <Fragment>
      <Navbar isHome={true} />
      <Stats />
      <Categories />
    </Fragment>
  );
};

export default Home;
