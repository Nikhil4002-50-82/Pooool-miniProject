import React from 'react';

import TitleHomeComponent from './TitleHomeComponent';

import { IoCarSport } from "react-icons/io5";

const TitleHome = () => {
  return (
        <div className='h-[18em] bg-[#00AFF5] p-5 pt-1 pb-1 flex flex-col mb-4'>
            <h1 className='text-white font-semibold text-6xl text-center'>Carpool to thousands of destinations at low prices</h1>
            <div className='flex items-center justify-center'><IoCarSport className='text-9xl text-gray-100' /></div>
            <div className='top-[0.7em]'>
                <TitleHomeComponent />
            </div>        
        </div>    
  );
};

export default TitleHome;
