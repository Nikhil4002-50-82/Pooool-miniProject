import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline,IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const [log,setLog]=useState(false);
  const [isVissible,setIsVisible]=useState(false);

  const navigate=useNavigate();

  function handleClick(){
      if(log===true){
        setLog(false);
        setIsVisible(false);
      }
      else{
        setLog(true);
        setIsVisible(true);
      }   
  }
  return (
    <div className={`w-full h-[4.5em] bg-white flex items-center justify-between pr-6 pl-6 text-md fixed z-20`} >
      <div className='flex'>
        <p className='flex items-center justify-between text-3xl font-semibold pr-3 pl-3 cursor-pointer' onClick={()=>{
            navigate("/");
        }}><IoCarSport className='text-[#00AFF5] text-5xl' />Pooool</p>
        {/* <p className='flex items-center text-[#00AFF5] hover:text-[#008EC2] font-semibold pr-3 pl-3 cursor-pointer'>Carpool</p> */}
      </div>
      <div className='flex'>
        <p className='flex items-center justify-between text-[#00AFF5] hover:text-[#008EC2] font-semibold w-[7em] pr-3 pl-3 mr-1 cursor-pointer' onClick={()=>{
          navigate("/search");
        }}><CiSearch className='text-3xl' />Search</p>
        <p className='flex items-center justify-between text-[#00AFF5] hover:text-[#008EC2] font-semibold w-[10em] pr-3 pl-3 mr-1 cursor-pointer' onClick={()=>{
          navigate("/publishRide");
        }}><IoIosAddCircleOutline className='text-2xl' />Publish a ride</p>
        <div className='flex flex-col'>
            <div className='flex items-center justify-between text-[#00AFF5] hover:text-[#008EC2] font-semibold w-[6em] pr-3 pl-3 cursor-pointer relative'><FaUserCircle className='text-5xl ' onClick={handleClick} />{log?<IoIosArrowUp className='text-2xl text-gray-400' onClick={handleClick} />:<IoIosArrowDown className='text-2xl text-gray-400' onClick={handleClick} />}
            </div>
            {isVissible&&(
              <div className='bg-white text-gray-900 w-[26em] absolute bottom-[-7em] right-2'>
                <p className='w-[100%] flex items-center justify-between p-4 hover:bg-[#EDEDED] cursor-pointer'>Log in <MdKeyboardArrowRight className='text-3xl text-gray-400 ' /></p>
                <p className='w-[100%] flex items-center justify-between p-4 hover:bg-[#EDEDED] cursor-pointer'>Sign up <MdKeyboardArrowRight className='text-3xl text-gray-400 ' /></p>
              </div>
            )}
        </div>
        
        
      </div>
    </div>
  )
}

export default Header;
