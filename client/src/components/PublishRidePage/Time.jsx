import React, { useState,useContext } from 'react';

import TimeComponent from './TimeComponent';
import Footer from '../Footer/Footer';

import { noOfPassengersContext,travelPriceContext } from '../context/RiderContext';

const Time = () => {

  const {noOfPassengers,setNoOfPassengers}=useContext(noOfPassengersContext);
  const {travelPrice,setTravelPrice}=useContext(travelPriceContext);

  return (
    <div>
      <div className='pt-[5em] pb-[2em] p-[7em]'>
        <div className=' grid grid-cols-2 grid-rows-2'>
        <div className=" flex justify-center items-center">
          <h2 className='text-2xl w-[50%] text-blue-950 font-semibold p-4 mb-2'>At what time will you pick passengers up?</h2>
          <div className='mb-1'>
              <TimeComponent />
          </div>
        </div>
        <div className=' flex justify-center items-center'>
          <h2 className='text-2xl w-[50%] text-blue-950 font-semibold p-4 mb-2'>So how many passengers can you take?</h2>
          <input type="text" name='passengerLimit' value={noOfPassengers} className='bg-[#EDEDED] focus:outline-[#0F4FB4] h-[1.8em] w-[5em] text-3xl p-4 rounded-xl mb-2' onChange={(event)=>{
            let value=event.target.value;
            setNoOfPassengers(value);
          }}/>
        </div>
          <div className='flex flex-col items-center col-span-2'>
            <h2 className='text-2xl text-blue-950 font-semibold p-4'>Set your price per seat</h2>
            <input type="text" name='passengerLimit' value={travelPrice} className=' bg-[#EDEDED] focus:outline-[#0F4FB4] h-[1.8em] w-[5em] text-3xl p-4 rounded-xl mb-3' onChange={(event)=>{
              let value=event.target.value;
              setTravelPrice(value);
            }}/>
            <button className='w-[8em] h-[3em] mb-[2em] bg-[#0F4FB4] text-white flex justify-center items-center rounded-xl font-semibold'>Continue</button>
          </div>
      </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default Time;
