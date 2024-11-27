import React from 'react';
import {useNavigate} from 'react-router-dom';

import { RiInstagramFill } from "react-icons/ri";
import { IoCarSport } from "react-icons/io5";

const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className='h-[auto]'>
      <div className='bg-[#EDEDED] flex justify-center gap-10 p-[10em] pt-[3em] pb-[3em]'>
        <div className='flex flex-col w-[40%]'>
            <h1 className='text-2xl mb-8'>How to travel with BlaBlaCar</h1>
            <p className='mb-8 hover:text-[#008EC2] cursor-pointer'>All carpool routes</p>
            <p className='mb-8 hover:text-[#008EC2] cursor-pointer'>All carpool destinations</p>
        </div>
        <div className='flex flex-col w-[40%]'>
            <h1 className='text-2xl mb-8'>Top carpool routes</h1>
        </div>
        <div className='flex flex-col w-[auto]'>
            <h1 className='text-2xl mb-8'>About</h1>
            <p className='mb-8 hover:text-[#008EC2] cursor-pointer'>About Us</p>
            <p className='mb-8 hover:text-[#008EC2] cursor-pointer'>Help Centre</p>
            <p className='mb-14 hover:text-[#008EC2] cursor-pointer'>We're Hiring!</p>
            <button className='text-[#00AFF5] font-semibold bg-white w-[15em] h-12 rounded-3xl mb-5'>Language-English</button>
            <p><RiInstagramFill className='text-[#00AFF5] text-5xl cursor-pointer'/></p>
        </div>
      </div>
      <div className='h-[5em] flex items-center justify-between pr-[15em] pl-[13em] text-gray-500'>
        <div className='flex'>
            <a href="/terms.pdf"
            download="terms.pdf"
            className="p-2 hover:text-[#008EC2] cursor-pointer"
            >
            Terms and Conditions
            </a>
            <p className='p-2 hover:text-[#008EC2] cursor-pointer'>Cookie settings</p>
        </div>
        <div className='flex'>
            <p className='flex items-center justify-between text-lg  pr-3 pl-3'><IoCarSport className='text-[#00AFF5] text-4xl' />Pooool, 2024 &#169; </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
