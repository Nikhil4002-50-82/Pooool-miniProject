import React, { useState, useRef, useEffect } from 'react'; // Added `useEffect` here
import { useNavigate } from 'react-router-dom';

import { CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const [log, setLog] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Corrected spelling of `isVisible`
  const divRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsVisible(false);
      setLog(false);
    }
  };

  const handleClick = () => {
    setLog((prev) => !prev);
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-full h-[4.5em] bg-white flex items-center justify-between pr-6 pl-6 text-md fixed z-20`}>
      <div className='flex'>
        <p
          className='flex items-center justify-between text-3xl font-semibold pr-3 pl-3 cursor-pointer'
          onClick={() => {
            navigate("/");
          }}
        >
          <IoCarSport className='text-[#0F4FB4] text-5xl' />
          Pooool
        </p>
      </div>
      <div className='flex'>
        <p
          className='flex items-center justify-between text-[#0F4FB4] hover:text-[#008EC2] font-semibold w-[7em] pr-3 pl-3 mr-1 cursor-pointer'
          onClick={() => {
            navigate("/search");
          }}
        >
          <CiSearch className='text-3xl' />
          Search
        </p>
        <p
          className='flex items-center justify-between text-[#0F4FB4] hover:text-[#008EC2] font-semibold w-[10em] pr-3 pl-3 mr-1 cursor-pointer'
          onClick={() => {
            navigate("/publishRide");
          }}
        >
          <IoIosAddCircleOutline className='text-2xl' />
          Publish a ride
        </p>
        <div className='flex flex-col' ref={divRef} onClick={handleClick}>
          <div
            className='flex items-center justify-between text-[#0F4FB4] hover:text-[#008EC2] font-semibold w-[6em] pr-3 pl-3 cursor-pointer relative'
           
          >
            <FaUserCircle className='text-5xl'/>
            {log ? (
              <IoIosArrowUp className='text-2xl text-gray-400' onClick={handleClick} />
            ) : (
              <IoIosArrowDown className='text-2xl text-gray-400'  />
            )}
          </div>
          {isVisible && (
            <div className='bg-white text-gray-900 w-[26em] absolute bottom-[-7em] right-2 shadow-lg border'>
              <p className='w-[100%] flex items-center justify-between p-4 hover:bg-[#EDEDED] cursor-pointer' onClick={()=>{
                  navigate("/login");
              }}>
                Log in
                <MdKeyboardArrowRight className='text-3xl text-gray-400' />
              </p>
              <p className='w-[100%] flex items-center justify-between p-4 hover:bg-[#EDEDED] cursor-pointer' onClick={()=>{
                  navigate("/signin");
              }}>
                Sign up
                <MdKeyboardArrowRight className='text-3xl text-gray-400' />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
