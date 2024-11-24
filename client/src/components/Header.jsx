import React from 'react';

import { CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline,IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const Header = () => {
  return (
    <div className='w-full h-[4.5em] bg-white flex items-center justify-between pr-6 pl-6 text-md fixed '>
      <div className='flex'>
        <p className='flex items-center justify-between text-3xl font-semibold pr-3 pl-3 cursor-pointer'><IoCarSport className='text-[#00AFF5] text-5xl' />Pooool</p>
        <p className='flex items-center text-[#00AFF5] hover:text-[#008EC2] font-semibold pr-3 pl-3 cursor-pointer'>Carpool</p>
      </div>
      <div className='flex'>
        <p className='flex items-center justify-between text-[#00AFF5] hover:text-[#008EC2] font-semibold w-[7em] pr-3 pl-3 mr-1 cursor-pointer'><CiSearch className='text-3xl' />Search</p>
        <p className='flex items-center justify-between text-[#00AFF5] hover:text-[#008EC2] font-semibold w-[10em] pr-3 pl-3 mr-1 cursor-pointer'><IoIosAddCircleOutline className='text-2xl' />Publish a ride</p>
        <div className='flex items-center justify-between text-[#00AFF5] hover:text-[#008EC2] font-semibold w-[6em] pr-3 pl-3 cursor-pointer'><FaUserCircle className='text-5xl ' /><IoIosArrowDown className='text-2xl text-gray-400 ' /></div>
      </div>
    </div>
  )
}

export default Header;
