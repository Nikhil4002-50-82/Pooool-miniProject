import React from 'react';

import SearchFormComponent from './SearchFormComponent';
import DepartureSearchComponent from './DepartureSearchComponent';

import { IoIosTimer } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";

const SortSearchComponent = () => {
  return (
    <div className=''>
        <form action="" className='flex flex-col'> 
            <div className='flex justify-between p-3 pt-8 font-semibold'>
                <h1 className='text-xl '>Sort by</h1>
                <button type='reset' className='text-md text-[#00AFF5]'>Clear all</button>
            </div>
            <SearchFormComponent label="Earliest departure" value="departure" Component={IoIosTimer} />
            <SearchFormComponent label="Lowest price" value="price" Component={FaIndianRupeeSign} />
            <hr className='border-[0.3em] border-[#EDEDED] mt-2 rounded-sm'/>
            <h1 className='text-xl p-3 pt-6 font-semibold '>Departure time</h1>
            <DepartureSearchComponent label="Before 06:00" value="6" />
            <DepartureSearchComponent label="06:00 - 12:00" value="12" />
            <DepartureSearchComponent label="12:01 - 18:00" value="18" />
            <DepartureSearchComponent label="After 18:00" value="0" />
            <hr className='border-[0.3em] border-[#EDEDED] mt-2 rounded-sm'/>
        </form>
    </div>
  )
}

export default SortSearchComponent
