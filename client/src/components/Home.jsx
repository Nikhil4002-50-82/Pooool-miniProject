import React from 'react';

import TitleHome from './TitleHome';
import AboutHome from './AboutHome';
import ReportScamsHome from './ReportScamsHome';
import WhereToDriveHome from './WhereToDriveHome';

import Footer from './Footer';  

const Home = () => {
  return (
    <div className='pt-[4.5em] pb-0'>
        <TitleHome />
        <AboutHome />
        <ReportScamsHome />
        <WhereToDriveHome />
        <Footer />
    </div>
  );
}

export default Home;
