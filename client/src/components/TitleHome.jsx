import React from 'react';

import { FaRegCircle } from "react-icons/fa6";

const TitleHome = () => {
  return (
        <div className='h-[16em] bg-[#00AFF5] p-5 pt-1 pb-1 flex flex-col mb-4'>
            <h1 className='text-white font-semibold text-6xl text-center'>Carpool to thousands of destinations at low prices</h1>
            <div className='relative h-[3.5em] top-[6em] bg-white rounded-2xl shadow-custom grid grid-cols-[3fr_3fr_2fr_3fr_2fr]'>
                    <div className='p-1 flex items-center justify-between'><FaRegCircle className='text-2xl text-gray-500 font-bold ml-2 mr-0' /><input className='h-full w-full p-3 focus:outline-none' type="text" placeholder='Leaving From' /></div>
                    <div className='p-1 flex items-center justify-between'><FaRegCircle className='text-2xl text-gray-500 font-bold ml-2' /><input className='h-full w-full p-3 focus:outline-none' type="text" placeholder='Going to' /></div>
                    <div className='p-1 flex items-center justify-between'><input type="text" /></div>
                    <div className='p-1 flex items-center justify-between'><input type="text" /></div>
                    <div><button className=' w-full h-[100%] rounded-r-2xl bg-[#00AFF5] text-white font-semibold'>Search</button></div>                  
            </div>
        </div>    
  );
}

export default TitleHome;
