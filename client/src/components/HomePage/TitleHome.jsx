import React from 'react';

import TitleHomeComponent from './TitleHomeComponent';

import { IoCarSport } from "react-icons/io5";

const TitleHome = () => {
  return (
        <div className='h-[16em] bg-[url("bg.svg")] bg-center bg-cover p-5 pt-1 pb-1 flex flex-col justify-center mb-4'>
            <h1 className='text-white font-bold text-5xl text-center relative top-[-1em]'>Carpool to thousands of destinations at low prices</h1>
            {/* <div className='flex items-center justify-center'><IoCarSport className='text-9xl text-gray-100' /></div> */}
            <div className='relative top-[7em]'>
                <TitleHomeComponent />
            </div>        
        </div>    
  );
}

export default TitleHome;