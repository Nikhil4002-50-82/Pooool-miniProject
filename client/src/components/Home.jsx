import React from 'react';

import TitleHome from './TitleHome';
import AboutHome from './AboutHome';
import ReportScamsHome from './ReportScamsHome';
import WhereToDriveHome from './WhereToDriveHome';

const Home = () => {
  return (
    <div className='pt-[4.5em] pb-[5em]'>
        <TitleHome />
        <AboutHome />
        <ReportScamsHome />
        <WhereToDriveHome />
    </div>
  );
}

export default Home;
