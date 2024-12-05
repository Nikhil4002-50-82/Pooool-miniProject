import React, { useState } from 'react';

import TimeComponent from './TimeComponent';
import Footer from '../Footer/Footer';

const Time = () => {

  const [passengerLimit,setPassengerLimit]=useState(2);
  const [travelCost,setTravelCost]=useState();

  return (
    <div>
        <div className="pt-[5em] flex flex-col items-center">
        <h2 className='text-4xl text-blue-950 font-semibold p-4 mb-2'>At what time will you pick passengers up?</h2>
        <div className='mb-1'>
            <TimeComponent />
        </div>
        <h2 className='text-4xl text-blue-950 font-semibold p-4 mb-2'>So how many passengers can you take?</h2>
        <input type="text" name='passengerLimit' value={passengerLimit} className='bg-[#EDEDED] focus:outline-[#00AFF5] h-[1.8em] w-[10em] text-3xl p-4 rounded-xl mb-2' onChange={(event)=>{
          let value=event.target.value;
          setPassengerLimit(value);
        }}/>
        <h2 className='text-4xl text-blue-950 font-semibold p-4 mb-2'>Set your price per seat</h2>
        <input type="text" name='passengerLimit' value={travelCost} className=' bg-[#EDEDED] focus:outline-[#00AFF5] h-[1.8em] w-[10em] text-3xl p-4 rounded-xl mb-8' onChange={(event)=>{
          let value=event.target.value;
          setTravelCost(value);
        }}/>
        <button className='w-[8em] h-[3em] mb-[2em] bg-[#00AFF5] text-white flex justify-center items-center rounded-lg font-semibold'>Continue</button>
    </div>
    
    <Footer />
    </div>
  )
}

export default Time
