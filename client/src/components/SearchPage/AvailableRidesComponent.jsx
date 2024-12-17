import React from 'react';

import { FaRupeeSign,FaUserCircle ,FaPhoneAlt } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const AvailableRidesComponent = ({startLocName,endLocName,pickupLoc,dropLoc,price,driverName,departureTime}) => {
  return (
    <div className=' text-green-950 bg-white shadow-custom rounded-2xl mb-4 hover:border-[#008EC2] hover:border-[0.2em]'>
        <div className='flex justify-between'>
            <div className='grid grid-cols-2 grid-rows-[2fr_3fr] w-[65%] p-8 pt-4 pb-4'>
                <div className='col-span-2 flex justify-between items-center mb-3'>
                        <p className='text-3xl font-semibold'>{departureTime}</p>
                        <p className='text-lg font-semibold flex items-center justify-between'><FaPhoneAlt className='mr-2 text-[#0F4FB4] text-2xl' />9148018043</p>
                </div>
                <div>
                    <h1 className='font-semibold text-md'>{startLocName}</h1>
                    <div className='h-10 overflow-auto'>
                        <p className='text-sm'>{pickupLoc}</p>
                    </div>
                    
                </div>
                <div>
                    <h1 className='font-semibold text-md'>{endLocName}</h1>
                    <div className='h-10 overflow-auto'>
                        <p className='text-sm'>{dropLoc}</p>
                    </div>
                </div>
            </div>
            <div className='p-8  pt-4 pb-4'>
                <h1 className='text-4xl font-semibold flex items-center'><FaRupeeSign />{price}</h1>
            </div>
        </div>
        <hr className='border-[0.1em] border-gray-300 rounded-2xl'/>
        <div className='flex p-8 pt-4 pb-4 items-center justify-between text-gray-500 '>
            <div className='flex items-center'>
                <IoCarSport className='text-3xl  mr-8 ' />
                <FaUserCircle className='text-4xl text-[#0F4FB4] mr-3' />
                <span className='font-semibold'>{driverName}</span>
            </div>
            <div className='flex items-center'>
                <button className='w-[5em] h-[2em] font-semibold text-lg text-white bg-[#0F4FB4] rounded-3xl'>Book</button>
            </div>
        </div>
    </div>
  )
}

export default AvailableRidesComponent;
