import React from 'react';

import { FaRupeeSign,FaUserCircle } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const AvailableRidesComponent = ({startLocName,endLocName,pickupLoc,dropLoc,price,driverName}) => {
  return (
    <div className=' text-green-950 bg-white shadow-custom rounded-2xl mb-4 hover:border-[#008EC2] hover:border-[0.2em]'>
        <div className='flex justify-between'>
            <div className='grid grid-cols-2 w-[65%] p-8 pt-4 pb-4'>
                <div>
                    <h1 className='font-semibold text-md'>{startLocName}</h1>
                    <p className='text-sm'>{pickupLoc}</p>
                </div>
                <div>
                    <h1 className='font-semibold text-md'>{endLocName}</h1>
                    <p className='text-sm'>{dropLoc}</p>
                </div>
            </div>
            <div className='p-8  pt-4 pb-4'>
                <h1 className='text-3xl font-semibold flex items-center'><FaRupeeSign />{price}</h1>
            </div>
        </div>
        <hr className='border-[0.1em] border-gray-300 rounded-2xl'/>
        <div className='flex p-8 pt-4 pb-4 items-center text-gray-500 '>
            <IoCarSport className='text-3xl  mr-8 ' />
            <FaUserCircle className='text-4xl text-[#00AFF5] mr-3' />
            <span className='font-semibold'>{driverName}</span>

        </div>
    </div>
  )
}

export default AvailableRidesComponent;