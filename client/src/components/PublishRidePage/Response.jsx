import React from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../Footer/Footer';

const Response = () => {
    const navigate=useNavigate();
  return (
    <div>
        <div className='flex flex-col justify-center items-center p-[4em] pb-0'>
        <div className='h-[18em]'>
            <img className='h-[100%]' src="https://cdni.iconscout.com/illustration/premium/thumb/man-search-map-route-illustration-download-in-svg-png-gif-file-formats--find-location-navigation-and-pack-maps-illustrations-6631864.png" alt="" />
        </div>
        <p className='text-7xl mb-4'>Thank You, enjoy!</p>
        <button className='w-[10em] font-bold bg-[#0F4FB4] text-white p-4 pt-2 pb-2 mb-5 mt-4 rounded-2xl' onClick={(event)=>{
            event.preventDefault();
            navigate("/");
        }}>Back Home</button>
        <p className='text-gray-500 mb-10'>If you have any issues. Call <span className='text-blue-600'>+91 91480 18043</span></p>
    </div>
    <Footer />
    </div>
  );
}

export default Response;